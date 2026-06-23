"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/content";
import { Code2, GraduationCap, Film, Globe } from "lucide-react";

const iconMap: Record<string, typeof Code2> = {
  Code2, GraduationCap, Film, Globe,
};

export default function Achievements() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            By the Numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Code2;
            return (
              <motion.div
                key={item.label}
                className="text-center p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="inline-flex p-3 rounded-lg bg-[var(--color-primary)]/10 mb-4">
                  <Icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <p className="text-3xl font-bold text-[var(--color-text)] mb-1">
                  {item.value}
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  {item.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
