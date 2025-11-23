import React from "react";
import { cn } from "~/lib/utils";

export type TSlashProps = React.HTMLProps<HTMLDivElement> & {
  /**
   * @default 'block'
   */
  component?: "heading" | "inline" | "block";
};

export function Slash(props: TSlashProps) {
  const { children, className, component = "block", ...rest } = props;

  const RenderedComponent = React.useMemo(() => {
    switch (component) {
      case "heading":
        return "h1";
      case "inline":
        return "span";
      default:
        return "div";
    }
  }, [component]);

  return (
    <RenderedComponent
      className={cn(
        "font-monospace font-normal ",
        component === "heading" &&
          "text-4xl leading-relaxed md:text-5xl lg:text-6xl",
        component === "inline" && "text-xs",
        className,
      )}
      {...rest}
    >
      {children}
    </RenderedComponent>
  );
}
