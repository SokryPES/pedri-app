"use client";

import React from "react";
import { useTheme } from "@/lib/theme";

export function AuroraBackground({ children }: { children?: React.ReactNode }) {
  const { theme } = useTheme();

  if (theme === "minimal") {
    return (
      <div className="relative w-full overflow-hidden bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
        {children}
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Barça ambient glowing energy orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-tr from-[#a50044]/35 via-[#004d98]/30 to-[#edbb00]/20 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-[#004d98]/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-2/3 -right-40 w-[500px] h-[500px] rounded-full bg-[#a50044]/20 blur-[120px]" />

      {/* Subtle football pitch grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,#000_60%,transparent_100%)] pointer-events-none" />

      {children}
    </div>
  );
}
