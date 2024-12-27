"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Logo() {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.refresh();
      }}
      className="hover:cursor-pointer"
    >
      <p className="flex items-center font-extrabold text-2xl text-zinc-300 hover:text-zinc-100 transition-colors leading-none">
        OumB
        <span className="text-5xl relative bottom-2">.</span>
      </p>
    </div>
  );
}

export default Logo;
