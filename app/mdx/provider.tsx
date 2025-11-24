"use client";
import React from "react";
import { MDXContext } from "./context";
import { TFrontmatter } from "./types";

export type MDXContextProviderProps = React.PropsWithChildren<{
  frontmatter: TFrontmatter;
}>;

export function MDXContextProvider(props: MDXContextProviderProps) {
  const { frontmatter, children } = props;

  return (
    <MDXContext.Provider value={{ frontmatter }}>
      {children}
    </MDXContext.Provider>
  );
}
