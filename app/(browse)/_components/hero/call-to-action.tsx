"use client";

import { FileDown, Mail } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function CallToAction() {
  const isXS = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
      <Link
        href="https://docs.google.com/document/d/13A3COYJdXaa8KRIyej7IaztapYbvwuqAZNtu7ZS0ixY/edit?tab=t.0"
        className="px-3 py-2 bg-zinc-300 rounded-sm hover:bg-zinc-200 transition-colors"
        target="_blank"
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center">
          <FileDown className="size-4 text-zinc-700" />
          <p className="text-zinc-700 text-sm">{isXS ? "CV" : "Resume"}</p>
        </div>
      </Link>

      <Link
        href="mailto:baarryoumar@gmail.com"
        className="border hover:border-zinc-50 px-3 py-2 rounded-sm "
      >
        <div className="flex gap-x-2 gap-4 items-center justify-center transition-all duration-300 hover:text-zinc-50">
          <Mail className="size-4 text-zinc-300 " />
          <p className="text-zinc-300  text-sm">{isXS ? "Email" : "Hire me"}</p>
        </div>
      </Link>
    </div>
  );
}
export default CallToAction;
