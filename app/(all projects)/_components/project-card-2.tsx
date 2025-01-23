import { Button } from "@/components/ui/button";
import { Github, Link2 } from "lucide-react";
import Link from "next/link";

const project = {
  title: "3D Model for Github",
  date: "Jan 2024",
  description:
    "Lorem ipsum dolor, sit amet lorem ipsum dolor, sit amet. Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet",
  tools: ["Next.js", "TailwindCSS", "TypeScript", "Shadcn", "Clerk", "Express"],
  link: "https://github.com/username/repo-name",
  github: "https://github.com/username",
};
function ProjectCard2() {
  const { title, date, description, tools, link, github } = project;
  return (
    <div className="rounded-lg shadow-md bg-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col hover:bg-neutral-800">
      {/* TITLE */}
      <div className="p-4 flex flex-col justify-center">
        <h1 className="text-zinc-200 font-semibold text-lg">{title}</h1>
        <p className="text-sm text-muted-foreground">{date}</p>
      </div>

      {/* DESCRIPTION */}
      <div className="px-4 flex flex-col justify-center">
        <p className="text-zinc-300 text-sm mt-4">{description}</p>
      </div>

      {/* Tools used */}
      <div className="px-4 flex flex-wrap mt-4 gap-2">
        {tools.map((tool) => (
          <span
            key={tool}
            className="text-sm bg-zinc-700 text-white rounded-md px-3 py-1 font-normal shadow-sm"
          >
            {tool}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="w-full p-4 mt-2 flex  items-center justify-center gap-2">
        <Link href={link}>
          <Button className="bg-zinc-300 text-zinc-800 hover:bg-zinc-200">
            <Link2 />
            Demo
          </Button>
        </Link>
        <Link href={github}>
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
