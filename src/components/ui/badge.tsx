import type { HTMLAttributes } from "react";

export function Badge({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-white/10 bg-zinc-800/60 px-2.5 py-1 text-xs text-zinc-200 ${className}`}
      {...props}
    />
  );
}
