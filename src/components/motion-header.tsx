"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function MotionHeader() {
  const { scrollYProgress } = useScroll();
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const orbitX = useTransform(scrollYProgress, [0, 1], ["-12%", "16%"]);
  const orbitY = useTransform(scrollYProgress, [0, 1], ["-12%", "8%"]);
  return (
    <div className="fixed left-0 top-0 z-40 h-1 w-full bg-background">
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full origin-left bg-linear-to-r from-emerald-800 via-emerald-500 to-emerald-300 shadow-[0_0_24px_rgba(160,107,255,0.6)]"
        style={{ scaleX: progressScale }}
      />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-0 size-105 rounded-full blur-3xl"
        style={{
          x: orbitX,
          y: orbitY,
          background:
            "radial-gradient(circle at 30% 30%, rgba(124,255,107,0.28), transparent 55%), radial-gradient(circle at 70% 70%, rgba(160,107,255,0.3), transparent 58%)",
        }}
      />
    </div>
  );
}
