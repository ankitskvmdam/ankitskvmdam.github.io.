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
    <div className={cn("pb-12", className)} {...rest}>
      {pageHeading && (
        <Slash
          component="heading"
          className={cn("mt-2 md:mt-6 lg:mt-12", pageHeadingClassNames)}
        >
          {pageHeading}
        </Slash>
      )}

      <div className="mt-6 gap-12 flex flex-col md:mt-12">
        <div className="flex flex-col gap-4">
          {pageTitleSlash && (
            <Slash component="inline" className={cn(pageTitleSlashClassNames)}>
              {pageTitleSlash}
            </Slash>
          )}
          {pageTitle && (
            <span
              className={cn(
                "font-monospace font-bold leading-none max-w-5xl text-5xl md:text-7xl",
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
