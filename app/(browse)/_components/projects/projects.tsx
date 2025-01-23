import Grain from "@/components/grain";
import ProjectCarousel from "@/components/project-carousel";

import { motion } from "framer-motion";
import Link from "next/link";

function Projects() {
  return (
    <section id="projects" className="relative h-full bg-cyan-950">
      <Grain opacity={0.09} />
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-10 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-6 ">
          <div className="flex flex-col gap-1 md:gap-10 items-center">
            {/* TITLE */}
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-center text-2xl lg:text-4xl font-bold text-zinc-200 capitalize">
                Featured Projects
              </h1>
              <p className="text-center text-base text-zinc-200">
                These projects showcase my skills and dedication. See everything
                I&apos;ve worked on{" "}
                <span className="text-cyan-300  hover:text-cyan-200 hover:underline hover:underline-offset-2">
                  <Link href="/projects">here</Link>
                </span>
              </p>
            </div>

            {/* PROJECT CARDS */}
            <ProjectCarousel />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Projects;
