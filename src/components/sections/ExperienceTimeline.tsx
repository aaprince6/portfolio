"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/content";
import { GraduationCap, Briefcase, Users, Code2 } from "lucide-react";

const typeConfig = {
  education: { icon: GraduationCap, color: "#3b82f6" },
  work: { icon: Briefcase, color: "#10b981" },
  freelance: { icon: Code2, color: "#f59e0b" },
  project: { icon: Code2, color: "#8b5cf6" },
  leadership: { icon: Users, color: "#ec4899" },
};

export default function ExperienceTimeline() {
  return (
    <section className="py-24 px-4 relative" id="experience">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Experience
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            My journey through education, work, and projects.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent" />

          {experiences.map((exp, i) => {
            const config = typeConfig[exp.type] || typeConfig.work;
            const Icon = config.icon;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="hidden md:flex w-1/2" />

                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center border-2"
                    style={{
                      backgroundColor: "var(--color-bg)",
                      borderColor: config.color,
                    }}
                  >
                    <Icon className="w-4 h-4" style={{ color: config.color }} />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:border-[var(--color-primary)]/30 transition-all duration-300">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium mb-3"
                      style={{
                        backgroundColor: `${config.color}20`,
                        color: config.color,
                        border: `1px solid ${config.color}40`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <h3 className="text-lg font-semibold text-[var(--color-text)] mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-[var(--color-primary)] mb-2">
                      {exp.company}
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mb-3">
                      {exp.period}
                    </p>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-[var(--color-text-muted)] leading-relaxed flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: config.color }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
