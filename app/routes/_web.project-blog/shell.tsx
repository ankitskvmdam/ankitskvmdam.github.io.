import React from "react";
import { mdxParse } from "safe-mdx/parse";
import { TProjectFrontmatter } from "~/mdx/types";
import { MDXContextProvider } from "~/mdx/provider";
import { ShareMenu } from "~/components/share-menu";
import { ProjectBody } from "./project-body";
import { ProjectGrainHeader } from "./project-grain-header";
import { ProjectHero } from "./project-hero";
import { ProjectToc } from "./project-toc";
import { getHeadings } from "./headings";

export type TProjectBlogShellProps = {
  frontmatter: TProjectFrontmatter;
  content: string;
  slug: string;
  /** Replaces the default hero. Everything below it stays shared. */
  hero?: React.ReactNode;
};

/**
 * Page chrome shared by every project write-up: hero, prose column, sticky
 * table of contents and share footer.
 *
 * The markdown is parsed once here, because the body renders it and the table
 * of contents reads its headings.
 */
export function ProjectBlogShell(props: TProjectBlogShellProps) {
  const { frontmatter, content, slug, hero } = props;

  const ast = React.useMemo(() => mdxParse(content), [content]);
  const headings = React.useMemo(() => getHeadings(ast), [ast]);

  return (
    <MDXContextProvider frontmatter={frontmatter}>
      {/*
        The grain sits behind whichever hero is in use, so a write-up that
        brings its own still gets the animated backdrop.
      */}
      <ProjectGrainHeader
        shape={frontmatter.headerShape}
        className="mt-4 md:mt-8"
      >
        {hero ?? <ProjectHero frontmatter={frontmatter} slug={slug} />}
      </ProjectGrainHeader>

      {/*
        Sized in absolute terms rather than fractions, so the table of contents
        sits beside the prose instead of drifting to the far edge on a wide
        screen.
      */}
      <div className="lg:grid lg:grid-cols-[minmax(0,48rem)_minmax(0,14rem)] lg:gap-16">
        <article className="w-full min-w-0 max-w-3xl pt-10 md:pt-14">
          <ProjectBody content={content} ast={ast} />

          <div className="border-t-muted mt-16 flex justify-end border-t pt-6">
            <ShareMenu />
          </div>
        </article>

        <aside className="hidden pt-14 lg:block">
          <ProjectToc headings={headings} />
        </aside>
      </div>
    </MDXContextProvider>
  );
}
