export type TToLinkProps = {
  children?: string[];
  className?: string;
};

export function ToLink(props: TToLinkProps) {
  const { children = [], className } = props;

  // We care about the zeroth index.
  // In translation file, for link we are following this structure
  // [text](link), similar to markdown.
  const child = children[0];

  if (typeof child !== "string") return "";

  const [_, text, link] = child.match(/\[([^\]]+)\]\(([^)]+)\)/) || [];

  if (typeof text !== "string" || typeof link !== "string") return "";

  return (
    <a className={className} href={link} target="_blank">
      {text}
    </a>
  );
}
