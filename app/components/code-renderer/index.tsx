"use client";
import { CodeBlock } from "react-code-block";
import { cn } from "~/lib/utils";
import { CopyButton } from "../copy-button";
import { lightTheme, darkTheme } from "./theme";
import { useAppStore } from "~/app-store";
import React from "react";
import { getIconForLanguageExtension } from "../icons";

export type TCodeRendererProps = {
  children: string;
  language: string;
  meta?: string | null;
  filename?: string;
  showLineNumbers?: boolean;
  lines?: number[];
  words?: string[];
  className?: string;
};

function parseMeta(meta?: string | null) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props = {} as Record<string, any>;
  const regex = /(\w+)(?:=\{([^}]+)\})?/g;

  if (!meta) {
    return props;
  }

  let match;
  while ((match = regex.exec(meta)) !== null) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, key, value] = match;
    if (value !== undefined) {
      props[key] = JSON.parse(value);
    } else {
      props[key] = true;
    }
  }
  return props;
}

export function CodeRenderer(props: TCodeRendererProps) {
  const {
    children,
    language,
    meta,
    filename: _filename,
    showLineNumbers: _showLineNumbers,
    lines: _lines,
    words: _words,
    className,
  } = props;

  const appTheme = useAppStore((state) => state.theme);

  const metaOptions = React.useMemo(() => {
    const options = parseMeta(meta);

    const lines = options.lines?.flatMap((item: number | string) => {
      if (typeof item === "number") {
        return item;
      }

      if (typeof item === "string") {
        const [start, end] = item.split("-");
        const [s, e] = [+start, +end];
        return Array.from({ length: e - s + 1 }, (_, i) => s + i);
      }

      return [];
    });

    return { ...options, lines } as {
      words?: Array<string>;
      lines?: Array<number>;
      showLineNumbers?: boolean;
      filename?: string;
    };
  }, [meta]);

  const codeblockTheme = React.useMemo(() => {
    return appTheme === "light" ? lightTheme : darkTheme;
  }, [appTheme]);

  const filename = _filename ?? metaOptions.filename;
  const lines = _lines ?? metaOptions.lines ?? [];
  const words = _words ?? metaOptions.words ?? [];
  const showLineNumbers =
    _showLineNumbers ?? metaOptions.showLineNumbers ?? false;

  return (
    <div
      className={cn(
        "bg-layer-0 rounded-md p-1 relative font-monospace flex flex-col flex-1 h-full w-full",
        className,
      )}
    >
      <div className="flex items-center justify-between pb-1 label-header">
        <div className="ml-4 text-sm font-monospace label-filename flex [&>svg]:size-4">
          {filename ? <span>{filename}</span> : <span>{language}</span>}
        </div>
        <CopyButton content={children} />
      </div>
      <div
        className={cn(
          "flex-1 bg-layer-1 rounded-md pt-2 pb-4 px-4 overflow-auto no-scrollbar",
          showLineNumbers && "text-foreground px-0",
        )}
      >
        <CodeBlock
          data-has-linenumber
          code={children}
          language={language}
          lines={lines}
          words={words}
          theme={codeblockTheme}
        >
          <CodeBlock.Code
            className={cn("font-monospace relative", "label-codeblock-code")}
          >
            {({ isLineHighlighted }) => (
              <div className={cn("table-row", isLineHighlighted && "bg-muted")}>
                {showLineNumbers && (
                  <CodeBlock.LineNumber
                    className={
                      "table-cell pr-4 pl-6 text-sm text-right select-none linenumber"
                    }
                  />
                )}

                <CodeBlock.LineContent className="table-cell w-full pr-6">
                  <CodeBlock.Token>
                    {({ isTokenHighlighted, children }) => (
                      <span
                        className={cn(
                          isTokenHighlighted &&
                            "bg-selection text-selection-foreground rounded-md px-1 py-0.5",
                        )}
                      >
                        {children}
                      </span>
                    )}
                  </CodeBlock.Token>
                </CodeBlock.LineContent>
              </div>
            )}
          </CodeBlock.Code>
        </CodeBlock>
      </div>
    </div>
  );
}
