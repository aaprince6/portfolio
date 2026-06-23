"use client";

import { motion } from "framer-motion";
import { Play, ExternalLink, Film, Eye, ThumbsUp } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  thumbnail: string;
  url: string;
  isShort: boolean;
}

const videos: VideoItem[] = [
  {
    id: "0yRCnqv_EV0",
    title: "Fixing Easy Anti-Cheat is not install || Farlight84 game error || Steam error || Farlight84 Game",
    views: "73K",
    likes: "510",
    thumbnail: "https://img.youtube.com/vi/0yRCnqv_EV0/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=0yRCnqv_EV0",
    isShort: false,
  },
  {
    id: "GWA7SAmx16Q",
    title: "ACE Gameplay! 😳🔥 Full Squad Wipe!",
    views: "15K",
    likes: "1.4K",
    thumbnail: "https://img.youtube.com/vi/GWA7SAmx16Q/maxresdefault.jpg",
    url: "https://www.youtube.com/shorts/GWA7SAmx16Q",
    isShort: true,
  },
  {
    id: "TsFHnvWJ6ZI",
    title: "10 Headshots in a Friendly Custom Match! 😳🔥 Too Clean!",
    views: "14K",
    likes: "1.3K",
    thumbnail: "https://img.youtube.com/vi/TsFHnvWJ6ZI/maxresdefault.jpg",
    url: "https://www.youtube.com/shorts/TsFHnvWJ6ZI",
    isShort: true,
  },
];

export default function YouTubeShowcase() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/30 bg-red-500/5 text-red-400 text-sm mb-4">
            <Film className="w-4 h-4" />
            Content Creation
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text)] mb-4">
            Video Highlights
          </h2>
          <p className="text-[var(--color-text-muted)] max-w-2xl mx-auto">
            Gaming content, editing showcases, and creative video production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, i) => {
            const isFirst = i === 0;
            return (
              <motion.div
                key={video.id}
                className={`group relative rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface)]/50 backdrop-blur-sm ${isFirst ? "sm:col-span-2 lg:col-span-2" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block relative ${isFirst ? "aspect-video" : "aspect-[9/16]"} overflow-hidden`}
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = "true";
                        target.src = `https://img.youtube.com/vi/${video.id}/sddefault.jpg`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 shadow-lg">
                      <Play className="w-6 h-6 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {video.isShort && (
                    <>
                      <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs text-white font-medium border border-white/10">
                        #Shorts
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-3">
                        <h3 className="text-white font-semibold text-xs sm:text-sm mb-2 line-clamp-2 drop-shadow-lg leading-tight">
                          {video.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-white/70">
                            <Eye className="w-3 h-3" />
                            {video.views}
                          </span>
                          <span className="flex items-center gap-1 text-[10px] sm:text-xs text-white/70">
                            <ThumbsUp className="w-3 h-3" />
                            {video.likes}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </a>

                {!video.isShort && (
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 space-y-3"
                  >
                    <h3 className="text-[var(--color-text)] font-semibold text-sm leading-snug line-clamp-2 group-hover:text-red-400 transition-colors">
                      {video.title}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                        <Eye className="w-3.5 h-3.5" />
                        {video.views} views
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
                        <ThumbsUp className="w-3.5 h-3.5" />
                        {video.likes}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 border border-red-500/20">
                        Farlight 84
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        Tutorial
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                        Fix
                      </span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs text-red-400 font-medium group-hover:gap-2 transition-all">
                      Watch on YouTube
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://www.youtube.com/@lazimalahasan9047"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--color-border)] text-[var(--color-text)] hover:border-red-500 hover:text-red-400 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            View Full Channel
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
