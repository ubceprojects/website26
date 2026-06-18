"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: EASE },
};

const display = "[font-family:'League_Spartan',sans-serif] tracking-tight";

const arcPhases = [
  {
    phase: "01",
    title: "Mindset",
    blurb: "Talks and fireside chats that shift how you see opportunity.",
    image: "/mindset.webp",
  },
  {
    phase: "02",
    title: "Access",
    blurb: "Doors into VCs, founders, and partner companies.",
    image: "/access.webp",
  },
  {
    phase: "03",
    title: "Execution",
    blurb: "Hands-on sprints where ideas get built in real teams.",
    image: "/execution.webp",
  },
  {
    phase: "04",
    title: "Launch",
    blurb: "A capstone showcase where teams ship to founders and VCs.",
    image: "/launch.webp",
  },
];

const stats = [
  { value: "Top Small Club", label: "UBC AMS · 2024 / 25", icon: "/trophy.svg", isLogo: false },
  { value: "2,700+", label: "Community", icon: "/community.svg", isLogo: false },
  { value: "10", label: "Events / year", icon: "/calendar.svg", isLogo: false },
  { value: "", label: "Partners", icon: null, isLogo: true, logos: ["/microsoft.png", "/ey-white-logo.png.rendition.3840.2560.png"] },
];

export default function HomePage() {
  return (
    <main>
      {/* ============================== HERO ============================== */}
      <section className="relative overflow-hidden">
        {/* Background image + brand gradient wash */}
        <div className="absolute inset-0">
          {/* Swap for a real eProjects photo from the marketing drive */}
          <img
            src="/Justin-eProjects-Tech-Intra-Picks-18.jpg"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#012241] via-[#012241]/85 to-[#00a7e8]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#012241] via-[#012241]/60 to-transparent" />
        </div>

        {/* Ambient glow removed */}

        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-center px-6 py-24 lg:px-8">
          <motion.div {...fadeUp}>
            <span className="mb-5 inline-block text-xs uppercase tracking-[0.22em] text-[#7cd4ff]">
              Where start-ups begin · UBC
            </span>

            {/* Gradient-text headline */}
            <h1 className={`max-w-4xl ${display} text-6xl font-bold leading-[0.92] sm:text-7xl lg:text-8xl`}>
              <span className="bg-gradient-to-r from-white via-white to-[#00a7e8] bg-clip-text text-transparent">
                Build something
              </span>
              <span className="block bg-gradient-to-r from-[#00a7e8] to-[#7cd4ff] bg-clip-text text-transparent">
                that ships.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              eProjects is UBC&apos;s premier start-up community - built to take
              student founders from a first idea to a launched venture.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#00a7e8] px-6 py-3 text-sm font-medium text-[#012241] transition-colors hover:bg-[#7cd4ff]"
              >
                Join the community
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#arc"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                Explore the arc
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================= WHAT IS EPROJECTS ===================== */}
      <section id="about" className="px-6 pt-12 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-6 flex items-baseline gap-3">
            <span className="text-[#00a7e8]">✺</span>
            <h2 className={`${display} text-3xl font-bold uppercase sm:text-4xl`}>
              What <span className="font-light text-[#00a7e8]">is eProjects</span>
            </h2>
          </motion.div>

          <motion.p {...fadeUp} className="max-w-3xl text-lg text-white/75 sm:text-xl">
            A launchpad for ambitious student entrepreneurs. From first-time
            builders to second-time founders, we connect you with the mindset,
            access, and execution chops to turn an idea into a real venture.
          </motion.p>
        </div>
      </section>

      {/* ========================= EVENT ARC TEASER ====================== */}
      <section id="arc" className="px-6 pt-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="mb-8 flex items-baseline gap-3">
            <span className="text-[#00a7e8]">✺</span>
            <h2 className={`${display} text-3xl font-bold uppercase sm:text-4xl`}>
              The <span className="font-light text-[#00a7e8]">Event Arc</span>
            </h2>
          </motion.div>

          {/* Glassmorphism cards - one per phase */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {arcPhases.map((p, i) => (
              <motion.a
                key={p.phase}
                href={`#${p.title.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                className="group relative flex min-h-[15rem] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/5 pt-3 px-4 pb-4 sm:pt-4 sm:px-5 sm:pb-5 backdrop-blur-xl transition-colors hover:border-[#00a7e8]/40 hover:bg-white/[0.07]"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-[#00a7e8]/0 blur-2xl transition-all duration-500 group-hover:bg-[#00a7e8]/20" />

                <div className="flex items-center justify-between">
                  <span className={`${display} text-sm text-[#00a7e8]`}>{p.phase}</span>
                  <ArrowUpRight className="size-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#00a7e8]" />
                </div>

                <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl -mx-6 -mb-6">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black/60 p-3">
                    <div className="flex flex-col justify-end text-white">
                      <h3 className={`${display} text-lg font-bold uppercase leading-tight`}>{p.title}</h3>
                      <p className="mt-1 text-[0.72rem] leading-4 text-white/80">{p.blurb}</p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ STATS BAR ========================== */}
      <section id="partners" className="px-6 pt-24 lg:px-8">
        <motion.div
          {...fadeUp}
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <div className="grid divide-white/10 sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col px-6 py-8 sm:px-8">
                {s.isLogo ? (
                  <div className="mb-3 flex min-h-[60px] items-center gap-4">
                    {s.logos?.map((logo) => (
                      <Image
                        key={logo}
                        src={logo}
                        alt="Partner logo"
                        width={logo.includes("microsoft") ? 80 : 50}
                        height={50}
                        className="h-auto w-auto"
                      />
                    ))}
                  </div>
                ) : (
                  <>
                    {s.icon && (
                      <div className="mb-3 flex h-[40px] items-center">
                        <Image
                          src={s.icon}
                          alt={s.label}
                          width={40}
                          height={40}
                        />
                      </div>
                    )}
                    <div className={`${display} text-2xl font-bold text-white`}>{s.value}</div>
                  </>
                )}
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/60">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* =========================== CLOSING CTA ========================= */}
      <section className="px-6 py-28 lg:px-8">
        <motion.div
          {...fadeUp}
          className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:flex-row sm:items-center sm:p-12"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full bg-[#00a7e8]/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-[#05527b]/40 blur-3xl" />

          <div className="relative">
            <h2 className={`${display} text-3xl font-bold uppercase sm:text-4xl`}>
              Ready to build <span className="font-light text-[#00a7e8]">with us</span>?
            </h2>
            <p className="mt-2 max-w-md text-sm text-white/70">
              Applications open every fall. Events run year-round - come to one,
              then come back.
            </p>
          </div>

          <div className="relative flex flex-wrap gap-3">
            <a
              href="/contact"
              className="rounded-lg bg-[#00a7e8] px-6 py-3 text-sm font-medium text-[#012241] transition-colors hover:bg-[#7cd4ff]"
            >
              Apply now
            </a>
            <a
              href="/events"
              className="rounded-lg border border-white/20 px-6 py-3 text-sm text-white transition-colors hover:bg-white/10"
            >
              See events
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
