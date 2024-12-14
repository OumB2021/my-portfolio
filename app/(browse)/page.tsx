import About from "@/app/(browse)/_components/about/about";
import Experience from "@/app/(browse)/_components/experience/experience";

import Image from "next/image";
import HeroSection from "./_components/hero/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen pt-7 md:pt-20 flex flex-col">
      <HeroSection />
      <About />
      <Experience />
    </main>
  );
}
