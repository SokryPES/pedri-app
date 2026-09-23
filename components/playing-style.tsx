"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/theme";
import { styleMetrics, signatureMoves, tacticalQuotes } from "@/data/pedri";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

export function PlayingStyle() {
  const { theme } = useTheme();
  const [activeMove, setActiveMove] = useState<number>(0);

  return (
    <section id="style" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs uppercase tracking-widest font-mono">
                TACTICAL PROFILE & DNA
              </Badge>
              <span className="text-[11px] text-amber-500 font-mono">
                *Illustrative Design Representation
              </span>
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-5xl font-black tracking-tight",
                theme === "barca"
                  ? "text-white uppercase"
                  : "text-zinc-950 font-serif font-normal"
              )}
            >
              Style Profile
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
            Characterized by La Pausa, exceptional peripheral vision, and the instinct to manipulate defensive shapes.
          </p>
        </div>

        {/* Main Grid: Style Metrics vs. Signature Moves */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Style Metrics (Illustrative representation) */}
          <div className="lg:col-span-7 space-y-6">
            <SpotlightCard className="p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/60">
                <div>
                  <h3
                    className={cn(
                      "text-xl font-bold tracking-tight",
                      theme === "barca"
                        ? "text-white uppercase font-sans"
                        : "text-zinc-950 font-serif"
                    )}
                  >
                    Core Attributes & Qualities
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Visual representation of midfield mastery
                  </p>
                </div>
                <Badge variant={theme === "barca" ? "gold" : "secondary"}>
                  Mastery Level
                </Badge>
              </div>

              <div className="space-y-6">
                {styleMetrics.map((metric, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-bold text-foreground">
                          {metric.name}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2 font-mono">
                          ({metric.category})
                        </span>
                      </div>

                      {/* 5-Dot Illustrative Rating */}
                      <div className="flex items-center gap-1.5" aria-label={`${metric.dots} out of 5 stars`}>
                        {[...Array(5)].map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={cn(
                              "w-2.5 h-2.5 rounded-full transition-all duration-300",
                              dotIdx < metric.dots
                                ? theme === "barca"
                                  ? "bg-amber-400 shadow-[0_0_8px_rgba(237,187,0,0.8)]"
                                  : "bg-black"
                                : "bg-secondary"
                            )}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar (Visual) */}
                    <Progress
                      value={metric.score}
                      className="h-2 bg-secondary"
                      indicatorClassName={
                        theme === "barca"
                          ? "bg-gradient-to-r from-[#a50044] via-[#edbb00] to-[#004d98]"
                          : "bg-zinc-900"
                      }
                    />

                    <p
                      className={cn(
                        "text-xs leading-relaxed",
                        theme === "minimal" ? "text-zinc-600 font-sans" : "text-slate-300"
                      )}
                    >
                      {metric.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-4 border-t border-border/40 text-[11px] text-muted-foreground font-mono italic">
                *Note: These metrics are an illustrative design interpretation of Pedri&apos;s playing style and not official video game or EA Sports ratings.
              </div>
            </SpotlightCard>
          </div>

          {/* Right Column: Signature Moves & Coach Testimonials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Signature Moves Interactive Accordion */}
            <div
              className={cn(
                "p-6 sm:p-8 rounded-2xl border transition-all duration-300",
                theme === "barca"
                  ? "bg-[#0c142e]/80 border-slate-800"
                  : "bg-white border-zinc-200 shadow-sm"
              )}
            >
              <h3
                className={cn(
                  "text-lg font-bold mb-5 pb-3 border-b border-border flex items-center justify-between",
                  theme === "barca"
                    ? "text-white uppercase font-sans"
                    : "text-zinc-950 font-serif text-base"
                )}
              >
                <span>Signature Moves</span>
                <span className="text-xs text-muted-foreground font-mono">
                  THE PLAYBOOK
                </span>
              </h3>

              <div className="space-y-3">
                {signatureMoves.map((move, index) => {
                  const isActive = activeMove === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveMove(index)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none",
                        isActive
                          ? theme === "barca"
                            ? "bg-gradient-to-r from-[#a50044]/25 to-[#004d98]/25 border-amber-400/60 shadow-[0_0_15px_rgba(237,187,0,0.2)]"
                            : "bg-zinc-100 border-zinc-900"
                          : "bg-secondary/40 border-border/50 hover:bg-secondary/70"
                      )}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="font-bold text-sm text-foreground">
                          {move.name}
                        </div>
                        <Badge
                          variant={isActive ? "gold" : "outline"}
                          className="text-[10px] font-mono"
                        >
                          {move.alias}
                        </Badge>
                      </div>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-border/40 space-y-2 animate-in fade-in duration-200">
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {move.description}
                          </p>
                          <div className="text-[11px] font-mono text-primary flex items-center gap-1.5 font-semibold">
                            <Zap className="w-3.5 h-3.5" />
                            <span>Role: {move.tacticalRole}</span>
                          </div>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Testimonials from Football Legends */}
            <div className="space-y-3">
              {tacticalQuotes.slice(0, 2).map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "p-5 rounded-xl border text-xs space-y-2 transition-colors",
                    theme === "barca"
                      ? "bg-[#091128]/70 border-slate-800"
                      : "bg-zinc-50 border-zinc-200"
                  )}
                >
                  <p
                    className={cn(
                      "italic leading-relaxed",
                      theme === "barca" ? "text-slate-200" : "text-zinc-800 font-serif"
                    )}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="font-bold text-foreground flex items-center justify-between pt-1 border-t border-border/30">
                    <span>— {item.author}</span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      {item.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
