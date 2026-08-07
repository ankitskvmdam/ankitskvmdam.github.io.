import { redirect } from "react-router";
import { PROJECTS_ROUTE, PROJECT_BLOG_ROUTE } from "~/constants/routes";
import { getProjectPostBySlug } from "~/mdx/server";
import { TProjectFrontmatter } from "~/mdx/types";
import { getMeta } from "~/utils/meta";

export type TProjectPost = {
  frontmatter: TProjectFrontmatter;
  content: string;
  slug: string;
};

/**
 * Loads one write-up. Returns only the fields the page needs, rather than the
 * whole gray-matter result, so nothing unserializable crosses the loader.
 */
export async function loadProjectPost(slug: string): Promise<TProjectPost> {
  try {
    const mdx = await getProjectPostBySlug(slug);

    return { frontmatter: mdx.data, content: mdx.content, slug };
  } catch (error) {
    console.error(`Error loading project write-up "${slug}":`, error);
    throw redirect(PROJECTS_ROUTE);
  }
}

export function getProjectPostMeta(post: TProjectPost | undefined) {
  const title = `${post?.frontmatter.title ?? "Project"} | ankdev.me`;
  const description = post?.frontmatter.summary ?? "";

  return [
    { title },
    { name: "description", content: description },
    ...getMeta({
      title,
      description,
      image: post?.frontmatter.thumbnail,
      url: `${PROJECT_BLOG_ROUTE}/${post?.slug}`,
    })!,
  ];
}
