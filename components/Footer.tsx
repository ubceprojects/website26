import Link from "next/link";
import { Mail } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { SITE, NAV_LINKS, SOCIALS } from "@/lib/data";

const socialRows = [
  { Icon: InstagramIcon, ...SOCIALS.instagram, external: true },
  { Icon: LinkedInIcon, ...SOCIALS.linkedin, external: true },
  { Icon: Mail, ...SOCIALS.email, external: false },
];

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent via-indigo to-violet text-sm font-bold text-white"
              >
                e
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {SITE.shortName}
              </span>
            </Link>

            <p className="mt-4 text-sm font-medium text-foreground/90">
              {SITE.subTagline}
            </p>
            <p className="mt-3 max-w-sm text-sm text-muted">
              UBC&apos;s student accelerator — turning curious students into
              builders, founders, and operators.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">
              Explore
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">
              Connect
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socialRows.map(({ Icon, handle, label, href, external }) => (
                <li key={handle}>
                  <a
                    href={href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group inline-flex items-center gap-3 text-sm text-muted transition hover:text-foreground"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-md glass transition group-hover:border-white/25">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-subtle sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} eProjects UBC. All rights reserved.
          </p>
          <p>Built by the eProjects Tech Team · UBC</p>
        </div>
      </div>
    </footer>
  );
}
