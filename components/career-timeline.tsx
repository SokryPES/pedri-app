"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/theme";
import { careerStages } from "@/data/pedri";
import { Badge } from "@/components/ui/badge";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  Activity,
  Shield,
} from "lucide-react";

export function CareerTimeline() {
  const { theme } = useTheme();
  const [activeStageId, setActiveStageId] = useState<string>(careerStages[1].id);

  return (
    <section id="career" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-widest font-mono">
              JOURNEY & MILESTONES
            </Badge>
            <h2
              className={cn(
                "text-3xl sm:text-5xl font-black tracking-tight",
                theme === "barca"
                  ? "text-white uppercase"
                  : "text-zinc-950 font-serif font-normal"
              )}
            >
              Career Timeline
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
            From youth breakout at Gran Canaria to orchestrating the FC Barcelona midfield and European glory with La Roja.
          </p>
        </div>

        {/* Timeline Navigator Tabs for Quick Focus */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {careerStages.map((stage) => {
            const isActive = activeStageId === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageId(stage.id)}
                className={cn(
                  "p-5 text-left rounded-2xl border transition-all duration-300 cursor-pointer select-none",
                  isActive
                    ? theme === "barca"
                      ? "bg-gradient-to-br from-[#0c1638] to-[#1a0820] border-amber-400 shadow-[0_0_20px_rgba(237,187,0,0.3)] scale-[1.02]"
                      : "bg-black text-white border-black shadow-md scale-[1.01]"
                    : theme === "barca"
                    ? "bg-[#090f24]/80 border-slate-800 text-slate-300 hover:border-slate-700"
                    : "bg-white border-zinc-200 text-zinc-700 hover:border-zinc-400"
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={cn(
                      "text-xs font-mono font-bold tracking-wider",
                      isActive
                        ? theme === "barca"
                          ? "text-amber-400"
                          : "text-zinc-300"
                        : "text-muted-foreground"
                    )}
                  >
                    {stage.period}
                  </span>
                  <Badge
                    variant={
                      isActive
                        ? theme === "barca"
                          ? "gold"
                          : "secondary"
                        : "outline"
                    }
                    className="text-[10px]"
                  >
                    {stage.years}
                  </Badge>
                </div>
                <div className="font-bold text-lg">{stage.team}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {stage.role}
                </div>
              </button>
            );
          })}
        </div>

        {/* Connected Vertical Timeline View */}
        <div className="relative border-l-2 border-border/80 ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {careerStages.map((stage) => {
            const isHighlight = activeStageId === stage.id;

            return (
              <div
                key={stage.id}
                className="relative group transition-all duration-300"
              >
                {/* Timeline Node Point */}
                <div
                  className={cn(
                    "absolute -left-[31px] md:-left-[47px] top-6 w-5 h-5 rounded-full border-4 transition-all duration-300",
                    isHighlight
                      ? theme === "barca"
                        ? "bg-amber-400 border-[#a50044] shadow-[0_0_15px_rgba(237,187,0,0.8)] scale-125"
                        : "bg-black border-white shadow-md scale-125"
                      : "bg-background border-border"
                  )}
                />

                <SpotlightCard
                  className={cn(
                    "p-6 sm:p-8 transition-all duration-300",
                    isHighlight &&
                      (theme === "barca"
                        ? "ring-2 ring-amber-400/60 shadow-[0_0_30px_rgba(165,0,68,0.25)]"
                        : "border-black shadow-lg")
                  )}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    {/* Stage Main Info */}
                    <div className="lg:col-span-8 space-y-4">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span
                          className={cn(
                            "text-2xl sm:text-3xl font-bold tracking-tight",
                            theme === "barca"
                              ? "text-white uppercase font-sans"
                              : "text-zinc-950 font-serif"
                          )}
                        >
                          {stage.team}
                        </span>
                        <Badge
                          variant={theme === "barca" ? "crimson" : "outline"}
                          className="font-mono text-xs"
                        >
                          {stage.period}
                        </Badge>
                      </div>

                      <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span>{stage.league}</span>
                        <span>•</span>
                        <span className="text-foreground">{stage.role}</span>
                      </div>

                      <p
                        className={cn(
                          "text-sm sm:text-base leading-relaxed",
                          theme === "minimal" ? "text-zinc-700" : "text-slate-300"
                        )}
                      >
                        {stage.description}
                      </p>

                      {/* Stage Highlights Checklist */}
                      <div className="pt-2 space-y-2">
                        <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                          Key Milestones & Honors:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stage.highlights.map((highlight, hIdx) => (
                            <div
                              key={hIdx}
                              className="flex items-start gap-2 text-xs text-foreground/90 bg-secondary/40 p-2.5 rounded-lg"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stage Stats Summary Box */}
                    <div className="lg:col-span-4 flex flex-col justify-between h-full bg-secondary/50 rounded-xl p-5 border border-border/50">
                      <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground pb-2 border-b border-border/50 flex items-center justify-between">
                        <span>Career Impact</span>
                        <Activity className="w-3.5 h-3.5 text-primary" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-4 text-center">
                        <div>
                          <div className="text-xs text-muted-foreground">Apps</div>
                          <div className="text-xl font-bold font-mono text-foreground">
                            {stage.appearances}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Goals</div>
                          <div className="text-xl font-bold font-mono text-foreground">
                            {stage.goals}
                          </div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Assists</div>
                          <div className="text-xl font-bold font-mono text-foreground">
                            {stage.assists}
                          </div>
                        </div>
                      </div>

                      <div className="text-[11px] text-muted-foreground italic text-center pt-2 border-t border-border/40">
                        *Official club & tournament recorded fixtures
                      </div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
