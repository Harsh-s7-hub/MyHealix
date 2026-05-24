"use client";

import { motion } from "framer-motion";
import { Download, QrCode } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { platformBadges } from "@/lib/data";
import { GlowCard } from "@/components/ui/GlowCard";

const QR_PATTERN = [
  1,1,1,0,0,1,1,1, 1,0,1,0,1,0,1,0, 1,1,1,0,1,1,1,0,
  0,1,0,1,0,1,0,1, 1,0,1,1,0,1,1,0, 0,1,1,0,1,0,1,1,
  1,1,0,1,0,1,1,0, 0,1,0,0,1,0,1,0, 1,0,1,1,0,1,0,1,
  0,1,1,0,1,1,0,1,
];

function QRCodeVisual() {

  return (
    <div className="relative p-6">
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-healix-cyan/30"
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl border border-healix-cyan/20"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="relative grid grid-cols-8 gap-1 rounded-xl bg-white p-4">
        {QR_PATTERN.map((active, i) => (
          <div
            key={i}
            className={`aspect-square rounded-sm ${active ? "bg-healix-navy" : "bg-transparent"}`}
          />
        ))}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-healix-cyan to-healix-blue shadow-glow">
            <span className="text-xs font-bold text-healix-navy">H</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      className="relative mx-auto w-48 sm:w-56"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="rounded-[2rem] border-2 border-slate-200 bg-slate-100 p-2 shadow-card">
        <div className="rounded-[1.5rem] bg-white overflow-hidden">
          <div className="flex justify-center py-2">
            <div className="h-1 w-16 rounded-full bg-slate-300" />
          </div>
          <div className="px-3 pb-4 space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-healix-cyan to-healix-blue" />
              <span className="text-[10px] font-semibold text-slate-900">Healix</span>
            </div>
            <div className="h-16 rounded-lg bg-gradient-to-br from-healix-cyan/10 to-blue-600/5 border border-healix-cyan/20 p-2">
              <p className="text-[8px] text-healix-cyan font-medium">AI Assistant</p>
              <p className="text-[7px] text-healix-muted mt-1">How can I help with your health today?</p>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {["Heart", "Steps", "Sleep", "Meds"].map((item) => (
                <div key={item} className="h-8 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center">
                  <span className="text-[7px] text-healix-dim">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -inset-4 rounded-[2.5rem] bg-healix-cyan/10 blur-2xl -z-10" />
    </motion.div>
  );
}

export function DownloadSection() {
  const { ref, isInView } = useInView(0.15);

  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-healix-cyan/5 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          badge="Get Healix"
          title="Download on Android"
          description="Scan the QR code or tap below to install Healix and start your intelligent health journey."
        />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-12 lg:grid-cols-2"
        >
          <GlowCard className="p-8 lg:p-10" tilt={false}>
            <div className="flex flex-col items-center text-center">
              <div className="mb-2 flex items-center gap-2 text-healix-cyan">
                <QrCode className="h-5 w-5" />
                <span className="text-sm font-medium uppercase tracking-wider">Scan to Download</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Scan to Download Healix</h3>
              <QRCodeVisual />
              <p className="mt-4 text-sm text-healix-muted">
                Point your Android camera at the code
              </p>
              <Button href="#" variant="primary" className="mt-8 w-full sm:w-auto">
                <Download className="h-4 w-4" />
                Download for Android
              </Button>
            </div>
          </GlowCard>

          <div className="flex flex-col items-center gap-8">
            <PhoneMockup />
            <div className="flex flex-wrap justify-center gap-3">
              {platformBadges.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-healix-muted"
                >
                  <Icon className="h-4 w-4 text-healix-cyan" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
