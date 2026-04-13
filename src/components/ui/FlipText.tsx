export function FlipText({ dev=false }: { dev?: boolean }) {
  const [firstText, secondText] = dev
    ? ["Developer", "Designer"]
    : ["Designer", "Developer"];
  return (
    <div className="group [perspective:1000px] hidden md:inline-block">
      <div className="relative w-30 top-1 lg:w-40 h-8 lg:h-10 rounded-lg [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateY(180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 rounded-lg bg-violet-300 flex items-center justify-center [backface-visibility:hidden]">
          <p className="font-serif italic md:text-xl lg:text-3xl text-center">
            {firstText}
          </p>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 rounded-lg bg-lime-200 flex items-center justify-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="font-serif italic md:text-xl lg:text-3xl text-center">
            {secondText}
          </p>
        </div>
      </div>
    </div>
  );
}
