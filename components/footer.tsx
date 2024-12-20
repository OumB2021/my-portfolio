"use client";
import { cn } from "@/lib/utils";
import { GitBranchPlus, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";

function Footer({ className }: { className?: string }) {
  const isXS = useMediaQuery("(max-width: 768px)");
  return (
    <div
      className={"absolute bottom-0 left-0 right-0 px-10 md:px-20 p-10 z-50"}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* COPYRIGHT MESSAGE */}
        <div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} - Oumar Barry
          </p>
        </div>
        {/* ICONS */}
        <div className="flex items-center justify-center gap-3 ">
          <Link
            href="#"
            className="p-2 bg-muted-foreground/20 rounded-lg hover:bg-muted-foreground/30"
          >
            <span className="flex items-center justify-center gap-1">
              <Linkedin
                className="size-5 text-muted-foreground"
                strokeWidth={1.5}
              />
              {!isXS && (
                <p className="text-sm text-muted-foreground">Linkedin</p>
              )}
            </span>
          </Link>
          <Link
            href="#"
            className="p-2 bg-muted-foreground/20 rounded-lg hover:bg-muted-foreground/30"
          >
            <span className="flex items-center justify-center gap-1">
              <Github
                className="size-5 text-muted-foreground"
                strokeWidth={1.5}
              />
              {!isXS && <p className="text-sm text-muted-foreground">Github</p>}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
