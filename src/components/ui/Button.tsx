"use client";

import { cn } from "@/lib/utils";
import { useMagnetic } from "@/hooks/useMagnetic";
import { motion } from "framer-motion";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  className?: string;
  magnetic?: boolean;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-healix-cyan to-healix-blue text-white font-semibold shadow-glow hover:shadow-glow-lg",
  secondary:
    "glass text-slate-900 hover:border-healix-cyan/40 hover:shadow-glow",
  ghost: "text-healix-muted hover:text-slate-900 hover:bg-slate-100",
};

function ButtonInner({ children, variant }: { children: React.ReactNode; variant: ButtonVariant }) {
  return (
    <>
      {variant === "primary" && (
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-healix-cyan to-healix-blue opacity-0 blur-xl transition-opacity group-hover:opacity-50" />
      )}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  magnetic = true,
  external,
}: ButtonProps) {
  const magneticBtn = useMagnetic<HTMLButtonElement>(0.25);
  const magneticSpan = useMagnetic<HTMLSpanElement>(0.25);

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-medium transition-all duration-300",
    variants[variant],
    className
  );

  const btnHandlers = magnetic
    ? { onMouseMove: magneticBtn.handleMouseMove, onMouseLeave: magneticBtn.handleMouseLeave }
    : {};
  const spanHandlers = magnetic
    ? { onMouseMove: magneticSpan.handleMouseMove, onMouseLeave: magneticSpan.handleMouseLeave }
    : {};

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          whileTap={{ scale: 0.98 }}
          {...btnHandlers}
        >
          <ButtonInner variant={variant}>{children}</ButtonInner>
        </motion.a>
      );
    }
    return (
      <Link href={href} className={classes}>
        <motion.span
          className="inline-flex w-full items-center justify-center"
          whileTap={{ scale: 0.98 }}
          ref={magnetic ? magneticSpan.ref : undefined}
          {...spanHandlers}
        >
          <ButtonInner variant={variant}>{children}</ButtonInner>
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type="button"
      ref={magnetic ? magneticBtn.ref : undefined}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.98 }}
      {...btnHandlers}
    >
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </motion.button>
  );
}
