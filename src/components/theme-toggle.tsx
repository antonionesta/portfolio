"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("dark");

  useEffect(() => {
    // Mantiene lo stato UI allineato al tema effettivo scelto a runtime.
    // Viene eseguito solo lato client (localStorage + matchMedia sono API browser).
    const root = document.documentElement;
    const storedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme: ThemeMode =
      storedTheme === "light" || storedTheme === "dark"
        ? (storedTheme as ThemeMode)
        : systemPrefersDark
          ? "dark"
          : "light";

    root.classList.toggle("dark", nextTheme === "dark");
    setTheme(nextTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Fonte unica di verita: aggiorna classe DOM + persiste preferenza + aggiorna stato React.
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  return (
    <button
      type="button"
      aria-label={mounted ? `Attiva tema ${theme === "dark" ? "chiaro" : "scuro"}` : "Cambia tema"}
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary/50 text-muted-foreground transition-all hover:border-primary hover:text-primary"
    >
      {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
