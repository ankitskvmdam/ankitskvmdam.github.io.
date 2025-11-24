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
          "object-contain w-full object-center max-h-[70vh] rounded-md",
          className,
        )}
      />
      <span className="text-xs">{alt}</span>
    </span>
  ),
};
