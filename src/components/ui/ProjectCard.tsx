import Image from "next/image";
import { FlipCard } from "./FlipCard";

interface ProjectTag {
  label: string;
  color: string;
}

export interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  tags: ProjectTag[];
  description: string;
  link: string;
  linkLabel: string;
  image?: string;
  video?: string;
  videoFile?: string;
  imageMode?: string;
}

export function ProjectCard({ project }: { project: ProjectCardProps }) {
  // Logic สำหรับเลือก Media ที่จะแสดงด้านหน้า
  const renderFrontMedia = () => {
    // 1. ถ้ามี YouTube Video (Iframe)
    if (project.video) {
      return (
        <div className="relative w-full h-full overflow-hidden rounded-md bg-black">
          <iframe
            src={project.video}
            title={project.title}
            className="absolute top-1/2 left-1/2 w-[177.78%] h-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      );
    }

    // 2. ถ้ามี Local Video File
    if (project.videoFile) {
      return (
        <video
          src={project.videoFile}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-md"
        />
      );
    }

    // 3. ถ้าไม่มีวิดีโอ ให้แสดง Image เป็น Default
    return (
      <Image
        src={project.image || "/placeholder.png"}
        alt={project.title}
        fill
        className={`${project.imageMode || "object-cover"} object-top rounded-md bg-gray-100`}
      />
    );
  };

  return (
    <FlipCard
      front={renderFrontMedia()}
      back={
        <div className="flex flex-col gap-1 px-5 py-2 text-left h-full">
          <div className="flex flex-row gap-2 items-baseline">
            <p className="text-sm font-semibold">{project.category}</p>
            <p className="text-xs font-semibold text-gray-400">
              {project.year}
            </p>
          </div>

          <h1 className="text-xl font-semibold leading-tight">
            {project.title}
          </h1>

          <div className="flex flex-row flex-wrap gap-1">
            {project.tags.map((tag) => (
              <p
                key={tag.label}
                className={`px-3 py-0.5 ${tag.color} rounded-sm font-light text-[10px] md:text-xs`}
              >
                {tag.label}
              </p>
            ))}
          </div>

          <p className="w-full text-sm text-justify mt-1 line-clamp-4 md:line-clamp-none">
            {project.description}
          </p>

          <hr className="border border-gray-400 mt-auto" />

          <div className="flex w-full justify-end mt-1">
            <a
              className="w-fit font-semibold text-white bg-black py-1 px-4 shadow-sm rounded-md
                         hover:bg-white hover:text-black hover:outline hover:outline-black transition-all text-sm"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.linkLabel}
            </a>
          </div>
        </div>
      }
    />
  );
}
