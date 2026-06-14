import { ArrowRight, Eye, Hammer, Rocket, Sparkles, Users } from "lucide-react";

import { EVENTS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { StatBar } from "@/components/StatBar";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { EventCard } from "@/components/EventCard";
import { CTA } from "@/components/CTA";

export const metadata = {
  description:
    "eProjects UBC is an 8-month student startup accelerator that takes UBC students from curiosity to launch-ready — building alongside founders, investors, and partners like Microsoft, EY, and Amazon.",
};

const TRANSFORMATIONS = [
  {
    icon: Eye,
    title: "Curiosity → Conviction",
    line: "You arrive unsure. You leave certain you can build.",
  },
  {
    icon: Hammer,
    title: "Learning → Building",
    line: "Talks become buildathons. Notes become shipped prototypes.",
  },
  {
    icon: Users,
    title: "Networking → Shipping",
    line: "Connections turn into co-founders and real launches.",
  },
  {
    icon: Rocket,
    title: "Student → Founder",
    line: "Walk out pitching to investors and partners who matter.",
  },
] as const;

export default function HomePage() {
  const ignition = EVENTS.find((e) => e.id === "ignition");
  const rnd = EVENTS.find((e) => e.id === "rnd");
  const meridian = EVENTS.find((e) => e.id === "meridian");
  const marquee = [ignition, rnd, meridian].filter(
    (e): e is NonNullable<typeof e> => Boolean(e)
  );

  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative flex min-h-[90vh] items-center pt-32 sm:pt-40">
        {/* Local decorative layer */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="glow-accent absolute left-1/2 top-0 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/4" />
          <div className="grid-bg mask-fade absolute inset-0" />
        </div>

        <div className="mx-auto w-full max-w-7xl px-6 text-center sm:px-8">
          <Reveal>
            <Badge tone="accent" className="mx-auto">
              <Sparkles className="h-3.5 w-3.5" />
              Top Small Club · UBC 2024 / 25
            </Badge>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="text-gradient mt-6 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Where builders
              <br />
              <span className="text-gradient-accent">are made.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted sm:text-xl">
              An 8-month accelerator that takes UBC students from curiosity to
              launch-ready — building alongside founders, investors, and
              partners like Microsoft, EY, and Amazon.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary">
                Apply to join
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="/events" variant="secondary">
                See the event arc
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-subtle">
              In the room with Microsoft · EY · Amazon · YC founders
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — STATS */}
      <section className="mx-auto -mt-6 max-w-7xl px-6 sm:px-8">
        <StatBar />
      </section>

      {/* SECTION 3 — WHAT IS EPROJECTS */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="Not a club. An accelerator."
          title={
            <>
              From <span className="text-gradient-accent">0 to 100</span> in
              eight months.
            </>
          }
          description="eProjects is a full-year accelerator disguised as a club. Every event is engineered to move you further along one arc — from curious observer to serious builder."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TRANSFORMATIONS.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 6) * 0.07}>
                <div className="glass card-glow group flex h-full flex-col rounded-2xl p-6">
                  <span className="glass flex h-11 w-11 items-center justify-center rounded-xl">
                    <Icon className="h-5 w-5 text-accent-bright" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.line}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* SECTION 4 — THE ARC TEASER */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          align="center"
          eyebrow="The Transformation Arc"
          title={
            <>
              The year, as a{" "}
              <span className="text-gradient-accent">journey.</span>
            </>
          }
          description="Ten flagship events across four phases — from your first spark in September to a 1,000-person conference in March."
        />

        <PhaseTimeline className="mt-16" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {marquee.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/events" variant="secondary">
            Explore all 10 events
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* SECTION 5 — CTA */}
      <CTA className="py-24 sm:py-32" />
    </>
  );
}
