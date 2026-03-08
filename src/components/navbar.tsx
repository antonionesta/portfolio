"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import type { NavItem } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { type MouseEvent, useEffect, useState } from "react";

export function Navbar({ brand, navItems }: { brand: string; navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const navigateTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => scrollToSection(href), 120);
      return;
    }

    scrollToSection(href);
  };

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-1 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a
          href="#home"
          onClick={(event) => navigateTo(event, "#home")}
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-wider text-primary neon-text"
        >
          <span>{brand}</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateTo(event, item.href)}
              className="px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground">
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <div className="flex flex-col px-6 py-4 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => navigateTo(event, item.href)}
                  className="py-2 font-mono text-sm text-muted-foreground hover:text-primary text-left"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
