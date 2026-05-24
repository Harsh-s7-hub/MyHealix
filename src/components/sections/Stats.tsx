"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { useInView } from "@/hooks/useInView";

export function Stats() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="relative py-20 border-y border-slate-200">
      <div className="absolute inset-0 bg-healix-hero opacity-50 pointer-events-none" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold gradient-text-cyan">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-healix-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
