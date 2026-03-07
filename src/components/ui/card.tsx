import type { HTMLAttributes } from "react";

export function Card({ className = "", ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[var(--surface-soft)] p-6 backdrop-blur-md ${className}`}
      {...props}
    />
  );
}
