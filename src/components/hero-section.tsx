"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import type { PortfolioContent } from "@/types/portfolio";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection({ hero }: { hero: PortfolioContent["hero"] }) {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="container relative z-10 flex flex-col items-center gap-12 px-6 md:flex-row md:justify-center">
        {/* Text content */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 font-mono text-sm text-primary neon-text"
          >
            &gt; {hero.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-6 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
          >
            <span className="text-foreground">{hero.firstName} </span>
            <span className="text-primary neon-text">{hero.lastName}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mx-auto mb-8 max-w-xl font-mono text-sm leading-relaxed text-muted-foreground sm:text-base md:mx-0"
          >
            {hero.roles.join("  •  ")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center gap-4 md:justify-start"
          >
            {hero.socialLinks.map(({ href, label, icon }, i) => (
              <a
                key={i}
                href={href}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary hover:neon-border"
              >
                {icon ?? label[0]}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="relative shrink-0"
        >
          <div className="size-56 overflow-hidden rounded-full border-2 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.15)] sm:h-72 sm:w-72">
            <Image
              src="/me.png"
              alt="Foto profilo"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        href="#about"
        onClick={(event) => {
          event.preventDefault();
          scrollToSection("#about");
        }}
        className="absolute bottom-8 inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  
  );
}
