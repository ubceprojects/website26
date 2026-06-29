import type { Metadata } from "next";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { EVENTS, PHASES, type EventItem } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "The eProjects UBC season: ten events across an eight-month accelerator arc, from IGNITION to MERIDIAN.",
};

function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cloud/60 hover:shadow-[0_22px_60px_-26px_rgba(0,167,232,0.5)]">
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cloud/0 blur-2xl transition-all duration-500 group-hover:bg-cloud/20" />

      <div className="flex items-center justify-between gap-3">
        <span className="font-heading text-xs uppercase tracking-[0.18em] text-cloud">
          {event.when} · {event.time}
        </span>
        {event.flagship && (
          <span className="rounded-full bg-cloud/15 px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-[0.16em] text-cloud">
            Flagship
          </span>
        )}
      </div>

      <h3 className="mt-3 text-xl text-white">{event.name}</h3>
      <p className="mt-1 font-heading text-sm font-medium text-mist">
        {event.tagline}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-mist">{event.blurb}</p>

      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-line/70 pt-4 text-xs text-mist">
        <span className="rounded-full border border-line px-2.5 py-1">
          {event.where}
        </span>
        <span className="rounded-full border border-line px-2.5 py-1">
          {event.format}
        </span>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-20%] h-[420px] w-[760px] -translate-x-1/2 animate-drift rounded-full bg-cloud/20 blur-[130px]" />
          <div className="absolute inset-0 grid-mask opacity-50" />
        </div>

        <Container className="pb-8 pt-20 text-center sm:pt-24">
          <Reveal>
            <Eyebrow>The 2026–27 Season</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mx-auto mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
              Ten events. <span className="text-gradient">One arc.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-mist sm:text-lg">
              Every event is a step in an eight-month accelerator journey, from
              your first spark at IGNITION to going public at MERIDIAN. You
              don&apos;t just attend, you progress.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-8 flex justify-center">
              <Button href="/contact" size="lg">
                Become a Member
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Phases ---------- */}
      {PHASES.map((phase, phaseIndex) => {
        const events = EVENTS.filter((e) => e.phase === phase.id);
        const cols =
          events.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2";
        return (
          <Section key={phase.id} className={phaseIndex === 0 ? "pt-6" : ""}>
            <Container>
              <Reveal>
                <div className="flex flex-wrap items-end justify-between gap-3 border-b border-line/70 pb-5">
                  <div>
                    <h2 className="font-heading text-2xl font-bold text-white">
                      {phase.label}
                    </h2>
                    <p className="mt-1 text-sm text-mist">{phase.note}</p>
                  </div>
                  <span className="font-heading text-xs uppercase tracking-[0.2em] text-cloud">
                    {phase.window}
                  </span>
                </div>
              </Reveal>

              <div className={`mt-8 grid gap-5 ${cols}`}>
                {events.map((event, i) => (
                  <Reveal key={event.slug} delay={(i % 2) * 100}>
                    <EventCard event={event} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </Section>
        );
      })}

      {/* ---------- CTA ---------- */}
      <Section>
        <Container>
          <Reveal>
            <div className="brand-gradient relative overflow-hidden rounded-card px-8 py-16 text-center sm:px-16 sm:py-20">
              <div className="absolute inset-0 grid-mask opacity-20" />
              <div className="relative">
                <h2 className="display text-4xl text-white sm:text-5xl">
                  Don&apos;t miss the launch.
                </h2>
                <p className="mx-auto mt-5 max-w-md text-white/80">
                  The arc starts at IGNITION in September. Join now so you&apos;re
                  in the room from day one.
                </p>
                <div className="mt-9 flex justify-center">
                  <Button href="/contact" variant="white" size="lg">
                    Become a Member
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
