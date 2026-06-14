"use client";

import { motion } from "framer-motion";

import { STATS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function StatBar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "glass grid grid-cols-2 overflow-hidden rounded-2xl md:grid-cols-4 md:divide-x divide-white/10",
        className,
      )}
    >
      {STATS.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className={cn(
            "flex flex-col items-center justify-center px-4 py-6 text-center",
            // Row borders on mobile (2-col grid) keep the strip clean without dividers.
            i >= 2 && "border-t border-white/10 md:border-t-0",
          )}
        >
          <div
            className={cn(
              "font-semibold tracking-tight text-foreground",
              s.value.length > 12
                ? "text-base sm:text-xl"
                : "text-2xl sm:text-3xl",
            )}
          >
            {s.value}
          </div>
          <div className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-subtle">
            {s.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
