import type { TPost } from "~/utils/mdx.server";

export type TBlogsList = {
  blogs: TPost[];
};

export function BlogsList(props: TBlogsList) {
  const { blogs } = props;

  return (
    <div>
      <pre className="w-96 whitespace-pre-wrap">
        {JSON.stringify(blogs, null, 2)}
      </pre>
    </div>
  );
}
