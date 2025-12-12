import {
  ProjectHeadingAndDescContainer,
  ProjectMainContainer,
} from "~/layouts/containers";

export function ProjectBottomPreview() {
  return (
    <ProjectMainContainer
      left={
        <>
          <ProjectHeadingAndDescContainer
            heading="Running Pose Landmark Detection in Web Worker"
            description="MediaPipe's Pose Landmarker (or other models/tasks by MediaPipe)
     is heavy and often blocks the main thread during initialization.
     However, we can offload initialization and prediction to a web
     worker to keep the main thread unblocked and responsive."
          />
        </>
      }
      right={<>Under construction.</>}
    />
  );
}
