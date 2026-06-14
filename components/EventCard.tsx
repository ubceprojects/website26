"use client";

import { motion } from "framer-motion";
import { Layers, Sparkles, Users, Zap } from "lucide-react";
import { type EventItem, PHASES } from "@/lib/data";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function EventCard({
  event,
  index = 0,
  className,
}: {
  event: EventItem;
  index?: number;
  className?: string;
}) {
  const phase = PHASES.find((p) => p.id === event.phase);
  const theme = phase?.theme ?? "";

  const details = [
    { label: "Format", value: event.format, Icon: Zap },
    { label: "Scale", value: event.scale, Icon: Users },
    { label: "Vibe", value: event.vibe, Icon: Sparkles },
    ...(event.partner
      ? [{ label: "Partner", value: event.partner, Icon: Layers }]
      : []),
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.08,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl glass card-glow p-7 transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <Badge tone="phase">
          Phase {event.phase} · {theme}
        </Badge>
        <span className="font-mono text-xs text-subtle">{event.month}</span>
      </div>

      {/* Title + tagline */}
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-foreground">
        {event.name}
      </h3>
      <p className="mt-1 text-sm italic text-accent-bright/90">
        {event.tagline}
      </p>

      {/* Description */}
      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
        {event.description}
      </p>

      {/* Divider + details */}
      <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
        {details.map(({ label, value, Icon }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="flex w-16 shrink-0 items-center gap-1.5 pt-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-subtle">
              <Icon className="h-3 w-3" aria-hidden />
              {label}
            </span>
            <span className="text-sm leading-relaxed text-foreground/80">
              {value}
            </span>
          </div>
        ))}
      </div>
    </motion.article>
  );
}
