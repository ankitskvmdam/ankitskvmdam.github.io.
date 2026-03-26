import { useTranslation } from "react-i18next";
import { MetaFunction, useLoaderData } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { BlogsList } from "./blogs-list";
import { getAllBlogPosts } from "~/mdx/server";
import { BLOGS_ROUTE } from "~/constants/routes";
import { getMeta } from "~/utils/meta";

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
  const title = "Blogs | Ankit Kumar (अंकित कुमार)";
  const description =
    "My blogs are tutorials or reflections on the challenges I’ve faced while working on projects. Many of my posts share insights, tips, and thoughts around building better frontend.";
  return [
    { title },
    {
      name: "description",
      content: description,
    },
    ...getMeta({ title, description, url: BLOGS_ROUTE })!,
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
          <div className="bg-[url('/assets/typewriter.webp')] absolute opacity-20 dark:opacity-10 bg-cover bottom-0 right-0 size-52 translate-y-5 md:size-100 lg:size-140 lg:-translate-x-1/2" />
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
