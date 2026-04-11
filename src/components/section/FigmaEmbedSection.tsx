// components/LinkEmbedSection.tsx
import React, { ReactNode } from "react";
import LinkEmbed from "../ui/FigmaEmbed";
import Carousel from "../ui/Carousel"; // เรียกใช้ตัวที่เพิ่งสร้าง

interface LinkSectionProps {
  title: string;
  figmaLink?: string;
  images?: string[]; // รับอาเรย์ของ path รูปภาพ
  description: ReactNode;
  isReversed?: boolean;
}

export default function LinkEmbedSection({
  title,
  figmaLink,
  images,
  description,
  isReversed = false,
}: LinkSectionProps) {
  return (
    <div className="flex justify-center items-center w-full">
      <div 
        className={`w-full flex flex-col items-center justify-center gap-10 p-6 md:px-16 
          ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
        {/* Media Side: เช็กว่ามีรูปไหม ถ้าไม่มีค่อยไปเช็ก Figma */}
        <div className="w-full lg:w-2/3">
          {images && images.length > 0 ? (
            <Carousel images={images} alt={title} />
          ) : figmaLink ? (
            <LinkEmbed link={figmaLink} />
          ) : (
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              No Media Available
            </div>
          )}
        </div>

        {/* Text Side */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <h1 className="font-serif text-xl lg:text-3xl font-semibold text-slate-900 leading-tight">
            {title}
          </h1>
          <div className="text-sm space-y-4 text-justify leading-relaxed text-gray-700">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}