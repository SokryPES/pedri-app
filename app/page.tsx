"use client";

import React from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { CareerTimeline } from "@/components/career-timeline";
import { Achievements } from "@/components/achievements";
import { PlayingStyle } from "@/components/playing-style";
import { InteractivePlaymaker } from "@/components/interactive-playmaker";
import { Gallery } from "@/components/gallery";
import { Footer } from "@/components/footer";
import { AuroraBackground } from "@/components/animations/AuroraBackground";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="flex-1">
        <AuroraBackground>
          <Hero />
        </AuroraBackground>

        <About />

        <CareerTimeline />

        <Achievements />

        <PlayingStyle />

        <InteractivePlaymaker />

        <Gallery />
      </main>

      <Footer />
    </div>
  );
}
