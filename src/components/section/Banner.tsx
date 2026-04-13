"use client";
import Image from "next/image";
import { useAOS } from "@/้hooks/useAos";

import { FlipText } from "../ui/FlipText";
export function Banner({dev=false}:{dev?:boolean}) {
  useAOS(1500);
  return (
    <div className="h-auto pb-20 w-full overflow-hidden">
      <div
        className="absolute h-[100vh] lg:h-[180vh] inset-0 animate-pulseCircle1"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #EECE7B, transparent, transparent)",
          zIndex: 0,
        }}
      ></div>

      <div
        className="absolute h-[100vh] lg:h-[200vh] inset-0 animate-pulseCircle2"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, #FF8D4B, #ffff, #ffff)",
          zIndex: 0,
        }}
      ></div>
      <Image
        className="absolute top-30 end-0 hidden md:block w-[300px] lg:w-[500px] xl:w-[700px] h-auto"
        src={"/pics/pound.png"}
        alt=""
        width={700}
        height={700}
      />
      <div className="relative pt-[20vh] md:pt-[30vh] px-5 md:px-10 lg:px-6 max-w-screen-xl mx-auto">
        {/* ส่วน Header / FlipText */}
        <div className="flex flex-wrap items-baseline gap-2 md:gap-3">
          <p className="font-serif italic text-sm md:text-xl lg:text-3xl">
            Sawasdee ka, Your Favorite
          </p>
          <FlipText dev={dev}/>
          <p className="font-serif italic text-sm md:text-3xl md:hidden">
            <mark className="font-semibold bg-red-100 px-1">Designer</mark> is
            here
          </p>
          <p className="font-serif italic text-sm md:text-xl lg:text-3xl hidden md:block">
            is here
          </p>
        </div>

        {/* ส่วนชื่อ Pound Kanokwan */}
        <div className="h-auto lg:h-[150px] overflow-hidden whitespace-nowrap">
          <h1 className="mt-4 md:mt-8 text-4xl md:text-5xl lg:text-8xl font-apple animate-[reveal_3s_ease-out_forwards]">
            Pound Kanokwan
          </h1>
        </div>

        {/* ส่วน About Me */}
        <div data-aos="fade-up" className="md:w-[50vw] mt-20 sm:mt-10 lg:mt-32 lg:max-w-2xl">
          <h2 className="hidden md:block md:text-lg lg:text-3xl font-semibold mb-4">
            About Me
          </h2>
          <div className="space-y-2 text-justify text-sm lg:text-lg">
            <p>
              Hi, I'm Pound, a 4th-year Computer Engineering student. I love
              designing and creating interactive user experiences. I'm
              passionate about web development and UI/UX design. In my free
              time, I enjoy learning new technologies and improving my skills.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
