import { SidebarMenuButton } from "~/components/ui/sidebar";
import { ChevronRight, File, Folder } from "lucide-react";
import { cn } from "~/lib/utils";
import { getIconForLanguageExtension } from "~/components/icons";
import { getFileExtension } from "./utils";

export type TProjectCodeViewerSidebarTreeItemProps = {
  index: number;
  name: string;
  type: "file" | "folder";
  isActive?: boolean;
  onClick?: () => void;
};

export function ProjectCodeViewerSidebarTreeItem(
  props: TProjectCodeViewerSidebarTreeItemProps,
) {
  const { index, name, type, isActive, onClick } = props;
  return (
    <SidebarMenuButton
      isActive={isActive}
      onClick={onClick}
      className="focus:bg-muted-foreground/15 focus-visible:bg-muted-foreground/15 active:bg-muted-foreground/15 data-[active=true]:bg-muted-foreground/15 rounded-none pl-(--index) pr-4 whitespace-nowrap"
      data-index={index}
      style={
        {
          "--index":
            type === "file"
              ? `${index * (index === 2 ? 1.2 : 1.3)}rem`
              : `${index * (index === 1 ? 1 : 1.2)}rem`,
        } as React.CSSProperties
      }
    >
      <ChevronRight
        className={cn(
          type === "file" && "invisible",
          type === "folder" && "transition-transform",
        )}
      />
      {type === "folder" ? (
        <Folder className="size-4" />
      ) : (
        <div className="flex [&>svg]:size-4">
          {getIconForLanguageExtension(getFileExtension(name))}
        </div>
      )}
      <span className="truncate">{name}</span>
    </SidebarMenuButton>
  );
}
