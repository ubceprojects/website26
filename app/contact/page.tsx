import type { Metadata } from "next";
import { Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { SOCIALS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Two ways to join eProjects UBC — become a member for the events, or join the team that runs them. Applications open September 2026.",
};

const joinPaths = [
  {
    title: "Become a Member",
    body: "Get on the list for all ten events across the eight-month arc — from IGNITION to MERIDIAN. Show up, build, and grow with the community.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l2.5 5.2 5.7.8-4.1 4 1 5.7L12 21l-5.1 2.7 1-5.7-4.1-4 5.7-.8L12 3z" />
      </svg>
    ),
  },
  {
    title: "Join the Team",
    body: "Help run the accelerator. Coordinator and executive roles across technology, marketing, corporate relations, finance, and operations — the people behind every event.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13A4 4 0 0 1 16 11" />
      </svg>
    ),
  },
];

const connect = [
  { label: "Email", value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { label: "Instagram", value: "@ubceprojects", href: SOCIALS.instagram },
  { label: "LinkedIn", value: "eProjects UBC", href: SOCIALS.linkedin },
];

export default function ContactPage() {
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
            <Eyebrow>Get Involved</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display mx-auto mt-6 max-w-3xl text-5xl text-white sm:text-7xl">
              Two ways <span className="text-gradient">in.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-mist sm:text-lg">
              Join eProjects as a member to experience the events, or join the
              team that builds them. Applications open with IGNITION this fall.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------- Join paths ---------- */}
      <Section className="pt-6">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
            {joinPaths.map((path, i) => (
              <Reveal key={path.title} delay={i * 120}>
                <div className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface p-8 transition-colors hover:border-cloud/60">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-cloud/0 blur-2xl transition-all duration-500 group-hover:bg-cloud/20" />

                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-line bg-night text-cloud">
                      {path.icon}
                    </span>
                    <span className="rounded-full bg-cloud/15 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-[0.16em] text-cloud">
                      Opens Sept 2026
                    </span>
                  </div>

                  <h2 className="mt-6 text-2xl text-white">{path.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                    {path.body}
                  </p>

                  <span
                    aria-disabled="true"
                    className="mt-7 inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-full border border-line px-6 py-3 font-heading text-sm font-semibold text-mist"
                  >
                    Applications open soon
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-6 text-center text-sm text-mist">
              Both intake forms go live in <span className="text-cloud">September 2026</span>. Follow along below so you don&apos;t miss them.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- Connect ---------- */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="border-b border-line/70 pb-5">
              <h2 className="font-heading text-2xl font-bold text-white">
                In the meantime
              </h2>
              <p className="mt-1 text-sm text-mist">
                Questions, sponsorships, or just want to say hi? Reach us here.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {connect.map((item, i) => (
              <Reveal key={item.label} delay={i * 90}>
                <a
                  href={item.href}
                  className="group flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cloud/60 hover:shadow-[0_18px_50px_-20px_rgba(0,167,232,0.45)]"
                >
                  <span className="font-heading text-xs uppercase tracking-[0.18em] text-cloud">
                    {item.label}
                  </span>
                  <span className="mt-2 text-base text-white group-hover:text-cloud">
                    {item.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-6 text-xs text-mist/70">
              {/* TODO: confirm SOCIALS (email / handles) in lib/data.ts before launch. */}
              Contact details are placeholders pending confirmation.
            </p>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
