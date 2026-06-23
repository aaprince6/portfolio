"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            What People Say
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Feedback from students, clients, and peers I&apos;ve worked with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="relative p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Quote className="w-8 h-8 text-[var(--color-primary)]/20 mb-3" />
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-semibold text-[var(--color-text)]">
                  {t.name}
                </p>
                <p className="text-xs text-[var(--color-text-muted)]">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
