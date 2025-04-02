import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
function ProjectCard2({ project }: any) {
  const { title, date, description, iconList, link, github } = project;
  return (
    <div className="rounded-lg shadow-md max-w-sm bg-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col hover:bg-neutral-800 mx-auto text-center">
      {/* TITLE */}
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-zinc-200 font-semibold text-lg">{title}</h1>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>

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
        <Link
          href="/"
          className="flex items-center gap-1 px-3 py-2 border-[1px] border-zinc-100 text-zinc-100 rounded-md transition"
        >
          <ExternalLink className="w-4 h-4" />
          <p className="text-sm"> Demo</p>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-2 px-3 py-2 shadow-sm border bg-zinc-200 text-zinc-700 hover:bg-zinc-100 rounded-lg  transition"
        >
          <Github className="w-4 h-4" />
          <p className="text-sm">Repo</p>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard2;
