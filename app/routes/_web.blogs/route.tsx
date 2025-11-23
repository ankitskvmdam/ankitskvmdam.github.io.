import { useTranslation } from "react-i18next";
import { MetaFunction } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["blogs", "common"],
};

export default function BlogsRoute() {
  const { t } = useTranslation("blogs");

  return (
    <div className="section relative">
      <div className="section-wrapper section-padding relative z-10">
        <div className="bg-[url('/assets/typewriter.png')] bg-no-repeat bg-contain absolute w-full bg-bottom-right z-1 opacity-20 bottom-0 h-96 lg:h-[calc(100vh-200px)] lg:min-h-[300px] dark:opacity-10 " />
        <SectionPageIntro
          className="min-h-[calc(100vh-300px)] relative z-10"
          pageHeading="/blogs"
          pageTitleSlash="/blogs/author/opening-message"
          pageTitle={t("title")}
          pageDescriptionSlash="/blogs/author/description-about-blogs"
          pageDescription={t("description")}
        />
      </div>
    </div>
  );
}
