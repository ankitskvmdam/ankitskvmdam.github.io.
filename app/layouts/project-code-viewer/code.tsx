import { useProjectCodeViewer } from "./context";
import { Loader2 } from "lucide-react";
import { CodeRendererContainer } from "~/components/code-renderer/container";
import { CodeRendererToolbar } from "~/components/code-renderer/toolbar";
import { CodeRendererBody } from "~/components/code-renderer/body";

export function ProjectCodeViewerCode() {
  const { activeFile, baseURL, code } = useProjectCodeViewer();

  if (!activeFile || !code[activeFile] || code[activeFile].isLoading) {
    return (
      <CodeRendererContainer className="bg-sidebar">
        <CodeRendererToolbar showCopyButton={false} title={activeFile} />
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="animate-spin" />
        </div>
      </CodeRendererContainer>
    );
  }

  if (
    !code[activeFile] ||
    code[activeFile].error ||
    !code[activeFile].content
  ) {
    return (
      <CodeRendererContainer className="bg-sidebar">
        <CodeRendererToolbar showCopyButton={false} title={activeFile} />
        <div className="flex flex-1 items-center justify-center">
          <div>
            <p className="text-center text-red-500 dark:text-red-400">
              Unable to fetch code.
            </p>
            To view the actual code visit
            <a
              target="_blank"
              href={`${baseURL}${activeFile}`}
              className="text-anchor"
            >
              {activeFile}
            </a>
            .
          </div>
        </div>
      </CodeRendererContainer>
    );
  }

  return (
    <CodeRendererContainer className="bg-sidebar">
      <CodeRendererToolbar showCopyButton title={activeFile} />
      <CodeRendererBody
        code={code[activeFile].content}
        language={code[activeFile].language}
        showLineNumbers
      />
    </CodeRendererContainer>
  );
}
