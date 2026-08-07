import type { TGrainShape } from "~/components/content/grain";

export type TFrontmatter = {
  title: string;
  summary: string;
  thumbnail?: string;
  date: string;
  status: "draft" | "published";
  type: "blog" | "project";
  /**
   * Shape of the animated grain gradient behind the page header.
   *
   * Kept separate from `thumbnailShape` even though the two will usually
   * match, so a post can pick a shape that reads well small without being
   * stuck with it full width.
   */
  headerShape?: TGrainShape;
  /** Shape of the grain gradient on this post's card in a listing. */
  thumbnailShape?: TGrainShape;
};

/**
 * Frontmatter for the long-form project write-ups in `app/mdx/projects`.
 *
 * These are a separate collection from the blog posts, so they can carry the
 * extra fields the project hero renders without every blog post having to
 * declare them.
 */
export type TProjectFrontmatter = Omit<TFrontmatter, "type"> & {
  type: "project";
  /** One line under the title, e.g. what the project is. */
  tagline: string;
  /** What I did on it, e.g. "Author & maintainer". */
  role: string;
  tags: string[];
};
