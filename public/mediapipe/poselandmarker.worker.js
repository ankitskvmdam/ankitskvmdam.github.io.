/**
 * Pose Landmarker web worker.
 *
 * This is a *classic* worker on purpose. `@mediapipe/tasks-vision` calls
 * `importScripts` internally to load its wasm glue code, and `importScripts`
 * throws inside a module worker. Since the package only ships ESM/CJS bundles,
 * `mediapipe.js` is a vendored copy of the jsDelivr `+esm` build whose trailing
 * `export {...}` has been replaced by `const $mediapipe = {...}`, which makes
 * every task class reachable from here once the script is imported.
 *
 * See: /blog/how-to-run-mediapipe-task-vision-in-a-web-worker
 */

/* global $mediapipe */
importScripts("/mediapipe/mediapipe.js");

const WASM_FILESET_PATH =
  "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22-rc.20250304/wasm";

const BASE_MODEL_PATH =
  "https://storage.googleapis.com/mediapipe-models/pose_landmarker";

const MODEL_ASSET_PATH = {
  Lite: `${BASE_MODEL_PATH}/pose_landmarker_lite/float16/1/pose_landmarker_lite.task`,
  Full: `${BASE_MODEL_PATH}/pose_landmarker_full/float16/1/pose_landmarker_full.task`,
  Heavy: `${BASE_MODEL_PATH}/pose_landmarker_heavy/float16/1/pose_landmarker_heavy.task`,
};

/**
 * Tint applied to the segmentation mask, as [red, green, blue].
 * Matches the `--accent-2` violet used across the site.
 */
const SEGMENTATION_MASK_TINT = [139, 92, 246];

/**
 * The mask is painted at this opacity where the model is fully confident
 * that a pixel belongs to a person.
 */
const SEGMENTATION_MASK_OPACITY = 0.45;

/** @type {unknown} Resolved wasm fileset, created once and reused. */
let vision = null;

/** @type {unknown} The active PoseLandmarker instance. */
let poseLandmarker = null;

/**
 * Options the current `poseLandmarker` was built with. Used to decide whether
 * an option change can be applied in place or needs a brand new instance.
 */
let currentOptions = null;

/**
 * `detectForVideo` rejects timestamps that do not increase, which can happen
 * when two frames are grabbed within the same millisecond.
 */
let lastTimestamp = 0;

async function getVision() {
  if (!vision) {
    vision = await $mediapipe.FilesetResolver.forVisionTasks(WASM_FILESET_PATH);
  }

  return vision;
}

/**
 * Maps the parameters coming from the UI onto MediaPipe's option names.
 */
function toPoseLandmarkerOptions(options) {
  return {
    baseOptions: {
      modelAssetPath: MODEL_ASSET_PATH[options.modelType],
      delegate: options.interferenceDelegate,
    },
    runningMode: "VIDEO",
    numPoses: options.numPoses,
    minPoseDetectionConfidence: options.minimumPoseConfidence,
    minPosePresenceConfidence: options.minimumPosePresenceConfidence,
    minTrackingConfidence: options.minimumTrackingConfidence,
    outputSegmentationMasks: options.shouldEnableSegmentationMask,
  };
}

async function createPoseLandmarker(options) {
  const resolvedVision = await getVision();
  const next = await $mediapipe.PoseLandmarker.createFromOptions(
    resolvedVision,
    toPoseLandmarkerOptions(options),
  );

  // Only swap once the new instance is ready, so a failed model download
  // leaves the previous one running.
  poseLandmarker?.close();
  poseLandmarker = next;
  currentOptions = options;
}

async function updateOptions(options) {
  if (!poseLandmarker || !currentOptions) {
    return createPoseLandmarker(options);
  }

  // The delegate and the model file are baked into the graph when the task is
  // created, so changing either one means rebuilding the landmarker.
  if (
    options.interferenceDelegate !== currentOptions.interferenceDelegate ||
    options.modelType !== currentOptions.modelType
  ) {
    return createPoseLandmarker(options);
  }

  // eslint-disable-next-line no-unused-vars
  const { baseOptions, ...rest } = toPoseLandmarkerOptions(options);
  await poseLandmarker.setOptions(rest);
  currentOptions = options;
}

/**
 * Reads a mask that only exists as a WebGL texture, as one byte per pixel.
 *
 * `MPMask.getAsUint8Array()` and `getAsFloat32Array()` cannot be used here.
 * Both read the texture with `gl.RED`/`gl.FLOAT`, which ANGLE rejects with
 * INVALID_OPERATION, so they quietly hand back a buffer of zeros and the mask
 * renders as nothing. MediaPipe does have a workaround, but it is gated on
 * Apple platforms and on `document` being defined, which it never is in a
 * worker.
 *
 * `gl.RGBA`/`gl.UNSIGNED_BYTE` is the one combination `readPixels` is always
 * required to support. The mask holds confidences in 0..1, which is exactly
 * the range that gets clamped into a byte, so nothing meaningful is lost.
 */
function readMaskFromTexture(mask) {
  const gl = mask.canvas.getContext("webgl2");
  const previousFramebuffer = gl.getParameter(gl.FRAMEBUFFER_BINDING);
  const framebuffer = gl.createFramebuffer();

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    gl.TEXTURE_2D,
    mask.getAsWebGLTexture(),
    0,
  );

  const rgba = new Uint8Array(mask.width * mask.height * 4);
  gl.readPixels(
    0,
    0,
    mask.width,
    mask.height,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    rgba,
  );

  gl.bindFramebuffer(gl.FRAMEBUFFER, previousFramebuffer);
  gl.deleteFramebuffer(framebuffer);

  // The mask is single channel, so every pixel's value sits in red.
  const confidences = new Uint8Array(mask.width * mask.height);
  for (let i = 0; i < confidences.length; i++) {
    confidences[i] = rgba[i * 4];
  }

  return confidences;
}

/** Per-pixel confidence that the pixel belongs to a person, as 0..255. */
function getMaskConfidences(mask) {
  const isOnlyOnGpu =
    mask.hasWebGLTexture() &&
    !mask.hasFloat32Array() &&
    !mask.hasUint8Array();

  if (isOnlyOnGpu) {
    return readMaskFromTexture(mask);
  }

  return mask.getAsUint8Array();
}

/**
 * Flattens a MediaPipe mask into tinted RGBA pixels.
 *
 * This has to run synchronously inside the `detectForVideo` callback: the mask
 * is closed as soon as the callback returns.
 */
function toTintedMaskPixels(mask) {
  const confidences = getMaskConfidences(mask);
  const pixels = new Uint8ClampedArray(mask.width * mask.height * 4);
  const [red, green, blue] = SEGMENTATION_MASK_TINT;

  for (let i = 0; i < confidences.length; i++) {
    const offset = i * 4;
    pixels[offset] = red;
    pixels[offset + 1] = green;
    pixels[offset + 2] = blue;
    pixels[offset + 3] = confidences[i] * SEGMENTATION_MASK_OPACITY;
  }

  return new ImageData(pixels, mask.width, mask.height);
}

async function detectPose(bitmapImage) {
  if (!poseLandmarker) {
    throw new Error("PoseLandmarker is not initialized");
  }

  const timestamp = Math.max(performance.now(), lastTimestamp + 1);
  lastTimestamp = timestamp;

  const { landmarks, maskPixels } = await new Promise((resolve) => {
    poseLandmarker.detectForVideo(bitmapImage, timestamp, (result) => {
      const mask = result.segmentationMasks?.[0] ?? null;

      resolve({
        landmarks: result.landmarks,
        maskPixels: mask ? toTintedMaskPixels(mask) : null,
      });
    });
  });

  return {
    landmarks,
    segmentationMask: maskPixels ? await createImageBitmap(maskPixels) : null,
  };
}

self.onmessage = async (event) => {
  const { id, type, payload } = event.data;

  try {
    if (type === "init") {
      await createPoseLandmarker(payload.options);
      self.postMessage({ id, type, payload: { isSuccess: true } });
      return;
    }

    if (type === "update-options") {
      await updateOptions(payload.options);
      self.postMessage({ id, type, payload: { isSuccess: true } });
      return;
    }

    if (type === "detect") {
      const result = await detectPose(payload.image);
      payload.image.close();

      self.postMessage(
        { id, type, payload: { result } },
        result.segmentationMask ? [result.segmentationMask] : [],
      );
      return;
    }

    throw new Error(`Unknown message type: ${type}`);
  } catch (error) {
    // An ImageBitmap that never reaches the model would otherwise leak.
    payload?.image?.close();

    self.postMessage({
      id,
      type: "error",
      payload: { message: error?.message ?? "Something went wrong" },
    });
  }
};
