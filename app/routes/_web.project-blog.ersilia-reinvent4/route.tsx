import { MetaFunction, useLoaderData } from "react-router";
import { ProjectBlogShell } from "../_web.project-blog/shell";
import {
  getProjectPostMeta,
  loadProjectPost,
} from "../_web.project-blog/project-post";

const SLUG = "ersilia-reinvent4";

export function loader() {
  return loadProjectPost(SLUG);
}

export const meta: MetaFunction<typeof loader> = ({ data }) =>
  getProjectPostMeta(data);

export default function ErsiliaReinvent4Route() {
  const post = useLoaderData<typeof loader>();

  return (
    <ProjectBlogShell
      frontmatter={post.frontmatter}
      content={post.content}
      slug={post.slug}
    />
  );
}
