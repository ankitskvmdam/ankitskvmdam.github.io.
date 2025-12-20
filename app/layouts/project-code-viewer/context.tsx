import React from "react";
import {
  createFileTreeFromFilePaths,
  getFileExtension,
  TFileTree,
} from "./utils";

export type TCode = {
  isLoading: boolean;
  content: string | null;
  language: string;
  error?: unknown;
};

export type TCodeRecord = Record<string, TCode>;

export type TProjectCodeViewerContext = {
  tree: TFileTree;
  activeFile: string;
  baseURL: string;
  baseRawURL: string;
  isLoading: boolean;
  code: TCodeRecord;
  setActiveFile: (file: string) => void;
};

export const ProjectCodeViewerContext =
  React.createContext<TProjectCodeViewerContext | null>(null);

export type TProjectCodeViewerProviderProps = {
  children: React.ReactNode;
  files: string[];
  baseURL: string;
  baseRawURL: string;
  defaultActiveFile: string;
};

export function ProjectCodeViewerProvider(
  props: TProjectCodeViewerProviderProps,
) {
  const { children, files, baseURL, baseRawURL, defaultActiveFile } = props;

  const [activeFile, setActiveFile] = React.useState(`/${defaultActiveFile}`);
  const [code, setCode] = React.useState<TCodeRecord>({
    [activeFile]: {
      isLoading: false,
      content: null,
      error: undefined,
      language: getFileExtension(activeFile),
    },
  });

  const tree = React.useMemo(() => {
    return createFileTreeFromFilePaths(files);
  }, [files]);

  const fetchFile = React.useCallback(
    async (file: string) => {
      setCode((code) => ({
        ...code,
        [file]: {
          isLoading: true,
          content: null,
          error: undefined,
          language: getFileExtension(file),
        },
      }));
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setCode((code) => ({
        ...code,
        [file]: {
          isLoading: false,
          content: `
          import { AppSidebar } from "@/components/app-sidebar"
          import {
            Breadcrumb,
            BreadcrumbItem,
            BreadcrumbLink,
            BreadcrumbList,
            BreadcrumbPage,
            BreadcrumbSeparator,
          } from "@/components/ui/breadcrumb"
          import { Separator } from "@/components/ui/separator"
          import {
            SidebarInset,
            SidebarProvider,
            SidebarTrigger,
          } from "@/components/ui/sidebar"

          export default function Page() {
            return (
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                  <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                      orientation="vertical"
                      className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href="#">
                            Building Your Application
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                  </header>
                  <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                      <div className="bg-muted/50 aspect-video rounded-xl" />
                      <div className="bg-muted/50 aspect-video rounded-xl" />
                      <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
                  </div>
                </SidebarInset>
              </SidebarProvider>
            )
          }

`,
          error: undefined,
          language: getFileExtension(activeFile),
        },
      }));
    },

    [baseURL],
  );

  React.useEffect(() => {
    if (!code[activeFile] || !code[activeFile].content) {
      fetchFile(activeFile);
    }
  }, [activeFile]);

  return (
    <ProjectCodeViewerContext.Provider
      value={{
        tree,
        activeFile,
        isLoading: false,
        code,
        baseURL,
        baseRawURL,
        setActiveFile,
      }}
    >
      {children}
    </ProjectCodeViewerContext.Provider>
  );
}

export function useProjectCodeViewer() {
  const context = React.useContext(ProjectCodeViewerContext);
  if (!context) {
    throw new Error(
      "useProjectCodeViewer must be used within a ProjectCodeViewerProvider",
    );
  }
  return context;
}
