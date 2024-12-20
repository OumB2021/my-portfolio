import Grain from "@/components/grain";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="relative h-full bg-red-950">
      <Grain opacity={0.09} />
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-10 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-14 lg:px-6">
          <h1 className="text-center text-2xl lg:text-4xl font-bold text-zinc-500 capitalize">
            Featured Projects
          </h1>
        </div>
      </motion.div>
    </section>
  );
}
export default Projects;
