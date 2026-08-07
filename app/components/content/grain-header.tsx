import React from "react";
import { cn } from "~/lib/utils";
import { Grain, TGrainShape } from "./grain";

export type TGrainHeaderProps = React.PropsWithChildren<{
  /** Gives each page a visually distinct header. */
  shape?: TGrainShape;
  className?: string;
}>;

/**
 * The header of a content page: its title block sitting on an animated grain
 * gradient. Shared by blog posts and project write-ups.
 */
export function GrainHeader(props: TGrainHeaderProps) {
  const { shape, children, className } = props;

  return (
    <div
      className={cn(
        "bg-layer-0 relative w-full overflow-hidden rounded-xl",
        className,
      )}
    >
      <Grain shape={shape} className="absolute inset-0" />

      <div className="relative z-10 px-5 py-10 md:px-10 md:py-14">
        {children}
      </div>
    </div>
  );
}
