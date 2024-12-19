"use client";
import Grain from "@/components/grain";
import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
function HeroSection() {
  return (
    <section className="relative h-full ">
      <Grain opacity={0.09} />
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-10 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-y-2 bg-blend-">
          <h1 className="font-semibold text-6xl md:text-8xl lg:text-9xl capitalize text-gray-800">
            Oumar Barry
          </h1>

          <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-800 uppercase ">
            Software Engineer
          </h2>

          <p className="text-xs md:text-lg lg:tracking-wide  text-gray-400 ">
            Transforming ideas into digital realities
          </p>
        </div>
        <div className="bg-opacity-5 p-4 rounded-full animate-bounce">
          <ChevronsDown />
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
