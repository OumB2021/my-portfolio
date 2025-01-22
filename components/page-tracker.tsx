"use client";

import { SECTIONS } from "@/lib/constants";
import { useState, useEffect } from "react";

export default function PageTracker() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = SECTIONS.indexOf(entry.target.id);
            setActiveSection(sectionIndex);
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      SECTIONS.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(SECTIONS[index]);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-2 z-50 transition-all delay-150">
      {SECTIONS.map((_, index) => (
        <button
          key={index}
          className={`size-1 md:size-[6px] rounded-lg shadow-sm ${
            activeSection === index
              ? "bg-zinc-200 !h-5"
              : "bg-zinc-500 hover:bg-zinc-400"
          }`}
          onClick={() => scrollToSection(index)}
        ></button>
      ))}
    </div>
  );
}
