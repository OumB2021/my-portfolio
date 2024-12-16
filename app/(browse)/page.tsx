"use client";

import { useEffect, useRef, useState } from "react";
import HeroSection from "./_components/hero/hero-section";
import About from "@/app/(browse)/_components/about/about";
import PageTracker from "@/components/page-tracker";
import Dummy from "./dummy";
import Dummy2 from "./dummy copy";

const SECTIONS = ["hero", "about", "experience", "page-tracker"];

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false); // Scroll lock state

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling) return; // Prevent new scroll if already animating

      event.preventDefault();
      setIsScrolling(true); // Lock scrolling

      const direction = event.deltaY > 0 ? 1 : -1; // Scroll direction
      const newSection = Math.min(
        Math.max(activeSection + direction, 0),
        SECTIONS.length - 1
      );

      if (newSection !== activeSection) {
        setActiveSection(newSection);
        const section = document.getElementById(SECTIONS[newSection]);
        section?.scrollIntoView({ behavior: "smooth" });

        // Unlock scrolling after animation duration
        setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Adjust timeout to match scroll animation duration
      } else {
        setIsScrolling(false); // Unlock immediately if no section change
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

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
      <section id="experience" className="h-screen snap-start">
        <Dummy />
      </section>
      <section id="page-tracker" className="h-screen snap-start">
        <Dummy2 />
      </section>
    </div>
  );
}
