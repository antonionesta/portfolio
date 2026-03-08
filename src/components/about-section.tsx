"use client";

import { motion, useInView } from "framer-motion";
import type { PortfolioContent } from "@/types/portfolio";
import { useRef } from "react";

export function AboutSection({ about }: { about: PortfolioContent["about"] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-8 md:py-32 scroll-mt-24">
      <div className="container px-6 mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-widest text-primary">// about me</p>
          <h2 className="mb-12 text-3xl font-bold sm:text-4xl">
            <span className="text-foreground">Chi</span> <span className="text-primary">Sono</span>
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 text-muted-foreground leading-relaxed"
          >
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} >
                {paragraph}
              </p>
            ))}
            {/*<div className="mt-8 rounded-md border border-border bg-card p-4 font-mono text-xs">
              <p className="text-muted-foreground">
                <span className="text-primary">const</span>{" "}
                <span className="text-accent">developer</span> = {"{"}
              </p>
              <p className="pl-4">
                <span className="text-neon-blue">passione</span>:{" "}
                <span className="text-primary">"Tanta"</span>,
              </p>
              <p className="pl-4">
                <span className="text-neon-blue">caffè</span>:{" "}
                <span className="text-primary">"Obbligatorio"</span>,
              </p>
              <p className="pl-4">
                <span className="text-neon-blue">bugFixes</span>:{" "}
                <span className="text-accent">Infinity</span>
              </p>
              <p>{"}"}</p>
            </div>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.skills.map(({ icon, label, desc }, i) => (
              <div
                key={i}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:neon-border"
              >
                {icon}
                <h3 className="mb-1 font-semibold text-foreground">{label}</h3>
                <p className="font-mono text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>    
  );
}
