import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { TopScrollProgress } from "@/components/top-scroll-progress";
import { Navbar } from "@/components/navbar";
import { StorySection } from "@/components/story-section";
import { navItems, portfolioContent } from "@/data/portfolio";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://antonionesta.dev";
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Antonio Nesta",
        url: siteUrl,
        jobTitle: "Frontend Team Leader",
        sameAs: portfolioContent.hero.socialLinks.map((social) => social.href),
      },
      {
        "@type": "WebSite",
        name: "Antonio Nesta | Portfolio",
        url: siteUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="noise absolute inset-0 z-0" />

      <TopScrollProgress />

      <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-70" />

      <Navbar brand={portfolioContent.brand} navItems={navItems} />

      <HeroSection hero={portfolioContent.hero} />
      <AboutSection about={portfolioContent.about} />
      <ExperienceSection experiences={portfolioContent.experiences} />
      <StorySection story={portfolioContent.story} />

      <Footer />
    </main>
  );
}
