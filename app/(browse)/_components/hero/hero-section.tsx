"use client";
import Grain from "@/components/grain";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import { Hero } from "@/lib/constants";

function HeroSection() {
  const { name, title, description } = Hero;

  return (
    <section id="home" className="relative h-full bg-neutral-950">
      <Grain opacity={0.01} />
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-10 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="font-semibold text-5xl sm:text-6xl md:text-8xl lg:text-9xl capitalize text-zinc-200">
            {name}
          </h1>

          <h2 className="text-2xl  md:text-4xl lg:text-5xl text-zinc-400 uppercase ">
            {title}
          </h2>

          <p className="text-xs md:text-lg lg:tracking-wide  text-muted-foreground ">
            {description}
          </p>
        </div>
        <div className="bg-opacity-5 p-4 text-zinc-50 rounded-full animate-bounce">
          <ChevronsDown />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
