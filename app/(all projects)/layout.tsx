import Grain from "@/components/grain";
import Navbar from "@/components/navbar";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-zinc-950 ">
      <Grain opacity={0.1} />
      <div className="justify-center p-5 md:p-10 lg:p-24 z-10">{children}</div>
    </div>
  );
}
export default ProjectLayout;
