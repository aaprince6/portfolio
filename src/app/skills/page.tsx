"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Database, Wrench, GraduationCap, Brain } from "lucide-react";
import { skillCategories } from "@/data/content";

const levelColors: Record<string, string> = {
  Advanced: "#10b981",
  Intermediate: "#f59e0b",
  Beginner: "#ef4444",
  Experienced: "#10b981",
  Comfortable: "#3b82f6",
  Learning: "#8b5cf6",
};

function SkillBadge({ name, level, index }: { name: string; level: string; index: number }) {
  return (
    <motion.div
      className="flex items-center justify-between px-4 py-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]/50"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
    >
      <span className="text-sm text-[var(--color-text)]">{name}</span>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{
          backgroundColor: `${levelColors[level]}20`,
          color: levelColors[level],
          border: `1px solid ${levelColors[level]}40`,
        }}
      >
        {level}
      </span>
    </motion.div>
  );
}

const iconMap: Record<string, typeof Code2> = {
  Code2, Database, Cpu, Wrench, Brain, GraduationCap,
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
            Skills & Expertise
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Technologies and tools I work with, organized by proficiency level.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => {
            const Icon = iconMap[category.icon] || Code2;
            return (
              <motion.div
                key={category.title}
                className="p-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.1 }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl" style={{ backgroundColor: `${category.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h2 className="text-lg font-semibold text-[var(--color-text)]">
                    {category.title}
                  </h2>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
