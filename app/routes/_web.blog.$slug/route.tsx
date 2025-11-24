import { LoaderFunctionArgs, MetaFunction, redirect } from "react-router";
import { BLOGS_ROUTE } from "~/constants/routes";
import { getBlogPostBySlug } from "~/mdx/server";

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params["slug"];
  if (!slug) {
    return redirect(BLOGS_ROUTE);
  }

  const rawFileContent = await getBlogPostBySlug(slug);
  console.log("Rawfile", rawFileContent);
  return {
    slug,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [
    { title: `Ankit Kumar (अंकित कुमार)` },
    { name: "description", content: "Hi! I am Ankit" },
  ];
};

export const handle = {
  i18n: ["blogs", "common"],
};

export default function BlogsRoute() {
  return (
    <div className="section relative">
      <div className="section-wrapper section-padding">Hello world!</div>
    </div>
  );
}
