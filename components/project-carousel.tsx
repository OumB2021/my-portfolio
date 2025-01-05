import { useState } from "react";
import ProjectCard from "./project-card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

function ProjectCarousel() {
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  return (
    <Carousel className="w-full max-w-3xl md:max-w-5xl mx-auto">
      <CarouselContent>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
export default ProjectCarousel;
