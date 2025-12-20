"use client";
import { CodeBlock } from "react-code-block";
import { cn } from "~/lib/utils";
import { lightTheme, darkTheme } from "./theme";
import { useAppStore } from "~/app-store";
import React from "react";

export type TCodeRendererBodyProps = {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  lines?: number[];
  words?: string[];
  className?: string;
};

export function CodeRendererBody(props: TCodeRendererBodyProps) {
  const { code, language, showLineNumbers, lines, words, className } = props;

  const appTheme = useAppStore((state) => state.theme);

  const codeblockTheme = React.useMemo(() => {
    return appTheme === "light" ? lightTheme : darkTheme;
  }, [appTheme]);

  return (
    <div
      className={cn(
        "flex-1 bg-layer-1 rounded-md pt-2 pb-4 px-4 overflow-auto no-scrollbar",
        showLineNumbers && "text-foreground px-0",
      )}
    >
      <CodeBlock
        data-has-linenumber
        code={code}
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
  );
}
