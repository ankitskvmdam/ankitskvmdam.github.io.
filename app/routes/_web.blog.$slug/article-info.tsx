import { TFrontmatter } from "~/mdx/types";
import { DirectoryArrowLine } from "~/components/icons";
import { getDisplayDate, getMinReadTime } from "~/mdx/utils";
import { useTranslation } from "react-i18next";
import { Dot } from "lucide-react";

export type TArticleInfoProps = {
  frontmatter: TFrontmatter;
  content: string;
};

export function ArticleInfo(props: TArticleInfoProps) {
  const { frontmatter, content } = props;
  const { t } = useTranslation("blogs");
  return (
    <div className="flex items-center text-sm gap-x-2 font-monospace">
      <div className="mb-0 flex items-center gap-2 pl-1">
        <DirectoryArrowLine className="-scale-y-100 mt-1 text-muted-foreground" />
        <span className="uppercase">{getDisplayDate(frontmatter.date)}</span>
      </div>
      <Dot className="text-muted-foreground" />
      <div className="text-sm">
        {t("minRead", { minRead: getMinReadTime(content) })}
      </div>
    </div>
  );
}
