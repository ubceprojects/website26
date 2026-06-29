/*
  Centralized site content. Edit copy HERE, not in components/pages.
  Event data sourced from the eProjects Brandbook 25-26.
*/

export const SITE = {
  name: "eProjects UBC",
  tagline: "Where Start-Ups Begin",
  blurb:
    "UBC's student-run startup accelerator. You bring the idea. We bring the events, the mentors, and the people to turn it into a real company.",
};

// TODO: confirm real figures before launch — these are placeholders.
export const STATS = [
  { value: "10", label: "Events / year" },
  { value: "8", label: "Month accelerator arc" },
  { value: "500+", label: "Student builders" },
  { value: "20+", label: "Industry partners" },
];

export const PILLARS = [
  {
    no: "01",
    title: "Build",
    body: "Hands-on workshops and sprints that take you from a raw idea to a working product and pitch.",
  },
  {
    no: "02",
    title: "Connect",
    body: "Meet founders, VCs, and operators at events like our YC night, Company Crawl, and Executive Dinner.",
  },
  {
    no: "03",
    title: "Launch",
    body: "Competitions like APEX and our flagship MERIDIAN summit give your venture its first real runway.",
  },
];

// The 8-month accelerator arc, grouped into four phases.
export const PHASES = [
  { id: "mindset", label: "Phase 1 · Mindset", window: "September – October", note: "From curiosity to capability." },
  { id: "access", label: "Phase 2 · Access", window: "November – December", note: "Real rooms, real relationships." },
  { id: "execution", label: "Phase 3 · Execution", window: "January", note: "Stop learning, start building." },
  { id: "launch", label: "Phase 4 · Launch", window: "February – March", note: "Compete, ship, and go public." },
] as const;

export type Phase = (typeof PHASES)[number]["id"];

export type EventItem = {
  slug: string;
  name: string;
  tagline: string;
  blurb: string;
  when: string;
  time: string;
  where: string;
  format: string;
  phase: Phase;
  flagship?: boolean;
};

// Sourced from the 2026–27 event overview docs. Edit copy here.
export const EVENTS: EventItem[] = [
  {
    slug: "ignition",
    name: "IGNITION",
    tagline: "The year begins here.",
    blurb:
      "The launch. A high-energy kickoff with a VC, founder, intrapreneur, and student builder all on one panel, plus a portrait booth, food, and the full 8-month arc laid out. You're not joining a club. You're enrolling in an accelerator.",
    when: "Mid-September",
    time: "6:00 – 8:30 PM",
    where: "UBC Campus",
    format: "Kickoff Panel",
    phase: "mindset",
  },
  {
    slug: "forge",
    name: "FORGE",
    tagline: "Make something real.",
    blurb:
      "A one-day buildathon with UBC engineering design teams. Challenge reveal, build sprint, mentors on the floor, then final demos. Fast, ambitious, and cross-disciplinary.",
    when: "Early October",
    time: "9:30 AM – 5:30 PM",
    where: "Maker Space",
    format: "Buildathon",
    phase: "mindset",
  },
  {
    slug: "intrapreneur",
    name: "INTRAPRENEUR",
    tagline: "Build inside the giants.",
    blurb:
      "Innovation leads from Microsoft and Amazon prove that entrepreneurship happens inside big companies too. A sharp panel, plus a Problem Hunt that sends you home with real problems to crack.",
    when: "Late October",
    time: "6:00 – 8:30 PM",
    where: "Sauder / Nest",
    format: "Corporate Panel",
    phase: "mindset",
  },
  {
    slug: "orbit",
    name: "ORBIT",
    tagline: "The startup universe, up close.",
    blurb:
      "A handful of YC alumni founders, some beaming in from San Francisco, some in the room, make the global startup world feel within reach. Keynote, fireside, and a student startup mini-showcase.",
    when: "Early November",
    time: "6:00 – 8:00 PM",
    where: "Hybrid",
    format: "Keynote + Fireside",
    phase: "access",
  },
  {
    slug: "edn",
    name: "EDN: Executive Dinner Night",
    tagline: "Earned access.",
    blurb:
      "Semester 1's flagship: a candlelit, curated dinner with C-suite executives, founders, and investors. Application-only, with structured table conversations built to go past small talk. The room most students never reach.",
    when: "Late November",
    time: "6:30 – 9:30 PM",
    where: "Private Dining",
    format: "Flagship Dinner",
    phase: "access",
    flagship: true,
  },
  {
    slug: "e2",
    name: "E²: Entrepreneurship Squared",
    tagline: "Learn how investors think.",
    blurb:
      "Semester 2 opens with how money actually works. A deliberately heated Founder vs. VC panel, then a live pitch clinic where members pitch, get scored, and get feedback on the spot.",
    when: "Mid-January",
    time: "6:00 – 8:30 PM",
    where: "Lecture Hall",
    format: "Investor Panel",
    phase: "execution",
  },
  {
    slug: "rnd",
    name: "R&D",
    tagline: "Stop talking. Start shipping.",
    blurb:
      "A one-day hackathon inside Microsoft's Vancouver office. Teams pick a real brief in AI, climate, health, or fintech, then get a few hours to ship a working prototype, with mentors on the floor.",
    when: "Late January",
    time: "9:00 AM – 9:00 PM",
    where: "Microsoft Vancouver",
    format: "Hackathon",
    phase: "execution",
  },
  {
    slug: "apex",
    name: "APEX: EY Pitchathon",
    tagline: "Months of prep. One pitch.",
    blurb:
      "The year's highest-stakes competition, hosted inside EY. Teams pitch on defensibility and sustainability to professional judges. Real setting, real pressure, real prizes.",
    when: "Mid-February",
    time: "Full day",
    where: "EY Office",
    format: "Pitchathon",
    phase: "launch",
  },
  {
    slug: "company-crawl",
    name: "Company Crawl",
    tagline: "Walk the floors you want to build.",
    blurb:
      "The most selective event of the year. Thirty students spend a day inside a few startup offices in Downtown Vancouver, meeting founders and seeing the culture from the inside.",
    when: "Early March",
    time: "9:00 AM – 5:30 PM",
    where: "Downtown Vancouver",
    format: "Office Crawl",
    phase: "launch",
  },
  {
    slug: "meridian",
    name: "MERIDIAN",
    tagline: "Where UBC meets the world.",
    blurb:
      "The year-end flagship: a full-day web summit for university students. Keynotes, startup showcases, a pitch competition, investor tables, and a Night Summit across Vancouver. eProjects' annual statement to the city.",
    when: "Mid-March",
    time: "9:00 AM – 9:00 PM",
    where: "Vancouver",
    format: "Flagship Conference",
    phase: "launch",
    flagship: true,
  },
];

// The eTeam. Each member has a placeholder photo at /public/team/<slug>.jpg —
// replace that file with a real photo (keep the same filename) to swap it in.
export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  department: string;
  tier: "president" | "vp" | "coordinator";
  image: string;
};

export const TEAM: TeamMember[] = [
  // Executive
  { slug: "furqan-zaheer", name: "Furqan Zaheer", role: "President", department: "", tier: "president", image: "/team/furqan-zaheer.png" },
  { slug: "jeremy-lloyd", name: "Jeremy Lloyd", role: "Vice President", department: "Finance", tier: "vp", image: "/team/jeremy-lloyd.png" },
  { slug: "mukerrem-sarp-sarol", name: "Mukerrem Sarp Sarol", role: "Vice President", department: "Marketing", tier: "vp", image: "/team/mukerrem-sarp-sarol.png" },
  { slug: "yash-arya", name: "Yash Arya", role: "Vice President", department: "Corporate Relations", tier: "vp", image: "/team/yash-arya.png" },
  { slug: "adi-garg", name: "Adi Garg", role: "Vice President", department: "Internal", tier: "vp", image: "/team/adi-garg.png" },
  { slug: "aayush-maharaj", name: "Aayush Maharaj", role: "Vice President", department: "Technology", tier: "vp", image: "/team/aayush-maharaj.png" },
  { slug: "leili-hamidi", name: "Leili Hamidi", role: "Vice President", department: "Operations", tier: "vp", image: "/team/leili-hamidi.jpg" },

  // Coordinators
  { slug: "leon-zhang", name: "Leon Zhang", role: "Tech Coordinator", department: "Technology", tier: "coordinator", image: "/team/leon-zhang.jpg" },
  { slug: "andy-guo", name: "Andy Guo", role: "Tech Coordinator", department: "Technology", tier: "coordinator", image: "/team/andy-guo.png" },
  { slug: "ege-taslicay", name: "Ege Taslicay", role: "Tech Coordinator", department: "Technology", tier: "coordinator", image: "/team/ege-taslicay.png" },
  { slug: "sydney-chua", name: "Sydney Chua", role: "Design Coordinator", department: "Marketing", tier: "coordinator", image: "/team/sydney-chua.png" },
  { slug: "adelio-wistara", name: "Adelio Wistara", role: "Design Coordinator", department: "Marketing", tier: "coordinator", image: "/team/adelio-wistara.png" },
  { slug: "kiho-okazawa", name: "Kiho Okazawa", role: "Visual Media Coordinator", department: "Marketing", tier: "coordinator", image: "/team/kiho-okazawa.png" },
  { slug: "shaurya-vardhan-shastri", name: "Shaurya Vardhan Shastri", role: "Visual Media Coordinator", department: "Marketing", tier: "coordinator", image: "/team/shaurya-vardhan-shastri.png" },
  { slug: "chhavi-suneja", name: "Chhavi Suneja", role: "Marketing Strategist", department: "Marketing", tier: "coordinator", image: "/team/chhavi-suneja.png" },
  { slug: "natalie-wai", name: "Natalie Wai", role: "Corporate Relations Coordinator", department: "Corporate Relations", tier: "coordinator", image: "/team/natalie-wai.png" },
  { slug: "jaisun-rattu", name: "Jaisun Rattu", role: "Corporate Relations Coordinator", department: "Corporate Relations", tier: "coordinator", image: "/team/jaisun-rattu.png" },
  { slug: "vanya-naqvi", name: "Vanya Naqvi", role: "Corporate Relations Coordinator", department: "Corporate Relations", tier: "coordinator", image: "/team/vanya-naqvi.png" },
  { slug: "selina-lan", name: "Selina Lan", role: "Finance Coordinator", department: "Finance", tier: "coordinator", image: "/team/selina-lan.png" },
  { slug: "sanaya-mehta", name: "Sanaya Mehta", role: "Finance Coordinator", department: "Finance", tier: "coordinator", image: "/team/sanaya-mehta.png" },
  { slug: "rebecca-mah", name: "Rebecca Mah", role: "Operations Coordinator", department: "Operations", tier: "coordinator", image: "/team/rebecca-mah.png" },
  { slug: "vivaan-jogeshwar", name: "Vivaan Jogeshwar", role: "Operations Coordinator", department: "Operations", tier: "coordinator", image: "/team/vivaan-jogeshwar.png" },
  { slug: "laura-pezzi-lunardi", name: "Laura Pezzi Lunardi", role: "Operations Coordinator", department: "Operations", tier: "coordinator", image: "/team/laura-pezzi-lunardi.png" },
];

// Department display order for the coordinator sections — ranked by team size.
export const TEAM_DEPARTMENTS = [
  "Marketing",
  "Operations",
  "Technology",
  "Corporate Relations",
  "Finance",
] as const;

export const SOCIALS = {
  // TODO: confirm real values before launch.
  email: "hello@ubceprojects.ca",
  instagram: "https://instagram.com/ubceprojects",
  linkedin: "https://www.linkedin.com/company/ubceprojects",
};
