import About from "@/app/(browse)/_components/about/about";
import Experience from "@/app/(browse)/_components/experience/experience";
import HeroSection from "./_components/hero/hero-section";
import PageTracker from "@/components/page-tracker";

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <PageTracker />
      {/* Hero Section */}
      <section
        id="hero"
        className="snap-start h-screen bg-gradient-to-tl from-amber-50 to-amber-100"
      >
        <HeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="snap-start h-screen w-full">
        <About />
      </section>

      {/* Experience Section */}
      <section id="experience" className="snap-start h-screen w-full">
        <Experience />
      </section>
    </main>
  );
}
