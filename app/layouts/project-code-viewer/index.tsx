import React from "react";
import { createFilterTreeFromFilePaths } from "./utils";
import { ProjectCodeViewerSidebar } from "./sidebar";
import { CodeRenderer } from "~/components/code-renderer";

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
    <div className="h-full max-h-[800px] min-h-[500px] flex min-w-0">
      <div className="w-sm h-full">
        <ProjectCodeViewerSidebar tree={tree} />
      </div>
      <div className="flex-1 flex w-0 bg-layer-0 rounded-tr-lg rounded-br-lg">
        <CodeRenderer
          children={`Loading...`}
          language="tsx"
          filename="index.tsx"
          showLineNumbers
          className="[&_.label-filename]:text-base [&_.label-filename]:ml-0"
        />
      </div>
    </div>
  );
}
