"use client";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function Footer({ className }: { className?: string }) {
  const isXS = useMediaQuery("(max-width: 768px)");

  return (
    <div className="absolute bottom-0 left-0 right-0 px-10 md:px-20 py-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* COPYRIGHT MESSAGE */}
        <div className="text-sm text-muted-foreground flex items-center">
          &copy; {new Date().getFullYear()} Oumar Barry,
          {!isXS && <p> All rights reserved.</p>}
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <Link
            href="#"
            className="p-2 bg-zinc-300 rounded-sm hover:bg-zinc-200  flex items-center gap-2 transition-colors duration-200"
          >
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-zinc-600" strokeWidth={1.5} />
              {!isXS && <p>LinkedIn</p>}
            </div>
          </Link>

          <Link
            href="#"
            className="p-2 bg-zinc-300 rounded-sm hover:bg-zinc-200 flex items-center gap-2 transition-colors duration-200"
          >
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-zinc-600" strokeWidth={1.5} />
              {!isXS && <p>LinkedIn</p>}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
