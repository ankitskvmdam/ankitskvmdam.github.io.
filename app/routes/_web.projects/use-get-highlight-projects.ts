import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useAppStore } from "~/app-store";

export type THighlightProject = {
  id: string;
  thumbnail: string;
  number: string;
  title: string;
  descriptionKey: "outspeed.description" | "cleanJSDocTheme.description";
  links: {
    id: string;
    type: "npm" | "github" | "website" | "notebook";
    href: string;
  }[];
  readMore?: string;
};

export function useGetHighlightProjects() {
  const { t } = useTranslation("projects");
  const { theme } = useAppStore((state) => ({
    theme: state.theme,
  }));

  return React.useMemo((): THighlightProject[] => {
    return [
      {
        id: "clean-jsdoc-theme",
        number: "01.",
        title: t("cleanJSDocTheme.title"),
        descriptionKey: "cleanJSDocTheme.description",
        readMore: "/clean",
        thumbnail:
          theme === "dark"
            ? "/assets/clean-jsdoc-theme-dark.png"
            : "/assets/clean-jsdoc-theme-light.png",
        links: [
          {
            id: "npm",
            type: "npm",
            href: "https://www.npmjs.com/package/clean-jsdoc-theme",
          },
          {
            id: "github",
            type: "github",
            href: "https://github.com/ankitskvmdam/clean-jsdoc-theme/tree/master",
          },
          {
            id: "web",
            type: "website",
            href: "./clean-jsdoc-theme/v4/",
          },
        ],
      },
      {
        id: "outspeed",
        title: t("outspeed.title"),
        descriptionKey: "outspeed.description",
        links: [],
        number: "02.",
        thumbnail: "/assets/outspeed-playground.png",
      },
    ];
  }, [theme, t]);
}
