"use client";
import Grain from "@/components/grain";
import { useMediaQuery } from "usehooks-ts";
import { useState, useEffect } from "react";

function About() {
  const [isMounted, setIsMounted] = useState(false);
  const isXS = useMediaQuery("(max-width: 768px)");

  // Set mounted state after hydration
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative py-20 min-h-screen flex items-center bg-emerald-950"
    >
      <Grain opacity={0.01} />
      <div className="max-w-7xl mx-auto px-10 md:px-14 lg:px-6">
        <h1 className="text-center text-2xl lg:text-4xl font-bold text-zinc-200 capitalize">
          About Me
        </h1>
        <p className="mt-4 text-sm md:text-base text-center leading-relaxed text-zinc-200 max-w-4xl mx-auto">
          Hello! I&apos;m{" "}
          <strong className="text-emerald-500">Oumar Barry</strong>, a senior
          majoring in Computer Science at The City College of New York with a
          passion for{" "}
          <strong className="text-emerald-500">
            Full-Stack Web Development.
          </strong>
        </p>

        {/* Render this block only after hydration */}
        {isMounted && !isXS && (
          <p className="mt-4 text-sm md:text-base text-center leading-relaxed text-zinc-200 max-w-4xl mx-auto">
            Originally from the Ivory Coast, I moved to the United States seven
            years ago, bringing with me a rich background in graphic design and
            video-editing. For four years, I immersed myself in creating visual
            content like flyers, posters, and videos. While this work allowed me
            to express my creativity, I felt a desire to make my creations more
            interactive.{" "}
          </p>
        )}

        <p className="mt-4 text-sm md:text-base text-center leading-relaxed text-zinc-200 max-w-4xl mx-auto">
          In 2016,
          <strong className="text-emerald-500">
            {" "}
            I took my first online HTML{" "}
          </strong>{" "}
          class and immediately fell in love with the world of Web Development.
          This newfound passion led me to switch my focus to computer science,
          where I could blend my artistic skills with programming to build
          dynamic, user-centric web applications. Now, as I approach graduation,
          I&apos;m excited to contribute to projects that bridge design and
          functionality. I&apos;m continuously learning and exploring new
          technologies to create engaging and impactful digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
