import Grain from "@/components/grain";
import Navbar from "@/components/navbar";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10 items-center justify-center bg-zinc-100">
      <Grain opacity={0.1} />
      <Navbar className="text-zinc-800 hover:text-zinc-900 border-b-zinc-800" />
      <div className="w-full justify-center p-24 ">{children}</div>
    </div>
  );
}
export default ProjectLayout;
