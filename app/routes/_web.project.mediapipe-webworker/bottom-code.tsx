import { ProjectCodeViewer } from "~/layouts/project-code-viewer";

const BASE_GITHUB_ROUTE =
  "https://raw.githubusercontent.com/ankitskvmdam/ankitskvmdam.github.io./refs/heads/master/app/routes";

const FILES = [
  "_web.project.mediapipe-webworker/bottom-code.tsx",
  "_web.project.mediapipe-webworker/bottom-preview.tsx",
  "_web.project.mediapipe-webworker/bottom.tsx",
  "_web.project.mediapipe-webworker/inputs.tsx",
  "_web.project.mediapipe-webworker/preview-main.tsx",
  "some/path/a.tsx",
  "some/path/b.tsx",
  "some/path/of/example.tsx",
];
export function ProjectBottomCode(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="" {...props}>
      <ProjectCodeViewer baseURL={BASE_GITHUB_ROUTE} files={FILES} />
    </div>
  );
}
