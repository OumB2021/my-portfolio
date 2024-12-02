import CallToAction from "./call-to-action";

function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className="font-extrabold text-6xl md:text-7xl lg:text-9xl capitalize text-gray-800">
          Oumar Barry
        </h1>
        <div className="flex items-center justify-center space-x-4">
          <hr />
          <p className="text-2xl md:text-3xl lg:text-5xl text-gray-800 uppercase font-bold">
            Software Engineer
          </p>
        </div>

        <p className="text-sm md:text-lg lg:tracking-wide  text-gray-500 ">
          Crafting seamless digital experiences
        </p>
        <CallToAction />
      </div>
    </section>
  );
}
export default HeroSection;
