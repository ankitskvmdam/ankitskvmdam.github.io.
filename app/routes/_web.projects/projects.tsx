import { HighlightProject } from "./highlight-project";
import { useGetHighlightProjects } from "./use-get-highlight-projects";

export function ProjectsList() {
  const projects = useGetHighlightProjects();

  return (
    <div className="pt-20 lg:pt-10">
      <div className="flex flex-col gap-y-10 lg:gap-y-20">
        {projects.map((project) => (
          <HighlightProject key={project.id} item={project} />
        ))}
      </div>
    </div>
  );
}
