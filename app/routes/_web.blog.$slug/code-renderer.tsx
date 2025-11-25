"use client";
import { CodeBlock } from "react-code-block";
import { cn } from "~/lib/utils";

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

  return (
    <div className="relative">
      <CodeBlock
        data-has-linenumber
        code={children}
        language={language}
        lines={lines}
        words={words}
      >
        <CodeBlock.Code className={cn(showLineNumbers && "has-linenumber")}>
          {({ isLineHighlighted }) => (
            <div
              className={cn("table-row", isLineHighlighted && "highlighted")}
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
                          "bg-code-highlight text-code-highlight-foreground rounded-md px-1 py-0.5",
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
