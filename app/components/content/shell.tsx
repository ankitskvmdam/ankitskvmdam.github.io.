import React from "react";
import { mdxParse } from "safe-mdx/parse";
import { TFrontmatter } from "~/mdx/types";
import { MDXContextProvider } from "~/mdx/provider";
import { ShareMenu } from "~/components/share-menu";
import { ContentBody } from "./body";
import { ContentToc } from "./toc";
import { GrainHeader, TGrainHeaderShape } from "./grain-header";
import { getHeadings } from "./headings";

export type TContentShellProps = {
  frontmatter: TFrontmatter;
  content: string;
  /** Title block, drawn on the grain header. */
  hero: React.ReactNode;
  headerShape?: TGrainHeaderShape;
};

/**
 * Page chrome shared by blog posts and project write-ups: an animated header
 * with the title block on it, a prose column, a sticky table of contents and a
 * share footer.
 *
 * The markdown is parsed once here, because the body renders it and the table
 * of contents reads its headings.
 */
export function ContentShell(props: TContentShellProps) {
  const { frontmatter, content, hero, headerShape } = props;

  const ast = React.useMemo(() => mdxParse(content), [content]);
  const headings = React.useMemo(() => getHeadings(ast), [ast]);

  return (
    <MDXContextProvider frontmatter={frontmatter}>
      <GrainHeader shape={headerShape} className="mt-4 md:mt-8">
        {hero}
      </GrainHeader>

      {/*
        The table of contents is a fixed rail; the rest of the row is one
        flexible column. The prose keeps a readable measure and sits centred in
        whatever space is left, rather than hugging the rail.
      */}
      <div className="lg:grid lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <aside className="hidden pt-14 lg:block">
          <ContentToc headings={headings} />
        </aside>

        <article className="mx-auto w-full min-w-0 max-w-3xl pt-10 md:pt-14">
          <ContentBody content={content} ast={ast} />

          <div className="border-t-muted mt-16 flex justify-end border-t pt-6">
            <ShareMenu />
          </div>
        </article>
      </div>
    </MDXContextProvider>
  );
}
