import type { TPoseDetectionResult } from "./pose-landmarker-worker-client";

/**
 * Pairs of landmark indices that make up the pose skeleton. Same set as
 * `PoseLandmarker.POSE_CONNECTIONS`, inlined so the drawing code does not pull
 * `@mediapipe/tasks-vision` onto the main thread just to read a constant.
 */
const POSE_CONNECTIONS: ReadonlyArray<readonly [number, number]> = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 7],
  [0, 4],
  [4, 5],
  [5, 6],
  [6, 8],
  [9, 10],
  [11, 12],
  [11, 13],
  [13, 15],
  [15, 17],
  [15, 19],
  [15, 21],
  [17, 19],
  [12, 14],
  [14, 16],
  [16, 18],
  [16, 20],
  [16, 22],
  [18, 20],
  [11, 23],
  [12, 24],
  [23, 24],
  [23, 25],
  [24, 26],
  [25, 27],
  [26, 28],
  [27, 29],
  [28, 30],
  [29, 31],
  [30, 32],
  [27, 31],
  [28, 32],
];

const CONNECTION_COLOR = "rgba(255, 255, 255, 0.85)";
const CONNECTION_WIDTH = 2;
const LANDMARK_COLOR = "oklch(0.5551 0.2462 290.71)";

/** Landmarks closer to the camera (smaller z) are drawn bigger. */
const NEAREST_Z = -0.15;
const FARTHEST_Z = 0.1;
const NEAREST_RADIUS = 5;
const FARTHEST_RADIUS = 1.5;

function lerpRadius(z: number) {
  const progress = (z - NEAREST_Z) / (FARTHEST_Z - NEAREST_Z);
  const radius = NEAREST_RADIUS + (FARTHEST_RADIUS - NEAREST_RADIUS) * progress;

  return Math.min(NEAREST_RADIUS, Math.max(FARTHEST_RADIUS, radius));
}

/**
 * The video is rendered with `object-cover`, so it is scaled up until it fills
 * the box and the overflow is cropped evenly. Landmarks are normalized to the
 * full frame, which means we have to reproduce that same crop to place them.
 */
function getCoverRect(
  video: HTMLVideoElement,
  boxWidth: number,
  boxHeight: number,
) {
  const scale = Math.max(
    boxWidth / video.videoWidth,
    boxHeight / video.videoHeight,
  );
  const width = video.videoWidth * scale;
  const height = video.videoHeight * scale;

  return {
    width,
    height,
    x: (boxWidth - width) / 2,
    y: (boxHeight - height) / 2,
  };
}

/**
 * Resizes the backing store to the CSS size (times the device pixel ratio, so
 * lines stay crisp) and returns a context in CSS pixel coordinates.
 */
function prepareContext(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d");
  if (!context) return null;

  const ratio = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
    canvas.width = width * ratio;
    canvas.height = height * ratio;
  }

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  return { context, width, height };
}

export function clearPose(canvas: HTMLCanvasElement) {
  prepareContext(canvas);
}

export type TDrawPoseParams = {
  canvas: HTMLCanvasElement;
  video: HTMLVideoElement;
  result: TPoseDetectionResult;
};

export function drawPose(params: TDrawPoseParams) {
  const { canvas, video, result } = params;

  if (!video.videoWidth || !video.videoHeight) return;

  const prepared = prepareContext(canvas);
  if (!prepared) return;

  const { context, width, height } = prepared;
  const rect = getCoverRect(video, width, height);

  if (result.segmentationMask) {
    context.drawImage(
      result.segmentationMask,
      rect.x,
      rect.y,
      rect.width,
      rect.height,
    );
  }

  for (const landmarks of result.landmarks) {
    context.strokeStyle = CONNECTION_COLOR;
    context.lineWidth = CONNECTION_WIDTH;
    context.beginPath();

    for (const [fromIndex, toIndex] of POSE_CONNECTIONS) {
      const from = landmarks[fromIndex];
      const to = landmarks[toIndex];

      if (!from || !to) continue;

      context.moveTo(
        rect.x + from.x * rect.width,
        rect.y + from.y * rect.height,
      );
      context.lineTo(rect.x + to.x * rect.width, rect.y + to.y * rect.height);
    }

    context.stroke();

    context.fillStyle = LANDMARK_COLOR;

    for (const landmark of landmarks) {
      context.beginPath();
      context.arc(
        rect.x + landmark.x * rect.width,
        rect.y + landmark.y * rect.height,
        lerpRadius(landmark.z),
        0,
        2 * Math.PI,
      );
      context.fill();
    }
  }
}
