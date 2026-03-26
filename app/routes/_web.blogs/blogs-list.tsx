import { DotIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { HalftoneDots } from "@paper-design/shaders-react";
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
              <div className="overflow-hidden rounded-xl flex transition-transform relative">
                <HalftoneDots
                  image={blog.thumbnail ?? "/assets/typewriter.png"}
                  height={208}
                  width="100%"
                  colorBack="#f2f1e8"
                  colorFront="#2b2b2b"
                  originalColors={false}
                  type="classic"
                  grid="hex"
                  inverted={false}
                  size={0.5}
                  radius={1.25}
                  contrast={0.4}
                  grainMixer={0.2}
                  grainOverlay={0.2}
                  grainSize={0.5}
                  fit="cover"
                />
              </div>
              <div className="py-2 flex flex-col space-y-2">
                <div className="mb-0 flex items-center gap-2 pl-1">
                  <DirectoryArrowLine className="-scale-y-100 mt-1 text-muted-foreground" />
                  <span className="font-monospace text-sm uppercase">
                    {blog.displayDate}
                  </span>
                  <DotIcon className="stroke-muted-foreground" />
                  <span className="text-xs">
                    {t("minRead", { minRead: blog.minRead })}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{blog.title}</h2>
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
