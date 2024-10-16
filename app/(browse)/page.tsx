import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-24 flex flex-col items-center ">
      <HeroSection />
      <hr className="bg-white" />
    </main>
  );
}
