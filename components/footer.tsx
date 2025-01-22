"use client";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
function Footer({ className }: { className?: string }) {
  const isXS = useMediaQuery("(max-width: 768px)");

  return (
    <div className="absolute bottom-0 left-0 right-0 px-10 md:px-20 py-6 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* COPYRIGHT MESSAGE */}
        <div className="text-sm text-zinc-400 flex items-center">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>

        {/* ICONS */}
        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="p-2 bg-zinc-300 rounded-sm hover:bg-zinc-200  flex items-center gap-2 transition-colors duration-200"
          >
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <LinkedInLogoIcon
                className="w-5 h-5 text-zinc-600"
                strokeWidth={1.5}
              />
            </div>
          </Link>

          <Link
            href="#"
            className="p-2 bg-zinc-300 rounded-sm hover:bg-zinc-200 flex items-center gap-2 transition-colors duration-200"
          >
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <GitHubLogoIcon
                className="w-5 h-5 text-zinc-600"
                strokeWidth={1.5}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
