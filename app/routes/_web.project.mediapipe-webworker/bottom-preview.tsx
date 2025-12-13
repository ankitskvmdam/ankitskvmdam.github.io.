import { ProjectMainContainer } from "~/layouts/containers";
import { ProjectPreviewSidebar } from "./preview-sidebar";
import { PreviewMain } from "./preview-main";
import React from "react";

export function ProjectBottomPreview(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props}>
      <ProjectMainContainer
        left={<ProjectPreviewSidebar />}
        right={<PreviewMain />}
      />
    </div>
  );
}
