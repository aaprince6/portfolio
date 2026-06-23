"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Search, Lightbulb, AlertTriangle, BookOpen, TrendingUp } from "lucide-react";
import { useState, useMemo } from "react";
import { projects, categoryColors } from "@/data/content";
import ProjectIcon from "@/components/ui/ProjectIcon";

const allTechTags = Array.from(new Set(projects.flatMap((p) => p.techStack))).sort();

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "all" || project.category === activeCategory;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTech = !selectedTech || project.techStack.includes(selectedTech);
      return matchesCategory && matchesSearch && matchesTech;
    });
  }, [activeCategory, searchQuery, selectedTech]);

  const categories = ["all", ...Array.from(new Set(projects.map((p) => p.category)))];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text)] mb-4">
            Projects
          </h1>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Real projects I&apos;ve built — from embedded systems to web applications and educational tools.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]"
                }`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-muted)]" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text)] text-sm focus:outline-none focus:border-[var(--color-primary)] transition-colors placeholder:text-[var(--color-text-muted)]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {allTechTags.slice(0, 20).map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`px-2.5 py-1 rounded-full text-xs transition-all ${
                  selectedTech === tech
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)] hover:border-[var(--color-primary)]"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div className="space-y-8" layout>
          {filteredProjects.map((project, i) => {
            const catColor = categoryColors[project.category] || "#2563eb";
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm overflow-hidden hover:border-[var(--color-primary)]/30 transition-all duration-500"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:block">
                        <ProjectIcon title={project.title} category={project.category} size="md" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              backgroundColor: `${catColor}20`,
                              color: catColor,
                              border: `1px solid ${catColor}40`,
                            }}
                          >
                            {project.category}
                          </span>
                          <span className="text-xs text-[var(--color-text-muted)]">
                            {project.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex gap-3 flex-shrink-0">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-[var(--color-text-muted)] mb-4 leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs bg-[var(--color-bg)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                    className="text-xs text-[var(--color-primary)] hover:underline"
                  >
                    {expandedProject === project.id ? "Less details" : "More details"}
                  </button>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--color-border)] mt-4 pt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.problem && (
                            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-yellow-500" />
                                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">Problem</span>
                              </div>
                              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{project.problem}</p>
                            </div>
                          )}
                          {project.challenge && (
                            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                              <div className="flex items-center gap-2 mb-2">
                                <AlertTriangle className="w-4 h-4 text-orange-500" />
                                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">Challenge</span>
                              </div>
                              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{project.challenge}</p>
                            </div>
                          )}
                          {project.learning && (
                            <div className="p-3 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)]">
                              <div className="flex items-center gap-2 mb-2">
                                <BookOpen className="w-4 h-4 text-blue-500" />
                                <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">Learning</span>
                              </div>
                              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">{project.learning}</p>
                            </div>
                          )}
                        </div>
                        {project.results && (
                          <div className="mt-3 p-3 rounded-lg bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20">
                            <div className="flex items-center gap-2 mb-1">
                              <TrendingUp className="w-4 h-4 text-[var(--color-primary)]" />
                              <span className="text-xs font-semibold text-[var(--color-text)] uppercase tracking-wider">Results</span>
                            </div>
                            <p className="text-xs text-[var(--color-text-muted)]">{project.results}</p>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-[var(--color-text-muted)] text-lg">
              No projects found matching your criteria.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
