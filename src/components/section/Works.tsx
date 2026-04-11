import Image from "next/image";
import AutoScrollGallery from "./AutoScrollGallery";
import { ProjectCardProps } from "../ui/ProjectCard";
export function Works({ projects }: { projects: ProjectCardProps[] }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center gap-10"
    style={{
          background:
            "radial-gradient(circle at 90% 10%, #CAD183, #ffff, #ffff)",
          zIndex: 0,
        }}>
      <h1 className="text-xl md:text-3xl ms-20 font-semibold">Explore My Work</h1>

      <AutoScrollGallery projects={projects}/>
    </div>
  );
}
