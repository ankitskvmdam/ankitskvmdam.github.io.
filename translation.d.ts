import "i18next";

import { HomeTranslation } from "./app/locales/en/home";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en";
    resources: {
      home: HomeTranslation;
    };
  }
}
