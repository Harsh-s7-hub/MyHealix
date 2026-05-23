"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/Button";
import { ParticlesBackground } from "@/components/background/ParticlesBackground";
import { useInView } from "@/hooks/useInView";

export function CTA() {
  const { ref, isInView } = useInView(0.2);

  return (
    <section className="relative py-32 overflow-hidden">
      <ParticlesBackground count={25} />

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.15),transparent_60%)]" />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, rgba(34,211,238,0.1), transparent, rgba(59,130,246,0.1), transparent)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl px-6 text-center lg:px-8"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl xl:text-6xl">
          <span className="gradient-text">Experience the Future</span>
          <br />
          <span className="text-white">of Intelligent Healthcare</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-healix-muted">
          Join thousands discovering a smarter way to manage health. Download Healix
          today and unlock AI-powered healthcare on Android.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#download" variant="primary">
            <Download className="h-4 w-4" />
            Download Healix
          </Button>
          <Button href="#" variant="secondary">
            <FileText className="h-4 w-4" />
            View Documentation
          </Button>
          <Button href="https://github.com" variant="ghost" external>
            <FaGithub className="h-4 w-4" />
            GitHub
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
