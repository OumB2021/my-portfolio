"use client";

import { FileDown, MailPlus } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function CallToAction() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isXS = useMediaQuery("(max-width: 400px)");
  return (
    <div className="flex items-center justify-center gap-x-2 md:gap-x-4 pt-5">
      <a
        href="/resume.pdf"
        className="px-4 py-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
        download="OumarBarry_Resume.pdf"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center">
          <FileDown className="size-5 text-zinc-50" />
          <p className="text-zinc-50">{isXS ? "CV" : "Download CV"}</p>
        </div>
      </a>
      <Link
        href="#contact"
        className="px-4 py-3 border border-zinc-800 rounded-lg hover:bg-zinc-300"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center ">
          <MailPlus className="size-5 text-zinc-800" />
          {!isXS && <p className="text-zinc-800">Hire Me</p>}
        </div>
      </Link>
    </div>
  );
}
export default CallToAction;
