"use client";
import { cn } from "~/lib/utils";
import { CopyButton } from "../copy-button";

export type TCodeRendererToolbar = {
  filename?: string;
  language: string;
  className?: string;
  showCopyButton?: boolean;
  code?: string;
};

export function CodeRendererToolbar(props: TCodeRendererToolbar) {
  const {
    language,
    filename,
    className,
    code = "",
    showCopyButton = true,
  } = props;

  return (
    <div
      className={cn(
        "flex items-center justify-between pb-1 label-header",
        className,
      )}
    >
      <div className="ml-4 text-sm font-monospace label-filename flex [&>svg]:size-4">
        {filename ? <span>{filename}</span> : <span>{language}</span>}
      </div>
      {showCopyButton && <CopyButton content={code} />}
    </div>
  );
}
