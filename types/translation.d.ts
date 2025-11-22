import "i18next";

import { HomeTranslation } from "./app/locales/en/home";
import { CommonTranslation } from "./app/locales/en/common";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      home: HomeTranslation;
      common: CommonTranslation;
    };
  }
}
