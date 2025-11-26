import { RenderNode, SafeMdxRenderer } from "safe-mdx";
import { mdxParse } from "safe-mdx/parse";
// import "./style.css";
import { TFrontmatter } from "~/mdx/types";
import { MDXContextProvider } from "~/mdx/provider";
import { MDXComponents } from "~/mdx/_components/mdx-components";
import { CodeRenderer } from "./code-renderer";
import { ArticleInfo } from "./article-info";
import { ArticleFrontmatter } from "./article-frontmatter";
import { ArticleRoot } from "./article-root"

export type TArticleProps = {
  frontmatter: TFrontmatter;
  content: string;
};

const codeRenderer: RenderNode = (node) => {
  if (node.type === "code") {
    return (
      <CodeRenderer language={node.lang || "python"} meta={node.meta}>
        {node.value}
      </CodeRenderer>
    );
  }
};

export function Article(props: TArticleProps) {
  const { frontmatter, content } = props;
  const ast = mdxParse(content);

  return (
    <MDXContextProvider frontmatter={frontmatter}>
      <ArticleRoot>
        <ArticleInfo frontmatter={frontmatter} content={content} />
        <ArticleFrontmatter frontmatter={frontmatter} />
        <div className="space-y-5 md:space-y-10">
          <SafeMdxRenderer
            markdown={content}
            mdast={ast}
            components={MDXComponents}
            renderNode={codeRenderer}
          />
        </div>
      </ArticleRoot>
    </MDXContextProvider>
  );
}
