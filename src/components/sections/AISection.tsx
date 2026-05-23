"use client";

import { motion } from "framer-motion";
import { Brain, Cpu, Network, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NeuralNetwork } from "@/components/effects/NeuralNetwork";
import { useInView } from "@/hooks/useInView";
import { GlowCard } from "@/components/ui/GlowCard";

const aiFeatures = [
  { icon: Brain, label: "Semantic Understanding", desc: "Context-aware health conversations" },
  { icon: Cpu, label: "Advanced Models", desc: "Gemini & Groq powered intelligence" },
  { icon: Network, label: "Connected Systems", desc: "Unified healthcare assistance" },
  { icon: Sparkles, label: "Smart Workflows", desc: "Automated insights & guidance" },
];

export function AISection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="ai" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.08),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Artificial Intelligence"
          title="Medical intelligence, reimagined"
          description="Healix leverages advanced AI models, semantic understanding, and intelligent healthcare assistance systems to help users access smarter and more connected healthcare support."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-64 w-64 rounded-full bg-violet-500/10 blur-[80px]" />
              <div className="absolute h-48 w-48 rounded-full bg-healix-cyan/10 blur-[60px]" />
            </div>
            <NeuralNetwork />

            {/* Floating AI nodes */}
            {aiFeatures.map((item, i) => {
              const Icon = item.icon;
              const positions = [
                "top-0 left-0",
                "top-0 right-0",
                "bottom-0 left-0",
                "bottom-0 right-0",
              ];
              return (
                <motion.div
                  key={item.label}
                  className={`absolute ${positions[i]} hidden sm:block`}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="glass rounded-lg px-3 py-2 flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-healix-cyan" />
                    <span className="text-[10px] text-healix-muted whitespace-nowrap">{item.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="space-y-4">
            {aiFeatures.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlowCard className="p-4 flex items-center gap-4" tilt={false}>
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20">
                      <Icon className="h-5 w-5 text-healix-cyan" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white">{item.label}</h4>
                      <p className="text-sm text-healix-muted">{item.desc}</p>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}

            <GlowCard className="mt-6 p-5 border-violet-500/20" tilt={false}>
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20">
                  <Brain className="h-4 w-4 text-violet-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-violet-200 mb-1">Live AI Assistant</p>
                  <p className="text-xs text-healix-muted leading-relaxed font-mono">
                    &gt; Analyzing health patterns...<br />
                    &gt; Generating personalized insights...<br />
                    &gt; Ready to assist.
                  </p>
                </div>
              </div>
            </GlowCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
