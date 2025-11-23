import "i18next";

import { HomeTranslation } from "./app/locales/en/home";
import { CommonTranslation } from "./app/locales/en/common";
import { AboutTranslation } from "~/locales/en/about";
import { BlogsTranslation } from "~/locales/en/blogs";
import { ProjectsTranslation } from "~/locales/en/projects";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      home: HomeTranslation;
      common: CommonTranslation;
      about: AboutTranslation;
      blogs: BlogsTranslation;
      projects: ProjectsTranslation;
    };
  }
}
