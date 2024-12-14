import Navbar from "@/components/navbar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-zinc-50 to-zinc-100">
      <Navbar />
      <div className="flex flex-1 items-center justify-center w-full ">
        {children}
      </div>
    </div>
  );
}
export default BrowseLayout;
