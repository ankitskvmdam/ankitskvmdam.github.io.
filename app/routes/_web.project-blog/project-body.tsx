import React from "react";
import { MDXComponents as TMDXComponents } from "mdx/types";
import { RenderNode, SafeMdxRenderer } from "safe-mdx";
import type { mdxParse } from "safe-mdx/parse";
import { Prose } from "~/components/prose";
import { CodeRenderer } from "~/components/code-renderer";
import { MDXComponents } from "~/mdx/_components/mdx-components";
import { cn } from "~/lib/utils";

const codeRenderer: RenderNode = (node) => {
  if (node.type === "code") {
    return (
      <CodeRenderer language={node.lang || "bash"} meta={node.meta}>
        {node.value}
      </CodeRenderer>
    );
  }
};

const projectMDXComponents: TMDXComponents = {
  ...MDXComponents,
  // Figures break out past the prose column, the way they do on the Stripe
  // engineering posts this layout is modelled on.
  img: ({ className, alt, ...rest }: React.HTMLProps<HTMLImageElement>) => (
    <span className="my-8 flex flex-col items-center justify-center gap-2 lg:-mx-12 xl:-mx-20">
      <img
        {...rest}
        alt={alt}
        className={cn(
          "max-h-[70vh] w-full rounded-lg object-contain object-center",
          className,
        )}
      />
      <span className="text-muted-foreground text-xs">{alt}</span>
    </span>
  ),
};

/** The parsed markdown, shared by the body and the table of contents. */
export type TProjectMdast = ReturnType<typeof mdxParse>;

export type TProjectBodyProps = {
  content: string;
  ast: TProjectMdast;
};

export function ProjectBody(props: TProjectBodyProps) {
  const { content, ast } = props;

  return (
    <Prose className="space-y-5 md:space-y-8">
      <SafeMdxRenderer
        markdown={content}
        mdast={ast}
        components={projectMDXComponents}
        renderNode={codeRenderer}
      />
    </Prose>
  );
}
