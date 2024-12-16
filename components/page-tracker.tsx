"use client";

import { useState, useEffect } from "react";

const SECTIONS = ["hero", "about", "experience"];

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
        threshold: 0.5, // Trigger when 50% of the section is visible
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
    <div className="fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-3">
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
