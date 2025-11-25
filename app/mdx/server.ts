import { isValidFrontMatter } from "./is";
import { TFrontmatter } from "./types";
import matter from "gray-matter";
import { getDisplayDate } from "./utils";

export type TPost = TFrontmatter & {
  slug: string;
  displayDate: string;
};

export function getAllBlogPosts(): TPost[] {
  try {
    const blogsImports = import.meta.glob("./posts/*.mdx", {
      eager: true,
      query: "?raw",
      import: "default",
    });

    const blogEntries = Object.entries(blogsImports) as [string, string][];

    return blogEntries
      .map(([path, rawBlog]) => {
        const frontMatter = matter(rawBlog).data as TFrontmatter;
        try {
          isValidFrontMatter(frontMatter);
        } catch (error) {
          console.error(`Invalid frontmatter in ${path}: ${error}`);
          return null;
        }
        return {
          ...frontMatter,
          slug: path.replace("./posts/", "").replace(/\.(mdx)$/, ""),
          displayDate: getDisplayDate(frontMatter.date),
        };
      })
      .filter(Boolean) as TPost[];
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch blog posts");
  }
}

export type TPostData = ReturnType<typeof matter> & {
  data: TFrontmatter;
};

export async function getBlogPostBySlug(slug: string): Promise<TPostData> {
  const rawFileContent = (await import(`./posts/${slug}.mdx?raw`)).default;
  return matter(rawFileContent) as TPostData;
}
