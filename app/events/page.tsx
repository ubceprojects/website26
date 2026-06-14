import type { Metadata } from "next";

import { PHASES, getEventsByPhase } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { EventCard } from "@/components/EventCard";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <>
      {/* ----------------------------------------------------------- */}
      {/* SECTION 1 — HERO                                            */}
      {/* ----------------------------------------------------------- */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-32 sm:px-8 sm:pt-40">
        <div
          className="glow-accent pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2"
          aria-hidden="true"
        />

        <Reveal className="relative">
          <span className="eyebrow block mb-5">The Event Arc · 2026 – 27</span>

          <h1 className="text-gradient max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Ten events.{" "}
            <span className="text-gradient-accent">One transformation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            The year is a single deliberate arc — four phases, ten flagship
            events, September to March, each one engineered to raise the stakes
            from the last. You do not attend the year. You move through it.
          </p>

          <p className="mt-8 font-mono text-sm tracking-[0.14em] text-subtle">
            4 phases · 10 events · Sept &rarr; March
          </p>
        </Reveal>
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 2 — PHASE TIMELINE                                  */}
      {/* ----------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8">
        <PhaseTimeline className="mt-4" />
      </section>

      {/* ----------------------------------------------------------- */}
      {/* SECTION 3 — PHASE BY PHASE                                  */}
      {/* ----------------------------------------------------------- */}
      {PHASES.map((phase) => {
        const events = getEventsByPhase(phase.id);

        return (
          <section
            key={phase.id}
            className="relative mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20"
          >
            {/* Phase header */}
            <Reveal>
              <div className="flex items-center gap-5">
                <span
                  className="font-mono text-5xl font-semibold leading-none tracking-tight text-white/10 sm:text-6xl"
                  aria-hidden="true"
                >
                  {String(phase.id).padStart(2, "0")}
                </span>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <Badge tone="phase">
                    Phase {phase.id} · {phase.theme}
                  </Badge>
                  <span className="font-mono text-sm text-subtle">
                    {phase.months}
                  </span>
                </div>
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                <span className="text-gradient-accent">{phase.theme}</span>
                {phase.theme === "Mindset"
                  ? " — the shift before the work."
                  : phase.theme === "Access"
                    ? " — the doors begin to open."
                    : phase.theme === "Execution"
                      ? " — from learning to shipping."
                      : " — step into the room for real."}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {phase.blurb}
              </p>
            </Reveal>

            {/* Event grid */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e, i) => (
                <EventCard event={e} index={i} key={e.id} />
              ))}
            </div>

            {/* Progression divider between phases */}
            {phase.id < PHASES.length ? (
              <div
                className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent sm:mt-20"
                aria-hidden="true"
              />
            ) : null}
          </section>
        );
      })}

      {/* ----------------------------------------------------------- */}
      {/* SECTION 4 — CTA                                             */}
      {/* ----------------------------------------------------------- */}
      <CTA
        title={
          <>
            Your seat in the{" "}
            <span className="text-gradient-accent">room</span> is waiting.
          </>
        }
        description="Membership opens each fall. The arc only works if you are in it from the start."
        className="py-24 sm:py-32"
      />
    </>
  );
}
