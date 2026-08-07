import { useTranslation } from "react-i18next";
import { TFrontmatter } from "~/mdx/types";
import { ContentShell } from "~/components/content/shell";
import { ContentHero } from "~/components/content/hero";
import { getDisplayDate, getMinReadTime } from "~/mdx/utils";
import { BLOG_ROUTE } from "~/constants/routes";

export type TArticleProps = {
  frontmatter: TFrontmatter;
  content: string;
  slug: string;
};

/**
 * Maps a blog post onto the shared content layout.
 *
 * Only the field wiring lives here; everything visual is the same layout the
 * project write-ups use. Blog frontmatter carries no tagline or tags, so the
 * hero simply renders fewer parts.
 */
export function Article(props: TArticleProps) {
  const { frontmatter, content, slug } = props;
  const { t } = useTranslation("blogs");

  return (
    <ContentShell
      frontmatter={frontmatter}
      content={content}
      hero={
        <ContentHero
          slash={`${BLOG_ROUTE}/${slug}`}
          title={frontmatter.title}
          summary={frontmatter.summary}
          meta={[
            getDisplayDate(frontmatter.date),
            t("minRead", { minRead: getMinReadTime(content) }),
          ]}
        />
      }
    />
  );
}
