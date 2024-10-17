"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

function NightMode() {
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
    <Button variant="link" onClick={toggleTheme}>
      {resolvedTheme === "dark" ? (
        <Sun
          className="text-zinc-800 hover:text-black size-5 md:size-6"
          strokeWidth={1.5}
        />
      ) : (
        <Moon
          className="text-zinc-800 hover:text-black size-5 md:size-6"
          strokeWidth={1.5}
        />
      )}
    </Button>
  );
}
export default NightMode;
