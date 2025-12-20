"use client";
import React from "react";
import { CodeRendererContainer } from "./container";
import { CodeRendererToolbar } from "./toolbar";
import { CodeRendererBody } from "./body";

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

  const {
    words = [],
    lines = [],
    showLineNumbers = false,
    filename,
  } = React.useMemo(() => {
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

  return (
    <CodeRendererContainer>
      <CodeRendererToolbar
        title={filename || language}
        code={children}
        showCopyButton
      />
      <CodeRendererBody
        code={children}
        language={language}
        lines={lines}
        words={words}
        showLineNumbers={showLineNumbers}
      />
    </CodeRendererContainer>
  );
}
