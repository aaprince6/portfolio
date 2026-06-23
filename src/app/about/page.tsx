"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Globe, BookOpen, Gamepad2, MapPin, Mail, GraduationCap, Download, ArrowDown } from "lucide-react";
import { achievements } from "@/data/content";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Certifications from "@/components/sections/Certifications";
import GitHubStats from "@/components/sections/GitHubStats";
import CurrentlyLearning from "@/components/sections/CurrentlyLearning";
import Testimonials from "@/components/sections/Testimonials";
import CaptchaDialog from "@/components/ui/CaptchaDialog";

const highlights = [
  { icon: Globe, title: "Web Development", description: "Building responsive, modern websites with Next.js, React, WordPress, and Tailwind CSS for clients.", color: "#2563eb" },
  { icon: Cpu, title: "Embedded Systems", description: "STM32F103C8 Blue Pill development with Keil uVision, UART communication, and sensor integration.", color: "#059669" },
  { icon: BookOpen, title: "Java Development", description: "Full-featured JavaFX applications including AI chatbots, teaching management, and interactive quizzes.", color: "#dc2626" },
  { icon: Gamepad2, title: "Content Creation", description: "YouTube content creator with 100K+ views, producing gaming, tutorial, and tech fix videos.", color: "#7c3aed" },
];

export default function AboutPage() {
  const [hover, setHover] = useState(false);
  const [captchaOpen, setCaptchaOpen] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  return (
    <div className="min-h-screen">

      <CaptchaDialog
        open={captchaOpen}
        onClose={() => setCaptchaOpen(false)}
        onSuccess={() => { linkRef.current?.click(); setCaptchaOpen(false); }}
      />
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative w-72 h-72 mx-auto lg:mx-0">
                <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-[var(--color-bg)] flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative">
                        <div
                          className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-[2px] cursor-pointer"
                          onMouseEnter={() => setHover(true)}
                          onMouseLeave={() => setHover(false)}
                        >
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <Image src="/profile.jpg" alt="Lazim Al Ahasan" width={92} height={92} className="w-full h-full object-cover" />
                          </div>
                        </div>
                        <AnimatePresence>
                          {hover && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8, y: 10 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              exit={{ opacity: 0, scale: 0.8, y: 10 }}
                              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                            >
                              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-2 border-[var(--color-primary)]/30">
                                <Image src="/profile.jpg" alt="Lazim Al Ahasan" width={192} height={192} className="w-full h-full object-cover" />
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--color-text)]">Lazim Al Ahasan</h3>
                      <p className="text-sm text-[var(--color-text-muted)]">CSE Student @ NSU</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
                </div>
              </div>
            </motion.div>

            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-6">
                About Me
              </h1>
              <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  I&apos;m a Computer Science & Engineering student at North South University in Dhaka, Bangladesh. 
                  My passion lies at the intersection of software and hardware — from designing responsive web 
                  applications to programming microcontrollers that interact with the physical world.
                </p>
                <p>
                  My journey into tech began with curiosity about how websites work, leading me to learn HTML, 
                  CSS, and JavaScript. That curiosity eventually expanded into Java/JavaFX desktop applications, 
                  embedded systems with STM32 microcontrollers, and content creation on YouTube. Along the way, 
                  I discovered a love for teaching — I&apos;ve been tutoring computer science to grade 7-10 students, 
                  building custom educational tools to make learning more engaging.
                </p>
                <p>
                  I&apos;ve also had the privilege of co-leading a team at the Youth Skill Development Institute&apos;s 
                  International Leadership Competition, where I developed project management and leadership skills 
                  that complement my technical abilities.
                </p>
                <p>
                  Currently, I&apos;m focused on deepening my expertise in React, Next.js, TypeScript, and embedded 
                  systems development, while continuing to create content and teach the next generation of coders.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <MapPin className="w-4 h-4 text-[var(--color-primary)]" /> Bashundhara, Dhaka, Bangladesh
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                  <Mail className="w-4 h-4 text-[var(--color-primary)]" /> alahasanlazim@gmail.com
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <motion.button
                  onClick={() => setCaptchaOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-4 h-4" /> Download CV
                </motion.button>
                <a ref={linkRef} href="/Lazim_Al_Ahasan_CV.pdf" download className="hidden" />
                <motion.a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] transition-all duration-300" whileHover={{ scale: 1.05 }}>
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">What I Do</h2>
            <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">My core skills and expertise areas.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => { const Icon = item.icon; return (
              <motion.div key={item.title} className="p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -4 }}>
                <Icon className="w-10 h-10 mb-4" style={{ color: item.color }} />
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            );})}
          </div>
        </div>
      </section>

      <ExperienceTimeline />
      <Certifications />
      <GitHubStats />
      <CurrentlyLearning />
      <Testimonials />
    </div>
  );
}
