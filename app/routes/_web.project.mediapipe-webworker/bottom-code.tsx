import { ProjectCodeViewer } from "~/layouts/project-code-viewer";
import { FILES } from "./project-files";

export function ProjectBottomCode(props: React.HTMLProps<HTMLDivElement>) {
  console.log("Files", FILES);
  return (
    <div className="" {...props}>
      <ProjectCodeViewer files={FILES} />
    </div>
  );
}
