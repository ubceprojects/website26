"use client";

import { motion } from "framer-motion";
import { type TeamMember, getInitials } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";

export function TeamCard({
  member,
  index = 0,
}: {
  member: TeamMember;
  index?: number;
}) {
  const showTeam = member.team !== "All" && member.team !== "TBD";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 6) * 0.06,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className="group relative flex flex-col items-center rounded-2xl glass card-glow p-6 text-center transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Photo placeholder — drop in a Next <Image> here when real photos are ready */}
      <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-surface-2 to-surface ring-1 ring-inset ring-white/10 shadow-[0_0_0_1px_rgba(59,130,246,0.18)]">
        <span className="font-mono text-lg text-accent-bright/80">
          {getInitials(member.name)}
        </span>
      </div>

      <h3 className="mt-4 font-medium text-foreground">{member.name}</h3>
      <p className="text-sm text-muted">{member.position}</p>

      {showTeam && <Badge className="mt-3">{member.team}</Badge>}
    </motion.div>
  );
}
