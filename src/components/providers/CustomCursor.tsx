"use client";

import { useEffect, useRef, useState } from "react";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]';

export function CustomCursor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const syncEnabled = () => setEnabled(finePointer.matches);
    syncEnabled();
    finePointer.addEventListener("change", syncEnabled);
    return () => finePointer.removeEventListener("change", syncEnabled);
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("custom-cursor");
      return;
    }

    document.documentElement.classList.add("custom-cursor");

    const container = containerRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!container || !dot || !ring || !glow) return;

    let targetX = 0;
    let targetY = 0;
    let dotX = 0;
    let dotY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;
    let rafId = 0;

    const setPosition = (el: HTMLElement, x: number, y: number) => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const animate = () => {
      dotX += (targetX - dotX) * 0.55;
      dotY += (targetY - dotY) * 0.55;
      ringX += (targetX - ringX) * 0.16;
      ringY += (targetY - ringY) * 0.16;
      glowX += (targetX - glowX) * 0.07;
      glowY += (targetY - glowY) * 0.07;

      setPosition(dot, dotX, dotY);
      setPosition(ring, ringX, ringY);
      setPosition(glow, glowX, glowY);

      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      container.style.opacity = "1";
    };

    const onLeave = () => {
      container.style.opacity = "0";
    };

    const onEnter = () => {
      container.style.opacity = "1";
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      setHovering(!!target.closest(INTERACTIVE_SELECTOR));
    };

    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.body.addEventListener("mouseleave", onLeave);
    document.body.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMove);
      document.body.removeEventListener("mouseleave", onLeave);
      document.body.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  const dotSize = clicking ? 4 : hovering ? 8 : 6;
  const ringSize = hovering ? 48 : 34;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden opacity-0"
      aria-hidden
      style={{ transition: "opacity 0.3s ease" }}
    >
      {/* Ambient follow glow */}
      <div
        ref={glowRef}
        className="absolute left-0 top-0 will-change-transform"
        style={{
          width: 440,
          height: 440,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.04) 40%, transparent 72%)",
        }}
      />

      {/* Outer ring — trails behind the dot */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 will-change-transform"
        style={{
          width: ringSize,
          height: ringSize,
          borderRadius: "50%",
          border: `1px solid rgba(34, 211, 238, ${hovering ? 0.5 : 0.22})`,
          boxShadow: hovering
            ? "0 0 28px rgba(34, 211, 238, 0.3), inset 0 0 14px rgba(34, 211, 238, 0.06)"
            : "0 0 18px rgba(34, 211, 238, 0.14)",
          opacity: clicking ? 0.55 : 1,
          transition:
            "width 0.35s cubic-bezier(0.22, 1, 0.36, 1), height 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.25s ease, box-shadow 0.25s ease, opacity 0.15s ease",
        }}
      />

      {/* Glowing core dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 will-change-transform"
        style={{
          width: dotSize,
          height: dotSize,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 32% 28%, #ffffff 0%, #a5f3fc 25%, #22d3ee 55%, #0891b2 100%)",
          boxShadow: `
            0 0 4px 1px rgba(255, 255, 255, 0.5),
            0 0 10px 2px rgba(34, 211, 238, 0.85),
            0 0 22px 4px rgba(34, 211, 238, 0.45),
            0 0 40px 8px rgba(59, 130, 246, 0.2)
          `,
          transition:
            "width 0.2s cubic-bezier(0.22, 1, 0.36, 1), height 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.25s ease",
        }}
      />
    </div>
  );
}
