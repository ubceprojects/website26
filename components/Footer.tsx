import { Container } from "./ui";
import { Logo } from "./Logo";
import { SITE, SOCIALS } from "@/lib/data";

const nav = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line/60 bg-night">
      <Container className="flex flex-col gap-10 py-14 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm text-mist">{SITE.tagline}.</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-cloud">
            Explore
          </span>
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-mist hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <span className="font-heading text-xs uppercase tracking-[0.2em] text-cloud">
            Connect
          </span>
          <a href={SOCIALS.instagram} className="text-mist hover:text-white">
            Instagram
          </a>
          <a href={SOCIALS.linkedin} className="text-mist hover:text-white">
            LinkedIn
          </a>
          <a href={`mailto:${SOCIALS.email}`} className="text-mist hover:text-white">
            {SOCIALS.email}
          </a>
        </div>
      </Container>

      <div className="border-t border-line/40">
        <Container className="py-6">
          <p className="text-xs text-mist/70">
            © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
          </p>
        </Container>
      </div>
    </footer>
  );
}
