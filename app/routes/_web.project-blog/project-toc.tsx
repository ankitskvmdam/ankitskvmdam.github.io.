import React from "react";
import { cn } from "~/lib/utils";
import { TProjectHeading } from "./headings";

export type TProjectTocProps = {
  headings: TProjectHeading[];
};

/**
 * Highlights whichever section is currently nearest the top of the viewport.
 */
function useActiveHeading(headings: TProjectHeading[]) {
  const [activeId, setActiveId] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      () => {
        // Rather than trusting whichever entry fired, look at every heading and
        // take the last one that has already scrolled past the top. That keeps
        // the highlight stable when several headings are on screen at once.
        const scrolled = elements.filter(
          (element) => element.getBoundingClientRect().top <= 120,
        );

        setActiveId((scrolled.at(-1) ?? elements[0]).id);
      },
      { rootMargin: "-120px 0px 0px 0px", threshold: [0, 1] },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [headings]);

  return activeId;
}

export function ProjectToc(props: TProjectTocProps) {
  const { headings } = props;
  const activeId = useActiveHeading(headings);

  if (headings.length === 0) return null;

  return (
    <nav aria-label="On this page" className="sticky top-24">
      <p className="font-monospace text-muted-foreground mb-3 text-xs tracking-wide uppercase">
        On this page
      </p>
      <ul className="border-l-muted space-y-1 border-l">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={cn(
                "hover:border-l-foreground hover:text-foreground -ml-px block border-l py-1 pl-4 text-sm transition-colors",
                heading.id === activeId
                  ? "border-l-foreground text-foreground font-medium"
                  : "border-l-transparent text-muted-foreground",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
