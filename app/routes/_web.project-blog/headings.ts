import { toHeadingId } from "~/mdx/utils";

export type TProjectHeading = {
  id: string;
  text: string;
};

type TMdastNode = {
  type: string;
  depth?: number;
  value?: string;
  children?: TMdastNode[];
};

function toText(node: TMdastNode): string {
  if (typeof node.value === "string") return node.value;
  return (node.children ?? []).map(toText).join("");
}

/**
 * Collects the `##` headings a write-up is built from, in document order.
 *
 * Reading these off the parsed markdown rather than the raw string keeps
 * `##` inside fenced code blocks out of the table of contents.
 */
export function getHeadings(ast: unknown): TProjectHeading[] {
  const root = ast as TMdastNode;

  return (root.children ?? [])
    .filter((node) => node.type === "heading" && node.depth === 2)
    .map((node) => {
      const text = toText(node);
      return { id: toHeadingId(text), text };
    })
    .filter((heading) => heading.text.length > 0);
}
