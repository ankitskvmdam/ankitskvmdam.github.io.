import { ProjectPageContainer } from "~/layouts/containers";
import { PreviewOrCodeButton } from "~/layouts/preview-or-code-button";
import { ProjectBottom } from "./bottom";
import { MetaFunction } from "react-router";
import { getMeta } from "~/utils/meta";
import { MEDIAPIPE_WEBWORKER_ROUTE } from "~/constants/routes";

export const meta: MetaFunction = () => {
  const title =
    "Running Pose Landmark Detection in Web Worker | Ankit Kumar (अंकित कुमार)";
  const description =
    "MediaPipe's Pose Landmarker (or other models/tasks by MediaPipe) is heavy and often blocks the main thread during initialization. However, we can offload initialization and prediction to a web worker to keep the main thread unblocked and responsive.";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    ...getMeta({ title, description, url: MEDIAPIPE_WEBWORKER_ROUTE })!,
  ];
};

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
