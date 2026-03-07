import type { ReactNode } from "react";

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <section id={id} className={`mx-auto max-w-7xl px-4 py-24 sm:px-8 ${className}`}>
      <p className="mb-3 font-mono text-lg text-emerald-300">// {eyebrow.toUpperCase()}</p>
      <h2 className="mb-10 text-4xl font-bold text-white sm:text-6xl">
        {title.split(" ").slice(0, -1).join(" ")}{" "}
        <span className="text-emerald-300">{title.split(" ").slice(-1)}</span>
      </h2>
      {children}
    </section>
  );
}
