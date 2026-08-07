import { TFrontmatter, TProjectFrontmatter } from "./types";

export function isValidFrontMatter(
  frontMatter: unknown,
): frontMatter is TFrontmatter {
  if (typeof frontMatter !== "object" || !frontMatter) {
    throw new Error("Frontmatter is not a valid object.");
  }

  if (!("title" in frontMatter) || typeof frontMatter.title !== "string") {
    throw new Error(
      `Frontmatter should have title, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2,
      )}`,
    );
  }

  if (!("summary" in frontMatter) || typeof frontMatter.summary !== "string") {
    throw new Error(
      `Frontmatter should have summary, but it is missing. Got: ${JSON.stringify(
        frontMatter,
        null,
        2,
      )}`,
    );
  }
  if (
    !("date" in frontMatter) ||
    typeof frontMatter.date !== "string" ||
    isNaN(new Date(frontMatter.date).getTime())
  ) {
    throw new Error(
      `Frontmatter should have a valid date string, Got: ${JSON.stringify(
        frontMatter,
        null,
        2,
      )}`,
    );
  }

  if (
    !("type" in frontMatter) ||
    typeof frontMatter.type !== "string" ||
    !["blog", "project"].includes(frontMatter.type)
  ) {
    throw new Error(
      `Frontmatter should have a valid type ['blog', 'project'], Got: ${JSON.stringify(
        frontMatter,
        null,
        2,
      )}`,
    );
  }

  return true;
}

const PROJECT_ONLY_STRING_FIELDS = ["tagline", "role"] as const;

export function isValidProjectFrontMatter(
  frontMatter: unknown,
): frontMatter is TProjectFrontmatter {
  isValidFrontMatter(frontMatter);

  const projectFrontMatter = frontMatter as TFrontmatter &
    Record<string, unknown>;

  if (projectFrontMatter.type !== "project") {
    throw new Error(
      `Project frontmatter should have type 'project', Got: ${projectFrontMatter.type}`,
    );
  }

  for (const field of PROJECT_ONLY_STRING_FIELDS) {
    if (typeof projectFrontMatter[field] !== "string") {
      throw new Error(
        `Project frontmatter should have ${field}, but it is missing. Got: ${JSON.stringify(
          frontMatter,
          null,
          2,
        )}`,
      );
    }
  }

  if (
    !Array.isArray(projectFrontMatter.tags) ||
    projectFrontMatter.tags.some((tag) => typeof tag !== "string")
  ) {
    throw new Error(
      `Project frontmatter should have tags as a list of strings. Got: ${JSON.stringify(
        frontMatter,
        null,
        2,
      )}`,
    );
  }

  return true;
}
