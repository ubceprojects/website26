import type { Metadata } from "next";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { TEAM, TEAM_DEPARTMENTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the eTeam — the students building eProjects UBC across leadership, technology, marketing, corporate relations, finance, and operations.",
};

export default function TeamPage() {
  const president = TEAM.find((m) => m.tier === "president");
  const vps = TEAM.filter((m) => m.tier === "vp");

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
            <Eyebrow>The eTeam · 2026–27</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mx-auto mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
              Meet the <span className="text-gradient">builders.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-mist sm:text-lg">
              The students behind every event, partnership, and pixel — running
              eProjects across six departments.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Executive ---------- */}
      <Section className="pt-6">
        <Container>
          <Reveal>
            <div className="border-b border-line/70 pb-5">
              <h2 className="font-heading text-2xl font-bold text-white">
                Executive Team
              </h2>
              <p className="mt-1 text-sm text-mist">
                The leadership steering the year.
              </p>
            </div>
          </Reveal>

          {president && (
            <Reveal className="mt-8 flex justify-center">
              <TeamCard member={president} featured />
            </Reveal>
          )}

          <div className="mt-5 flex flex-wrap justify-center gap-4">
            {vps.map((member, i) => (
              <Reveal key={member.slug} delay={(i % 3) * 90} className="w-full sm:w-auto">
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Coordinators by department ---------- */}
      {TEAM_DEPARTMENTS.map((dept) => {
        const members = TEAM.filter(
          (m) => m.tier === "coordinator" && m.department === dept,
        );
        if (members.length === 0) return null;
        return (
          <Section key={dept} className="pt-0">
            <Container>
              <Reveal>
                <div className="border-b border-line/70 pb-5">
                  <h2 className="font-heading text-2xl font-bold text-white">
                    {dept}
                  </h2>
                </div>
              </Reveal>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {members.map((member, i) => (
                  <Reveal
                    key={member.slug}
                    delay={(i % 4) * 80}
                    className="w-full sm:w-auto"
                  >
                    <TeamCard member={member} />
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
                  Want to build with us?
                </h2>
                <p className="mx-auto mt-5 max-w-md text-white/80">
                  We recruit each year. Become a member, show up, and the team is
                  how it grows.
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
