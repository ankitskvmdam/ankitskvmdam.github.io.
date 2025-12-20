import { ProjectCodeViewer } from "~/layouts/project-code-viewer";

const BASE_RAW_GITHUB_ROUTE =
  "https://raw.githubusercontent.com/ankitskvmdam/ankitskvmdam.github.io./refs/heads/master/app/routes";

const BASE_GITHUB_ROUTE =
  "https://github.com/ankitskvmdam/ankitskvmdam.github.io./blob/master/app/routes";

const FILES = [
  "_web.project.mediapipe-webworker/bottom-code.tsx",
  "_web.project.mediapipe-webworker/bottom-preview.tsx",
  "_web.project.mediapipe-webworker/bottom.tsx",
  "_web.project.mediapipe-webworker/inputs.tsx",
  "_web.project.mediapipe-webworker/preview-main.tsx",
  "some/path/a.css",
  "some/path/b.html",
  "some/path/of/example.json",
];
export function ProjectBottomCode(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className="" {...props}>
      <ProjectCodeViewer
        baseURL={BASE_GITHUB_ROUTE}
        baseRawURL={BASE_RAW_GITHUB_ROUTE}
        files={FILES}
        defaultActiveFile="_web.project.mediapipe-webworker/bottom-code.tsx"
      />
    </div>
  );
}
