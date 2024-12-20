"use client";
import { cn } from "@/lib/utils";
import { GitBranchPlus, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function Footer({ className }: { className?: string }) {
  const isXS = useMediaQuery("(max-width: 768px)");

  return (
    <div className="absolute bottom-0 left-0 right-0 px-10 md:px-20 py-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* COPYRIGHT MESSAGE */}
        <div>
          <p className="text-sm text-muted-foreground/50">
            Copyright &copy; {new Date().getFullYear()} Oumar Barry. All rights
            reserved.
          </p>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <Link
            href="#"
            className="p-2 bg-muted-foreground/30 rounded-sm hover:bg-muted-foreground/40 flex items-center gap-2 transition-colors duration-200"
          >
            <Linkedin
              className="w-5 h-5 text-muted-foreground"
              strokeWidth={1.5}
            />
            {!isXS && <p className="text-sm text-muted-foreground">LinkedIn</p>}
          </Link>

          {/* GitHub */}
          <Link
            href="#"
            className="p-2 bg-muted-foreground/30 rounded-sm hover:bg-muted-foreground/40 flex items-center gap-2 transition-colors duration-200"
          >
            <Github
              className="w-5 h-5 text-muted-foreground"
              strokeWidth={1.5}
            />
            {!isXS && <p className="text-sm text-muted-foreground">GitHub</p>}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
