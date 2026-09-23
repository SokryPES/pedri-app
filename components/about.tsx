"use client";

import React from "react";
import { useTheme } from "@/lib/theme";
import { pedriBio } from "@/data/pedri";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  User,
  Calendar,
  MapPin,
  Flag,
  Shield,
  Footprints,
  Compass,
  Quote,
  Sparkles,
} from "lucide-react";

export function About() {
  const { theme } = useTheme();

  const facts = [
    {
      icon: User,
      label: "Full Name",
      value: pedriBio.fullName,
    },
    {
      icon: Calendar,
      label: "Date of Birth",
      value: pedriBio.birthDate,
    },
    {
      icon: MapPin,
      label: "Place of Birth",
      value: pedriBio.birthPlace,
    },
    {
      icon: Flag,
      label: "Nationality",
      value: pedriBio.nationality,
    },
    {
      icon: Shield,
      label: "Current Club",
      value: `${pedriBio.currentClub.name} (#${pedriBio.currentClub.shirtNumber})`,
    },
    {
      icon: Compass,
      label: "Playing Role",
      value: pedriBio.position,
    },
    {
      icon: Footprints,
      label: "Preferred Foot",
      value: pedriBio.preferredFoot,
    },
    {
      icon: Sparkles,
      label: "Moniker",
      value: pedriBio.nickname,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs uppercase tracking-widest font-mono">
                PROFILE · BIOGRAPHY
              </Badge>
            </div>
            <h2
              className={cn(
                "text-3xl sm:text-5xl font-black tracking-tight",
                theme === "barca"
                  ? "text-white uppercase"
                  : "text-zinc-950 font-serif font-normal"
              )}
            >
              About Pedri
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
            From the volcanic landscapes of Tenerife to orchestrating the midfield at Camp Nou and European Championship glory.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative Biography & Quote */}
          <div className="lg:col-span-7 space-y-6">
            <SpotlightCard className="p-8">
              <div className="space-y-5">
                <h3
                  className={cn(
                    "text-xl sm:text-2xl font-bold tracking-tight",
                    theme === "barca"
                      ? "text-amber-400 uppercase"
                      : "text-zinc-900 font-serif"
                  )}
                >
                  The Magician of Tegueste
                </h3>

                <div className="space-y-4 text-slate-300 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {pedriBio.fullBio.map((paragraph, index) => (
                    <p
                      key={index}
                      className={theme === "minimal" ? "text-zinc-700" : "text-slate-300"}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </SpotlightCard>

            {/* Featured Quote Card */}
            <div
              className={cn(
                "p-6 sm:p-8 rounded-2xl transition-all duration-300 border relative overflow-hidden",
                theme === "barca"
                  ? "bg-gradient-to-r from-[#a50044]/20 via-[#004d98]/20 to-transparent border-amber-400/30 shadow-[0_0_25px_rgba(165,0,68,0.2)]"
                  : "bg-zinc-50 border-zinc-200"
              )}
            >
              <Quote
                className={cn(
                  "w-8 h-8 mb-4 opacity-50",
                  theme === "barca" ? "text-amber-400" : "text-zinc-400"
                )}
              />
              <blockquote
                className={cn(
                  "text-base sm:text-lg italic leading-relaxed",
                  theme === "barca"
                    ? "text-slate-100 font-sans"
                    : "text-zinc-900 font-serif"
                )}
              >
                &ldquo;{pedriBio.quote.text}&rdquo;
              </blockquote>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-foreground">
                    {pedriBio.quote.author}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">
                    {pedriBio.quote.role}
                  </div>
                </div>
                <Badge variant={theme === "barca" ? "gold" : "secondary"}>
                  Philosophy
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Column: Key Biographical Data Grid */}
          <div className="lg:col-span-5 space-y-4">
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
                  "text-lg font-bold mb-6 pb-3 border-b border-border flex items-center justify-between",
                  theme === "barca"
                    ? "text-white uppercase tracking-wider font-mono text-sm"
                    : "text-zinc-950 font-serif text-base"
                )}
              >
                <span>Player Dossier</span>
                <span className="text-xs text-muted-foreground font-mono font-normal">
                  OFFICIAL STATIC DATA
                </span>
              </h3>

              <div className="space-y-4">
                {facts.map((fact, index) => {
                  const Icon = fact.icon;
                  return (
                    <div
                      key={index}
                      className={cn(
                        "flex items-start justify-between py-2 border-b last:border-0 border-border/40 gap-4",
                        theme === "minimal" ? "font-mono text-xs" : "text-sm"
                      )}
                    >
                      <div className="flex items-center gap-2.5 text-muted-foreground shrink-0">
                        <Icon className="w-4 h-4 opacity-70" />
                        <span>{fact.label}</span>
                      </div>
                      <span className="font-semibold text-foreground text-right">
                        {fact.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
