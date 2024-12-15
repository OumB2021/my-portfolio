"use client";

import { useState, useEffect } from "react";

const SECTIONS = ["hero", "about", "experience"];

export default function PageTracker() {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToSection = (index: number) => {
    const section = document.getElementById(SECTIONS[index]);
    section?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionHeights = SECTIONS.map((id) => {
        const section = document.getElementById(id);
        return section?.offsetTop || 0;
      });

      const currentSection = sectionHeights.findIndex(
        (height, index) =>
          scrollPosition >= height &&
          scrollPosition < (sectionHeights[index + 1] || Infinity)
      );

      setActiveSection(currentSection !== -1 ? currentSection : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-10 transform -translate-y-1/2 flex flex-col gap-1 transition-all">
      {SECTIONS.map((_, index) => (
        <button
          key={index}
          className={`size-2 rounded-full ${
            activeSection === index
              ? "bg-zinc-900 h-5"
              : "bg-zinc-400 hover:bg-zinc-600"
          }`}
          onClick={() => scrollToSection(index)}
        ></button>
      ))}
    </div>
  );
}
