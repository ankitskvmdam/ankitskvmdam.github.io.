import { ProjectPageContainer } from "~/layouts/containers";
import { PreviewOrCodeButton } from "~/layouts/preview-or-code-button";
import { ProjectBottom } from "./bottom";


export default function MediaPipeWebworker() {
  return (
    <div className="section relative">
      <div className="section-wrapper flex section-min-h-available-screen section-padding relative z-1">
        <ProjectPageContainer
          top={
            <div className="mb-4">
              <PreviewOrCodeButton />
            </div>
          }
          bottom={<ProjectBottom />}
        />
      </div>
    </div>
  );
}
