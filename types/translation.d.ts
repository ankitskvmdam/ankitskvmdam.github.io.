import "i18next";

import { HomeTranslation } from "./app/locales/en/home";
import { CommonTranslation } from "./app/locales/en/common";
import { AboutTranslation } from "~/locales/en/about";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      home: HomeTranslation;
      common: CommonTranslation;
      about: AboutTranslation;
    };
  }
}
