import { cn } from "@/lib/utils";

const toneClasses = {
  default: "border-white/10 bg-white/5 text-muted",
  accent: "border-accent/30 bg-accent/10 text-accent-bright",
  phase: "border-violet/30 bg-violet/10 text-[#c4b5fd]",
} as const;

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "phase";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em]",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
