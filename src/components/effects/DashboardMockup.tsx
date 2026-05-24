"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Brain, Heart, TrendingUp, Zap } from "lucide-react";
import { ECGLine } from "./ECGLine";

export function DashboardMockup() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 100, damping: 30 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto perspective-[1200px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Floating cards */}
      <motion.div
        className="absolute -left-8 top-12 z-20 glass rounded-xl p-3 shadow-glow hidden sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-healix-cyan/20">
            <Heart className="h-4 w-4 text-healix-cyan" />
          </div>
          <div>
            <p className="text-[10px] text-healix-dim uppercase tracking-wider">Heart Rate</p>
            <p className="text-sm font-semibold text-slate-900">72 <span className="text-healix-dim font-normal">bpm</span></p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-4 top-32 z-20 glass rounded-xl p-3 shadow-glow hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
          </div>
          <div>
            <p className="text-[10px] text-healix-dim uppercase tracking-wider">Wellness</p>
            <p className="text-sm font-semibold text-emerald-400">+12%</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-6 bottom-24 z-20 glass rounded-xl p-3 shadow-glow hidden md:block"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <div className="flex items-center gap-2">
          <Brain className="h-4 w-4 text-violet-400" />
          <p className="text-xs text-healix-muted">AI analyzing...</p>
          <span className="flex gap-0.5">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-1 w-1 rounded-full bg-violet-400"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </span>
        </div>
      </motion.div>

      {/* Main dashboard */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative rounded-2xl border border-slate-200 bg-white p-1 shadow-card"
      >
        <div className="rounded-xl bg-slate-50 p-4 sm:p-5">
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-healix-cyan to-healix-blue">
                <Zap className="h-4 w-4 text-healix-navy" />
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Healix Dashboard</p>
                <p className="text-[10px] text-healix-dim">Live · Connected</p>
              </div>
            </div>
            <div className="flex gap-1">
              <span className="h-2 w-2 rounded-full bg-red-400/80" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
              <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
          </div>

          {/* ECG */}
          <div className="mb-4 rounded-lg border border-healix-cyan/20 bg-slate-100 p-3">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-medium uppercase tracking-wider text-healix-cyan">
                Cardiac Monitor
              </span>
              <Activity className="h-3 w-3 text-healix-cyan animate-pulse" />
            </div>
            <ECGLine />
          </div>

          {/* Stats grid */}
          <div className="mb-4 grid grid-cols-3 gap-2">
            {[
              { label: "Steps", value: "8,432", color: "text-healix-cyan" },
              { label: "Sleep", value: "7.2h", color: "text-blue-400" },
              { label: "HRV", value: "48ms", color: "text-violet-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-slate-200 bg-white p-2 text-center"
              >
                <p className={`text-sm font-bold ${stat.color}`}>{stat.value}</p>
                <p className="text-[9px] text-healix-dim uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* AI Panel */}
          <div className="rounded-lg border border-violet-200 bg-gradient-to-r from-violet-50 to-cyan-50 p-3">
            <div className="flex items-start gap-2">
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-violet-100">
                <Brain className="h-3 w-3 text-violet-600" />
              </div>
              <div>
                <p className="text-[10px] font-medium text-violet-700 mb-1">AI Health Assistant</p>
                <p className="text-xs text-healix-muted leading-relaxed">
                  Your sleep quality improved 12% this week. Consider maintaining your current routine.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Glow ring */}
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-healix-cyan/20 via-transparent to-healix-blue/20 opacity-40 blur-sm -z-10" />
      </motion.div>
    </div>
  );
}
