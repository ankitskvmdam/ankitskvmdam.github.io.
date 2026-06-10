import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { PageNotFoundIllustration } from "~/components/icons/page-not-found";
import { SectionPageIntro } from "~/components/section/page-intro";
import { getMeta } from "~/utils/meta";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार) - Page Not Found " },
    {
      name: "description",
      content: "We are sorry, but the page you are looking for does not exist.",
    },
    ...getMeta()!,
  ];
};

export default function CatchAll() {
  const { t } = useTranslation();
  return (
    <div className="section section-min-h-available-screen">
      <div className="section-wrapper flex-1 section-padding relative min-h-128">
        <SectionPageIntro
          className="z-10 relative"
          pageHeading="/page-not-found"
          pageTitleSlash="/404"
          pageTitle={t("common:page_not_found_title")}
          pageDescriptionSlash="/404/reason"
          pageDescription={t("common:page_not_found_description")}
        />

        <div className="absolute z-1 p-4 right-0 w-full max-w-xs bottom-5 md:max-w-md lg:max-w-2xl">
          <PageNotFoundIllustration />
        </div>
      </div>
    </div>
  );
}
