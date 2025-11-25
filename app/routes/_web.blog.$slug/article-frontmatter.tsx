import { TFrontmatter } from "~/mdx/types";

export type TArticleFrontmatterProps = {
  frontmatter: TFrontmatter;
};

export function ArticleFrontmatter(props: TArticleFrontmatterProps) {
  const { frontmatter } = props;
  return (
    <div className="pb-5 md:pb-10">
      <h1 className="text-3xl leading-tight font-bold mb-5 md:mb-10 md:text-5xl">
        {frontmatter.title}
      </h1>
      <p className="">{frontmatter.summary}</p>
    </div>
  );
}
