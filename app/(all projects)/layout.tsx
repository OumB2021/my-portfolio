import Footer2 from "@/components/footer2";
import Grain from "@/components/grain";

function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-zinc-950 ">
      <Grain opacity={0.01} />
      <div className="justify-center p-5 md:p-10 lg:p-24 z-10">{children}</div>
      <Footer2 />
    </div>
  );
}
export default ProjectLayout;
