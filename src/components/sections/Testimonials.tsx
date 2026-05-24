"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { useInView } from "@/hooks/useInView";

export function Testimonials() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Trusted by innovators"
          title="What people are saying"
          description="Healthcare professionals, founders, and early users share their experience with Healix."
        />

        <div ref={ref} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <GlowCard className="h-full p-6 flex flex-col" tilt={false}>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-healix-cyan text-healix-cyan" />
                  ))}
                </div>
                <p className="flex-1 text-sm text-healix-muted leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-healix-cyan/30 to-healix-blue/30 text-sm font-semibold text-healix-cyan">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{t.name}</p>
                    <p className="text-xs text-healix-dim">{t.role}</p>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
