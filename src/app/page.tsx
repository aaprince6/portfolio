"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import YouTubeShowcase from "@/components/sections/YouTubeShowcase";
import Achievements from "@/components/sections/Achievements";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import Testimonials from "@/components/sections/Testimonials";
import GitHubStats from "@/components/sections/GitHubStats";
import CurrentlyLearning from "@/components/sections/CurrentlyLearning";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Achievements />
      <AboutPreview />
      <FeaturedProjects />
      <ExperienceTimeline />
      <YouTubeShowcase />
      <Testimonials />
      <GitHubStats />
      <CurrentlyLearning />

      <section className="py-24 px-4 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-6">
              Let&apos;s Build Something Together
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8 max-w-xl mx-auto">
              Whether it&apos;s a web app, embedded system, or creative content —
              I&apos;m always open to new opportunities and collaborations.
            </p>
            <motion.a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--color-primary)]/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
