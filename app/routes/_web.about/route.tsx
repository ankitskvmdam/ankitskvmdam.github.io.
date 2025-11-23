import { Trans, useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";

import { Slash } from "~/components/section/slash";
import { Signature } from "./signature";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["about", "common"],
};

export default function AboutRoute() {
  const { t } = useTranslation("about");

  return (
    <div className="section relative">
      <div className="section-wrapper section-padding relative z-10">
        <div className="bg-[url('/assets/about-bg.png')] bg-no-repeat h-[calc(100vh-500px)] bg-contain absolute right-0 bg-top-left z-1 left-0 top-16 dark:invert-100 dark:hue-rotate-180 md:top-0 md:left-52 lg:left-96" />
        <SectionPageIntro
          className="min-h-[calc(100vh-300px)] relative z-10"
          pageHeading="/about"
          pageTitleSlash="/about/ankit_kumar"
          pageTitle={t("title")}
          pageDescriptionSlash="/about/ankit_kumar/intro"
          pageDescription={t("description")}
        />

        <div className="max-w-5xl relative z-10">
          <Slash component="inline">/about/ankit_kumar/story-or-timeline</Slash>
          <p className="pt-1">
            <Trans
              t={t}
              i18nKey="about_full"
              components={[<strong key="strong" />, <br key="break" />]}
            />
          </p>
        </div>
        <div className="flex justify-end xl:-translate-y-1/2 z-1">
          <Signature className="max-h-96 fill-muted" />
        </div>
      </div>
    </div>
  );
}
