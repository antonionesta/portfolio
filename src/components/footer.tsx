"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px" });

  return (
    <footer ref={ref} className="pb-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="mt-0 border-t border-border pt-8 text-center md:mt-32"
      >
        <p className="font-mono text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Antonio Nesta. Made with{" "}
          <span className="text-primary dark:text-accent">love</span>.
        </p>
      </motion.div>
    </footer>
  );
}
