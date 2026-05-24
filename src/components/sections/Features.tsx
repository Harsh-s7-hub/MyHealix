"use client";

import { motion } from "framer-motion";
import { features } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { useInView } from "@/hooks/useInView";

export function Features() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Capabilities"
          title="Everything you need for intelligent health"
          description="Six powerful modules working together to deliver a seamless, AI-first healthcare experience on Android."
        />

        <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <GlowCard className="h-full p-6">
                  <div
                    className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${feature.gradient} p-3`}
                  >
                    <Icon className="h-6 w-6 text-healix-cyan" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">{feature.title}</h3>
                  <p className="text-sm text-healix-muted leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="mt-4 h-px w-full bg-gradient-to-r from-healix-cyan/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
