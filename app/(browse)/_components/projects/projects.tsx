import Grain from "@/components/grain";

import { motion } from "framer-motion";

function Projects() {
  return (
    <section className="relative h-full ">
      <Grain opacity={0.09} />
      <motion.div
        className="h-full flex flex-col items-center justify-center gap-10 z-10 relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      ></motion.div>
    </section>
  );
}
export default Projects;
