import React from "react";
import { Prose } from "~/components/prose";

export function ArticleRoot(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <article className="blog-article relative z-10 w-full max-w-3xl pt-10 md:pt-20 lg:text-xl">
      <Prose>{children}</Prose>
    </article>
  );
}
