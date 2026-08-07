import React from "react";
import { cn } from "~/lib/utils";

export type TProseProps = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * Typography for rendered MDX.
 *
 * Blog posts and project write-ups share this so their body copy cannot drift
 * apart. Anything about how a page is laid out (width, spacing, background)
 * belongs to the caller, not here.
 */
export function Prose(props: TProseProps) {
  const { className, children } = props;

  return (
    <div
      className={cn(
        "leading-normal",
        "[&_h2]:leading-normal [&_h2]:font-bold [&_h2]:text-2xl",
        "[&_h3]:leading-normal [&_h3]:font-bold [&_h3]:text-xl",
        "[&_ol]:list-decimal [&_ol]:pl-8 md:[&_ol]:pl-10",
        "[&_li]:py-2",
        "[&_table]:w-full [&_table]:border-collapse [&_table]:my-13 [&_table]:text-sm",
        "[&_thead_td]:text-left [&_thead_td]:font-bold [&_thead_td]:px-4 [&_thead_td]:py-3 [&_thead_td]:border-b-0 [&_thead_td]:bg-muted/50",
        "[&_td]:px-4 [&_td]:py-3 [&_td]:border-b [&_td]:border-b-muted",
        "[&_tbody_tr:hover]:bg-muted/20 [&_tbody_tr:last-child_td]:border-b-0",
        "[&_blockquote]:py-2 [&_blockquote]:pl-4 [&_blockquote]:border-l-[0.25rem] [&_blockquote]:border-l-foreground [&_blockquote]:text-sm [&_blockquote]:bg-muted [&_blockquote]:leading-relaxed [&_blockquote]:rounded-md [&_blockquote]:italic [&_blockquote]:font-light",
        "[&_a]:text-anchor [&_a]:underline [&_a]:underline-offset-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
