import React from "react";
import { Trans, useTranslation } from "react-i18next";
import { useAppStore } from "~/app-store";
import {
  CLEAN_JSDOC_THEME_ROUTE,
  ERSILIA_REINVENT4_ROUTE,
  OUTSPEED_JS_ROUTE,
} from "~/constants/routes";

export type THighlightProject = {
  id: string;
  thumbnail: string;
  number: string;
  title: string;
  descriptionKey:
    | "outspeed.description"
    | "cleanJSDocTheme.description"
    | "ersilia.description";
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
        readMore: CLEAN_JSDOC_THEME_ROUTE,
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
            href: "./clean-jsdoc-theme/",
          },
        ],
      },
      {
        id: "outspeed",
        number: "02.",
        title: t("outspeed.title"),
        descriptionKey: "outspeed.description",
        readMore: OUTSPEED_JS_ROUTE,
        links: [
          {
            id: "npm",
            href: "https://www.npmjs.com/package/@outspeed/core",
            type: "npm",
          },
          {
            id: "github",
            href: "https://github.com/outspeed-ai/outspeed-js",
            type: "github",
          },
          {
            id: "website",
            href: "https://outspeed.com/",
            type: "website",
          },
        ],
        thumbnail: "/assets/outspeed-playground.png",
      },
      {
        id: "ersilia",
        number: "03.",
        title: t("ersilia.title"),
        descriptionKey: "ersilia.description",
        readMore: ERSILIA_REINVENT4_ROUTE,
        links: [
          {
            id: "github",
            href: "https://github.com/ersilia-os/ersilia/issues/942",
            type: "github",
          },
          {
            id: "website",
            type: "website",
            href: "https://www.ersilia.io/",
          },
          {
            id: "notebook",
            type: "notebook",
            href: "https://github.com/ankitskvmdam/reinvent-transfer-learning/blob/master/notebooks/TransferLearning.ipynb",
          },
        ],
        thumbnail: "/assets/ersilia-website.webp",
      },
    ];
  }, [theme, t]);
}
