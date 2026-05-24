"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView(0.2);

  return (
    <div
      ref={ref}
      className={cn(
        "mb-16 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-healix-cyan/20 bg-healix-cyan/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-healix-cyan"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-healix-cyan animate-pulse" />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-healix-muted leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
