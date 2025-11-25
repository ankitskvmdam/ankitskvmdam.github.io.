import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { Slash } from "~/components/section/slash";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार) - Page Not Found " },
    {
      name: "description",
      content: "We are sorry, but the page you are looking for does not exist.",
    },
  ];
};

export default function CatchAll() {
  const { t } = useTranslation();
  return (
    <div className="section section-min-h-available-screen">
      <div className="section-wrapper section-padding">
        <div className="z-1 absolute left-0 h-[400px] w-full bg-[linear-gradient(to_right,var(--background-layer-0)_1px,transparent_1px),linear-gradient(to_bottom,var(--background-layer-0)_1px,transparent_1px)] bg-[size:18px_18px] top-28 md:top-48"></div>
        <SectionPageIntro
          className="z-10 relative"
          pageHeading="/page-not-found"
          pageTitleSlash="/404"
          pageTitle={t("common:page_not_found_title")}
          pageDescriptionSlash="/404/reason"
          pageDescription={t("common:page_not_found_description")}
        />
      </div>
    </div>
  );
}
