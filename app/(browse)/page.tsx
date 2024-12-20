"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./_components/hero/hero-section";
import About from "@/app/(browse)/_components/about/about";
import PageTracker from "@/components/page-tracker";
import Dummy from "./dummy";
import Dummy2 from "./dummy copy";
import { SECTIONS } from "@/lib/constants";
import Projects from "./_components/projects/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Scroll lock state

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return; // Prevent multiple scrolls
      event.preventDefault(); // Stop default scroll behavior

      clearTimeout(scrollTimeout); // Reset timeout on new scroll

      scrollTimeout = setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1; // Detect scroll direction

        const newSection = Math.min(
          Math.max(activeSection + direction, 0),
          SECTIONS.length - 1
        );

        if (newSection !== activeSection) {
          setActiveSection(newSection); // Update active section
          const section = document.getElementById(SECTIONS[newSection]);
          section?.scrollIntoView({ behavior: "smooth" });
          setIsScrolling(true); // Lock scrolling

          setTimeout(() => {
            setIsScrolling(false); // Unlock scrolling after animation
          }, 1000);
        }
      }, 100);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Cleanup on unmount
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
      <section id="page-tracker" className="h-screen snap-start">
        <Dummy2 />
      </section>
    </div>
  );
}
