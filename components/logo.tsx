import { LOGO } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

type LogoProps = {
  className?: string;
};
function Logo({ className }: LogoProps) {
  return (
    <Link href="/">
      <p
        className={cn(
          "flex items-center font-extrabold text-2xl transition-colors leading-none",
          className
        )}
      >
        {LOGO}
        <span className="text-5xl relative bottom-2">.</span>
      </p>
    </Link>
  );
}

export default Logo;
