"use client";

import { usePathname, useRouter } from "next/navigation";

export default function ModeToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const isDev = pathname === "/dev";
  
  const label = isDev ? "dev" : "uxui";
  const targetHref = isDev ? "/" : "/dev";
  const activeStyles = isDev 
    ? "shadow-sky-500/50" 
    : "shadow-red-300/50";

  return (
    <button
     title="change content mode"
      onClick={() => router.push(targetHref)}
      className={` px-3 py-1 rounded transition-all duration-300 text-sm shadow-sm ${activeStyles} hover:shadow-md font-apple`}
    >
      {label}
    </button>
  );
}