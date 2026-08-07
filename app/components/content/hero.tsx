import React from "react";
import { Dot } from "lucide-react";
import { Slash } from "~/components/section/slash";

export type TContentHeroProps = {
  /** Breadcrumb line, e.g. `/blog/my-post`. */
  slash: string;
  title: string;
  /** One line under the title. Write-ups have one, blog posts do not. */
  tagline?: string;
  summary: string;
  /** Short facts shown dot-separated, e.g. a date and a reading time. */
  meta?: string[];
  tags?: string[];
};

/**
 * The title block shared by blog posts and project write-ups.
 *
 * Everything optional renders only when supplied, so the two content types can
 * carry different frontmatter without needing two heroes.
 *
 * Full-strength foreground throughout, not `muted-foreground`. This sits on the
 * grain gradient rather than a flat page background, and muted grey on mid grey
 * does not clear AA.
 */
export function ContentHero(props: TContentHeroProps) {
  const { slash, title, tagline, summary, meta = [], tags = [] } = props;

  return (
    // Padding and edges belong to the panel this sits inside.
    <header>
      <Slash component="inline">{slash}</Slash>

      {/* Capped so a long blog title wraps in line with the text under it. */}
      <h1 className="font-monospace mt-2 max-w-4xl text-3xl leading-tight font-bold md:text-5xl">
        {title}
      </h1>

      {tagline && (
        <p className="text-foreground mt-4 text-lg md:text-xl">{tagline}</p>
      )}

      <p className="text-foreground mt-6 max-w-3xl leading-relaxed">
        {summary}
      </p>

      {meta.length > 0 && (
        <div className="text-foreground font-monospace mt-8 flex flex-wrap items-center gap-y-2 text-sm">
          {meta.map((item, index) => (
            <React.Fragment key={item}>
              {index > 0 && <Dot />}
              <span>{item}</span>
            </React.Fragment>
          ))}
        </div>
      )}

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
