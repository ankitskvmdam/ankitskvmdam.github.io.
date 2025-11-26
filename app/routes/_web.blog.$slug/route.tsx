import {
  LoaderFunctionArgs,
  MetaFunction,
  redirect,
  useLoaderData,
} from "react-router";
import { BLOGS_ROUTE } from "~/constants/routes";
import { getBlogPostBySlug, TPostData } from "~/mdx/server";
import { Article } from "./article";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params["slug"];
  if (!slug) {
    return redirect(BLOGS_ROUTE);
  }

  let mdx: TPostData | null = null;

  try {
    mdx = await getBlogPostBySlug(slug);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return redirect("/blog-not-found");
  }

  return mdx;
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { title } = data?.data || {};
  return [
    { title: `${title} Ankit Kumar (अंकित कुमार)` },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["blogs", "common"],
};

export default function BlogsRoute() {
  const mdx = useLoaderData<typeof loader>();

  if (!mdx) {
    return null;
  }

  return (
    <div className="section relative">
      <div className="section-wrapper section-padding flex justify-center items-center">
        <div className="dot-bg h-54 md:h-96"></div>
        <Article frontmatter={mdx.data} content={mdx.content} />
      </div>
    </div>
  );
}
