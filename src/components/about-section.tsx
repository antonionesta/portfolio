"use client";

import { motion } from "framer-motion";
import { SectionShell } from "@/components/section-shell";
import { Card } from "@/components/ui/card";
import type { PortfolioContent } from "@/types/portfolio";

export function AboutSection({ about }: { about: PortfolioContent["about"] }) {
  return (
    <SectionShell id="chi-sono" eyebrow="Chi Sono" title={about.title} delay={0.05} className="relative z-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="space-y-5">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-2xl leading-relaxed text-zinc-300">
              {paragraph}
            </p>
          ))}
          <pre className="rounded-xl border border-white/10 bg-[#060b17] p-4 font-mono text-xl text-zinc-300">
            {about.snippet.map((line, index) => (
              <p key={`${line}-${index}`} className="leading-8">
                {line}
              </p>
            ))}
          </pre>
        </Card>

        <div className="grid gap-4 sm:grid-cols-2">
          {about.specialties.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ delay: idx * 0.08 }}
            >
              <Card className="h-full">
                <p className="mb-3 font-mono text-3xl font-bold text-emerald-300">{item.title}</p>
                <p className="text-xl text-zinc-400">{item.stack}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
