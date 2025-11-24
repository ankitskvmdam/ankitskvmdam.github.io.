import { Slash } from "~/components/section/slash";
import { THighlightProject } from "./use-get-highlight-projects";
import { GithubIcon, NPMIcon, WebsiteIcon } from "~/components/icons";
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { Trans, useTranslation } from "react-i18next";

export type THightlightProjectProps = {
  item: THighlightProject;
};

export function HighlightProject(props: THightlightProjectProps) {
  const { item } = props;

  const { t } = useTranslation("projects");

  return (
    <div className="flex relative z-10 flex-col lg:flex-row">
      <div className="p-4 md:max-w-lg relative flex-1 flex flex-col">
        <div className="font-extrabold font-monospace text-9xl text-layer-0 absolute z-1 top-0">
          {item.number}
        </div>
        <div className="relative flex flex-1 flex-col z-10 pl-20">
          <Slash component="inline">/projects/highlight/{item.id}</Slash>
          <div className="font-monospace font-bold text-2xl md:text-4xl">
            {item.title}
          </div>
          <div className="text-muted-foreground mt-4 lg:border-t-2 lg:border-muted lg:pt-8">
            <Trans
              t={t}
              i18nKey={item.descriptionKey}
              components={[<br key="break" />, <code key="code" />]}
            />
          </div>
          <div className="flex-1 flex items-end pt-10">
            <div className="flex flex-1 items-center">
              <div className="flex flex-1 gap-2">
                {item.links.map(({ href, type, id }) => (
                  <a
                    href={href}
                    key={id}
                    target="_blank"
                    className="[&>svg]:size-6 [&>svg]:fill-current"
                  >
                    {type === "npm" && <NPMIcon className="hover:fill-npm" />}
                    {type === "github" && (
                      <GithubIcon className="hover:fill-github" />
                    )}
                    {type === "website" && (
                      <WebsiteIcon className="hover:fill-website" />
                    )}
                    {type === "notebook" && (
                      <NotebookIcon className="hover:fill-notebook" />
                    )}
                  </a>
                ))}
              </div>
              <div>
                {item.readMore && (
                  <Link
                    to={item.readMore}
                    className={cn(buttonVariants({ variant: "ghost" }))}
                  >
                    Read more
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 min-h-96 px-4">
        <div className="flex h-full justify-end">
          <img
            src={item.thumbnail}
            className="h-full object-cover rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
