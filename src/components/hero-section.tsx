import type { PortfolioContent } from "@/types/portfolio";

export function HeroSection({ hero }: { hero: PortfolioContent["hero"] }) {
  return (
    <section id="home" className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-8">
      <div className="text-center">
        <p className="mb-6 font-mono text-3xl text-emerald-300">{hero.greeting}</p>
        <h1 className="text-6xl font-bold text-zinc-100 sm:text-8xl">
          {hero.firstName}{" "}
          <span className="text-emerald-300 drop-shadow-[0_0_18px_rgba(16,185,129,0.85)]">{hero.lastName}</span>
        </h1>
        <p className="mt-8 font-mono text-xl text-zinc-400">{hero.roles.join("  •  ")}</p>
        <p className="mx-auto mt-8 max-w-3xl text-lg text-zinc-300">{hero.summary}</p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {hero.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:neon-border"
              aria-label={link.label}
            >
              {link.icon ?? link.label[0]}
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="rounded-full border border-emerald-300/30 bg-emerald-300/15 px-6 py-3 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-300/30"
          >
            {hero.ctaPrimary.label}
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-6 py-3 text-sm font-semibold text-fuchsia-100 transition hover:bg-fuchsia-300/30"
          >
            {hero.ctaSecondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
