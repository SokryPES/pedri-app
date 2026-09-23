"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import pedriImage from "@/app/pedri.png";
import { useTheme } from "@/lib/theme";
import { pedriBio, quickStats } from "@/data/pedri";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Magnetic } from "@/components/animations/Magnetic";
import { DecryptedText } from "@/components/animations/DecryptedText";
import {
  ArrowRight,
  Trophy,
  ShieldCheck,
  Flame,
} from "lucide-react";

export function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center py-16 md:py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* =========================================================================
            BARÇA THEME HERO PRESENTATION
           ========================================================================= */}
        {theme === "barca" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Main Typography & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Category Badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="gold" className="px-3.5 py-1 text-xs">
                  <Flame className="w-3.5 h-3.5 mr-1 text-amber-400" />
                  FC BARCELONA #8
                </Badge>
                <Badge variant="crimson" className="px-3.5 py-1 text-xs">
                  <Trophy className="w-3.5 h-3.5 mr-1 text-red-400" />
                  EURO 2024 CHAMPION
                </Badge>
                <Badge variant="blue" className="px-3.5 py-1 text-xs">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-blue-400" />
                  SPAIN NATIONAL TEAM
                </Badge>
              </div>

              {/* Main Title with Scramble & Glow */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none">
                  <DecryptedText
                    text="PEDRI"
                    speed={30}
                    maxIterations={8}
                    className="bg-gradient-to-r from-white via-slate-100 to-amber-200 bg-clip-text text-transparent"
                  />
                  <br />
                  <span className="bg-gradient-to-r from-[#ed1c24] via-[#ff2a6d] to-[#004d98] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(237,28,36,0.6)]">
                    GONZÁLEZ
                  </span>
                </h1>
              </div>

              {/* Subtitle & Tagline */}
              <div className="space-y-3 max-w-xl">
                <p className="text-xl sm:text-2xl font-bold text-amber-400/90 tracking-wide uppercase font-mono">
                  &ldquo;{pedriBio.tagline}&rdquo;
                </p>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  {pedriBio.shortBio}
                </p>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Magnetic strength={20}>
                  <Button asChild size="lg" variant="glow" className="rounded-full gap-2 text-base px-8">
                    <Link href="#career">
                      Explore Career
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </Magnetic>

                <Magnetic strength={15}>
                  <Button asChild size="lg" variant="outline" className="rounded-full gap-2 text-base px-7 border-slate-700 hover:border-amber-400/60 bg-white/5 backdrop-blur-md">
                    <Link href="#achievements">
                      <Trophy className="w-4 h-4 mr-1 text-amber-400" />
                      View Achievements
                    </Link>
                  </Button>
                </Magnetic>
              </div>

              {/* Quick Stat Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-slate-800/80">
                {quickStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0b132e]/80 border border-slate-800/90 backdrop-blur-md hover:border-amber-400/40 transition-colors"
                  >
                    <div className="text-2xl font-black text-white tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-xs font-semibold text-amber-400">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-slate-400 truncate">
                      {stat.sublabel}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: Cinematic Blaugrana Player Card Composition */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Outer Energy Rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#a50044] via-[#edbb00]/30 to-[#004d98] rounded-3xl opacity-40 blur-2xl animate-pulse-glow" />

              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400/30 bg-gradient-to-b from-[#0c1538] to-[#040817] shadow-2xl p-6 flex flex-col justify-between group">
                {/* Card Top Header */}
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#a50044] flex items-center justify-center text-white font-bold text-sm border border-amber-400">
                      FCB
                    </div>
                    <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">
                      MIDFIELDER
                    </span>
                  </div>
                  <div className="text-3xl font-black text-amber-400 font-mono">
                    #8
                  </div>
                </div>

                {/* Center Visual Art Display using pedri.png */}
                <div className="relative my-auto flex flex-col items-center justify-center text-center py-4 z-10">
                  <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-[0_0_35px_rgba(165,0,68,0.45)] group/img bg-gradient-to-b from-[#0e1942] to-[#040817]">
                    <Image
                      src={pedriImage}
                      alt="Pedri González"
                      fill
                      priority
                      placeholder="blur"
                      sizes="(max-width: 768px) 240px, 300px"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover/img:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040817] via-transparent to-transparent opacity-60" />
                    <div className="absolute top-2.5 right-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#a50044] to-[#edbb00] text-white flex items-center justify-center font-black text-xs shadow-md border border-amber-300">
                        8
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                      Pedro González López
                    </h3>
                    <p className="text-xs text-amber-400/90 font-mono">
                      Golden Boy · Kopa Trophy · Euro 2024
                    </p>
                  </div>
                </div>

                {/* Card Bottom Specs */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center z-10 bg-[#070e26]/60 rounded-xl p-2.5">
                  <div>
                    <div className="text-[10px] uppercase text-slate-400">Age</div>
                    <div className="text-sm font-black text-white">23</div>
                  </div>
                  <div className="border-x border-slate-800">
                    <div className="text-[10px] uppercase text-slate-400">Foot</div>
                    <div className="text-sm font-black text-amber-400">Two-Footed</div>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase text-slate-400">Trophies</div>
                    <div className="text-sm font-black text-white">6+ Major</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            MINIMAL THEME HERO PRESENTATION
           ========================================================================= */}
        {theme === "minimal" && (
          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Minimal Editorial Header Line */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200 text-xs font-mono tracking-widest text-zinc-500 uppercase">
              <div className="flex items-center gap-3">
                <span className="text-black font-semibold">ISSUE NO. 08</span>
                <span>/</span>
                <span>FC BARCELONA & SPAIN</span>
              </div>
              <div className="flex items-center gap-3">
                <span>CANARY ISLANDS, 2002</span>
                <span>/</span>
                <span className="text-black font-semibold">MIDFIELD MAESTRO</span>
              </div>
            </div>

            {/* Editorial Giant Title & Portrait Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-8 space-y-6">
                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif text-zinc-950 font-normal tracking-tight leading-[0.9]">
                  PEDRI
                  <br />
                  <span className="italic font-serif font-light text-zinc-700">
                    González.
                  </span>
                </h1>

                <div className="pt-2">
                  <p className="text-xl sm:text-2xl text-zinc-800 font-serif leading-relaxed">
                    &ldquo;{pedriBio.tagline}&rdquo;
                  </p>
                  <p className="text-zinc-600 text-base leading-relaxed mt-4 max-w-2xl">
                    {pedriBio.shortBio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <Button asChild size="default" variant="default" className="rounded-xs">
                    <Link href="#career">Explore Career</Link>
                  </Button>
                  <Button asChild size="default" variant="outline" className="rounded-xs border-zinc-300">
                    <Link href="#achievements">Achievements</Link>
                  </Button>
                </div>
              </div>

              {/* Minimal Image Frame Display using pedriImage */}
              <div className="lg:col-span-4 flex flex-col gap-4">
                <div className="relative aspect-[3/4] w-full rounded-xs overflow-hidden border border-zinc-300 bg-zinc-100 group">
                  <Image
                    src={pedriImage}
                    alt="Pedri González Portrait"
                    fill
                    priority
                    placeholder="blur"
                    sizes="(max-width: 1024px) 300px, 400px"
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 uppercase">
                    NO. 08 · PEDRI
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono pt-2 border-t border-zinc-200">
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-400">FULL NAME</span>
                    <span className="text-zinc-900 font-medium">Pedro González López</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-zinc-100">
                    <span className="text-zinc-400">BORN</span>
                    <span className="text-zinc-900 font-medium">Nov 25, 2002</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-zinc-400">POSITION</span>
                    <span className="text-zinc-900 font-medium">Central Midfielder</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial 4-Column Metric Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-200 font-mono text-xs">
              {quickStats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-zinc-400 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-2xl font-serif text-zinc-950 font-semibold">{stat.value}</div>
                  <div className="text-zinc-500 text-[11px]">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
