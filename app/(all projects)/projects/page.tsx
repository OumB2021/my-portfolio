import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/constants";
import ProjectCard2 from "../_components/project-card-2";
function Projects() {
  return (
    <div className="max-w-7xl min-h-screen flex flex-col w-full p-4">
      {/* Return link */}
      <Link href="/" className="w-fit">
        <div className="bg-zinc-800 p-2 flex items-center gap-2 rounded-md hover:bg-zinc-900">
          <ArrowLeft className="size-4 text-zinc-50 " />
          <p className="text-zinc-50">Main page</p>
        </div>
      </Link>

      {/* Title cards */}
      <h1 className="text-center md:text-left text-2xl lg:text-4xl font-semibold text-zinc-500 capitalize mt-10">
        All projects ({projects.length})
      </h1>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
        <ProjectCard2 />
      </div>
    </div>
  );
}
export default Projects;
