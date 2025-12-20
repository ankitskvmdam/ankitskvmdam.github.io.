"use client";
import { cn } from "~/lib/utils";
import { CopyButton } from "../copy-button";
import React, { PropsWithChildren } from "react";

export type TCodeRendererToolbar = PropsWithChildren<{
  title: React.ReactNode;
  className?: string;
  showCopyButton?: boolean;
  code?: string;
}>;

export function CodeRendererToolbar(props: TCodeRendererToolbar) {
  const {
    title,
    className,
    code = "",
    showCopyButton = true,
    children,
  } = props;

  return (
    <div
      className={cn(
        "flex items-center justify-between pb-1 label-header h-10",
        className,
      )}
    >
      <div className="ml-4 text-sm font-monospace truncate label-filename">
        <span className="truncate">{title}</span>
      </div>
      <div className="shrink-0">
        {showCopyButton && <CopyButton content={code} />}
        {children}
      </div>
    </div>
  );
}
