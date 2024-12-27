import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { Globe, Send } from "lucide-react";

const project = {
  id: "1",
  title: "3D model of this beautiful project",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolor, dignissimos quia, sit sapiente fuga laudantium ducimus exercitationem deserunt ullam dolores nisi corrupti suscipit totam sed!",
  image: "/p3.svg",
  iconList: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
};

function ProjectCard() {
  const { title, description, image, iconList } = project;

  return (
    <CarouselItem>
      <Card className="p-4 bg-red-950/20 border-none rounded-xl">
        <div className="bg-white/90 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-6 p-4 rounded-lg shadow-sm md:h-80">
          {/* Image Section */}
          <div className="w-full h-60 sm:h-72 md:h-auto">
            <Image
              src={image}
              alt="project image"
              width={500}
              height={500}
              className="object-cover rounded-lg h-full w-full"
              priority
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between gap-3 col-span-2 w-full">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 text-center md:text-left line-clamp-3">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start items-center gap-4 mt-4">
              {/* Live Demo Button */}
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition"
              >
                <Send className="w-4 h-4" />
                <span>Live Demo</span>
              </Link>

              {/* GitHub Repo Button */}
              <Link
                href="#"
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                <Globe className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
            </div>

            {/* Icon List */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-3">
              {iconList.map((icon, index) => (
                <div
                  key={index}
                  className="w-8 h-8 md:w-10 md:h-10 border border-gray-200 rounded-full bg-black flex items-center justify-center"
                >
                  <img
                    src={icon}
                    alt="icon"
                    className="w-5 h-5 md:w-6 md:h-6"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </CarouselItem>
  );
}

export default ProjectCard;
