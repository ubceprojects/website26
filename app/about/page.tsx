import type { Metadata } from "next";
import {
  CalendarRange,
  Compass,
  Users,
  Handshake,
  LayoutGrid,
  Route,
  Building2,
  Hammer,
  Trophy,
  UsersRound,
  MapPin,
} from "lucide-react";
import { SITE, PILLARS } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PhaseTimeline } from "@/components/PhaseTimeline";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = { title: "About" };

/* Resolve pillar icons by id (icon name lives in data, component lives here). */
const PILLAR_ICONS: Record<string, typeof CalendarRange> = {
  events: CalendarRange,
  mentorship: Compass,
  community: Users,
  "corporate-relations": Handshake,
  platform: LayoutGrid,
};

const WHY = [
  {
    icon: Route,
    title: "An arc, not a calendar",
    description:
      "Every event is engineered to move you forward — not a loose list of mixers, but a deliberate 8-month progression from mindset to launch.",
  },
  {
    icon: Building2,
    title: "Real rooms, real people",
    description:
      "Microsoft, EY, and Amazon. YC founders and C-suite executives. You sit at the table, not in the audience.",
  },
  {
    icon: Hammer,
    title: "Building over talking",
    description:
      "Buildathons, hackathons, and pitchathons. You ship prototypes and pitch real investors — you do not just attend.",
  },
  {
    icon: Trophy,
    title: "Top Small Club 2024 / 25",
    description:
      "Recognized as UBC's best small club — a signal that the work, the rooms, and the outcomes are taken seriously.",
  },
  {
    icon: UsersRound,
    title: "2,700+ strong community",
    description:
      "An ambitious cohort of builders who push each other to ship, pitch, and grow far beyond what they thought possible.",
  },
  {
    icon: MapPin,
    title: "Vancouver ecosystem access",
    description:
      "Plugged directly into the city's fast-growing startup scene — its offices, its founders, and the people who run it.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ----------------------------------------------------------------- */}
      {/* SECTION 1 — INTRO / HERO                                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-32 sm:px-8 sm:pt-40">
        <div
          className="glow-accent pointer-events-none absolute -top-24 left-0 h-[420px] w-[620px] max-w-full"
          aria-hidden="true"
        />
        <Reveal className="relative">
          <Badge tone="accent">About {SITE.shortName}</Badge>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-gradient sm:text-5xl md:text-6xl">
            We do not run a club. We run an{" "}
            <span className="text-gradient-accent">accelerator.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {SITE.name} connects aspiring entrepreneurs and innovators with the
            resources, opportunities, and industry connections to thrive in
            Vancouver&apos;s fast-growing startup ecosystem.
          </p>
        </Reveal>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTION 2 — THE TRANSFORMATION ARC                                */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeading
          eyebrow="The Transformation Arc"
          title={
            <>
              An 8-month journey from{" "}
              <span className="text-gradient-accent">0 to 100.</span>
            </>
          }
          description="What sets eProjects apart is its arc — a structured year that moves members from curiosity to launch-ready. By the end, members have built prototypes, pitched real investors, sat with C-suite executives, and walked the floors of real startup offices."
        />
        <PhaseTimeline className="mt-16" />
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTION 3 — WHY EPROJECTS                                         */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why eProjects"
          title={
            <>
              Not another <span className="text-gradient-accent">resume line.</span>
            </>
          }
          description="What makes this different from a standard student club."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 6) * 0.07}>
                <div className="card-glow glass h-full rounded-2xl p-7">
                  <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                    <Icon className="h-5 w-5 text-accent-bright" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTION 4 — FIVE PILLARS                                          */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="How we operate"
          title={
            <>
              Five <span className="text-gradient-accent">pillars.</span>
            </>
          }
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, index) => {
            const Icon = PILLAR_ICONS[pillar.id] ?? LayoutGrid;
            return (
              <Reveal key={pillar.id} delay={(index % 6) * 0.07}>
                <div className="card-glow glass h-full rounded-2xl p-7">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-accent-bright" aria-hidden="true" />
                    </div>
                    {pillar.comingSoon ? (
                      <Badge tone="accent">Coming soon</Badge>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                    {pillar.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTION 5 — MANIFESTO                                             */}
      {/* ----------------------------------------------------------------- */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-strong px-8 py-20 text-center sm:py-28">
          <div
            className="glow-accent pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2"
            aria-hidden="true"
          />
          <Reveal className="relative z-10 mx-auto max-w-4xl">
            <span className="eyebrow block">Our manifesto</span>
            <p className="mt-7 text-2xl font-semibold leading-snug tracking-tight text-gradient sm:text-3xl md:text-4xl">
              eProjects is not a line on your resume.{" "}
              <span className="text-gradient-accent">It is the room</span> where
              you stop waiting for permission — and start building the thing you
              cannot stop thinking about.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------------------- */}
      {/* SECTION 6 — CTA                                                   */}
      {/* ----------------------------------------------------------------- */}
      <CTA className="pb-24 sm:pb-32" />
    </>
  );
}
