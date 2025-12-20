import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarProvider,
} from "~/components/ui/sidebar";
import { TFileTree } from "./utils";
import { ProjectCodeViewerSidebarTree } from "./sidebar-tree";

export type TProjectCodeViewerSidebarProps = {
  tree: TFileTree;
};

export function ProjectCodeViewerSidebar(
  props: TProjectCodeViewerSidebarProps,
) {
  const { tree } = props;

  return (
    <SidebarProvider className="flex min-h-full! flex-col">
      <Sidebar
        collapsible="none"
        className="w-full flex-1 rounded-tl-md rounded-bl-md"
      >
        <SidebarGroupLabel className="h-12 rounded-none px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="translate-x-0 gap-1.5">
              {tree.children?.map((file, index) => (
                <ProjectCodeViewerSidebarTree
                  key={index}
                  item={file}
                  index={1}
                />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </Sidebar>
    </SidebarProvider>
  );
}
