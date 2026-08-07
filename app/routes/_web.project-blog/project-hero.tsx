import { Dot } from "lucide-react";
import { TProjectFrontmatter } from "~/mdx/types";
import { getDisplayDate } from "~/mdx/utils";
import { Slash } from "~/components/section/slash";
import { PROJECT_BLOG_ROUTE } from "~/constants/routes";

export type TProjectHeroProps = {
  frontmatter: TProjectFrontmatter;
  slug: string;
};

/**
 * Default hero for a write-up. A project that wants its own can pass one to
 * `ProjectBlogShell` instead.
 */
export function ProjectHero(props: TProjectHeroProps) {
  const { frontmatter, slug } = props;
  const { title, tagline, summary, role, tags, date } = frontmatter;

  return (
    // Padding and edges belong to the panel this sits inside.
    <header>
      <Slash component="inline">
        {PROJECT_BLOG_ROUTE}/{slug}
      </Slash>

      <h1 className="font-monospace mt-2 text-3xl leading-tight font-bold md:text-5xl">
        {title}
      </h1>

      {/*
        Full-strength foreground throughout, not `muted-foreground`. This text
        sits on the grain gradient rather than on a flat page background, and
        muted grey on mid grey does not clear AA.
      */}
      <p className="text-foreground mt-4 text-lg md:text-xl">{tagline}</p>

      <p className="text-foreground mt-6 max-w-3xl leading-relaxed">
        {summary}
      </p>

      <div className="text-foreground font-monospace mt-8 flex flex-wrap items-center gap-y-2 text-sm">
        <span className="uppercase">{getDisplayDate(date)}</span>
        <Dot />
        <span>{role}</span>
      </div>

      {tags.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="bg-layer-1 text-foreground rounded-full px-3 py-1 text-xs"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
