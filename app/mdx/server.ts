import { isValidFrontMatter } from "./is";
import { TFrontmatter } from "./types";
import matter from "gray-matter";

export type TPost = TFrontmatter & {
  slug: string;
  displayDate: string;
};

function getDisplayDate(date: string): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
  }).format(new Date(date));
}

export function getAllBlogPosts(): TPost[] {
  try {
    const blogsImports = import.meta.glob("./posts/*.mdx", {
      eager: true,
      query: "?raw",
      import: "default",
    });

    const blogEntries = Object.entries(blogsImports) as [string, string][];

    return blogEntries.map(([path, rawBlog]) => {
      const frontMatter = matter(rawBlog).data as TFrontmatter;
      isValidFrontMatter(frontMatter);
      return {
        ...frontMatter,
        slug: path.replace("./posts/", "").replace(/\.(mdx)$/, ""),
        displayDate: getDisplayDate(frontMatter.date),
      };
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch blog posts");
  }
}

export async function getBlogPostBySlug(slug: string) {
  const rawFileContent = (await import(`./posts/${slug}.mdx?raw`)).default;

  console.log(rawFileContent);
}
