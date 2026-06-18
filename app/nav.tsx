"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#012241]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <Link 
          href="/" 
          className="flex items-center gap-3"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image
            src="/eProjects logo copy.png"
            alt="eProjects UBC"
            width={50}
            height={50}
            priority
          />
          <span className="text-base font-semibold tracking-tight text-white [font-family:'Poppins',sans-serif]">
            UBC eProjects
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="hidden items-center gap-6 text-sm md:flex">
            {links.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={
                      active
                        ? "text-white"
                        : "text-white/70 transition-colors hover:text-white"
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="rounded-lg bg-[#00a7e8] px-4 py-2 text-sm font-medium text-[#012241] transition-colors hover:bg-[#7cd4ff]"
          >
            Join the community
          </Link>
        </div>
      </div>
    </nav>
  );
}
