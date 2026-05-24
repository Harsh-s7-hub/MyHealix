"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { appScreens } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AppPreview() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const screen = appScreens[current];
  const Icon = screen.icon;

  return (
    <section id="preview" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Live Preview"
          title="See Healix in action"
          description="Explore the elegant Android interface — AI assistant, dashboards, analytics, and real-time health monitoring."
        />

        <div className="relative flex flex-col items-center">
          {/* Phone frame */}
          <div className="relative">
            <motion.div
              className="absolute -inset-8 rounded-[3rem] bg-healix-cyan/10 blur-3xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative w-64 sm:w-72 rounded-[2.5rem] border-2 border-slate-200 bg-slate-100 p-3 shadow-card">
              <div className="rounded-[2rem] bg-white overflow-hidden min-h-[480px]">
                <div className="flex justify-center py-3">
                  <div className="h-1.5 w-20 rounded-full bg-slate-300" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={current}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                    className="px-4 pb-6"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-healix-cyan to-healix-blue flex items-center justify-center">
                        <Icon className="h-3.5 w-3.5 text-healix-navy" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{screen.title}</p>
                        <p className="text-[10px] text-healix-dim">{screen.description}</p>
                      </div>
                    </div>

                    <div
                      className={`rounded-xl bg-gradient-to-br ${screen.color} border border-slate-200 p-4 min-h-[320px] flex flex-col`}
                    >
                      {/* Mock UI content */}
                      <div className="space-y-3 flex-1">
                        <div className="h-3 w-3/4 rounded bg-slate-200" />
                        <div className="h-3 w-1/2 rounded bg-slate-200" />
                        <div className="mt-4 h-24 rounded-lg bg-slate-100 border border-slate-200" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-14 rounded-lg bg-slate-100" />
                          <div className="h-14 rounded-lg bg-slate-100" />
                        </div>
                        <div className="h-20 rounded-lg bg-slate-100 mt-2" />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Floating UI cards */}
            <motion.div
              className="absolute -left-16 top-20 hidden lg:block glass rounded-xl p-3 w-36"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <p className="text-[10px] text-healix-dim uppercase">Vitals</p>
              <p className="text-lg font-bold text-healix-cyan">98.6°F</p>
            </motion.div>

            <motion.div
              className="absolute -right-16 bottom-32 hidden lg:block glass rounded-xl p-3 w-36"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <p className="text-[10px] text-healix-dim uppercase">AI Status</p>
              <p className="text-sm font-medium text-emerald-400">Active</p>
            </motion.div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center gap-4">
            <button
              type="button"
              onClick={() => setCurrent((p) => (p - 1 + appScreens.length) % appScreens.length)}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:border-healix-cyan/30 transition-colors"
              aria-label="Previous screen"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {appScreens.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-healix-cyan" : "w-1.5 bg-slate-300"
                  }`}
                  aria-label={`Go to screen ${i + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => setCurrent((p) => (p + 1) % appScreens.length)}
              className="flex h-10 w-10 items-center justify-center rounded-xl glass hover:border-healix-cyan/30 transition-colors"
              aria-label="Next screen"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Screen labels */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {appScreens.map((s, i) => (
              <button
                key={s.title}
                type="button"
                onClick={() => setCurrent(i)}
                className={`rounded-full px-4 py-1.5 text-xs transition-all ${
                  i === current
                    ? "bg-healix-cyan/20 text-healix-cyan border border-healix-cyan/30"
                    : "text-healix-dim hover:text-slate-900"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
