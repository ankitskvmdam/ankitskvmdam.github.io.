import { isValidFrontMatter, isValidProjectFrontMatter } from "./is";
import { TFrontmatter, TProjectFrontmatter } from "./types";
import matter from "gray-matter";
import { getDisplayDate, getMinReadTime } from "./utils";

export type TPost = TFrontmatter & {
  slug: string;
  displayDate: string;
  minRead: number;
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
        const { data: frontMatter, content } = matter(rawBlog);

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
          minRead: getMinReadTime(content),
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

export type TProjectPostData = ReturnType<typeof matter> & {
  data: TProjectFrontmatter;
};

/**
 * Project write-ups live in their own collection so that adding one does not
 * put it on the blog listing.
 */
export async function getProjectPostBySlug(
  slug: string,
): Promise<TProjectPostData> {
  const rawFileContent = (await import(`./projects/${slug}.mdx?raw`)).default;
  const parsed = matter(rawFileContent);

  isValidProjectFrontMatter(parsed.data);

  return parsed as TProjectPostData;
}
