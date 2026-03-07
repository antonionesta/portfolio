"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import type { PortfolioContent, StoryItem } from "@/types/portfolio";

function StoryCard({ item, index }: { item: StoryItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
    >
      <Card className="h-full">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-mono text-xl font-semibold text-emerald-300">{item.title}</p>
          <p className="font-mono text-lg text-zinc-400">{item.year}</p>
        </div>
        <p className="text-2xl leading-relaxed text-zinc-300">{item.text}</p>
      </Card>
    </motion.div>
  );
}

export function StorySection({ story }: { story: PortfolioContent["story"] }) {
  return (
    <SectionShell id="storia" eyebrow="La Mia Storia" title={story.title} delay={0.15} className="relative z-10 pb-32">
      <div className="grid gap-4 lg:grid-cols-4">
        {story.items.map((item, index) => (
          <StoryCard key={`${item.year}-${item.title}`} item={item} index={index} />
        ))}
      </div>
    </SectionShell>
  );
}
