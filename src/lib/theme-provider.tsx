"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "cyberpunk" | "matrix" | "synthwave" | "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_ORDER: Theme[] = ["cyberpunk", "matrix", "synthwave", "light", "dark"];

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && THEME_ORDER.includes(saved)) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    const themeColors = {
      cyberpunk: {
        "--color-primary": "#00ff88", "--color-secondary": "#ff006e",
        "--color-accent": "#3a86ff", "--color-bg": "#0a0a0f",
        "--color-surface": "#12121a", "--color-text": "#e8e8e8",
        "--color-text-muted": "#888899", "--color-border": "#2a2a3a",
      },
      matrix: {
        "--color-primary": "#00ff41", "--color-secondary": "#00cc33",
        "--color-accent": "#ffff00", "--color-bg": "#000000",
        "--color-surface": "#0a0a0a", "--color-text": "#00ff41",
        "--color-text-muted": "#008811", "--color-border": "#003300",
      },
      synthwave: {
        "--color-primary": "#ff00ff", "--color-secondary": "#00ffff",
        "--color-accent": "#ffaa00", "--color-bg": "#1a0033",
        "--color-surface": "#2a0044", "--color-text": "#ffe4ff",
        "--color-text-muted": "#aa88bb", "--color-border": "#440066",
      },
      light: {
        "--color-primary": "#2563eb", "--color-secondary": "#d946ef",
        "--color-accent": "#0891b2", "--color-bg": "#ffffff",
        "--color-surface": "#f1f5f9", "--color-text": "#0f172a",
        "--color-text-muted": "#64748b", "--color-border": "#cbd5e1",
      },
      dark: {
        "--color-primary": "#38bdf8", "--color-secondary": "#a78bfa",
        "--color-accent": "#34d399", "--color-bg": "#0b1121",
        "--color-surface": "#1e293b", "--color-text": "#e2e8f0",
        "--color-text-muted": "#94a3b8", "--color-border": "#334155",
      },
    };

    const colors = themeColors[theme];
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => {
    const currentIndex = THEME_ORDER.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEME_ORDER.length;
    setTheme(THEME_ORDER[nextIndex]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}
