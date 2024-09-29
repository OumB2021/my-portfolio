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
        <Sun className="text-zinc-500 hover:text-zinc-900" size={24} />
      ) : (
        <Moon className="text-zinc-500 hover:text-zinc-900" size={24} />
      )}
    </Button>
  );
}
export default NightMode;
