import { useEffect, useState } from "react";
import ProjectCard from "./project-card";
import { Carousel, CarouselContent, type CarouselApi } from "./ui/carousel";

function ProjectCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative p-4 md:p-0 md:max-w-4xl mx-auto">
      <Carousel setApi={setApi}>
        <CarouselContent>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </CarouselContent>
      </Carousel>

      <div className="flex justify-center items-center gap-2 mt-6">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "bg-cyan-400 w-5 h-1 boxsh"
                : "bg-gray-400 size-1"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCarousel;
