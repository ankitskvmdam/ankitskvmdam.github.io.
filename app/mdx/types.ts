export type TFrontmatter = {
  title: string;
  summary: string;
  thumbnail?: string;
  date: string;
  status: "draft" | "published";
  type: "blog" | "project";
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
  /**
   * Which shader shape the animated header draws. Optional; each write-up
   * picks a different one so the three pages are distinguishable at a glance.
   */
  headerShape?:
    | "wave"
    | "dots"
    | "truchet"
    | "corners"
    | "ripple"
    | "blob"
    | "sphere";
};
