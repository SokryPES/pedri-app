"use client";

import React from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeSwitcher({ className }: { className?: string }) {
  const { theme, setTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div className={cn("flex items-center gap-1 p-1 rounded-full border border-border bg-card/60 h-10 w-44 animate-pulse", className)} />
    );
  }

  return (
    <div
      role="group"
      aria-label="Theme Switcher"
      className={cn(
        "inline-flex items-center p-1 rounded-full border transition-all duration-300 select-none",
        theme === "barca"
          ? "border-amber-500/40 bg-[#070e24]/90 shadow-[0_0_20px_rgba(165,0,68,0.25)]"
          : "border-zinc-300 bg-zinc-100/90 shadow-sm",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setTheme("barca")}
        aria-pressed={theme === "barca"}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer select-none",
          theme === "barca"
            ? "bg-gradient-to-r from-[#a50044] to-[#004d98] text-white shadow-[0_0_12px_rgba(237,187,0,0.4)] border border-amber-400/40"
            : "text-zinc-500 hover:text-zinc-900"
        )}
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className={cn("inline-block w-2 h-2 rounded-full", theme === "barca" ? "bg-amber-400" : "bg-zinc-400")} />
        </span>
        <span className="tracking-wider">BARÇA</span>
      </button>

      <button
        type="button"
        onClick={() => setTheme("minimal")}
        aria-pressed={theme === "minimal"}
        className={cn(
          "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer select-none",
          theme === "minimal"
            ? "bg-black text-white shadow-sm border border-zinc-800"
            : "text-zinc-400 hover:text-white"
        )}
      >
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className={cn("inline-block w-2 h-2 rounded-full", theme === "minimal" ? "bg-zinc-200" : "bg-zinc-500")} />
        </span>
        <span className="tracking-widest uppercase font-mono text-[11px]">MINIMAL</span>
      </button>
    </div>
  );
}
