import React from "react";
import { ProjectCodeViewerSidebar } from "./sidebar";
import { CodeRenderer } from "~/components/code-renderer";
import { ProjectCodeViewerMobileSidebar } from "./mobile-sidebar";
import { ProjectCodeViewerProvider } from "./context";
import { ProjectCodeViewerCode } from "./code";

export type TProjectCodeViewerProps = {
  // To fetch raw files from GitHub, make sure it doesn't end with slash
  baseRawURL: string;
  // Make sure baseURL doesn't end with slash
  baseURL: string;
  // Make sure file doesn't start with slash
  files: string[];
  defaultActiveFile: string;
};

export function ProjectCodeViewer(props: TProjectCodeViewerProps) {
  const { baseURL, baseRawURL, files, defaultActiveFile } = props;

  return (
    <ProjectCodeViewerProvider
      baseURL={baseURL}
      baseRawURL={baseRawURL}
      files={files}
      defaultActiveFile={defaultActiveFile}
    >
      <div className="h-full max-h-[800px] min-h-[500px] flex min-w-0 relative">
        <div className="h-full relative hidden md:block">
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
