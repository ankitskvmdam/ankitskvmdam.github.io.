import { MetaFunction } from "react-router";
import { Trans, useTranslation } from "react-i18next";

import { Slash } from "~/components/section/slash";
import { lazy } from "react";

const Background = lazy(() =>
  import("./background").then(({ Background }) => ({ default: Background })),
);

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["home", "common"],
};

export default function IndexRoute() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="section relative min-h-[calc(100svh-120px)]">
      <div className="section-wrapper section-padding relative z-10">
        <Slash component="heading">/home</Slash>
        <div className="mt-12 gap-12 flex flex-col">
          <div className="flex flex-col gap-4">
            <Slash component="inline" className="text-xs">
              /home/name
            </Slash>
            <span className="font-heading font-bold leading-none text-5xl md:text-7xl">
              {t("common:ankit_kumar")}
            </span>
          </div>

          <div className="flex flex-col gap-1 max-w-xl">
            <Slash component="inline" className="text-sm">
              /home/intro
            </Slash>
            <p>
              <Trans
                t={t}
                i18nKey="intro"
                components={[<strong key="strong" />, <br key="break" />]}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -top-16 left-0 right-0 -bottom-12 z-0">
        <Background />
      </div>
    </div>
  );
}
