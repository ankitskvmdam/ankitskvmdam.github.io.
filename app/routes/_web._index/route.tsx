import { MetaFunction } from "react-router";
import { Trans, useTranslation } from "react-i18next";

import { lazy } from "react";
import { SectionPageIntro } from "~/components/section/page-intro";
import { getMeta } from "~/utils/meta";

const Background = lazy(() =>
  import("./background").then(({ Background }) => ({ default: Background })),
);

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    {
      name: "description",
      content:
        "Hey 👋, so glad you're here.A little about me, I'm a Co-Founder, Software Engineer, UI/UX Designer, and Mentor—crafting  tools people enjoy, writing thoughtful, maintainable code, and helping others grow with me.And most importantly, I'm rooted in Nalanda, Bihar (India).",
    },
    ...getMeta()!,
  ];
};

export const handle = {
  i18n: ["home", "common"],
};

export default function IndexRoute() {
  const { t } = useTranslation(["home", "common"]);

  return (
    <div className="section relative section-min-h-available-screen">
      <div className="section-wrapper section-padding relative z-10">
        <SectionPageIntro
          pageHeading="/home"
          pageTitleSlash="/home/name"
          pageTitle={t("common:ankit_kumar")}
          pageDescriptionSlash={"/home/ankit_kumar/intro"}
          pageDescription={
            <Trans
              t={t}
              i18nKey="intro"
              components={[<strong key="strong" />, <br key="break" />]}
            />
          }
        />
      </div>
      <div className="absolute -top-16 left-0 right-0 -bottom-12 z-0">
        <Background />
        <div className="h-px w-full bg-layer-0" />
      </div>
    </div>
  );
}
