import { SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";
import "./style.css";
import { TFrontmatter } from "~/mdx/types";
import { MDXContextProvider } from "~/mdx/provider";
import { MDXComponents } from "~/mdx/_components/mdx-components";
import { CodeRenderer } from "./code-renderer";

export type TArticleProps = {
  frontmatter: TFrontmatter;
  content: string;
};

export function Article(props: TArticleProps) {
  const { frontmatter, content } = props;
  const ast = mdxParse(content);

  return (
    <MDXContextProvider frontmatter={frontmatter}>
      <article className="blog-article">
        <h1>{frontmatter.title}</h1>
        <SafeMdxRenderer
          markdown={content}
          mdast={ast}
          components={MDXComponents}
          renderNode={(node) => {
            if (node.type === "code") {
              return (
                <CodeRenderer language={node.lang || "python"} meta={node.meta}>
                  {node.value}
                </CodeRenderer>
              );
            }
          }}
        />
      </article>
    </MDXContextProvider>
  );
}
