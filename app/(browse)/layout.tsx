import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gradient-to-tl from-zinc-50 to-zinc-100 ">
      <Navbar />
      <div className="flex min-h-screen">
        {/* <div className="relative md:hidden">
          <Sidebar />
        </div> */}
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
export default BrowseLayout;
