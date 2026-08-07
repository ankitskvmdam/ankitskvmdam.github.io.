import { useTranslation } from "react-i18next";
import { List, TListItem } from "~/components/list";
import { Slash } from "~/components/section/slash";
import {
  MEDIAPIPE_WEBWORKER_BLOG_ROUTE,
  MEDIAPIPE_WEBWORKER_ROUTE,
} from "~/constants/routes";

export function ProjectsMoreProjects() {
  const { t } = useTranslation("projects");
  const projects: TListItem[] = [
    {
      id: "media-pipe-in-web-worker",
      title: t("runningMediaPipeInWebWorker.title"),
      description: t("runningMediaPipeInWebWorker.description"),
      // This one has both a running demo and a write-up about building it, so
      // the entry offers each rather than picking one.
      actions: [
        {
          id: "blog",
          label: t("readBlog"),
          to: MEDIAPIPE_WEBWORKER_BLOG_ROUTE,
        },
        {
          id: "project",
          label: t("openProject"),
          to: MEDIAPIPE_WEBWORKER_ROUTE,
          isPrimary: true,
        },
      ],
    },
  ];

  return (
    <div className="mt-10 pt-5 border-t border-t-muted md:mt-20 md:pt-10">
      <div>
        <Slash component="inline">/more-projects</Slash>
        <h2 className="font-monospace font-bold text-2xl md:text-4xl">
          {t("moreProjects.title")}
        </h2>
        <p className="text-muted-foreground text-sm">
          {t("moreProjects.description")}
        </p>
      </div>
      <div className="pt-10">
        <List items={projects} />
      </div>
    </div>
  );
}
