"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPostsData } from "@/data/content";

const categoryColors: Record<string, string> = {
  tutorial: "#2563eb", project: "#059669", thoughts: "#d97706", gaming: "#7c3aed",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
            Blog & Learning Hub
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Project breakdowns, tutorials, and reflections on technology, teaching, and gaming.
          </p>
        </motion.div>

        <div className="space-y-6">
          {blogPostsData.map((post, i) => {
            const catColor = categoryColors[post.category] || "#2563eb";
            return (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ x: 4 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm hover:border-[var(--color-primary)]/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${catColor}20`, color: catColor, border: `1px solid ${catColor}40` }}
                    >
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span key={tag} className="flex items-center gap-1 px-2 py-0.5 rounded text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                          <Tag className="w-2.5 h-2.5" />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors" />
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
