"use client";

import { motion } from "framer-motion";

export function ECGLine({ className = "" }: { className?: string }) {
  const path =
    "M0,40 L20,40 L25,20 L30,55 L35,10 L40,50 L45,35 L50,40 L80,40 L85,25 L90,45 L95,30 L100,40 L130,40 L135,15 L140,50 L145,25 L150,40 L180,40 L185,30 L190,42 L195,38 L200,40 L230,40 L235,20 L240,55 L245,10 L250,50 L255,35 L260,40 L300,40";

  return (
    <svg
      viewBox="0 0 300 80"
      className={`w-full h-16 ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="ecg-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
        </linearGradient>
        <filter id="ecg-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d={path}
        fill="none"
        stroke="url(#ecg-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#ecg-glow)"
        initial={{ pathLength: 0, opacity: 0.5 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.5 }}
      />
      <motion.path
        d={path}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="8 292"
        animate={{ strokeDashoffset: [0, -300] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        opacity={0.6}
      />
    </svg>
  );
}
