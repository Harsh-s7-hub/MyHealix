"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "glass-strong py-3 shadow-lg" : "py-5 bg-transparent"
        )}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-healix-cyan to-healix-blue shadow-glow">
              <span className="text-sm font-bold text-healix-navy">H</span>
              <div className="absolute inset-0 rounded-xl bg-healix-cyan opacity-0 blur-md transition-opacity group-hover:opacity-40" />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Heal<span className="text-healix-cyan">ix</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm text-healix-muted transition-colors hover:text-slate-900 hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button href="#download" variant="primary" className="!py-2.5 !px-5 !text-xs">
              Download App
            </Button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl glass text-healix-muted transition-colors hover:text-slate-900 hover:border-healix-cyan/30"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl glass lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 glass-strong mx-4 rounded-2xl p-4 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm text-healix-muted hover:bg-slate-100 hover:text-slate-900"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-200">
              <Button href="#download" variant="primary" className="w-full">
                Download App
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
