import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { ExternalLink, Github, Globe, Link2 } from "lucide-react";

type ProjectType = {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  iconList: string[];
  repository?: string;
  demo?: string;
};
function ProjectCard({ project }: { project: ProjectType }) {
  const { title, type, description, image, iconList, repository, demo } =
    project;
  return (
    <CarouselItem>
      <Card className=" border-none rounded-lg">
        <div className="bg-white grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-6 py-4 md:p-1 rounded-lg shadow-sm md:h-80 ">
          {/* Image Section */}
          <div className="hidden relative md:flex w-full h-40 sm:h-72 md:h-auto col-span-2 rounded-lg">
            <Image
              src={image}
              alt="project image"
              fill
              className="object-cover rounded-lg h-full w-full shadow-sm"
              priority
            />
          </div>

          <div className="flex flex-col md:py-3 justify-between gap-4 col-span-3 w-full px-4 md:px-0 md:pr-3">
            <div className="flex flex-col items-center md:items-start justify-start gap-3 md:gap-0">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full">
                <h3 className="text-lg md:text-xl font-semibold text-zinc-700 text-center md:text-left">
                  {title}
                </h3>
                <div className="flex justify-center md:justify-start items-center gap-2">
                  {demo && (
                    <Link
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <p className="text-sm"> Demo</p>
                    </Link>
                  )}
                  {repository && (
                    <Link
                      href={repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 shadow-sm border border-zinc-200 text-zinc-700 hover:bg-zinc-100 rounded-lg  transition"
                    >
                      <Github className="w-4 h-4" />
                      <p className="text-sm">Repo</p>
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground font-semibold ">
                {type}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-500 text-center md:text-left line-clamp-5">
              {description}
            </p>

            {/* Icon List */}
            <div className="flex items-center flex-wrap gap-2 md:pt-0 justify-center md:justify-start">
              {iconList.map((tool, index) => (
                <span
                  key={index}
                  className="text-sm bg-zinc-600 hover:bg-zinc-700 text-white rounded-md px-3 py-1 font-normal shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Buttons */}
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
}

export default ProjectCard;
