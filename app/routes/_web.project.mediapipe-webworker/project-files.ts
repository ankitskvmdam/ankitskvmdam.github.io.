import { TProjectCodeViewerFilePath } from "~/layouts/project-code-viewer/utils";

const BASE_RAW_GITHUB_ROUTE =
  "https://raw.githubusercontent.com/ankitskvmdam/ankitskvmdam.github.io./refs/heads/master/app";

const BASE_GITHUB_ROUTE =
  "https://github.com/ankitskvmdam/ankitskvmdam.github.io./blob/master/app";

const RAW_MEDIAPIPE_WEBWORKER_ROUTE = `${BASE_RAW_GITHUB_ROUTE}/routes/_web.project.mediapipe-webworker`;
const VIEW_MEDIAPIPE_WEBWORKER_ROUTE = `${BASE_GITHUB_ROUTE}/routes/_web.project.mediapipe-webworker`;

const RAW_LAYOUT = `${BASE_RAW_GITHUB_ROUTE}/layouts`;
const VIEW_LAYOUT = `${BASE_GITHUB_ROUTE}/layouts`;

export const FILES: TProjectCodeViewerFilePath[] = [
  {
    displayURL: "/app/preview-main.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-main.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/preview-main.tsx`,
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
    displayURL: "/app/inputs.tsx",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/inputs.tsx`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/inputs.tsx`,
  },
  {
    displayURL: "/app/types.ts",
    rawFileURL: `${RAW_MEDIAPIPE_WEBWORKER_ROUTE}/types.ts`,
    viewFileURL: `${VIEW_MEDIAPIPE_WEBWORKER_ROUTE}/types.ts`,
  },
  {
    displayURL: "/layouts/select-input-video-device.tsx",
    rawFileURL: `${RAW_LAYOUT}/select-input-video-device.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/select-input-video-device.tsx`,
  },
  {
    displayURL: "/layouts/parameter-select.tsx",
    rawFileURL: `${RAW_LAYOUT}/parameter-select.tsx`,
    viewFileURL: `${VIEW_LAYOUT}/parameter-select.tsx`,
  },
];
