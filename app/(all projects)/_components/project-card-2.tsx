import { Button } from "@/components/ui/button";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";
import { ProjectType } from "@/constant/project";
function ProjectCard2({ project }: any) {
  const { title, date, description, iconList, link, github } = project;
  return (
    <div className="rounded-lg shadow-md max-w-sm bg-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col hover:bg-neutral-800 mx-auto text-center">
      {/* TITLE */}
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-zinc-200 font-semibold text-lg">{title}</h1>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>

      {/* DESCRIPTION */}
      <div className="px-4 flex flex-col justify-center ">
        <p className="text-zinc-300 text-sm mt-2 line-clamp-3">{description}</p>
      </div>

      {/* Tools used */}
      <div className="px-4 flex flex-wrap justify-center mt-6 gap-2">
        {iconList.map((tool: any) => (
          <span
            key={tool}
            className="text-sm bg-zinc-700 text-white rounded-md px-3 py-1 font-normal shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="w-full p-4  flex items-center justify-center gap-2 mt-auto">
        <Link href="/">
          <Button className="bg-zinc-300 text-zinc-800 hover:bg-zinc-200">
            <Link2 />
            Demo
          </Button>
        </Link>
        <Link href="/">
          <Button className="bg-zinc-300 text-zinc-800 hover:bg-zinc-200">
            <Github />
            Repo
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard2;
