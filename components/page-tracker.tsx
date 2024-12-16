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
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-1">
      {SECTIONS.map((_, index) => (
        <button
          key={index}
          className={`h-1 w-1 rounded-full shadow-sm ${
            activeSection === index
              ? "bg-zinc-900 !h-5"
              : "bg-zinc-400 hover:bg-zinc-600"
          }`}
          onClick={() => scrollToSection(index)}
        ></button>
      ))}
    </div>
  );
}
