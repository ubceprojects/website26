import type { Metadata } from "next";
import { TEAM_GROUPS, getTeamByGroup, TEAM } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/TeamCard";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Team",
};

export default function TeamPage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-12 sm:px-8 sm:pt-40 sm:pb-16">
        <div
          className="glow-accent pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] -translate-x-1/2"
          aria-hidden="true"
        />
        <Reveal className="relative">
          <span className="eyebrow block mb-5">The Team · 2026 – 27</span>
          <h1 className="text-gradient max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            The people <span className="text-gradient-accent">building it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            A tight, ambitious team of builders, operators, designers, and
            strategists running the accelerator — shipping every event, partnership,
            and platform that makes eProjects more than a club.
          </p>
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            {TEAM.length} builders across 6 teams
          </p>
        </Reveal>
      </section>

      {/* SECTION 2 — GROUPED ROSTER */}
      {TEAM_GROUPS.map((group) => {
        const members = getTeamByGroup(group);
        if (members.length === 0) return null;

        const isLeadership = group === "Leadership";
        const isJoining = group === "Joining Us";

        return (
          <section
            key={group}
            className="mx-auto w-full max-w-7xl px-6 py-12 sm:px-8 sm:py-16"
          >
            <Reveal>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <Badge tone={isLeadership ? "accent" : "default"}>{group}</Badge>
                <span className="font-mono text-xs text-subtle">
                  {members.length} {members.length === 1 ? "member" : "members"}
                </span>
                <span
                  className="hidden h-px flex-1 bg-white/10 sm:block"
                  aria-hidden="true"
                />
              </div>
              {isJoining && (
                <p className="mt-3 text-sm text-muted">
                  Roles being finalized for the year ahead.
                </p>
              )}
            </Reveal>

            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {members.map((m, i) => (
                <TeamCard member={m} index={i} key={m.name} />
              ))}
            </div>
          </section>
        );
      })}

      {/* SECTION 3 — CTA */}
      <div className="py-24 sm:py-32">
        <CTA
          title={
            <>
              Want to <span className="text-gradient-accent">build with us?</span>
            </>
          }
          description="We recruit ambitious students each year across every team. If you want to help run UBC's accelerator, reach out."
        />
      </div>
    </>
  );
}
