"use client";

import { motion } from "framer-motion";
import { workflowSteps } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useInView } from "@/hooks/useInView";

export function HowItWorks() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-healix-cyan/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Workflow"
          title="How Healix works"
          description="From opening the app to receiving personalized assistance — a seamless five-step intelligent health journey."
        />

        <div ref={ref} className="relative">
          {/* Connecting line - desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-healix-cyan/50 via-healix-cyan/20 to-transparent lg:block" />

          <div className="space-y-8 lg:space-y-0">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12 ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <span className="text-xs font-mono text-healix-cyan/60">STEP {step.step}</span>
                  <h3 className="mt-1 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-healix-muted max-w-md ml-auto lg:ml-0">
                    {step.description}
                  </p>
                </div>

                {/* Node */}
                <div className="relative z-10 flex shrink-0 justify-center">
                  <motion.div
                    className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-healix-cyan/30 bg-healix-deep shadow-glow"
                    animate={isInView ? { boxShadow: ["0 0 20px rgba(34,211,238,0.2)", "0 0 40px rgba(34,211,238,0.4)", "0 0 20px rgba(34,211,238,0.2)"] } : {}}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <span className="text-lg font-bold gradient-text-cyan">{step.step}</span>
                    <div className="absolute inset-0 rounded-2xl bg-healix-cyan/10 animate-pulse" />
                  </motion.div>
                </div>

                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
