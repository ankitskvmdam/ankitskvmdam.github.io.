import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { ProjectsBackground } from "./background";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
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
        <SectionPageIntro
          className="min-h-[calc(100vh-300px)] relative z-10"
          pageHeading="/projects"
          pageTitleSlash="/projects/title"
          pageTitle={t("title")}
          pageDescriptionSlash="/projects/description"
          pageDescription={t("description")}
        />
        <ProjectsBackground className="fill-layer-0 absolute bottom-0 right-0 z-1 h-screen -rotate-12" />
      </div>
    </div>
  );
}
