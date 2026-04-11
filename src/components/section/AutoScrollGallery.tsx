"use client";
import { Gallery } from "../ui/Gallery";
import { ProjectCardProps } from "../ui/ProjectCard";

export default function AutoScrollGallery({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="overflow-hidden w-full py-10">
      <div className="flex animate-scroll gap-5">
        <Gallery projects={projects}/>
        <Gallery projects={projects}/>
        </div>
    </div>
  );
}
