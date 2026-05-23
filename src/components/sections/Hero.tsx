"use client";

import { motion } from "framer-motion";
import { Play, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/effects/DashboardMockup";
import { AuroraBackground } from "@/components/background/AuroraBackground";
import { GridBackground } from "@/components/background/GridBackground";
import { ParticlesBackground } from "@/components/background/ParticlesBackground";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-20">
      <AuroraBackground />
      <GridBackground />
      <ParticlesBackground count={35} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-healix-cyan/20 bg-healix-cyan/5 px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-healix-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-healix-cyan" />
              </span>
              <span className="text-xs font-medium text-healix-cyan">
                AI-Powered Healthcare · Android
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.08]"
            >
              <span className="gradient-text">Your Health.</span>
              <br />
              <span className="text-white">Intelligent, Connected,</span>
              <br />
              <span className="gradient-text-cyan">Accessible.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 max-w-xl text-lg text-healix-muted leading-relaxed"
            >
              Healix combines AI-powered healthcare assistance, health monitoring,
              medical insights, and intelligent health support into one seamless
              Android experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Button href="#download" variant="primary">
                <Download className="h-4 w-4" />
                Download App
              </Button>
              <Button href="#preview" variant="secondary">
                <Play className="h-4 w-4" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-sm text-healix-dim"
            >
              <div className="flex -space-x-2">
                {["SC", "MR", "PS", "AK"].map((initials, i) => (
                  <div
                    key={initials}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-healix-navy bg-healix-slate text-[10px] font-medium text-healix-cyan"
                    style={{ zIndex: 4 - i }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p>
                <span className="text-white font-medium">12,000+</span> early users trust Healix
              </p>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-healix-navy to-transparent pointer-events-none" />
    </section>
  );
}
