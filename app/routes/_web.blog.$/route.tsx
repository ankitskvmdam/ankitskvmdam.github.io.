import { useTranslation } from "react-i18next";
import { LoaderFunctionArgs, MetaFunction, useLoaderData } from "react-router";
import { SectionPageIntro } from "~/components/section/page-intro";
import { getAllBlogPosts, getBlogPost } from "~/utils/mdx.server";
// import { BlogsList } from "./blogs-list";

export async function loader({ params }: LoaderFunctionArgs) {
  // const post = await getBlogPost("how-to-run-mediapipe-task-vision-in-a-web-worker")
  console.log("Slug", params);
  return {
    data: params,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  console.log("Meta data", data);
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
      <div className="section-wrapper section-padding">
        This is the blog on this page.
      </div>
    </div>
  );
}
