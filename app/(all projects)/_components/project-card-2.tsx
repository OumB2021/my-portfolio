import Image from "next/image";

function ProjectCard2() {
  return (
    <div className="rounded-lg shadow-md bg-zinc-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-60">
        <Image
          src="/s1.png"
          layout="fill"
          objectFit="cover"
          alt="project-image"
          className="w-full h-full"
        />
      </div>

      {/* Text Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-semibold text-zinc-800 mb-2">
          Project Title
        </h2>

        {/* Description */}
        <p className="text-zinc-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur
          lectus a neque tincidunt, vitae sagittis felis eleifend.
        </p>

        {/* Button */}
        <button className="mt-4 bg-zinc-800 text-white font-bold py-2 px-4 rounded-md hover:bg-zinc-700 transition-colors duration-300">
          View Project
        </button>
      </div>
    </div>
  );
}

export default ProjectCard2;
