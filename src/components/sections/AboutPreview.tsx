"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Globe, BookOpen, Gamepad2, ArrowRight, MapPin, Mail, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Globe, title: "Web Development", description: "Building responsive, modern websites with Next.js, React, WordPress, and Tailwind CSS for clients in Dhaka and beyond.", color: "#2563eb" },
  { icon: Cpu, title: "Embedded Systems", description: "Working with STM32F103C8 Blue Pill, Keil uVision, and ST-Link for IoT sensor monitoring and microcontroller projects.", color: "#059669" },
  { icon: BookOpen, title: "Java Development", description: "Creating full-featured JavaFX applications — AI chatbots, teaching management systems, interactive quiz platforms.", color: "#dc2626" },
  { icon: Gamepad2, title: "Content & Gaming", description: "Producing gaming tutorials, tech fixes, and entertainment content reaching 100K+ views on YouTube.", color: "#7c3aed" },
];

export default function AboutPreview() {
  const [hover, setHover] = useState(false);

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-20">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 mx-auto lg:mx-0">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-[2px]">
                <div className="w-full h-full rounded-2xl bg-[var(--color-bg)] flex items-center justify-center">
                  <div className="text-center">
                    <div className="relative">
                      <div
                        className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] p-[2px] cursor-pointer"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                      >
                        <div className="w-full h-full rounded-full overflow-hidden">
                          <Image src="/profile.jpg" alt="Lazim Al Ahasan" width={76} height={76} className="w-full h-full object-cover" />
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
                    <h3 className="text-lg font-bold text-[var(--color-text)]">Lazim Al Ahasan</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">CSE Student @ NSU</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-[var(--color-primary)]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
              About Me
            </h2>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
              I&apos;m a Computer Science & Engineering student at North South University with a passion for 
              building things that matter — from web applications that serve local businesses to embedded 
              systems that read real-world sensor data. My journey in tech started with curiosity about 
              how websites work and evolved into a multi-disciplinary skill set spanning full-stack 
              development, embedded systems, Java application development, and content creation.
            </p>
            <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
              Beyond coding, I&apos;m an educator at heart — I tutor grade 7-10 students in computer science, 
              creating interactive tools to make learning engaging. I also produce gaming and tech content 
              on YouTube, where I&apos;ve built a community around Farlight 84 gameplay and tech tutorials.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                Bashundhara, Dhaka
              </div>
              <div className="flex items-center gap-2 text-[var(--color-text-muted)]">
                <Mail className="w-4 h-4 text-[var(--color-primary)]" />
                alahasanlazim@gmail.com
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            What I Do
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            A multi-disciplinary developer exploring the full stack of technology from web to silicon.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.title} className="group relative p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -5 }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${item.color}, transparent 70%)` }} />
                <Icon className="w-10 h-10 mb-4" style={{ color: item.color }} />
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <motion.a href="/about" className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:underline underline-offset-4" whileHover={{ x: 5 }}>
            More about me <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
