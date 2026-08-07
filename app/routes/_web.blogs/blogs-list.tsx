import { DotIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { Grain } from "~/components/content/grain";
import { DirectoryArrowLine } from "~/components/icons";
import { Slash } from "~/components/section/slash";
import { Button } from "~/components/ui/button";
import { BLOG_ROUTE } from "~/constants/routes";
import { TPost } from "~/mdx/server";

export type TBlogsList = {
  blogs: TPost[];
};

export function BlogsList(props: TBlogsList) {
  const { blogs } = props;
  const { t } = useTranslation("blogs");
  return (
    <div className="section w-full pt-5">
      <div className="section-wrapper section-padding">
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {blogs.map((blog) => (
            <Link
              to={`${BLOG_ROUTE}/${blog.slug}`}
              className="flex flex-col h-full group"
              key={blog.slug}
            >
              <div className="mb-2 flex items-center gap-2 pl-1">
                <DirectoryArrowLine className="-scale-y-100 mt-1 text-muted-foreground" />
                <span className="font-monospace text-sm uppercase">
                  {blog.displayDate}
                </span>
                <DotIcon className="stroke-muted-foreground" />
                <span className="text-xs">
                  {t("minRead", { minRead: blog.minRead })}
                </span>
              </div>

              {/* Same treatment as the post's own header: title on the grain. */}
              <div className="bg-layer-0 relative flex h-52 items-end overflow-hidden rounded-xl">
                <Grain
                  shape={blog.thumbnailShape}
                  className="absolute inset-0"
                />
                <h2 className="relative z-10 p-5 text-2xl font-bold">
                  {blog.title}
                </h2>
              </div>

              <div className="py-8">
                <p className="text-sm text-muted-foreground">{blog.summary}</p>
              </div>
              <div className="mt-auto h-30 border-b-2 border-b-muted flex flex-col justify-end items-end">
                <Slash component="inline">
                  {BLOG_ROUTE}/{blog.slug}
                </Slash>
                <Button
                  variant="ghost"
                  size="sm"
                  className="-mr-2 mb-2 mt-1 font-bold"
                >
                  {t("read")}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
