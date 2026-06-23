"use client";

import { motion } from "framer-motion";
import { certifications } from "@/data/content";
import { Award, ExternalLink } from "lucide-react";

export default function Certifications() {
  return (
    <section className="py-24 px-4 relative" id="certifications">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Certifications
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Courses, certifications, and recognitions that back my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              className="p-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:border-[var(--color-primary)]/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/10 flex-shrink-0">
                  <Award className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[var(--color-primary)] mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-[var(--color-text-muted)] mb-3">
                    {cert.date}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 rounded text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--color-primary)] hover:underline mt-3"
                    >
                      View credential <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
