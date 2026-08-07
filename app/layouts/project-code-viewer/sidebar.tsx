import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarProvider,
} from "~/components/ui/sidebar";
import { ProjectCodeViewerSidebarTree } from "./sidebar-tree";
import { useProjectCodeViewer } from "./context";
import { TFileTree } from "./utils";

export type TProjectCodeViewerSidebarProps = {
  onMenuClick?: (item: TFileTree) => void;
};

export function ProjectCodeViewerSidebar(
  props: TProjectCodeViewerSidebarProps,
) {
  const { onMenuClick } = props;
  const { tree } = useProjectCodeViewer();

  // The height chain below is deliberate: `h-full` plus `min-h-0` at every
  // level lets `SidebarContent` scroll the file tree inside the panel. Without
  // it a long list stretches the sidebar past the code viewer and the footer.
  return (
    <SidebarProvider className="flex h-full min-h-0! flex-col">
      <Sidebar
        collapsible="none"
        className="w-full min-h-0 flex-1 rounded-tl-md rounded-bl-md"
      >
        <SidebarGroupLabel className="h-12 shrink-0 rounded-none px-4 text-sm">
          Files
        </SidebarGroupLabel>
        <SidebarContent>
          <SidebarGroup className="p-0">
            <SidebarGroupContent>
              <SidebarMenu className="translate-x-0 gap-1.5 truncate">
                {tree.children?.map((file, index) => (
                  <ProjectCodeViewerSidebarTree
                    key={index}
                    item={file}
                    index={1}
                    onMenuClick={onMenuClick}
                  />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  );
}
