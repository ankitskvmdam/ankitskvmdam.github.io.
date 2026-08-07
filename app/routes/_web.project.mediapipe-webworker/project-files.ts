import { TProjectCodeViewerFilePath } from "~/layouts/project-code-viewer/utils";

const RAW_REPO_ROUTE =
  "https://raw.githubusercontent.com/ankitskvmdam/ankitskvmdam.github.io./refs/heads/master";

const REPO_ROUTE =
  "https://github.com/ankitskvmdam/ankitskvmdam.github.io./blob/master";

const BASE_RAW_GITHUB_ROUTE = `${RAW_REPO_ROUTE}/app`;

const BASE_GITHUB_ROUTE = `${REPO_ROUTE}/app`;

const RAW_MEDIAPIPE_WEBWORKER_ROUTE = `${BASE_RAW_GITHUB_ROUTE}/routes/_web.project.mediapipe-webworker`;
const VIEW_MEDIAPIPE_WEBWORKER_ROUTE = `${BASE_GITHUB_ROUTE}/routes/_web.project.mediapipe-webworker`;

const RAW_LAYOUT = `${BASE_RAW_GITHUB_ROUTE}/layouts`;
const VIEW_LAYOUT = `${BASE_GITHUB_ROUTE}/layouts`;

const RAW_HOOKS = `${BASE_RAW_GITHUB_ROUTE}/hooks`;
const VIEW_HOOKS = `${BASE_GITHUB_ROUTE}/hooks`;

const RAW_PUBLIC_MEDIAPIPE = `${RAW_REPO_ROUTE}/public/mediapipe`;
const VIEW_PUBLIC_MEDIAPIPE = `${REPO_ROUTE}/public/mediapipe`;

export const FILES: TProjectCodeViewerFilePath[] = [
  {
    displayURL: "/public/mediapipe/poselandmarker.worker.js",
    rawFileURL: `${RAW_PUBLIC_MEDIAPIPE}/poselandmarker.worker.js`,
    viewFileURL: `${VIEW_PUBLIC_MEDIAPIPE}/poselandmarker.worker.js`,
  },
  {
    displayURL: "/app/preview-main.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-main.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-main.tsx`,
  },
  {
    displayURL: "/app/preview-runner.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-runner.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-runner.tsx`,
  },
  {
    displayURL: "/app/preview-runner-view.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-runner-view.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-runner-view.tsx`,
  },
  {
    displayURL: "/app/use-pose-landmarker.ts",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/use-pose-landmarker.ts`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/use-pose-landmarker.ts`,
  },
  {
    displayURL: "/app/pose-landmarker-worker-client.ts",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/pose-landmarker-worker-client.ts`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/pose-landmarker-worker-client.ts`,
  },
  {
    displayURL: "/app/draw-pose.ts",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/draw-pose.ts`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/draw-pose.ts`,
  },
  {
    displayURL: "/app/preview-view-parameters.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-view-parameters.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-view-parameters.tsx`,
  },
  {
    displayURL: "/app/preview-update-parameters.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-update-parameters.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-update-parameters.tsx`,
  },
  {
    displayURL: "/hooks/use-get-camera-stream.ts",
    rawFileURL: `${RAW_HOOKS}/use-get-camera-stream.ts`,
    viewFileURL: `${VIEW_HOOKS}/use-get-camera-stream.ts`,
  },
  {
    displayURL: "/layouts/mediapipe-inputs/inputs.tsx",
    rawFileURL: `${RAW_LAYOUT}/mediapipe-inputs/inputs.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/mediapipe-inputs/inputs.tsx`,
  },
  {
    displayURL: "/layouts/mediapipe-inputs/store.ts",
    rawFileURL: `${RAW_LAYOUT}/mediapipe-inputs/store.ts`,
    viewFileURL: `${VIEW_LAYOUT}/mediapipe-inputs/store.ts`,
  },
  {
    displayURL: "/layouts/select-input-video-device/index.tsx",
    rawFileURL: `${RAW_LAYOUT}/select-input-video-device/index.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/select-input-video-device/index.tsx`,
  },
  {
    displayURL: "/layouts/select-input-video-device/store.ts",
    rawFileURL: `${RAW_LAYOUT}/select-input-video-device/store.ts`,
    viewFileURL: `${VIEW_LAYOUT}/select-input-video-device/store.ts`,
  },
  {
    displayURL: "/layouts/containers.tsx",
    rawFileURL: `${RAW_LAYOUT}/containers.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/containers.tsx`,
  },
  {
    displayURL: "/layouts/parameter-select.tsx",
    rawFileURL: `${RAW_LAYOUT}/parameter-select.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/parameter-select.tsx`,
  },
  {
    displayURL: "/layouts/parameter-slider.tsx",
    rawFileURL: `${RAW_LAYOUT}/parameter-slider.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/parameter-slider.tsx`,
  },
  {
    displayURL: "/layouts/stream-video-player.tsx",
    rawFileURL: `${RAW_LAYOUT}/stream-video-player.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/stream-video-player.tsx`,
  },
];
