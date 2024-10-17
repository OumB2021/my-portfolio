import CallToAction from "./call-to-action";

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-col items-center gap-y-2">
        <p className="tracking-wide text-lg">Hello, my name is</p>
        <h1 className="font-extrabold text-3xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-gray-800">
          Oumar Barry
        </h1>
        <p className="text-lg sm:text-xl md:text-4xl text-gray-800 uppercase font-semibold">
          Software Engineer
        </p>
        <p className="text-sm sm:text-lg tracking-wide md:text-xl text-gray-500 ">
          Crafting seamless digital experiences
        </p>
        <CallToAction />
      </div>
    </section>
  );
}
export default HeroSection;
