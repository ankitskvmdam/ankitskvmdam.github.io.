"use client";
import { CodeBlock } from "react-code-block";
import { cn } from "~/lib/utils";
import { CodeCopyButton } from "./code-copy-button";
import { lightTheme, darkTheme } from "./code-renderer-theme";
import { useAppStore } from "~/app-store";
import React from "react";

export type TCodeRendererProps = {
  children: string;
  language: string;
  meta?: string | null;
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
  const { children, language, meta } = props;
  const { lines = [], words = [], showLineNumbers = false } = parseMeta(meta);
  const appTheme = useAppStore((state) => state.theme)

  const codeblockTheme = React.useMemo(() => {
    return appTheme === 'light' ? lightTheme : darkTheme
  }, [appTheme])

  return (
    <div className="bg-layer-0 rounded-md p-1 relative">
      <div className="flex items-center justify-between pb-1">
        <div className="ml-4 text-xs font-monospace">
          {language}
        </div>
        <CodeCopyButton content={children} />
      </div>
      <CodeBlock
        data-has-linenumber
        code={children}
        language={language}
        lines={lines}
        words={words}
        theme={codeblockTheme}
      >
        <CodeBlock.Code className={cn(
          "bg-layer-1 text-sm rounded-md py-2 px-8 overflow-x-auto overflow-y-hidden whitespace-pre relative", 
          showLineNumbers && "text-foreground px-0",
          // "[&_.token.plain]:text-blue-500",
          )}>
          {({ isLineHighlighted }) => (
            <div
              className={cn("table-row", isLineHighlighted && "bg-muted")}
            >
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
  );
}
