import { useProjectCodeViewer } from "./context";
import { Loader2 } from "lucide-react";
import { CodeRendererContainer } from "~/components/code-renderer/container";
import { CodeRendererToolbar } from "~/components/code-renderer/toolbar";
import { CodeRendererBody } from "~/components/code-renderer/body";
import { Button, buttonVariants } from "~/components/ui/button";
import { GithubIcon } from "~/components/icons";

export function ProjectCodeViewerCode() {
  const { activeFile, code } = useProjectCodeViewer();

  const { displayURL, viewFileURL } = activeFile;

  if (!code[displayURL] || code[displayURL].isLoading) {
    return (
      <CodeRendererContainer className="bg-sidebar">
        <CodeRendererToolbar
          showCopyButton={false}
          title={activeFile.displayURL}
        />
        <div className="flex flex-1 items-center justify-center">
          <Loader2 className="animate-spin" />
        </div>
      </CodeRendererContainer>
    );
  }

  if (
    !code[displayURL] ||
    code[displayURL].error ||
    !code[displayURL].content
  ) {
    return (
      <CodeRendererContainer className="bg-sidebar">
        <CodeRendererToolbar showCopyButton={false} title={displayURL} />
        <div className="flex flex-1 items-center justify-center">
          <div>
            <p className="text-center text-red-500 dark:text-red-400">
              Unable to fetch code.
            </p>
            To view the actual code visit&nbsp;
            <a target="_blank" href={viewFileURL} className="text-anchor">
              here
            </a>
            .
          </div>
        </div>
      </CodeRendererContainer>
    );
  }

  return (
    <CodeRendererContainer className="bg-sidebar">
      <CodeRendererToolbar
        showCopyButton
        code={code[displayURL].content}
        title={displayURL}
      >
        <a
          target="_blank"
          href={viewFileURL}
          className={buttonVariants({
            variant: "ghost",
            size: "icon-sm",
          })}
        >
          <GithubIcon />
        </a>
      </CodeRendererToolbar>
      <CodeRendererBody
        code={code[displayURL].content}
        language={code[displayURL].language}
        words={[]}
        showLineNumbers
      />
    </CodeRendererContainer>
  );
}
