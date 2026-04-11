import { ProjectCard, ProjectCardProps } from "./ProjectCard";

export function Gallery({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="flex gap-5">
      {projects.map((item) => (
        <ProjectCard key={item.title} project={item} />
      ))}
    </div>
  );
}
