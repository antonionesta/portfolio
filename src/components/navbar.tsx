"use client";

import { scrollToSection } from "@/lib/scroll-to-section";
import type { NavItem } from "@/types/portfolio";
import { ThemeToggle } from "@/components/theme-toggle";
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
          className="flex items-center gap-2 rounded-md border border-transparent font-mono text-sm font-semibold tracking-wider text-primary neon-text outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span>{brand}</span>
        </a>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => navigateTo(event, item.href)}
              className="rounded-md border border-transparent px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          {/* Toggle mobile */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-foreground outline-none transition-colors hover:text-primary focus-visible:border-primary md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
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
                  className="rounded-md border border-transparent py-2 text-left font-mono text-sm text-muted-foreground outline-none hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
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
