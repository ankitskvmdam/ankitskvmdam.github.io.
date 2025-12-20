"use client";
import { cn } from "~/lib/utils";
import { CopyButton } from "../copy-button";
import React from "react";

export type TCodeRendererToolbar = {
  title: React.ReactNode;
  className?: string;
  showCopyButton?: boolean;
  code?: string;
};

export function CodeRendererToolbar(props: TCodeRendererToolbar) {
  const { title, className, code = "", showCopyButton = true } = props;

  return (
    <div
      className={cn(
        "flex items-center justify-between pb-1 label-header h-10",
        className,
      )}
    >
      <div className="ml-4 text-sm font-monospace label-filename flex [&>svg]:size-4">
        <span>{title}</span>
      </div>
      {showCopyButton && <CopyButton content={code} />}
    </div>
  );
}
