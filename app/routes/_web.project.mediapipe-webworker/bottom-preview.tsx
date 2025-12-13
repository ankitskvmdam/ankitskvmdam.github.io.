import { ProjectMainContainer } from "~/layouts/containers";
import { ProjectPreviewSidebar } from "./preview-sidebar";
import { PreviewMain } from "./preview-main";

export function ProjectBottomPreview() {
  return (
    <ProjectMainContainer
      left={<ProjectPreviewSidebar />}
      right={<PreviewMain />}
    />
  );
}
