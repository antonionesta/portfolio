"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

export function ThemeToggle() {
  // Il tema viene letto dalla classe .dark, la quale è già stata applicata dallo
  // script inline in layout.tsx prima dell'hydration. Lato server il tema reale
  // non è noto, pertanto lo snapshot è null e il primo render client resta
  // identico a quello SSR, in modo da evitare un hydration mismatch.
  const theme = useSyncExternalStore(subscribeToTheme, getTheme, getServerTheme);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  if (theme === null) {
    return (
      <button
        type="button"
        aria-hidden="true"
        disabled
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-muted-foreground"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Attiva tema ${theme === "dark" ? "chiaro" : "scuro"}`}
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-transparent text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}

function subscribeToTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => {
    observer.disconnect();
  };
}

function getTheme(): ThemeMode {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerTheme(): ThemeMode | null {
  return null;
}
