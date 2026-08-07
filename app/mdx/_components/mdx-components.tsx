import { MDXComponents as TMDXComponents } from "mdx/types";
import React from "react";
import { cn } from "~/lib/utils";
import { LinkIcon } from "lucide-react";
import { Link, TLinkProps } from "~/components/link";
import * as routes from "~/constants/routes";
import { toHeadingId } from "../utils";

export const MDXComponents: TMDXComponents = {
  img: ({ className, alt, ...rest }: React.HTMLProps<HTMLImageElement>) => (
    <span className="flex flex-col gap-2 justify-center items-center my-4">
      <img
        {...rest}
        alt={alt}
        className={cn(
          "object-contain w-max-content object-center max-h-[70vh] rounded-md",
          className,
        )}
      />
      <span className="text-xs">{alt}</span>
    </span>
  ),
  h2: ({ children, ...rest }: React.HTMLProps<HTMLHeadingElement>) => {
    const id = typeof children === "string" ? toHeadingId(children) : "";
    return (
      <h2 id={id} {...rest}>
        <a
          className="relative group [&&]:text-current [&&]:no-underline"
          href={`#${id}`}
        >
          <LinkIcon className="absolute left-0 top-2 -translate-x-6 opacity-0 group-hover:opacity-100 size-4" />
          {children}
        </a>
      </h2>
    );
  },
  Link: ({ to, ...rest }: TLinkProps) => {
    if (typeof to !== "string") {
      console.error("[Link]: to should be a valid string");
      return;
    }

    if (!(to in routes)) {
      console.error(
        `[Link]: to should be one of ${Object.keys(routes).join(", ")}`,
      );
      return null;
    }

    return <Link to={(routes as Record<string, string>)[to]} {...rest} />;
  },
};
