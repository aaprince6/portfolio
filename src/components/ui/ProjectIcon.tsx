"use client";

import { useMemo } from "react";

interface ProjectIconProps {
  title: string;
  category: string;
  size?: "sm" | "md" | "lg";
}

const categoryPalettes: Record<string, { bg: string; accent: string; glow: string; pattern: string }> = {
  web: {
    bg: "from-emerald-900/40 via-teal-800/30 to-cyan-900/40",
    accent: "#00ff88",
    glow: "rgba(0,255,136,0.3)",
    pattern: "grid",
  },
  java: {
    bg: "from-rose-900/40 via-pink-800/30 to-fuchsia-900/40",
    accent: "#ff006e",
    glow: "rgba(255,0,110,0.3)",
    pattern: "dots",
  },
  embedded: {
    bg: "from-blue-900/40 via-indigo-800/30 to-violet-900/40",
    accent: "#3a86ff",
    glow: "rgba(58,134,255,0.3)",
    pattern: "circuit",
  },
  teaching: {
    bg: "from-amber-900/40 via-orange-800/30 to-yellow-900/40",
    accent: "#ffaa00",
    glow: "rgba(255,170,0,0.3)",
    pattern: "book",
  },
  gaming: {
    bg: "from-purple-900/40 via-violet-800/30 to-pink-900/40",
    accent: "#aa44ff",
    glow: "rgba(170,68,255,0.3)",
    pattern: "crosshair",
  },
};

function getGradientForTitle(title: string, accent: string): string {
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  const hue1 = Math.abs(hash % 360);
  const hue2 = (hue1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${hue1}, 80%, 55%), hsl(${hue2}, 80%, 45%))`;
}

function CircuitPattern({ color }: { color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
      <path d="M20,50 L40,50 L40,30 L60,30" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="50" r="2" fill={color} />
      <circle cx="60" cy="30" r="2" fill={color} />
      <path d="M50,70 L50,50 L70,50 L70,70" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="70" cy="50" r="2" fill={color} />
      <circle cx="50" cy="70" r="2" fill={color} />
      <path d="M30,80 L30,60 L80,60" stroke={color} strokeWidth="1.5" fill="none" />
      <circle cx="80" cy="60" r="2" fill={color} />
      <circle cx="30" cy="80" r="2" fill={color} />
    </svg>
  );
}

function GridPattern({ color }: { color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100">
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={20 + i * 15} x2="100" y2={20 + i * 15} stroke={color} strokeWidth="0.5" />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <line key={`v${i}`} x1={20 + i * 15} y1="0" x2={20 + i * 15} y2="100" stroke={color} strokeWidth="0.5" />
      ))}
    </svg>
  );
}

function DotsPattern({ color }: { color: string }) {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
      {Array.from({ length: 25 }).map((_, i) => (
        <circle
          key={i}
          cx={10 + (i % 5) * 20}
          cy={10 + Math.floor(i / 5) * 20}
          r="1.5"
          fill={color}
        />
      ))}
    </svg>
  );
}

function Pattern({ category, color }: { category: string; color: string }) {
  switch (category) {
    case "embedded": return <CircuitPattern color={color} />;
    case "web": return <GridPattern color={color} />;
    case "java": return <DotsPattern color={color} />;
    default: return <GridPattern color={color} />;
  }
}

const sizeMap = {
  sm: { container: "w-16 h-16", icon: "text-lg" },
  md: { container: "w-24 h-24", icon: "text-2xl" },
  lg: { container: "w-32 h-32", icon: "text-3xl" },
};

export default function ProjectIcon({ title, category, size = "md" }: ProjectIconProps) {
  const palette = categoryPalettes[category] || categoryPalettes.web;
  const gradient = useMemo(() => getGradientForTitle(title, palette.accent), [title, palette.accent]);
  const sizes = sizeMap[size];

  const initial = title.charAt(0).toUpperCase();

  return (
    <div className={`relative ${sizes.container} flex-shrink-0`}>
      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${palette.bg} backdrop-blur-sm`}
        style={{
          boxShadow: `inset 0 0 30px ${palette.glow}, 0 0 20px ${palette.glow}`,
          border: `1px solid ${palette.accent}33`,
        }}
      />
      <Pattern category={category} color={palette.accent} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-3/5 h-3/5 rounded-xl flex items-center justify-center"
          style={{ background: gradient, boxShadow: `0 0 20px ${palette.glow}` }}
        >
          <span className={`${sizes.icon} font-black text-white`} style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
            {initial}
          </span>
        </div>
      </div>
      <div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse"
        style={{ backgroundColor: palette.accent, boxShadow: `0 0 8px ${palette.accent}` }}
      />
    </div>
  );
}
