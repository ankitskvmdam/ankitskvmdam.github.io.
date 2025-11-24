import { THighlightProject } from "./use-get-highlight-projects";
import { GithubIcon, NPMIcon, WebsiteIcon } from "~/components/icons";
import { NotebookIcon } from "lucide-react";
import { Link } from "react-router";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";

export type THightlightProjectLinksProps = {
  links: THighlightProject["links"];
  readMore: THighlightProject["readMore"];
  className?: string;
};

export function HighlightProjectLinks(props: THightlightProjectLinksProps) {
  const { links, readMore, className } = props;

  return (
    <div className={cn("flex-1 flex items-end pt-10", className)}>
      <div className="flex flex-1 items-center">
        <div className="flex flex-1 gap-2">
          {links.map(({ href, type, id }) => (
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
          {readMore && (
            <Link
              to={readMore}
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              Read more
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
