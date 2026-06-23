"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code2, Gamepad2, Cpu, BookOpen, Download } from "lucide-react";
import Hero3D from "@/components/three/Hero3D";
import CaptchaDialog from "@/components/ui/CaptchaDialog";

const roles = [
  { icon: Code2, label: "Web Developer", color: "#2563eb" },
  { icon: Cpu, label: "Embedded Systems", color: "#059669" },
  { icon: Gamepad2, label: "Content Creator", color: "#7c3aed" },
  { icon: BookOpen, label: "Tutor & Learner", color: "#d97706" },
];

export default function HeroSection() {
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-bg)]">
      <CaptchaDialog
        open={captchaOpen}
        onClose={() => setCaptchaOpen(false)}
        onSuccess={() => { linkRef.current?.click(); setCaptchaOpen(false); }}
      />
      <Hero3D />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 text-[var(--color-primary)] text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Computer Science Student at North South University
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[var(--color-text)] mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">Hi, I&apos;m</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]">
            Lazim Al Ahasan
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-[var(--color-text)] max-w-3xl mx-auto mb-2 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
        >
          Building modern web applications, embedded systems, and educational technology.
        </motion.p>

        <motion.p
          className="text-base text-[var(--color-text-muted)] max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Specializing in full-stack web development, STM32 embedded systems, Java/JavaFX applications, and creating engaging tech content.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: role.color }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 + i * 0.1 }}
              >
                <Icon className="w-4 h-4" style={{ color: role.color }} />
                <span className="text-sm text-[var(--color-text)]">{role.label}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.a
            href="/projects"
            className="px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="/contact"
            className="px-8 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
          <motion.button
            onClick={() => setCaptchaOpen(true)}
            className="px-8 py-3 rounded-full border border-[var(--color-primary)]/50 text-[var(--color-primary)] hover:bg-[var(--color-primary)]/10 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </motion.button>
          <a ref={linkRef} href="/Lazim_Al_Ahasan_CV.pdf" download className="hidden" />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-[var(--color-text-muted)]" />
      </motion.div>
    </section>
  );
}
