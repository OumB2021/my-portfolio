import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

const project = {
  id: "1",
  title: "3D model of this beautiful project",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolor, dignissimos quia, sit sapiente fuga laudantium ducimus exercitationem deserunt ullam dolores nisi corrupti suscipit totam sed!",
  image: "/s1.png",
  iconList: ["NextJs", "TailwindCSS", "TypeScript", "Clerk", "vercel"],
};

function ProjectCard() {
  const { title, description, image, iconList } = project;

  return (
    <CarouselItem>
      <Card className="bg-red-950/20 border-none rounded-lg">
        <div className="bg-white/80 grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-6 py-4 md:p-1 rounded-lg shadow-sm md:h-80 ">
          {/* Image Section */}
          <div className="hidden md:flex w-full h-40 sm:h-72 md:h-auto col-span-2">
            <Image
              src={image}
              alt="project image"
              width={500}
              height={500}
              className="object-cover rounded-lg h-full w-full "
              priority
            />
          </div>

          <div className="flex flex-col md:py-3 justify-between gap-4 col-span-3 w-full px-4 md:px-0 md:pr-3">
            <div className="flex flex-col items-center md:items-start justify-start gap-y-1">
              <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
                {title}
              </h3>
              <p className="text-sm bg-cyan-900 text-white rounded-md px-3 py-1">
                Front-end
              </p>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-500 text-center md:text-left line-clamp-4">
              {description}
            </p>

            {/* Icon List */}
            <div className="flex items-center flex-wrap gap-2  md:pt-0 justify-center md:justify-start">
              {iconList.map((tool, index) => (
                <span
                  key={index}
                  className="text-sm bg-cyan-900 text-white rounded-md px-3 py-1 font-normal shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start items-center gap-2">
              {/* Live Demo Button */}
              <Link
                href="#"
                className="flex items-center gap-1 px-3 py-2 bg-cyan-900 text-white rounded-md hover:bg-cyan-800 transition"
              >
                <Globe className="w-4 h-4" />
                <span>Website</span>
              </Link>

              {/* GitHub Repo Button */}
              <Link
                href="#"
                className="flex items-center gap-1 px-4 py-2 bg-zinc-700 text-white rounded-md hover:bg-zinc-600 transition"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
}

export default ProjectCard;
