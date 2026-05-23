"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const nodes = [
  { x: 50, y: 20 },
  { x: 20, y: 50 },
  { x: 80, y: 50 },
  { x: 35, y: 80 },
  { x: 65, y: 80 },
  { x: 50, y: 55 },
];

const connections: [number, number][] = [
  [0, 1], [0, 2], [0, 5], [1, 3], [1, 5], [2, 4], [2, 5], [3, 5], [4, 5],
];

export function NeuralNetwork() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes neural-draw {
        to { stroke-dashoffset: 0; }
      }
      .neural-line {
        stroke-dasharray: 100;
        stroke-dashoffset: 100;
        animation: neural-draw 2s ease forwards;
      }
    `;
    document.head.appendChild(style);

    const lines = svgRef.current?.querySelectorAll(".neural-line");
    lines?.forEach((line, i) => {
      (line as SVGLineElement).style.animationDelay = `${i * 0.15}s`;
    });

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full max-w-md aspect-square">
      <svg ref={svgRef} viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
        <defs>
          <linearGradient id="neural-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>

        {connections.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <line
              key={i}
              className="neural-line"
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="url(#neural-grad)"
              strokeWidth="0.3"
              opacity="0.4"
            />
          );
        })}

        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="#22d3ee"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </svg>

      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute h-2 w-2 rounded-full bg-healix-cyan/60 blur-[1px]"
          style={{ left: "50%", top: "50%" }}
          animate={{
            x: [0, Math.cos(i * 2) * 80, 0],
            y: [0, Math.sin(i * 2) * 80, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
