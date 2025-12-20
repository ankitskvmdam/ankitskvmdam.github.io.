import { SidebarMenuItem, SidebarMenuSub } from "~/components/ui/sidebar";
import { TFileTree } from "./utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/collapsible";
import { ProjectCodeViewerSidebarTreeItem } from "./sidebar-tree-item";

export type TProjectCodeViewerSidebarTreeProps = {
  item: TFileTree;
  index: number;
};

export function ProjectCodeViewerSidebarTree(
  props: TProjectCodeViewerSidebarTreeProps,
) {
  const { item, index } = props;

  if (!item.children || item.children.length === 0) {
    return (
      <SidebarMenuItem>
        <ProjectCodeViewerSidebarTreeItem
          index={index}
          name={item.name}
          type="file"
          // isActive={item.path === activeFile}
          // onClick={() => item.path && setActiveFile(item.path)}
        />
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem>
      <Collapsible
        className="group/collapsible [&[data-state=open]>button>svg:first-child]:rotate-90"
        defaultOpen
      >
        <CollapsibleTrigger asChild>
          <ProjectCodeViewerSidebarTreeItem
            index={index}
            name={item.name}
            type="folder"
          />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub className="m-0 w-full translate-x-0 border-none p-0">
            {item.children.map((subItem, key) => (
              <ProjectCodeViewerSidebarTree
                key={key}
                item={subItem}
                index={index + 1}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    </SidebarMenuItem>
  );
}
