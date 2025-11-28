import { MDXComponents as TMDXComponents } from "mdx/types";
import React from "react";
import { cn } from "~/lib/utils";

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
  h2: ({ children, ...rest }: React.HTMLProps<HTMLHeadingElement>) => (
    <h2
      id={
        typeof children === "string"
          ? children.toLowerCase().replace(/\s+/g, "-")
          : ""
      }
      {...rest}
    >
      {children}
    </h2>
  ),
};
