import CollapsableCard from "./collapsable-card";

function Experience() {
  return (
    <section id="experience" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center  text-4xl font-bold text-gray-800 uppercase">
          My Experience
        </h1>
        <CollapsableCard />
      </div>
    </section>
  );
}
export default Experience;
