import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { MotionHeader } from "@/components/motion-header";
import { Navbar } from "@/components/navbar";
import { StorySection } from "@/components/story-section";
import { navItems, portfolioContent } from "@/data/portfolio";

export default function Home() {

  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="noise absolute inset-0 z-0" />

      <MotionHeader />

      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <Navbar brand={portfolioContent.brand} navItems={navItems} />

      <HeroSection hero={portfolioContent.hero} />
      <AboutSection about={portfolioContent.about} />
      <ExperienceSection experiences={portfolioContent.experiences} />
      <StorySection story={portfolioContent.story} />

      <footer className="relative z-10 mx-auto max-w-7xl border-t border-white/10 px-4 py-10 text-center font-mono text-lg text-zinc-400 sm:px-8">
        <p>
          © 2026 • {portfolioContent.footerText.split(" ").slice(0, -1).join(" ")} <span className="text-fuchsia-300">{portfolioContent.footerText.split(" ").slice(-1)}</span>
        </p>
      </footer>
    </main>
  );
}
