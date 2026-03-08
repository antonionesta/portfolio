"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "10px" });
    return (
        <footer ref={ref} className="pb-6">
            {/* Footer */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="mt-0 md:mt-32 border-t border-border pt-8 text-center"
            >
                <p className="font-mono text-xs text-muted-foreground">
                    &copy; {new Date().getFullYear()} · Made with{" "}
                    <span className="text-primary">love</span> and{" "}
                    <span className="text-accent">code</span>
                </p>
            </motion.div>
        </footer>
    );
}
