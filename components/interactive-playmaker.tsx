"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { useTheme } from "@/lib/theme";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Play,
  RotateCw,
  Trophy,
} from "lucide-react";

interface PlayScenario {
  id: string;
  name: string;
  type: string;
  description: string;
  distance: string;
  accuracy: string;
  keyAction: string;
  ballPath: string; // SVG path coordinate
}

const scenarios: PlayScenario[] = [
  {
    id: "la-pausa",
    name: "The 'La Pausa' Through-Ball",
    type: "Decisive Assist",
    description: "Pedri halts momentum for 0.4s to freeze the defensive block before slicing a low through-ball between two center-backs.",
    distance: "32 meters",
    accuracy: "98.4%",
    keyAction: "Tempo Manipulation",
    ballPath: "M 20 80 Q 50 20 80 40",
  },
  {
    id: "giro-ciego",
    name: "360° Blind Turn Escapology",
    type: "Press Resistance",
    description: "Receiving with his back to goal under aggressive two-man pressure, spinning outside boot to exit towards open space.",
    distance: "12 meters",
    accuracy: "100%",
    keyAction: "Body Feint & Pivot",
    ballPath: "M 20 50 C 40 10, 60 90, 80 50",
  },
  {
    id: "chipped-cross",
    name: "The Canarian Chipped Diagonal",
    type: "Aerial Delivery",
    description: "Delicate backspin clip over a compact 5-man low block to find the back-post winger in stride.",
    distance: "41 meters",
    accuracy: "94.2%",
    keyAction: "Backspin Trajectory",
    ballPath: "M 20 80 Q 45 5 80 60",
  },
];

export function InteractivePlaymaker() {
  const { theme } = useTheme();
  const [selectedScenario, setSelectedScenario] = useState<PlayScenario>(scenarios[0]);
  const [isSimulating, setIsSimulating] = useState(false);

  const handleSimulate = () => {
    setIsSimulating(true);
    setTimeout(() => {
      setIsSimulating(false);
      // Trigger subtle celebratory particle explosion
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: theme === "barca" ? ["#a50044", "#004d98", "#edbb00"] : ["#000000", "#71717a", "#ffffff"],
      });
    }, 1200);
  };

  const handleTrophyCelebration = () => {
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#edbb00", "#ffd700", "#a50044", "#004d98"],
    });
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SpotlightCard className="p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Interactive Scenario Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="gold" className="text-xs uppercase font-mono">
                    INTERACTIVE TACTICAL LAB
                  </Badge>
                  <span className="text-xs text-primary font-bold animate-pulse">
                    LIVE SIMULATOR
                  </span>
                </div>
                <h3
                  className={cn(
                    "text-2xl sm:text-4xl font-bold tracking-tight",
                    theme === "barca"
                      ? "text-white uppercase font-sans"
                      : "text-zinc-950 font-serif"
                  )}
                >
                  The Playmaker Engine
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Select a tactical scenario to analyze Pedri&apos;s trademark vision, spatial anticipation, and pass trajectories.
                </p>
              </div>

              {/* Scenario Selectors */}
              <div className="space-y-3">
                {scenarios.map((scenario) => {
                  const isSelected = selectedScenario.id === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      type="button"
                      onClick={() => setSelectedScenario(scenario)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer select-none",
                        isSelected
                          ? theme === "barca"
                            ? "bg-gradient-to-r from-[#a50044]/30 to-[#004d98]/30 border-amber-400 shadow-[0_0_15px_rgba(237,187,0,0.25)]"
                            : "bg-black text-white border-black"
                          : "bg-secondary/40 border-border hover:bg-secondary/70 text-foreground"
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm">
                          {scenario.name}
                        </span>
                        <Badge
                          variant={isSelected ? "gold" : "outline"}
                          className="text-[10px] font-mono"
                        >
                          {scenario.type}
                        </Badge>
                      </div>
                      <p
                        className={cn(
                          "text-xs mt-1.5 leading-relaxed line-clamp-2",
                          isSelected
                            ? theme === "barca"
                              ? "text-slate-300"
                              : "text-zinc-300"
                            : "text-muted-foreground"
                        )}
                      >
                        {scenario.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="rounded-full gap-2 font-bold px-6"
                >
                  {isSimulating ? (
                    <>
                      <RotateCw className="w-4 h-4 animate-spin" />
                      Simulating Trajectory...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current" />
                      Simulate Pass
                    </>
                  )}
                </Button>

                <Button
                  variant="outline"
                  onClick={handleTrophyCelebration}
                  className="rounded-full gap-2 text-xs"
                >
                  <Trophy className="w-4 h-4 text-amber-400" />
                  Celebrate Euro 2024
                </Button>
              </div>
            </div>

            {/* Right Column: Tactical Pitch Simulation Display */}
            <div className="lg:col-span-6">
              <div
                className={cn(
                  "relative aspect-[16/11] rounded-2xl overflow-hidden border p-6 flex flex-col justify-between transition-all duration-300",
                  theme === "barca"
                    ? "bg-[#060c22] border-amber-400/30 shadow-[0_0_30px_rgba(0,77,152,0.3)]"
                    : "bg-zinc-950 text-white border-zinc-800"
                )}
              >
                {/* Tactical Pitch Lines (SVG) */}
                <div className="absolute inset-0 pointer-events-none opacity-25">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <rect
                      x="5%"
                      y="5%"
                      width="90%"
                      height="90%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="50%"
                      y1="5%"
                      x2="50%"
                      y2="95%"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="18%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    {/* Penalty areas */}
                    <rect
                      x="5%"
                      y="25%"
                      width="18%"
                      height="50%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect
                      x="77%"
                      y="25%"
                      width="18%"
                      height="50%"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Top Telemetry Header */}
                <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                    <span className="text-emerald-400 font-bold uppercase tracking-wider">
                      Live Telemetry
                    </span>
                  </div>
                  <div className="text-slate-400">
                    Target: {selectedScenario.distance}
                  </div>
                </div>

                {/* Animated Simulated Ball & Vector Arc */}
                <div className="relative z-10 my-auto flex items-center justify-center">
                  <div className="w-full h-32 relative">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full h-full overflow-visible"
                    >
                      {/* Trajectory line */}
                      <path
                        d={selectedScenario.ballPath}
                        fill="none"
                        stroke={theme === "barca" ? "#edbb00" : "#ffffff"}
                        strokeWidth="2.5"
                        strokeDasharray={isSimulating ? "4,4" : "none"}
                        className={isSimulating ? "animate-pulse" : ""}
                      />
                      {/* Pedri Origin Point */}
                      <circle
                        cx="20"
                        cy="80"
                        r="5"
                        fill="#a50044"
                        stroke="#ffd700"
                        strokeWidth="2"
                      />
                      <text
                        x="10"
                        y="95"
                        fill="#ffd700"
                        fontSize="6"
                        fontWeight="bold"
                        fontFamily="monospace"
                      >
                        PEDRI (#8)
                      </text>

                      {/* Recipient Target Point */}
                      <circle
                        cx="80"
                        cy="40"
                        r="4"
                        fill="#004d98"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                      />
                      <text
                        x="72"
                        y="32"
                        fill="#ffffff"
                        fontSize="5"
                        fontFamily="monospace"
                      >
                        TARGET
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Bottom Telemetry Metrics */}
                <div className="relative z-10 grid grid-cols-3 gap-2 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/10 text-center font-mono text-xs">
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">
                      Action
                    </div>
                    <div className="font-bold text-amber-400 truncate">
                      {selectedScenario.keyAction}
                    </div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-[10px] text-slate-400 uppercase">
                      Accuracy
                    </div>
                    <div className="font-bold text-emerald-400">
                      {selectedScenario.accuracy}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase">
                      Distance
                    </div>
                    <div className="font-bold text-white">
                      {selectedScenario.distance}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
