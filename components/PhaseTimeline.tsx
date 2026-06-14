"use client";

import { motion } from "framer-motion";
import { PHASES, getEventsByPhase } from "@/lib/data";
import { cn } from "@/lib/utils";

const ARC_GRADIENT = "linear-gradient(90deg,#3b82f6,#6366f1,#8b5cf6,#a855f7)";
const ARC_GRADIENT_V = "linear-gradient(180deg,#3b82f6,#6366f1,#8b5cf6,#a855f7)";
const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function PhaseTimeline({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full", className)}>
      {/* ---------------------------------------------------------------- */}
      {/* DESKTOP — horizontal ascent                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative hidden md:block">
        {/* Connecting gradient line, centered on the markers (h-11 -> 22px) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-0 top-[22px] h-px w-full -translate-y-1/2 rounded-full"
          style={{ background: ARC_GRADIENT, transformOrigin: "left" }}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: EASE }}
        />

        <div className="relative grid grid-cols-4 gap-6">
          {PHASES.map((phase, i) => {
            const events = getEventsByPhase(phase.id);
            return (
              <motion.div
                key={phase.id}
                className="flex flex-col"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              >
                {/* Marker on the line */}
                <div
                  className="grid h-11 w-11 place-items-center rounded-full font-mono text-sm text-foreground glass-strong"
                  style={{
                    boxShadow: `0 0 0 1px ${phase.accent}, 0 0 24px -6px ${phase.accent}`,
                  }}
                >
                  {phase.id}
                </div>

                {/* Content */}
                <div className="mt-6 flex flex-col gap-2">
                  <span className="eyebrow">{phase.name}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {phase.theme}
                  </h3>
                  <span className="font-mono text-xs text-subtle">{phase.months}</span>
                  <p className="text-sm text-muted">{phase.blurb}</p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {events.map((event) => (
                      <span
                        key={event.id}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[0.66rem] text-muted"
                      >
                        {event.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* MOBILE — vertical ascent                                          */}
      {/* ---------------------------------------------------------------- */}
      <div className="relative md:hidden">
        {/* Vertical gradient line (markers are h-11 -> centered at 22px) */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute bottom-0 top-0 w-px rounded-full"
          style={{
            left: "21px",
            background: ARC_GRADIENT_V,
            transformOrigin: "top",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, ease: EASE }}
        />

        <div className="flex flex-col gap-10">
          {PHASES.map((phase, i) => {
            const events = getEventsByPhase(phase.id);
            return (
              <motion.div
                key={phase.id}
                className="relative flex gap-5"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              >
                {/* Marker on the line */}
                <div
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full font-mono text-sm text-foreground glass-strong"
                  style={{
                    boxShadow: `0 0 0 1px ${phase.accent}, 0 0 24px -6px ${phase.accent}`,
                  }}
                >
                  {phase.id}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pb-1 pt-1">
                  <span className="eyebrow">{phase.name}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {phase.theme}
                  </h3>
                  <span className="font-mono text-xs text-subtle">{phase.months}</span>
                  <p className="text-sm text-muted">{phase.blurb}</p>

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {events.map((event) => (
                      <span
                        key={event.id}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[0.66rem] text-muted"
                      >
                        {event.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
