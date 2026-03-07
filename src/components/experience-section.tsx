"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { ExperienceItem, PortfolioContent } from "@/types/portfolio";

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-12% 0px" });

  return (
    <motion.div
      ref={rowRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
      className="relative w-full md:w-[calc(50%-2rem)]"
    >
      <Card>
        <p className="mb-2 font-mono text-xl font-semibold text-emerald-300">{item.period}</p>
        <h3 className="text-4xl font-semibold text-white">{item.role}</h3>
        <p className="mb-4 text-3xl text-fuchsia-300">{item.company}</p>
        <p className="mb-5 text-xl leading-relaxed text-zinc-300">{item.summary}</p>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export function ExperienceSection({ experiences }: { experiences: PortfolioContent["experiences"] }) {
  return (
    <SectionShell id="esperienze" eyebrow="Esperienze" title={experiences.title} delay={0.1} className="relative z-10">
      <div className="relative flex flex-col gap-14">
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-emerald-300/30 md:block" />
        {experiences.items.map((item, index) => (
          <div
            key={`${item.period}-${item.role}`}
            className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <span className="absolute left-1/2 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-emerald-300 bg-[#050a14] md:block" />
            <ExperienceCard item={item} index={index} />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
