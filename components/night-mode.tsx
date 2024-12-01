"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type buttonProps = {
  className?: string;
};
function NightMode({ className }: buttonProps) {
  const { setTheme, theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "text-zinc-50 p-2 md:p-0 md:text-zinc-800 md:bg-zinc-50 bg-zinc-700 rounded-full flex items-center justify-center",
        className
      )}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" strokeWidth={1.5} />
      ) : (
        <Moon className="size-5" strokeWidth={1.5} />
      )}
    </button>
  );
}
export default NightMode;
