"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./_components/hero/hero-section";
import About from "@/app/(browse)/_components/about/about";
import PageTracker from "@/components/page-tracker";
import Dummy2 from "./dummy copy";
import { SECTIONS } from "@/lib/constants";
import Projects from "./_components/projects/projects";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Scroll lock state

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let startY: number; // For touch events

    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return; // Prevent multiple scrolls
      event.preventDefault(); // Stop default scroll behavior

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        const direction = event.deltaY > 0 ? 1 : -1; // Detect scroll direction
        scrollToSection(direction);
      }, 100);
    };

    const handleTouchStart = (event: TouchEvent) => {
      startY = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      const endY = event.changedTouches[0].clientY;
      const direction = endY - startY < 0 ? 1 : -1; // Detect swipe direction
      scrollToSection(direction);
    };

    const scrollToSection = (direction: number) => {
      const newSection = Math.min(
        Math.max(activeSection + direction, 0),
        SECTIONS.length - 1
      );

      if (newSection !== activeSection) {
        setActiveSection(newSection);
        const section = document.getElementById(SECTIONS[newSection]);
        section?.scrollIntoView({ behavior: "smooth" });
        setIsScrolling(true);

        setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Lock scrolling during animation
      }
    };

    const container = containerRef.current;

    // Attach event listeners for mouse and touch
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    // Cleanup listeners on unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
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
