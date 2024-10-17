import CollapsableCard from "./collapsable-card";

function Experience() {
  return (
    <section id="experience" className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center md:text-left text-4xl font-bold text-gray-800 uppercase">
          My Experience
        </h1>
        <CollapsableCard />
      </div>
    </section>
  );
}
export default Experience;
