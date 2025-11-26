import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { ProjectsBackground } from "./background";
import { ProjectsList } from "./projects";
import { PROJECTS_ROUTE } from "~/constants/routes";
import { getMeta } from "~/utils/meta";

export const meta: MetaFunction = () => {
  const title = "Projects | Ankit Kumar (अंकित कुमार)";
  const description =
    "My creation in code. Projects and experiments that reflects my journey as a software engineer.";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    ...getMeta({ title, description, url: PROJECTS_ROUTE })!,
  ];
};

export const handle = {
  i18n: ["projects", "common"],
};

export default function ProjectsRoute() {
  const { t } = useTranslation("projects");

  return (
    <div className="section relative">
      <div className="section-wrapper section-padding relative z-1">
        <div className="relative">
          <SectionPageIntro
            className="section-intro-with-min-h"
            pageHeading={PROJECTS_ROUTE}
            pageTitleSlash={`${PROJECTS_ROUTE}/title`}
            pageTitle={t("title")}
            pageDescriptionSlash={`${PROJECTS_ROUTE}/description`}
            pageDescription={t("description")}
          />
          <ProjectsBackground className="fill-layer-0 absolute bottom-0 right-0 z-1 -rotate-12 h-140 md:h-200" />
        </div>
        <ProjectsList />
        <div className="h-10 w-10" />
      </div>
    </div>
  );
}
