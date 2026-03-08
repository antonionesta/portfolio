"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { PortfolioContent } from "@/types/portfolio";

export function StorySection({ story }: { story: PortfolioContent["story"] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="storia" className="relative py-12 md:py-32">
      <div className="container px-6 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">// la mia storia</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            <span className="text-foreground">La Mia</span> <span className="text-primary">Storia</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {story.map(({ icon, year, title, text }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.12, duration: 0.5 }}
              className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:neon-border"
            >
              <div className="mb-4 flex items-center justify-between">
                {icon}
                <span className="font-mono text-xs text-muted-foreground">{year}</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{text}</p>
              {/* Accent line */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-full rounded-b-lg" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
