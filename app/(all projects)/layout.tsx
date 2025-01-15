import Grain from "@/components/grain";
import Navbar from "@/components/navbar";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-cyan-950 scrollbar  scrollbar-track-blue-600 scrollbar-thumb-gray-400">
      <Grain opacity={0.1} />
      {/* <Navbar className="text-zinc-200 hover:text-zinc-200 border-b-red-300" /> */}
      <div className="w-full justify-center p-24">{children}</div>
    </div>
  );
}
export default ProjectLayout;
