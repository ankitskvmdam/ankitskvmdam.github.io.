import { ContentShell } from "~/components/content/shell";
import { ContentHero } from "~/components/content/hero";
import { getDisplayDate } from "~/mdx/utils";
import { PROJECT_BLOG_ROUTE } from "~/constants/routes";
import { TProjectPost } from "./project-post";

export type TProjectShellProps = {
  post: TProjectPost;
};

/**
 * Maps a project write-up onto the shared content layout.
 *
 * Only the field wiring lives here; everything visual is the same layout blog
 * posts use.
 */
export function ProjectShell(props: TProjectShellProps) {
  const { frontmatter, content, slug } = props.post;

  return (
    <ContentShell
      frontmatter={frontmatter}
      content={content}
      headerShape={frontmatter.headerShape}
      hero={
        <ContentHero
          slash={`${PROJECT_BLOG_ROUTE}/${slug}`}
          title={frontmatter.title}
          tagline={frontmatter.tagline}
          summary={frontmatter.summary}
          meta={[getDisplayDate(frontmatter.date), frontmatter.role]}
          tags={frontmatter.tags}
        />
      }
    />
  );
}
