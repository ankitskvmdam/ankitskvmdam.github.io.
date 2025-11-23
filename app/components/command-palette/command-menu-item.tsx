import React from "react";
import { useMutationObserver } from "~/hooks/use-mutation-observer";
import { CommandItem } from "../ui/command";
import { cn } from "~/lib/utils";
import { TCommandPalettelItem } from "./use-command-items";

export type TCommandMenuItemProps = React.ComponentProps<typeof CommandItem> & {
  item: TCommandPalettelItem;
  onHighlight?: () => void;
  "data-selected"?: string;
  "aria-selected"?: string;
};

export function CommandMenuItem(props: TCommandMenuItemProps) {
  const { onHighlight, children, className, item, ...rest } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  useMutationObserver(ref, (mutations) => {
    mutations.forEach((mutation) => {
      if (
        mutation.type === "attributes" &&
        mutation.attributeName === "aria-selected" &&
        ref.current?.getAttribute("aria-selected") === "true"
      ) {
        onHighlight?.();
      }
    });
  });

  return (
    <CommandItem
      ref={ref}
      className={cn(
        "data-[selected=true]:border-input data-[selected=true]:bg-input/50 h-9 rounded-md border border-transparent !px-3 font-medium",
        className,
      )}
      {...rest}
    >
      {item.icon && <item.icon />}
      <div className="flex flex-1 justify-between">
        <span>{item.title}</span>
        {item.description && (
          <span className="text-muted-foreground hidden md:inline-block">
            {item.description}
          </span>
        )}
      </div>
    </CommandItem>
  );
}
