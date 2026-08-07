import React from "react";
import { useMediapipeInputs } from "~/layouts/mediapipe-inputs/store";
import { PoseLandmarkerWorkerClient } from "./pose-landmarker-worker-client";
import { clearPose, drawPose } from "./draw-pose";

/**
 * The model downscales its input internally anyway, so there is no point in
 * shipping full 1080p frames across the worker boundary every frame.
 */
const DETECTION_MAX_WIDTH = 640;

export type TPoseLandmarkerStatus = "loading" | "ready" | "error";

export type TUsePoseLandmarkerParams = {
  video: HTMLVideoElement | null;
  canvas: HTMLCanvasElement | null;
};

function createDetectionBitmap(video: HTMLVideoElement) {
  const scale = Math.min(1, DETECTION_MAX_WIDTH / video.videoWidth);

  return createImageBitmap(video, {
    resizeWidth: Math.round(video.videoWidth * scale),
    resizeHeight: Math.round(video.videoHeight * scale),
    resizeQuality: "medium",
  });
}

function toErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Something went wrong";
}

/**
 * Runs the MediaPipe Pose Landmarker inside a web worker and paints the result
 * onto `canvas`, on top of `video`.
 *
 * Everything expensive (fetching the wasm runtime, building the graph and
 * running inference) happens in the worker. The main thread only grabs frames
 * and draws, so the page stays responsive even while the model loads.
 */
export function usePoseLandmarker(params: TUsePoseLandmarkerParams) {
  const { video, canvas } = params;

  const options = useMediapipeInputs((state) => ({
    interferenceDelegate: state.interferenceDelegate,
    modelType: state.modelType,
    shouldEnableSegmentationMask: state.shouldEnableSegmentationMask,
    numPoses: state.numPoses,
    minimumPoseConfidence: state.minimumPoseConfidence,
    minimumPosePresenceConfidence: state.minimumPosePresenceConfidence,
    minimumTrackingConfidence: state.minimumTrackingConfidence,
  }));

  const [status, setStatus] = React.useState<TPoseLandmarkerStatus>("loading");
  const [error, setError] = React.useState<string | null>(null);
  const [fps, setFps] = React.useState(0);

  const clientRef = React.useRef<PoseLandmarkerWorkerClient | null>(null);
  const hasInitialized = React.useRef(false);

  // The worker outlives parameter changes, so that tweaking a slider does not
  // re-download the model.
  React.useEffect(() => {
    const client = new PoseLandmarkerWorkerClient();
    clientRef.current = client;

    return () => {
      clientRef.current = null;
      hasInitialized.current = false;
      client.terminate();
    };
  }, []);

  React.useEffect(() => {
    const client = clientRef.current;
    if (!client) return;

    let isCancelled = false;
    setStatus("loading");

    const applied = hasInitialized.current
      ? client.updateOptions(options)
      : client.init(options);

    applied
      .then(() => {
        if (isCancelled) return;

        hasInitialized.current = true;
        setError(null);
        setStatus("ready");
      })
      .catch((reason) => {
        if (isCancelled) return;

        setError(toErrorMessage(reason));
        setStatus("error");
      });

    return () => {
      isCancelled = true;
    };
  }, [options]);

  React.useEffect(() => {
    const client = clientRef.current;
    if (!client || !video || !canvas || status !== "ready") return;

    let isCancelled = false;
    let frameId = 0;
    let lastVideoTime = -1;
    let framesInWindow = 0;
    let windowStartedAt = performance.now();

    async function detectFrame() {
      // `video` and `canvas` are narrowed by the guard above, but TypeScript
      // loses that inside the async closure.
      if (!video || !canvas || !client) return;

      // Nothing changed since the last run, so skip straight to the next frame
      // instead of paying for a detection on an identical image.
      if (video.readyState < 2 || video.currentTime === lastVideoTime) return;

      lastVideoTime = video.currentTime;

      const image = await createDetectionBitmap(video);
      const result = await client.detect(image);

      if (isCancelled) {
        result.segmentationMask?.close();
        return;
      }

      drawPose({ canvas, video, result });
      result.segmentationMask?.close();

      framesInWindow++;
      const now = performance.now();

      if (now - windowStartedAt >= 1000) {
        setFps(Math.round((framesInWindow * 1000) / (now - windowStartedAt)));
        framesInWindow = 0;
        windowStartedAt = now;
      }
    }

    async function loop() {
      try {
        await detectFrame();
      } catch (reason) {
        if (isCancelled) return;

        setError(toErrorMessage(reason));
        setStatus("error");
        return;
      }

      if (isCancelled) return;
      frameId = requestAnimationFrame(loop);
    }

    frameId = requestAnimationFrame(loop);

    return () => {
      isCancelled = true;
      cancelAnimationFrame(frameId);
      setFps(0);
      clearPose(canvas);
    };
  }, [video, canvas, status]);

  return { status, error, fps };
}
