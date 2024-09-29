import Navbar from "@/components/navbar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gradient-to-tl from-zinc-100 to-zinc-200">
      <Navbar />
      {children}
    </div>
  );
}
export default BrowseLayout;
