"use client";

import React, { useState } from "react";
import { useTheme } from "@/lib/theme";
import { achievements } from "@/data/pedri";
import { Achievement } from "@/types/pedri";
import { SpotlightCard } from "@/components/animations/SpotlightCard";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import {
  Trophy,
  Award,
  Medal,
  Sparkles,
  Star,
  Info,
  Calendar,
  Shield,
  CheckCircle2,
} from "lucide-react";

type FilterCategory = "all" | "international" | "club" | "individual";

export function Achievements() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<FilterCategory>("all");
  const [selectedTrophy, setSelectedTrophy] = useState<Achievement | null>(null);

  const filteredAchievements = achievements.filter((ach) => {
    if (filter === "all") return true;
    return ach.category === filter;
  });

  const getIcon = (iconName: Achievement["iconName"]) => {
    switch (iconName) {
      case "trophy":
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case "award":
        return <Award className="w-6 h-6 text-amber-400" />;
      case "medal":
        return <Medal className="w-6 h-6 text-amber-400" />;
      case "sparkles":
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case "star":
        return <Star className="w-6 h-6 text-amber-400" />;
      default:
        return <Trophy className="w-6 h-6 text-amber-400" />;
    }
  };

  const tabs: { id: FilterCategory; label: string }[] = [
    { id: "all", label: "All Honors" },
    { id: "international", label: "International (Spain)" },
    { id: "club", label: "FC Barcelona Silverware" },
    { id: "individual", label: "Individual Accolades" },
  ];

  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="gold" className="text-xs uppercase tracking-widest font-mono">
              SILVERWARE & INDIVIDUAL HONORS
            </Badge>
            <h2
              className={cn(
                "text-3xl sm:text-5xl font-black tracking-tight",
                theme === "barca"
                  ? "text-white uppercase"
                  : "text-zinc-950 font-serif font-normal"
              )}
            >
              Achievements
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
            European silverware, domestic supremacy, and global recognition as the world&apos;s foremost young playmaker.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer select-none",
                filter === tab.id
                  ? theme === "barca"
                    ? "bg-gradient-to-r from-[#a50044] to-[#004d98] text-white shadow-[0_0_12px_rgba(237,187,0,0.4)] border border-amber-400/40"
                    : "bg-black text-white"
                  : "bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAchievements.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedTrophy(item)}
              className="cursor-pointer group"
            >
              <SpotlightCard className="p-6 h-full flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300">
                <div className="space-y-4">
                  {/* Top Bar: Icon + Year */}
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300",
                        theme === "barca"
                          ? "bg-[#111c42] border border-amber-400/30 group-hover:border-amber-400 shadow-[0_0_15px_rgba(237,187,0,0.2)]"
                          : "bg-zinc-100 border border-zinc-200 group-hover:bg-zinc-200"
                      )}
                    >
                      {getIcon(item.iconName)}
                    </div>
                    <Badge variant="outline" className="font-mono text-xs font-bold">
                      {item.year}
                    </Badge>
                  </div>

                  {/* Title & Competition */}
                  <div className="space-y-1">
                    <h3
                      className={cn(
                        "text-lg font-bold leading-snug group-hover:text-amber-400 transition-colors",
                        theme === "barca"
                          ? "text-white uppercase"
                          : "text-zinc-950 font-serif"
                      )}
                    >
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-muted-foreground">
                      {item.competition}
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className={cn(
                      "text-xs leading-relaxed line-clamp-3",
                      theme === "minimal" ? "text-zinc-600" : "text-slate-300"
                    )}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Card Footer: Team + View Details */}
                <div className="mt-6 pt-3 border-t border-border/50 flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-medium truncate max-w-[140px]">
                    {item.team}
                  </span>
                  <span className="text-primary font-bold flex items-center gap-1 group-hover:underline">
                    Details
                    <Info className="w-3.5 h-3.5" />
                  </span>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>

        {/* Modal Lightbox for Trophy Details */}
        <Dialog
          open={!!selectedTrophy}
          onOpenChange={(open) => !open && setSelectedTrophy(null)}
        >
          {selectedTrophy && (
            <DialogContent title={selectedTrophy.title}>
              <DialogHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    {getIcon(selectedTrophy.iconName)}
                  </div>
                  <div>
                    <Badge variant="gold" className="text-[10px]">
                      {selectedTrophy.category.toUpperCase()}
                    </Badge>
                  </div>
                </div>
                <DialogTitle className="text-2xl sm:text-3xl">
                  {selectedTrophy.title}
                </DialogTitle>
                <DialogDescription>
                  {selectedTrophy.competition} — {selectedTrophy.year}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 py-2">
                <div className="bg-secondary/60 p-4 rounded-xl space-y-2 border border-border/50">
                  <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    Award Summary
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {selectedTrophy.description}
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/25 p-4 rounded-xl space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    Historical Impact
                  </div>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {selectedTrophy.impact}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
                  <div className="bg-secondary/40 p-3 rounded-lg flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Team: {selectedTrophy.team}</span>
                  </div>
                  <div className="bg-secondary/40 p-3 rounded-lg flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Season: {selectedTrophy.year}</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
