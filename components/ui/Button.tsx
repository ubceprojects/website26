import Link from "next/link";
import { cn } from "@/lib/utils";

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 will-change-transform";

  const variantClass =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_8px_30px_-8px_rgba(59,130,246,0.7)] hover:bg-accent-bright hover:shadow-[0_12px_40px_-8px_rgba(96,165,250,0.85)] hover:-translate-y-0.5"
      : "border border-white/15 bg-white/[0.03] text-foreground hover:bg-white/[0.07] hover:border-white/25";

  const merged = cn(base, variantClass, className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={merged}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={merged}>
      {children}
    </Link>
  );
}
