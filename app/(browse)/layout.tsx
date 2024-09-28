import Navbar from "@/components/navbar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col bg-gradient-to-tl from-zinc-50 to-zinc-100">
      <Navbar />
      {children}
    </div>
  );
}
export default BrowseLayout;
