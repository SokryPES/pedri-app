"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/lib/theme";
import { galleryItems } from "@/data/pedri";
import { GalleryItem } from "@/types/pedri";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Maximize2, Sparkles, Camera } from "lucide-react";

type GalleryCategory = "all" | "matches" | "trophies" | "spain" | "editorial";

export function Gallery() {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<GalleryCategory>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: "All Photos" },
    { id: "matches", label: "Matchday & Camp Nou" },
    { id: "trophies", label: "Trophy Celebrations" },
    { id: "spain", label: "Spain National Team" },
    { id: "editorial", label: "Portraits & Gala" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="text-xs uppercase tracking-widest font-mono">
              PHOTOGRAPHY & MOMENTS
            </Badge>
            <h2
              className={cn(
                "text-3xl sm:text-5xl font-black tracking-tight",
                theme === "barca"
                  ? "text-white uppercase font-sans"
                  : "text-zinc-950 font-serif font-normal"
              )}
            >
              Visual Gallery
            </h2>
          </div>
          <p className="text-sm md:text-base text-muted-foreground max-w-md font-sans">
            Capturing the defining moments, matchday emotion, and memorable celebrations of Pedri&apos;s career.
          </p>
        </div>

        {/* Gallery Categories */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((tab) => (
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

        {/* Responsive Grid: 4 columns desktop, 2 columns tablet, 1 column mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl border border-border/80 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                {/* Fallback stylized gradient card in case image loads or unloads */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br flex flex-col items-center justify-center p-6 text-center z-0",
                    item.fallbackGradient
                  )}
                >
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md mb-4 border border-white/20">
                    <Camera className="w-7 h-7 text-amber-300" />
                  </div>
                  <div className="text-white font-bold text-lg font-serif">
                    {item.title}
                  </div>
                  <div className="text-amber-300 text-xs mt-2 font-mono">
                    {item.dateOrEvent}
                  </div>
                </div>

                {/* Actual Image */}
                <Image
                  src={item.imageUrl}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 relative z-10 opacity-90 group-hover:opacity-100"
                  onError={(e) => {
                    // graceful fallback if offline
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />

                {/* Theme Overlays */}
                {theme === "barca" ? (
                  <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-[#040817]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity z-20" />
                ) : (
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-20" />
                )}

                {/* Top Corner Badge */}
                <div className="absolute top-3 left-3 z-30">
                  <Badge
                    variant={theme === "barca" ? "gold" : "secondary"}
                    className="text-[10px] font-mono shadow-md uppercase"
                  >
                    {item.category}
                  </Badge>
                </div>

                {/* Hover Zoom Icon */}
                <div className="absolute top-3 right-3 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-4 z-30 space-y-1">
                  <h4
                    className={cn(
                      "text-sm font-bold text-white leading-tight drop-shadow-md",
                      theme === "barca" ? "uppercase font-sans" : "font-serif"
                    )}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {item.subtitle}
                  </p>
                  <div className="text-[10px] text-amber-300 font-mono font-medium pt-1">
                    {item.dateOrEvent}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal for Full Image View */}
        <Dialog
          open={!!activeItem}
          onOpenChange={(open) => !open && setActiveItem(null)}
        >
          {activeItem && (
            <DialogContent
              className="max-w-4xl p-0 overflow-hidden bg-black text-white border-slate-800"
              title={activeItem.title}
            >
              <div className="relative aspect-[16/10] w-full bg-slate-950">
                <Image
                  src={activeItem.imageUrl}
                  alt={activeItem.alt}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 space-y-3 bg-[#0c142e] border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <Badge variant="gold" className="text-xs uppercase">
                    {activeItem.category}
                  </Badge>
                  <span className="text-xs font-mono text-amber-400">
                    {activeItem.dateOrEvent}
                  </span>
                </div>

                <DialogTitle className="text-2xl font-bold text-white">
                  {activeItem.title}
                </DialogTitle>

                <p className="text-sm text-slate-300">
                  {activeItem.subtitle}
                </p>

                <div className="pt-2 text-xs text-slate-400 font-mono border-t border-slate-800 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Pedri González Archive / High-Resolution Press Visual</span>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
