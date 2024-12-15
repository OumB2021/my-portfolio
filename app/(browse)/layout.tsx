import Navbar from "@/components/navbar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-zinc-50 to-zinc-100">
      <Navbar />
      <div className="flex-1">{children}</div>
    </div>
  );
}
export default BrowseLayout;
