"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseGlowProvider() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1] hidden md:block"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
        style={{
          left: position.x,
          top: position.y,
          background:
            "radial-gradient(circle, rgba(34,211,238,0.8) 0%, rgba(59,130,246,0.3) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
