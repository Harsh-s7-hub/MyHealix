"use client";

import { motion } from "framer-motion";

export function AuroraBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        className="absolute -left-[20%] top-[10%] h-[600px] w-[600px] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.35) 0%, transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-[10%] top-[30%] h-[500px] w-[500px] rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.35) 0%, transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[10%] left-[30%] h-[400px] w-[400px] rounded-full opacity-25 blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
