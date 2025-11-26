import { useTranslation } from "react-i18next";
import { MetaFunction, useLoaderData } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { BlogsList } from "./blogs-list";
import { getAllBlogPosts } from "~/mdx/server";
import { BLOGS_ROUTE } from "~/constants/routes";
import { TypeWriterIllustration } from "~/components/icons/typewriter";

export function loader() {
  try {
    const blogs = getAllBlogPosts();
    return {
      blogs,
    };
  } catch (error) {
    console.error("Failed to fetch all blogs", error);
    return {
      blogs: [],
    };
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: "Ankit Kumar (अंकित कुमार)" },
    {
      name: "description",
      content: "My blogs share the lessons I’ve learned from my experiences.",
    },
  ];
};

export const handle = {
  i18n: ["blogs", "common"],
};

export default function BlogsRoute() {
  const { blogs } = useLoaderData<typeof loader>();
  const { t } = useTranslation("blogs");

  return (
    <div className="section relative">
      <div className="section-wrapper section-padding">
        <div className="relative z-10">
          <div className="bg-[url('/assets/typewriter.png')] absolute opacity-20 dark:opacity-10 bg-cover bottom-0 right-0 size-52 translate-y-5 md:size-100 lg:size-140 lg:-translate-x-1/2" />
          <div className="dot-bg h-[calc(100%+10rem)] absolute -top-30"></div>
          <SectionPageIntro
            className="section-intro-with-min-h"
            pageHeading={BLOGS_ROUTE}
            pageTitleSlash={`${BLOGS_ROUTE}/ankit-kumar/opening-message`}
            pageTitle={t("title")}
            pageDescriptionSlash={`${BLOGS_ROUTE}/ankit-kumar/description-about-blogs`}
            pageDescription={t("description")}
          />
        </div>
      </div>

      <BlogsList blogs={blogs} />
    </div>
  );
}
