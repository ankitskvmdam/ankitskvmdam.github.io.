import React, { useContext } from "react";
import { TFrontmatter } from "./types";

export type TMDXContext = {
  frontmatter: TFrontmatter;
};

export const MDXContext = React.createContext({} as TMDXContext);

export function useMDXContext() {
  const context = useContext(MDXContext);

  if (!context) {
    throw new Error(
      "useMDXContext should be used inside <MDXContextProvider />",
    );
  }

  return context;
}
