import type { Metadata } from "next";
import { SOCIALS } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Mail, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = { title: "Contact" };

const channels = [
  {
    Icon: InstagramIcon,
    handle: SOCIALS.instagram.handle,
    label: SOCIALS.instagram.label,
    href: SOCIALS.instagram.href,
    external: true,
  },
  {
    Icon: LinkedInIcon,
    handle: SOCIALS.linkedin.handle,
    label: SOCIALS.linkedin.label,
    href: SOCIALS.linkedin.href,
    external: true,
  },
  {
    Icon: Mail,
    handle: SOCIALS.email.handle,
    label: SOCIALS.email.label,
    href: SOCIALS.email.href,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* SECTION 1 — INTRO */}
      <section className="relative pt-32 sm:pt-40">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">Get in touch</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gradient sm:text-5xl md:text-6xl">
              Let us build <span className="text-gradient-accent">something.</span>
            </h1>
            <p className="mt-6 text-lg text-muted">
              Whether you want to join the cohort, partner with us, or just say
              hi — reach out. Applications open each fall.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — CONNECT CARDS */}
      <section className="relative">
        <div className="mx-auto mt-14 w-full max-w-7xl px-6 sm:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map(({ Icon, handle, label, href, external }, i) => (
              <Reveal key={handle} delay={i * 0.08}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="group relative flex flex-col rounded-3xl glass card-glow p-7 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-xl glass">
                      <Icon className="h-5 w-5 text-accent-bright" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-subtle transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.12em] text-subtle">
                    {handle}
                  </p>
                  <p className="mt-1 text-lg text-foreground">{label}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — JOIN CALLOUT */}
      <section className="relative">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-8">
          <Reveal className="mx-auto max-w-2xl">
            <div className="glass-strong relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-12">
              <div className="glow-accent pointer-events-none absolute inset-0 -z-10" />
              <p className="eyebrow">Join the cohort</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">
                Ready to <span className="text-gradient-accent">build?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                Applications open each fall. Follow along and be first to know
                when the next cohort opens.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button href={SOCIALS.instagram.href} variant="primary" external>
                  Follow @eprojectsubc
                </Button>
                <Button href="/events" variant="secondary">
                  See what we do
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
