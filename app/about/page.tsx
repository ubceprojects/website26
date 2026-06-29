import type { Metadata } from "next";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { SITE, STATS, PHASES } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description:
    "eProjects UBC is a student-run startup accelerator — an eight-month, ten-event arc that turns curious students into builders. Where start-ups begin.",
};

export default function AboutPage() {
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
            <Eyebrow>About eProjects</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mx-auto mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
              More than a <span className="text-gradient">club.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-mist sm:text-lg">
              {SITE.blurb}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Narrative ---------- */}
      <Section className="pt-6">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-mist">
            <Reveal>
              <p>
                eProjects isn&apos;t a club you attend — it&apos;s an accelerator
                you move through. Over eight months, ten events take you from
                your first spark to launching something real.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <p>
                Every event is a deliberate step in a transformation arc: build
                the <span className="text-white">mindset</span>, get real{" "}
                <span className="text-white">access</span> to founders and
                investors, <span className="text-white">execute</span> under
                pressure, and finally <span className="text-white">launch</span>{" "}
                in front of the city at MERIDIAN.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>
                We&apos;re run entirely by students, for students — and we exist
                to prove UBC isn&apos;t a spectator campus. It&apos;s where
                start-ups begin.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* ---------- Stats ---------- */}
      <Container>
        <Reveal>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-line bg-line md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-surface px-6 py-8 text-center">
                <div className="display text-4xl text-gradient sm:text-5xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-2 text-sm text-mist">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>

      {/* ---------- The arc ---------- */}
      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>The arc</Eyebrow>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">
              An eight-month transformation, in four phases.
            </h2>
            <p className="mt-4 text-mist">
              The season is designed as a progression — each phase builds on the
              last, taking you from curiosity to a launched venture.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PHASES.map((phase, i) => (
              <Reveal key={phase.id} delay={i * 110}>
                <div className="group relative h-full overflow-hidden rounded-card border border-line bg-surface p-7 transition-colors hover:border-cloud/60">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cloud/0 blur-2xl transition-all duration-500 group-hover:bg-cloud/20" />
                  <span className="display text-5xl text-cloud/25 transition-colors group-hover:text-cloud/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg text-white">
                    {phase.label.split(" · ")[1]}
                  </h3>
                  <p className="mt-1 font-heading text-xs uppercase tracking-[0.16em] text-cloud">
                    {phase.window}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {phase.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="brand-gradient relative overflow-hidden rounded-card px-8 py-16 text-center sm:px-16 sm:py-20">
              <div className="absolute inset-0 grid-mask opacity-20" />
              <div className="relative">
                <h2 className="display text-4xl text-white sm:text-6xl">
                  Start your arc.
                </h2>
                <p className="mx-auto mt-5 max-w-md text-white/80">
                  The journey begins at IGNITION every September. Find your way
                  in — as a member or on the team.
                </p>
                <div className="mt-9 flex justify-center">
                  <Button href="/contact" variant="white" size="lg">
                    Get Involved
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
