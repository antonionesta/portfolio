"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { PortfolioContent } from "@/types/portfolio";

export function ExperienceSection({ experiences }: { experiences: PortfolioContent["experiences"] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiences" className="relative py-8 md:py-32 grid-bg scroll-mt-24">
      <div className="container px-6 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">{"// experiences"}</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            <span className="text-foreground">Le Mie</span> <span className="text-primary">Esperienze</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Linea della timeline */}
          <div className="absolute left-4.75 top-0 bottom-0 w-px bg-black/30 dark:bg-white/30 md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className={`relative mb-12 flex flex-col md:flex-row ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Punto della timeline */}
              <div className="absolute left-3 top-2 z-10 flex size-3.75 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1/2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              </div>

              {/* Contenuto */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
                  <div className="mb-2">
                    <span className="font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <p className="mb-3 font-mono text-sm text-accent neon-purple-text">{exp.company}</p>
                  <p className="mb-3 text-sm text-muted-foreground">{exp.summary}</p>
                  <ul className="mb-4 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {exp.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-sm border border-border bg-secondary px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
