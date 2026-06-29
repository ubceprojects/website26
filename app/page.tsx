import Image from "next/image";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { Marquee } from "@/components/Marquee";
import { SITE, STATS, PILLARS, EVENTS } from "@/lib/data";

const pillarIcons = [
  // Build
  <svg key="b" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-6h6v6" />
  </svg>,
  // Connect
  <svg key="c" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="12" cy="18" r="2.5" />
    <path d="M7.7 7.6 10.6 16M16.3 7.6 13.4 16" />
  </svg>,
  // Launch
  <svg key="l" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 14c-1.5 1.5-2 5-2 5s3.5-.5 5-2M14 4s4-2 6 0 0 6 0 6l-6 6-4-4 4-8Z" /><path d="M9 9 6 8" />
  </svg>,
];

export default function HomePage() {
  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        {/* aurora background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-[20%] top-[-12%] h-[460px] w-[460px] animate-drift rounded-full bg-cloud/25 blur-[130px]" />
          <div className="absolute right-[12%] top-[10%] h-[380px] w-[380px] animate-drift rounded-full bg-skynet/20 blur-[130px] [animation-delay:-6s]" />
          <div className="absolute left-1/2 top-[40%] h-[320px] w-[520px] -translate-x-1/2 animate-drift rounded-full bg-ocean/20 blur-[130px] [animation-delay:-11s]" />
          <div className="absolute inset-0 grid-mask opacity-50" />
        </div>

        <Container className="flex flex-col items-center pb-10 pt-20 text-center sm:pt-28">
          <Reveal>
            <Image
              src="/brand/logo-coin.png"
              alt="eProjects UBC"
              width={104}
              height={104}
              priority
              className="animate-floaty glow-cloud rounded-full"
            />
          </Reveal>

          <Reveal delay={100} className="mt-8">
            <Eyebrow>UBC&apos;s Student Startup Accelerator</Eyebrow>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="display mt-6 text-5xl text-white sm:text-7xl md:text-[5.5rem]">
              Where <span className="text-gradient">Start-Ups</span> Begin
            </h1>
          </Reveal>

          <Reveal delay={250}>
            <p className="mt-6 max-w-xl text-base text-mist sm:text-lg">
              {SITE.blurb}
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact" size="lg">
                Become a Member
              </Button>
              <Button href="/events" variant="ghost" size="lg">
                Explore Events
              </Button>
            </div>
          </Reveal>
        </Container>

      </section>

      {/* ---------- Marquee ---------- */}
      <Marquee items={EVENTS.map((e) => e.name.split(" — ")[0])} />

      {/* ---------- Stats ---------- */}
      <Container className="mt-16">
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

      {/* ---------- Pillars ---------- */}
      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 text-3xl text-white sm:text-4xl">
              From idea to launch, in one community.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.no} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-card border border-line bg-surface p-7 transition-colors hover:border-cloud/60">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cloud/0 blur-2xl transition-all duration-500 group-hover:bg-cloud/20" />
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-night text-cloud">
                      {pillarIcons[i]}
                    </span>
                    <span className="display text-4xl text-cloud/25 transition-colors group-hover:text-cloud/60">
                      {p.no}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl text-white">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Community ---------- */}
      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-line">
              <div className="relative aspect-[16/11] w-full sm:aspect-[21/9]">
                <Image
                  src="/community.jpg"
                  alt="eProjects UBC members together at an event"
                  fill
                  sizes="(max-width: 768px) 100vw, 1152px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night via-night/55 to-night/10" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10">
                <Eyebrow>The community</Eyebrow>
                <h2 className="display mt-4 max-w-2xl text-3xl text-white sm:text-5xl">
                  A room full of builders.
                </h2>
                <p className="mt-3 max-w-md text-sm text-mist sm:text-base">
                  Hundreds of students show up, connect, and build together
                  across the season — this is what you&apos;re joining.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* ---------- Events ---------- */}
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-[-15%] top-1/3 -z-10 h-[420px] w-[600px] animate-drift rounded-full bg-skynet/15 blur-[120px]" />
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="max-w-2xl">
                <Eyebrow>The season</Eyebrow>
                <h2 className="mt-5 text-3xl text-white sm:text-4xl">
                  Ten events. One arc.
                </h2>
              </div>
              <Button href="/events" variant="ghost">
                See all 10 events
              </Button>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.slice(0, 6).map((e, i) => (
              <Reveal key={e.slug} delay={(i % 3) * 90}>
                <div className="flex h-full flex-col rounded-card border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cloud/60 hover:shadow-[0_18px_50px_-20px_rgba(0,167,232,0.45)]">
                  <span className="font-heading text-xs uppercase tracking-[0.18em] text-cloud">
                    {e.when}
                  </span>
                  <h3 className="mt-2 text-lg text-white">
                    {e.name.split(" — ")[0]}
                  </h3>
                  <div className="mt-5 flex items-center justify-between text-xs text-mist">
                    <span>{e.where}</span>
                    <span className="rounded-full border border-line px-2.5 py-1">
                      {e.format}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section>
        <Container>
          <Reveal>
            <div className="brand-gradient relative overflow-hidden rounded-card px-8 py-16 text-center sm:px-16 sm:py-20">
              <div className="absolute inset-0 grid-mask opacity-20" />
              <Image
                src="/brand/mascot-ebulb.png"
                alt=""
                aria-hidden
                width={150}
                height={170}
                className="animate-floaty pointer-events-none absolute -bottom-4 right-4 hidden w-28 opacity-90 sm:block lg:right-16 lg:w-36"
              />
              <div className="relative">
                <h2 className="display text-4xl text-white sm:text-6xl">
                  Ready to build?
                </h2>
                <p className="mx-auto mt-5 max-w-md text-white/80">
                  Join a community of student founders and turn your idea into a
                  real venture this year.
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
