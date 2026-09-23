"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string;
  children: React.ReactNode;
}

export function SpotlightCard({
  children,
  className,
  spotlightColor,
  ...props
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const { theme } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(1);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const defaultSpotlight =
    theme === "barca"
      ? "radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(237, 187, 0, 0.18), rgba(165, 0, 68, 0.12), transparent 70%)"
      : "radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(0, 0, 0, 0.04), transparent 80%)";

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn("theme-card relative overflow-hidden", className)}
      style={
        {
          "--mouse-x": `${position.x}px`,
          "--mouse-y": `${position.y}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: spotlightColor || defaultSpotlight,
        }}
      />
      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
}
