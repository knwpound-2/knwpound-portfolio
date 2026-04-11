"use client";
import { useAOS } from "@/้hooks/useAos";
import PostIt from "../ui/PostIt";

// 1. กำหนด Interface เพื่อบอกว่า Props ต้องมีหน้าตาแบบไหน
interface SkillItem {
  title: string;
  desc: string;
  rotate: string;
}

interface CapstoneProps {
  skills: SkillItem[];
}

export function Capstone({ skills }: CapstoneProps) {
  useAOS(1000);

  return (
    <div data-aos="fade-up" className="w-full min-h-screen flex flex-col justify-center bg-yellow-400 px-[5%] py-20">
      <h1 className="text-2xl lg:text-4xl font-semibold text-center md:text-left mb-10">
        I have experience in ...
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-10 lg:gap-20 justify-items-center">
        {/* 2. ใช้ข้อมูลที่รับมาจาก props มา render */}
        {skills.map((skill, index) => (
          <PostIt
            key={`${skill.title}-${index}`}
            title={skill.title}
            desc={skill.desc}
            rotate={skill.rotate}
          />
        ))}
      </div>
    </div>
  );
}