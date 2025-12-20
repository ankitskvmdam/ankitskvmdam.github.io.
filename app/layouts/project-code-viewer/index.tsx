import React from "react";
import { createFilterTreeFromFilePaths } from "./utils";
import { ProjectCodeViewerSidebar } from "./sidebar";
import { CodeRenderer } from "~/components/code-renderer";
import { ProjectCodeViewerMobileSidebar } from "./mobile-sidebar";

export type TProjectCodeViewerProps = {
  baseURL: string;
  files: string[];
};

export function ProjectCodeViewer(props: TProjectCodeViewerProps) {
  const { baseURL, files } = props;
  const tree = React.useMemo(() => {
    return createFilterTreeFromFilePaths(files);
  }, []);

  return (
    <div className="h-full max-h-[800px] min-h-[500px] flex min-w-0 relative">
      <div className="h-full relative hidden md:block">
        <ProjectCodeViewerSidebar tree={tree} />
      </div>
      <div className="h-full relative block md:hidden">
        <ProjectCodeViewerMobileSidebar tree={tree} />
      </div>
      <div className="flex-1 flex w-0 bg-sidebar rounded-tr-lg rounded-br-lg">
        <CodeRenderer
          children={`Loading...`}
          language="tsx"
          filename="index.tsx"
          showLineNumbers
          className="[&_.label-filename]:text-base [&_.label-filename]:ml-0 bg-sidebar"
        />
      </div>
    </div>
  );
}
