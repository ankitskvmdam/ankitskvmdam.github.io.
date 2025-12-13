import { ProjectHeadingAndDescContainer } from "~/layouts/containers";
import { Inputs } from "./inputs";

export function ProjectPreviewSidebar() {
  return (
    <div>
      <ProjectHeadingAndDescContainer
        heading="Running Pose Landmark Detection in Web Worker"
        description="MediaPipe's Pose Landmarker (or other models/tasks by MediaPipe)
is heavy and often blocks the main thread during initialization.
However, we can offload initialization and prediction to a web
worker to keep the main thread unblocked and responsive."
      />

      <div className="mt-4 pt-4 border-t border-t-muted">
        <Inputs />
      </div>
    </div>
  );
}
