"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import ProjectIcon from "@/components/ui/ProjectIcon";
import { projects, categoryColors } from "@/data/content";

const featuredProjects = projects.filter((p) => p.featured).slice(0, 6);

export default function FeaturedProjects() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Featured Projects
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            A selection of my best work across web development, embedded systems, Java applications, and educational tools.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => {
            const catColor = categoryColors[project.category] || "#2563eb";
            return (
              <motion.div
                key={project.id}
                className="group relative rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 overflow-hidden bg-[var(--color-surface)] flex items-center justify-center">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${catColor}22, transparent 70%)` }}
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ backgroundColor: `${catColor}20`, color: catColor, border: `1px solid ${catColor}40` }}>
                      {project.category}
                    </span>
                  </div>
                  <div className="group-hover:scale-110 transition-transform duration-500">
                    <ProjectIcon title={project.title} category={project.category} size="lg" />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-xs text-[var(--color-text-muted)]">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="text-center mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
          <motion.a href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            View All Projects <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
