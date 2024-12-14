import { Button } from "@/components/ui/button";
import CallToAction from "./call-to-action";

function HeroSection() {
  return (
    <section className="flex max-w-7xl mx-auto min-h-screen items-center -mt-14">
      <div className="flex flex-col items-center gap-y-2 ">
        <h1 className="font-semibold text-6xl md:text-8xl lg:text-9xl capitalize text-gray-800">
          Oumar Barry
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-800 uppercase ">
          Software Engineer
        </h2>

        <p className="text-sm md:text-lg lg:tracking-wide  text-gray-500 ">
          Transforming ideas into digital realities
        </p>
        {/* <CallToAction />
        <Button>Holla</Button> */}
      </div>
    </section>
  );
}
export default HeroSection;
