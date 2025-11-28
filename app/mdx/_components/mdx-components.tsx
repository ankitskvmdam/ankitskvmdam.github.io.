import { MDXComponents as TMDXComponents } from "mdx/types";
import React from "react";
import { cn } from "~/lib/utils";
import { Link } from "lucide-react"

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
    const id = typeof children === "string" ? children.toLowerCase().replace(/\s+/g, "-") : ""
    return (
      <h2
        id={id}
        {...rest}
      >
        <a className="relative group [&&]:text-current [&&]:no-underline" href={`#${id}`}>
          <Link className="absolute left-0 top-2 -translate-x-6 opacity-0 group-hover:opacity-100 size-4" />
        {children}
        </a>
      </h2>
  )},
};
