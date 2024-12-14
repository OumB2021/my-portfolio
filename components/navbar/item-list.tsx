"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState, useEffect } from "react";

type ItemsProps = {
  label: string;
  href: string;
};

function ItemList({ label, href }: ItemsProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight / 2; // Adjust as needed
        if (rect.top <= offset && rect.bottom >= offset) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [href]);

  return (
    <Link href={href}>
      <p
        className={cn(
          "text-sm font-normal text-zinc-600 hover:text-zinc-900 hover:font-semibold ",
          isActive && "text-zinc-900 font-medium"
        )}
      >
        {label}
      </p>
    </Link>
  );
}
export default ItemList;
