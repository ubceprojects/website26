/**
 * Single source of truth for all eProjects UBC content.
 * Pages and components import from here — never hard-code copy in the UI.
 */

/* ------------------------------------------------------------------ */
/* Site meta + navigation                                              */
/* ------------------------------------------------------------------ */

export const SITE = {
  name: "eProjects UBC",
  shortName: "eProjects",
  tagline: "Where startups begin.",
  subTagline: "Innovation. Collaboration. Growth.",
  description:
    "eProjects is UBC's premier student accelerator — an 8-month journey that turns curious students into serious builders, founders, and operators.",
  url: "https://ubceprojects.ca",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIALS = {
  instagram: {
    label: "@eprojectsubc",
    handle: "Instagram",
    href: "https://www.instagram.com/eprojectsubc/",
  },
  linkedin: {
    label: "UBC eProjects",
    handle: "LinkedIn",
    href: "https://ca.linkedin.com/company/ubc-eprojects",
  },
  email: {
    label: "hello@ubceprojects.ca",
    handle: "Email",
    href: "mailto:hello@ubceprojects.ca",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Social proof / stats                                                */
/* ------------------------------------------------------------------ */

export interface Stat {
  value: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: "Top Small Club", label: "UBC 2024 / 25" },
  { value: "2,700+", label: "Community" },
  { value: "10", label: "Flagship events" },
  { value: "Microsoft · EY · Amazon", label: "Corporate partners" },
];

export const PARTNERS: string[] = ["Microsoft", "EY", "Amazon"];

/* ------------------------------------------------------------------ */
/* The five pillars                                                    */
/* ------------------------------------------------------------------ */

export interface Pillar {
  id: string;
  name: string;
  description: string;
  /** lucide-react icon name */
  icon: string;
  comingSoon?: boolean;
}

export const PILLARS: Pillar[] = [
  {
    id: "events",
    name: "Events",
    description:
      "A flagship event series spanning the full academic year — each one engineered to move you further along the arc.",
    icon: "CalendarRange",
  },
  {
    id: "mentorship",
    name: "Mentorship",
    description:
      "Ongoing mentorship from founders, operators, and investors who have actually built things.",
    icon: "Compass",
  },
  {
    id: "community",
    name: "Community",
    description:
      "A tight, ambitious cohort of builders who push each other to ship, pitch, and grow.",
    icon: "Users",
  },
  {
    id: "corporate-relations",
    name: "Corporate Relations",
    description:
      "Deep partnerships with Microsoft, EY, Amazon, and Vancouver's startup ecosystem.",
    icon: "Handshake",
  },
  {
    id: "platform",
    name: "Platform",
    description:
      "A member platform to connect, see what's happening, and build together — launching soon.",
    icon: "LayoutGrid",
    comingSoon: true,
  },
];

/* ------------------------------------------------------------------ */
/* The Transformation Arc — phases + events                            */
/* ------------------------------------------------------------------ */

export interface Phase {
  id: number;
  name: string;
  /** Short verb-driven theme, e.g. "Mindset" */
  theme: string;
  months: string;
  blurb: string;
  /** Hex used for phase-specific accents / gradients */
  accent: string;
}

export const PHASES: Phase[] = [
  {
    id: 1,
    name: "Phase 1",
    theme: "Mindset",
    months: "September – October",
    blurb: "Convert curiosity into commitment. Declare that this is an accelerator, not a club.",
    accent: "#3B82F6",
  },
  {
    id: 2,
    name: "Phase 2",
    theme: "Access",
    months: "November – December",
    blurb: "Open doors to the global ecosystem and the people who run it.",
    accent: "#6366F1",
  },
  {
    id: 3,
    name: "Phase 3",
    theme: "Execution",
    months: "January",
    blurb: "Capital literacy and real building. From learning to shipping.",
    accent: "#8B5CF6",
  },
  {
    id: 4,
    name: "Phase 4",
    theme: "Launch",
    months: "February – March",
    blurb: "Pitch, compete, and step into the startup world for real.",
    accent: "#A855F7",
  },
];

export interface EventItem {
  id: string;
  name: string;
  /** The italic subtitle, e.g. "The Spark" */
  tagline: string;
  phase: number;
  month: string;
  /** Attendance target / selectivity */
  scale: string;
  /** One-line description */
  description: string;
  format: string;
  goal: string;
  vibe: string;
  /** Optional headline partner */
  partner?: string;
}

export const EVENTS: EventItem[] = [
  /* ---- Phase 1 — Mindset ---- */
  {
    id: "ignition",
    name: "IGNITION",
    tagline: "The Spark",
    phase: 1,
    month: "September",
    scale: "80–150 attendees",
    description:
      "The year's launch event and most critical membership moment — where curiosity becomes commitment.",
    format:
      "High-energy informal kickoff with a 4-person panel (VC, founder, intrapreneur, student entrepreneur), “Why I Build” lightning rounds, speed intros, and a professional portrait booth.",
    goal: "Convert curious first-years into committed members and declare eProjects an accelerator, not a club.",
    vibe: "Electric, premium, welcoming — upbeat music, great food, intentional energy.",
  },
  {
    id: "forge",
    name: "FORGE",
    tagline: "Build Something Real",
    phase: 1,
    month: "October",
    scale: "60–90 attendees",
    description:
      "A cross-disciplinary one-day buildathon, partnering eProjects with UBC engineering design teams.",
    format:
      "Challenge reveal, team formation, build sprint, mentor touchpoints, and final demos.",
    goal: "Prove that eProjects is about building and shipping — not just talks and networking.",
    vibe: "Sharp, high-energy, builder-first, no fluff.",
  },
  {
    id: "intrapreneur",
    name: "INTRAPRENEUR",
    tagline: "The Corporate-Builder Crossover",
    phase: 1,
    month: "October",
    scale: "60–100 attendees",
    description:
      "A formal corporate panel featuring innovation leads and entrepreneurs-in-residence from companies like Microsoft and Amazon.",
    format: "Moderated panel + structured Q&A + a Problem Hunt exercise.",
    goal: "Expand the definition of entrepreneurship — building happens inside big companies too.",
    vibe: "Boardroom energy meets startup conviction.",
    partner: "Microsoft · Amazon",
  },

  /* ---- Phase 2 — Access ---- */
  {
    id: "orbit",
    name: "ORBIT",
    tagline: "The Global Exposure Event",
    phase: 2,
    month: "November",
    scale: "40–60 attendees",
    description:
      "YC alumni founders — some virtual from San Francisco, some in person from Vancouver — in conversation with members.",
    format: "Keynote + fireside chat + optional student startup mini-showcase.",
    goal: "Make the global startup ecosystem feel real, not mythical — and shift the ceiling of what students believe is possible.",
    vibe: "Aspirational, cosmic in scale, grounded in execution.",
  },
  {
    id: "edn",
    name: "EDN",
    tagline: "Executive Dinner Night — The Semester 1 Flagship",
    phase: 2,
    month: "December",
    scale: "50–80 · application-based",
    description:
      "A candlelit, curated dinner with C-suite executives — CEOs, Presidents, and Directors.",
    format:
      "Formal seated dinner with structured table conversations, a keynote or fireside, and open networking.",
    goal: "Deliver the highest-quality relationship-building moment of the year and make external people take eProjects seriously.",
    vibe: "Refined, intimate, high-stakes — candles, wine glasses, and real conversations with people who have built things.",
  },

  /* ---- Phase 3 — Execution ---- */
  {
    id: "e2",
    name: "E²",
    tagline: "Entrepreneurship Squared — Investor Intelligence",
    phase: 3,
    month: "January",
    scale: "60–100 attendees",
    description:
      "The Semester 2 opener — a deliberately confrontational Founder vs. VC panel format.",
    format:
      "Investor panel + moderated deep-dive + a live pitch clinic with real-time scoring and feedback.",
    goal: "Teach capital literacy and give members a real edge — whether raising, joining early-stage, or building fluency.",
    vibe: "Sharp, sophisticated, high-signal — feels like a pre-pitch meeting.",
  },
  {
    id: "rnd",
    name: "R&D",
    tagline: "Research & Development Hackathon — From Learning to Building",
    phase: 3,
    month: "January",
    scale: "85–120 attendees",
    description:
      "A one-day hackathon hosted inside Microsoft Vancouver, building AI agentic prototypes with Microsoft 365, Copilot, and Copilot Studio.",
    format:
      "Challenge brief, build sprints, mentor checkpoints, and final demos judged by Microsoft staff.",
    goal: "Move members from learning to building and prove UBC students can ship real things.",
    vibe: "Fast, technical, polished, high-trust, future-facing.",
    partner: "Microsoft",
  },

  /* ---- Phase 4 — Launch ---- */
  {
    id: "apex",
    name: "APEX",
    tagline: "EY Pitchathon — The Highest-Stakes Competition",
    phase: 4,
    month: "February",
    scale: "60–100 attendees",
    description: "A corporate-hosted pitchathon inside EY's office.",
    format:
      "A one-week prep workshop on defensibility, live team pitches, judge feedback, awards, and networking.",
    goal: "Force members to pitch with clarity, defensibility, and confidence in front of professional judges.",
    vibe: "Competitive, professional, high-stakes — a real business setting.",
    partner: "EY",
  },
  {
    id: "company-crawl",
    name: "Company Crawl",
    tagline: "The Physical Embodiment of the Year",
    phase: 4,
    month: "February",
    scale: "25–40 · merit-based",
    description:
      "The most immersive, selective event: 30 curated students spend a full day visiting 3–4 startup offices in Downtown Vancouver.",
    format:
      "A guided crawl through startup offices — founder conversations, office walkthroughs, and structured reflection.",
    goal: "Make the startup world tangible, not theoretical.",
    vibe: "Exclusive, high-signal, founder-heavy, aspirational.",
  },
  {
    id: "meridian",
    name: "MERIDIAN",
    tagline: "The Conference — The Year's Flagship",
    phase: 4,
    month: "March",
    scale: "500–1,000 attendees",
    description:
      "eProjects' annual statement to the world, inspired by Web Summit Vancouver (15,000 attendees, 680 investors, 250 speakers, 120 countries).",
    format:
      "A full-day conference with keynotes, startup showcases, a pitch competition, mentor hours, investor tables, and a Night Summit.",
    goal: "Showcase UBC's entrepreneurial ecosystem at scale and prove eProjects is a global accelerator, not just a club.",
    vibe: "Expansive, ambitious, polished, high-production, ecosystem-level energy.",
  },
];

/* ------------------------------------------------------------------ */
/* Team                                                                */
/* ------------------------------------------------------------------ */

export interface TeamMember {
  name: string;
  position: string;
  /** Functional team the member belongs to */
  team: string;
  /** Display group on the team page */
  group: string;
}

/** Display order for team groups on the /team page. */
export const TEAM_GROUPS = [
  "Leadership",
  "Technology",
  "Marketing",
  "Corporate Relations",
  "Finance",
  "Operations",
  "Joining Us",
] as const;

export const TEAM: TeamMember[] = [
  // Leadership
  { name: "Furqan Zaheer", position: "President", team: "All", group: "Leadership" },
  { name: "Jeremy Lloyd", position: "Vice President", team: "Finance", group: "Leadership" },
  { name: "Mukerrem Sarp Sarol", position: "Vice President", team: "Marketing", group: "Leadership" },
  { name: "Yash Arya", position: "Vice President", team: "Corporate Relations", group: "Leadership" },
  { name: "Adi Garg", position: "Vice President", team: "Internal", group: "Leadership" },
  { name: "Aayush Maharaj", position: "Vice President", team: "Technology", group: "Leadership" },
  { name: "Leili Hamidi", position: "Vice President", team: "Operations", group: "Leadership" },

  // Technology
  { name: "Leon Zhang", position: "Tech Coordinator", team: "Technology", group: "Technology" },

  // Marketing
  { name: "Sydney Chua", position: "Design Coordinator", team: "Marketing", group: "Marketing" },
  { name: "Adelio Windiarto", position: "Design Coordinator", team: "Marketing", group: "Marketing" },
  { name: "Kiho Okazawa", position: "Visual Media Coordinator", team: "Marketing", group: "Marketing" },
  { name: "Chhavi Suneja", position: "Marketing Strategist", team: "Marketing", group: "Marketing" },

  // Corporate Relations
  { name: "Natalie Wai", position: "Corporate Relations Coordinator", team: "Corporate Relations", group: "Corporate Relations" },
  { name: "Jaisun", position: "Corporate Relations Coordinator", team: "Corporate Relations", group: "Corporate Relations" },

  // Finance
  { name: "Selina Lan", position: "Finance Coordinator", team: "Finance", group: "Finance" },
  { name: "Sanaya Mehta", position: "Finance Coordinator", team: "Finance", group: "Finance" },

  // Operations
  { name: "Rebecca Mah", position: "Operations Coordinator", team: "Operations", group: "Operations" },
  { name: "Vivaan Jogeshwar", position: "Operations Coordinator", team: "Operations", group: "Operations" },
  { name: "Laura Pezzi Lunardi", position: "Operations Coordinator", team: "Operations", group: "Operations" },

  // Joining Us (roles TBD)
  { name: "Kai", position: "Coordinator", team: "TBD", group: "Joining Us" },
  { name: "Shaurya Vardhan Shastri", position: "Coordinator", team: "TBD", group: "Joining Us" },
  { name: "Andy Guo", position: "Coordinator", team: "TBD", group: "Joining Us" },
];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

export const getEventsByPhase = (phase: number): EventItem[] =>
  EVENTS.filter((e) => e.phase === phase);

export const getTeamByGroup = (group: string): TeamMember[] =>
  TEAM.filter((m) => m.group === group);

/** Initials for the photo-placeholder avatars, e.g. "Furqan Zaheer" -> "FZ". */
export const getInitials = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
