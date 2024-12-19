import Navbar from "@/components/navbar";
import Image from "next/image";

function BrowseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <div className="absolute inset-0 ">
        <Image
          src="https://img.freepik.com/premium-photo/hi-res-white-concrete-wall-texture_861973-352.jpg?w=1380"
          alt="noise"
          fill
          style={{
            objectFit: "fill",
            opacity: 0.1,
          }}
        />
      </div>
      <Navbar />
      <div className="flex-1 z-10">{children}</div>
    </div>
  );
}

export default BrowseLayout;
