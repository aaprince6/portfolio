"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/lib/theme-provider";
import { Monitor, Terminal, Zap, Sun, Moon } from "lucide-react";

const themes = [
  { name: "cyberpunk" as const, icon: Zap, label: "Cyberpunk" },
  { name: "matrix" as const, icon: Terminal, label: "Matrix" },
  { name: "synthwave" as const, icon: Monitor, label: "Synthwave" },
  { name: "light" as const, icon: Sun, label: "Light" },
  { name: "dark" as const, icon: Moon, label: "Dark" },
];

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const currentIndex = themes.findIndex((t) => t.name === theme);
  const nextTheme = themes[(currentIndex + 1) % themes.length];

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative group p-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-primary)] transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${nextTheme.label} theme`}
    >
      {themes.map((t) => {
        const Icon = t.icon;
        return (
          <motion.div
            key={t.name}
            initial={false}
            animate={{
              opacity: theme === t.name ? 1 : 0,
              scale: theme === t.name ? 1 : 0,
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            transition={{ duration: 0.2 }}
          >
            <Icon className="w-4 h-4 text-[var(--color-primary)]" />
          </motion.div>
        );
      })}
      <div className="w-4 h-4" />
    </motion.button>
  );
}
