"use client";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <motion.div
      className="h-full flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-y-2 ">
        <h1 className="font-semibold text-6xl md:text-8xl lg:text-9xl capitalize text-gray-800">
          Oumar Barry
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-800 uppercase ">
          Software Engineer
        </h2>

        <p className="text-sm md:text-lg lg:tracking-wide  text-gray-500 ">
          Transforming ideas into digital realities
        </p>
        {/* <CallToAction />
        <Button>Holla</Button> */}
      </div>
    </motion.div>
  );
}

export default HeroSection;
