import { describe, it, expect } from "vitest";
import { createFileTreeFromFilePaths } from "./utils";

describe("utils", () => {
  const raw = "https://raw.ankdev.me/app";
  const view = "https://view.ankdev.me/app";

  const rawMain = `${raw}/main`;
  const viewMain = `${view}/main`;

  const rawLayout = `${raw}/layouts`;
  const viewLayout = `${view}/layouts`;

  const files = [
    {
      displayURL: "/app/preview-main.tsx",
      rawFileURL: `${rawMain}/preview-main.tsx`,
      viewFileURL: `${viewMain}/preview-main.tsx`,
    },
    {
      displayURL: "/app/preview-view-parameters.tsx",
      rawFileURL: `${rawMain}/preview-view-parameters.tsx`,
      viewFileURL: `${viewMain}/preview-view-parameters.tsx`,
    },
    {
      displayURL: "/app/preview-update-parameters.tsx",
      rawFileURL: `${rawMain}/preview-update-parameters.tsx`,
      viewFileURL: `${viewMain}/preview-update-parameters.tsx`,
    },
    {
      displayURL: "/layouts/select-input-video-device.tsx",
      rawFileURL: `${rawLayout}/select-input-video-device.tsx`,
      viewFileURL: `${viewLayout}/select-input-video-device.tsx`,
    },
  ];
  it("should convert filepath to file tree correctly", () => {
    let result = createFileTreeFromFilePaths(files);
    // TODO: Implement test
  });
});
