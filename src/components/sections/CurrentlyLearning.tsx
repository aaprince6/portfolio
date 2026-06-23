"use client";

import { motion } from "framer-motion";
import { currentlyLearning } from "@/data/content";
import { BookOpen } from "lucide-react";

export default function CurrentlyLearning() {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Currently Learning
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Technologies I&apos;m actively learning and building with right now.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentlyLearning.map((item, i) => (
            <motion.div
              key={item.name}
              className="flex items-center gap-4 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                <BookOpen className="w-4 h-4 text-[var(--color-primary)]" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-[var(--color-text)]">
                    {item.name}
                  </span>
                  <span className="text-xs text-[var(--color-text-muted)]">
                    {item.progress}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--color-border)] overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-primary)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
