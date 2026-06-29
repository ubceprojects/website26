import Link from "next/link";
import type { ReactNode } from "react";

export function Container({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-6 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-8 sm:py-11 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-heading text-xs font-medium uppercase tracking-[0.22em] text-cloud">
      {children}
    </span>
  );
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-heading font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud/60";

const buttonSizes = {
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const buttonVariants = {
  primary:
    "bg-cloud text-midnight hover:bg-skynet hover:shadow-[0_0_34px_-6px_rgba(0,167,232,0.75)]",
  ghost: "border border-line text-white hover:border-cloud hover:text-cloud",
  white: "bg-white text-midnight hover:bg-mist",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: ButtonProps) {
  const cls = `${buttonBase} ${buttonSizes[size]} ${buttonVariants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return <button className={cls}>{children}</button>;
}
