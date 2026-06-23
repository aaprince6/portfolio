"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "@/lib/theme-provider";

const ThreeScene = dynamic(() => import("@/components/three/ThreeScene"), {
  ssr: false,
  loading: () => null,
});

function CSSFallback() {
  return (
    <div className="absolute inset-0 z-0 bg-[var(--color-bg)]">
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{
          backgroundImage: "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-[var(--color-primary)]/15 animate-ping" style={{ animationDuration: "4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[var(--color-accent)]/15 animate-ping" style={{ animationDuration: "3s" }} />
      </div>
    </div>
  );
}

export default function Hero3D() {
  const { theme } = useTheme();
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setUse3d(false);
      return;
    }
    let hasWebgl = false;
    try {
      const c = document.createElement("canvas");
      hasWebgl = !!(c.getContext("webgl") || c.getContext("experimental-webgl"));
    } catch {}
    setUse3d(hasWebgl);
  }, []);

  if (!use3d) return <CSSFallback />;

  return <ThreeScene theme={theme} />;
}
