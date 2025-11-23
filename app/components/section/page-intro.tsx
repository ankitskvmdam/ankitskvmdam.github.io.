import React from "react";
import { Slash } from "./slash";
import { cn } from "~/lib/utils";

export type TSectionPageIntroProps = React.HTMLProps<HTMLDivElement> & {
  pageHeading?: React.ReactNode;
  pageHeadingClassNames?: string;

  pageTitleSlash?: React.ReactNode;
  pageTitleSlashClassNames?: string;
  pageTitle?: React.ReactNode;
  pageTitleClassNames?: string;

  pageDescriptionSlash?: React.ReactNode;
  pageDescriptionSlashClassNames?: string;
  pageDescription?: React.ReactNode;
  pageDescriptionClassNames?: string;
};

export function SectionPageIntro(props: TSectionPageIntroProps) {
  const {
    pageHeading,
    pageHeadingClassNames,
    // Title
    pageTitleSlashClassNames,
    pageTitleSlash,
    pageTitle,
    pageTitleClassNames,
    // Description
    pageDescriptionSlash,
    pageDescriptionSlashClassNames,
    pageDescription,
    pageDescriptionClassNames,

    // Container
    className,
    ...rest
  } = props;
  return (
    <div className={cn(className)} {...rest}>
      {pageHeading && (
        <Slash
          component="heading"
          className={cn("mt-6 md:mt-12 lg:mt-24", pageHeadingClassNames)}
        >
          {pageHeading}
        </Slash>
      )}

      <div className="mt-12 gap-12 flex flex-col">
        <div className="flex flex-col gap-4">
          {pageTitleSlash && (
            <Slash
              component="inline"
              className={cn("text-xs", pageTitleSlashClassNames)}
            >
              {pageTitleSlash}
            </Slash>
          )}
          {pageTitle && (
            <span
              className={cn(
                "font-monospace font-bold leading-none text-5xl md:text-7xl",
                pageTitleClassNames,
              )}
            >
              {pageTitle}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 max-w-xl">
          {pageDescriptionSlash && (
            <Slash
              component="inline"
              className={cn("text-xs", pageDescriptionSlashClassNames)}
            >
              {pageDescriptionSlash}
            </Slash>
          )}
          {pageDescription && (
            <p
              className={cn("text-muted-foreground", pageDescriptionClassNames)}
            >
              {pageDescription}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
