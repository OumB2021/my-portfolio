import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ProjectCard2 from "../_components/project-card-2";
import { projectsAll } from "@/constant/project";

function Projects() {
  return (
    <div className="max-w-7xl min-h-screen flex flex-col w-full p-2 mx-auto">
      {/* Return link */}
      <Link href="/#projects" className="w-fit ">
        <div className="bg-zinc-700 p-3 flex items-center gap-2 rounded-full hover:bg-zinc-800 shadow-md">
          <ArrowLeft className="size-4 text-zinc-50 " />
        </div>
      </Link>

      {/* Title cards */}
      <div className="flex flex-col justify-center gap-1 mb-4">
        <h1 className="text-center md:text-left text-2xl lg:text-4xl font-semibold text-zinc-300 capitalize mt-3">
          projects
        </h1>
        <p className="text-zinc-500 text-center md:text-left text-sm lg:text-base">
          This is a list of all projects that I worked on
        </p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  justify-center gap-4 items-stretch">
        {projectsAll.map((project) => (
          <ProjectCard2 key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
