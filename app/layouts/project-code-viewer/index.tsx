import React from "react";
import { ProjectCodeViewerSidebar } from "./sidebar";
import { CodeRenderer } from "~/components/code-renderer";
import { ProjectCodeViewerMobileSidebar } from "./mobile-sidebar";
import { ProjectCodeViewerProvider } from "./context";
import { ProjectCodeViewerCode } from "./code";
import { TProjectCodeViewerFilePath } from "./utils";

export type TProjectCodeViewerProps = {
  files: TProjectCodeViewerFilePath[];
  defaultActiveFilename?: TProjectCodeViewerFilePath;
};

export function ProjectCodeViewer(props: TProjectCodeViewerProps) {
  const { files, defaultActiveFilename } = props;

  return (
    <ProjectCodeViewerProvider
      files={files}
      defaultActiveFilename={defaultActiveFilename}
    >
      <div className="h-full max-h-[800px] min-h-[500px] flex min-w-0 relative">
        <div className="h-full w-sm relative hidden md:block">
          <ProjectCodeViewerSidebar />
        </div>
        <div className="h-full relative block md:hidden">
          <ProjectCodeViewerMobileSidebar />
        </div>
        <div className="flex-1 flex w-0 bg-sidebar rounded-tr-lg rounded-br-lg">
          <ProjectCodeViewerCode />
        </div>
      </div>
    </ProjectCodeViewerProvider>
  );
}
