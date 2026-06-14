"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function CTA({
  title,
  description,
  className,
}: {
  title?: React.ReactNode;
  description?: string;
  className?: string;
}) {
  const defaultTitle = (
    <>
      Stop watching. <span className="text-gradient-accent">Start building.</span>
    </>
  );

  const defaultDescription =
    "eProjects is where curious students become serious builders. Applications open each fall — claim your place in the cohort.";

  return (
    <section className={cn("mx-auto max-w-7xl px-6 sm:px-8", className)}>
      <div className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center sm:py-20">
        <div
          className="glow-accent pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        />
        <div
          className="grid-bg mask-fade pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <Reveal className="relative z-10 mx-auto max-w-3xl">
          <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            {title ?? defaultTitle}
          </h2>
          <p className="mt-5 text-base text-muted sm:text-lg">
            {description ?? defaultDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Apply to join <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/events" variant="secondary">
              Explore the arc
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
