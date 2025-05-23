import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar className="text-zinc-300 hover:text-zinc-100" />
      <div className="flex-1 z-10">{children}</div>
      <Footer />
    </div>
  );
}

export default BrowseLayout;
