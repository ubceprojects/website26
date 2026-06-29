import type { Metadata } from "next";
import Image from "next/image";
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

        <Container className="pt-10 sm:pt-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line/70 shadow-[0_30px_80px_-40px_rgba(0,167,232,0.45)]">
              <div className="relative aspect-[1747/954] w-full">
                <Image
                  src="/team-2026.jpg"
                  alt="The eProjects UBC team together at their first summer social, May 2026"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/45 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
                <Eyebrow>The eTeam · 2026–27</Eyebrow>
                <h1 className="display mt-4 max-w-2xl text-4xl text-white sm:text-6xl">
                  Meet the <span className="text-gradient">builders.</span>
                </h1>
                <p className="mt-3 max-w-xl text-sm text-mist sm:text-base">
                  The students behind every event, partnership, and pixel —
                  running eProjects across six departments.
                </p>
              </div>
            </div>
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
