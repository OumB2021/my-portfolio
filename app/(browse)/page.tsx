import About from "@/components/about";
import Experience from "@/components/experience";
import HeroSection from "@/components/hero-section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen pt-7 md:pt-20 flex flex-col">
      <HeroSection />
      <About />
      <Experience />
    </main>
  );
}
