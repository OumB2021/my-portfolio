import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 z-10">{children}</div>
      <Footer />
    </div>
  );
}

export default BrowseLayout;

// https://img.freepik.com/premium-photo/silver-glitter-abstract-background_136875-2199.jpg?w=1380
