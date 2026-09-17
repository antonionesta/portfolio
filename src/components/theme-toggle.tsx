"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

export function ThemeToggle() {
  // null finché non montato: il server non conosce il tema reale (dipende da
  // localStorage/system), quindi il primo render client deve restare identico
  // a quello SSR per evitare un hydration mismatch. Lo script inline in
  // layout.tsx ha già applicato la classe .dark corretta prima dell'hydration;
  // qui la leggiamo solo per sincronizzare l'icona del bottone.
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  useEffect(() => {
    if (theme === null) {
      return;
    }
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  if (theme === null) {
    return (
      <button
        type="button"
        aria-hidden="true"
        disabled
        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={`Attiva tema ${theme === "dark" ? "chiaro" : "scuro"}`}
      onClick={toggleTheme}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-transparent text-muted-foreground outline-none transition-colors hover:text-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
