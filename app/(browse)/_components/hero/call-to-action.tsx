"use client";

import { FileDown, MailPlus } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function CallToAction() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isXS = useMediaQuery("(max-width: 400px)");
  return (
    <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
      <a
        href="/resume.pdf"
        className="px-3 py-2 bg-zinc-700 rounded-sm hover:bg-zinc-800 transition-colors"
        download="OumarBarry_Resume.pdf"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center">
          <FileDown className="size-4 text-zinc-50" />
          <p className="text-zinc-50 text-sm">{isXS ? "CV" : "Resume"}</p>
        </div>
      </a>
      {/* <Link
        href="#contact"
        className="px-3 py-2 border border-zinc-500 rounded-sm"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center ">
          <MailPlus className="size-5 text-zinc-800" />
          {!isXS && <p className="text-zinc-800 text-sm">Hire Me</p>}
        </div>
      </Link> */}
    </div>
  );
}
export default CallToAction;
