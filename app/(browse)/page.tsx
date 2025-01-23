"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./_components/hero/hero-section";
import About from "@/app/(browse)/_components/about/about";
import PageTracker from "@/components/page-tracker";
import { SECTIONS } from "@/lib/constants";
import Projects from "./_components/projects/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return; // Prevent multiple scrolls
      event.preventDefault(); // Stop default scroll behavior

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1; // Detect scroll direction
        scrollToSection(direction);
      }, 50); // Reduced timeout for smoother response
    };

    const scrollToSection = (direction: number) => {
      const newSection = Math.min(
        Math.max(activeSection + direction, 0),
        SECTIONS.length - 1
      );

      if (newSection !== activeSection) {
        setActiveSection(newSection);
        const section = document.getElementById(SECTIONS[newSection]);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
          setIsScrolling(true);

          // Adjust the lock time based on section content size for a smoother experience
          const lockTime = 700; // Adjust this value if needed
          setTimeout(() => {
            setIsScrolling(false);
          }, lockTime);
        }
      }
    };

    const container = containerRef.current;

    // Attach event listener for mouse wheel
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Cleanup listeners on unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [activeSection, isScrolling]);

  return (
    <div ref={containerRef} className="h-screen w-full overflow-hidden">
      <PageTracker />
      <section id="hero" className="h-screen snap-start">
        <HeroSection />
      </section>
      <section id="about" className="h-screen snap-start">
        <About />
      </section>
      <section id="projects" className="h-screen snap-start">
        <Projects />
      </section>
    </div>
  );
}
