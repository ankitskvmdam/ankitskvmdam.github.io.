import { ProjectHeadingAndDescContainer } from "~/layouts/containers";
import { useTranslation } from "react-i18next";
import { MediapipeInputs } from "~/layouts/mediapipe-inputs/inputs";

export function ProjectPreviewSidebar() {
  const { t } = useTranslation("projects");
  return (
    <div>
      <ProjectHeadingAndDescContainer
        heading={t("runningMediaPipeInWebWorker.title")}
        description={t("runningMediaPipeInWebWorker.description")}
      />

      <div className="mt-4 pt-4 border-t border-t-muted hidden lg:block">
        <MediapipeInputs />
      </div>
    </div>
  );
}
