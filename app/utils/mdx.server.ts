export type TMDXFrontMatter = {
  title: string;
  summary: string;
  thumbnail?: string;
  date: string;
  status: "draft" | "published";
  type: "blog" | "project";
  displayDate: string;
};

export type TPost = TMDXFrontMatter & {
  slug: string;
};

export function getAllBlogPosts(): TPost[] {
  const blogs = import.meta.glob("../mdx/*.mdx", { eager: true });
  const blogEntries = Object.entries(blogs) as [
    string,
    { frontmatter: TMDXFrontMatter },
  ][];

  return blogEntries.map(
    ([path, blog]): TPost => ({
      ...blog.frontmatter,
      slug: path.replace("../mdx/", "").replace(/\.(mdx)$/, ""),
      displayDate: new Intl.DateTimeFormat("en-GB", {
        dateStyle: "medium",
      }).format(new Date(blog.frontmatter.date)),
    }),
  );
}
