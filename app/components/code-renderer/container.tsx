"use client";
import { cn } from "~/lib/utils";
import React from "react";

export type TCodeRendererContainer = React.PropsWithChildren<{
  className?: string;
}>;

export function CodeRendererContainer(props: TCodeRendererContainer) {
  const { children, className } = props;

  return (
    <div
      className={cn(
        "bg-layer-0 rounded-md p-1 relative font-monospace flex flex-col flex-1 h-full w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}
