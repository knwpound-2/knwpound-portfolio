// components/FigmaEmbed.tsx

export default function LinkEmbed({ link }: { link: string }) {
  return (
    <div className="w-full h-[450px] lg:h-[600px]"> 
      <iframe
        className="w-full h-full rounded-xl border border-black/10 shadow-sm"
        src={link}
        allowFullScreen
        title="Figma Prototype"
      />
    </div>
  );
}