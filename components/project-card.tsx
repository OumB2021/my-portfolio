import Image from "next/image";
import { CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { Globe, Send } from "lucide-react";
import { transform } from "next/dist/build/swc";

const project = {
  id: "1",
  title: "3D model of this beautiful project",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolorLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit similique optio laudantium! Obcaecati dolor, dignissimos quia, sit sapiente fuga laudantium ducimus exercitationem deserunt ullam dolores nisi corrupti suscipit totam sed!",
  image: "/s1.png",
  iconList: ["/re.svg", "/next.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
};

function ProjectCard() {
  const { title, description, image, iconList } = project;

  return (
    <CarouselItem>
      <Card className="p-4 bg-red-950/20 border-none rounded-xl">
        <div className="bg-white/80 grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-6 p-1 rounded-xl shadow-sm md:h-80">
          {/* Image Section */}
          <div className="w-full h-60 sm:h-72 md:h-auto ">
            <Image
              src={image}
              alt="project image"
              width={500}
              height={500}
              className="object-fill rounded-lg h-full w-full "
              priority
            />
          </div>

          <div className="flex flex-col md:py-3 justify-between gap-3 col-span-2 w-full px-4 md:px-0">
            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 text-center md:text-left">
              {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 text-center md:text-left line-clamp-5">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start items-center gap-2 mt-4">
              {/* Live Demo Button */}
              <Link
                href="#"
                className="flex items-center gap-1 px-4 py-2 bg-red-700 text-white rounded-xl hover:bg-red-500 transition"
              >
                <Send className="w-4 h-4" />
                <span>Live Demo</span>
              </Link>

              {/* GitHub Repo Button */}
              <Link
                href="#"
                className="flex items-center gap-1 px-4 py-2 bg-zinc-700 text-white rounded-xl hover:bg-zinc-600 transition"
              >
                <Globe className="w-4 h-4" />
                <span>GitHub</span>
              </Link>
            </div>

            {/* Icon List */}
            <div className="flex  items-center justify-center md:justify-start my-4">
              {iconList.map((icon, index) => (
                <div
                  key={index}
                  className="size-8 md:size-9 border border-white rounded-full bg-zinc-700 flex items-center justify-center"
                >
                  <img src={icon} alt="icon" className="p-2" />
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
