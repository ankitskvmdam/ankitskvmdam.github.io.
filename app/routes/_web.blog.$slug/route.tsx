import {
  LoaderFunctionArgs,
  MetaFunction,
  redirect,
  useLoaderData,
} from "react-router";
import { BLOG_ROUTE, BLOGS_ROUTE } from "~/constants/routes";
import { getBlogPostBySlug, TPostData } from "~/mdx/server";
import { Article } from "./article";
import { getMeta } from "~/utils/meta";

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

  return { ...mdx, slug };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const { title, summary = "", thumbnail } = data?.data || {};

  const _title = `${title} | ankdev.me`;

  return [
    { title: _title },
    { name: "description", content: summary },
    ...getMeta({
      title: _title,
      description: summary,
      image: thumbnail,
      url: `${BLOG_ROUTE}/${data?.slug}`,
    })!,
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
