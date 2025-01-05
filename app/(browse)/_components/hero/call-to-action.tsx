"use client";

import { FileDown, MailPlus } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

function CallToAction() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isXS = useMediaQuery("(max-width: 400px)");
  return (
    <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
      <a
        href="/resume.pdf"
        className="px-3 py-2 bg-zinc-300 rounded-sm hover:bg-zinc-200 transition-colors"
        download="OumarBarry_Resume.pdf"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center">
          <FileDown className="size-4 text-zinc-700" />
          <p className="text-zinc-700 text-sm">{isXS ? "CV" : "Resume"}</p>
        </div>
      </a>
    </div>
  );
}
export default CallToAction;
