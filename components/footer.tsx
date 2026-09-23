"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { pedriBio } from "@/data/pedri";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { InstagramIcon, TwitterXIcon, YoutubeIcon } from "./icons";

export function Footer() {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card/60 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center font-black text-white transition-all",
                  theme === "barca"
                    ? "bg-gradient-to-br from-[#a50044] to-[#004d98] shadow-[0_0_15px_rgba(237,187,0,0.4)] border border-amber-400"
                    : "bg-black rounded-xs font-serif"
                )}
              >
                8
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xl font-black tracking-tight",
                    theme === "barca"
                      ? "text-white uppercase font-sans tracking-wider"
                      : "text-zinc-950 font-serif"
                  )}
                >
                  PEDRI GONZÁLEZ
                </span>
                <span className="text-xs text-muted-foreground font-mono">
                  THE ART OF MIDFIELD MASTERY
                </span>
              </div>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              &ldquo;{pedriBio.tagline}&rdquo; Celebrating the generational vision, tempo control, and football artistry of Pedro González López.
            </p>

            <div className="pt-2">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-foreground font-bold">
                Sections
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#hero" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About & Bio
                  </Link>
                </li>
                <li>
                  <Link href="#career" className="hover:text-primary transition-colors">
                    Career Journey
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-mono uppercase tracking-widest text-foreground font-bold">
                Portfolio
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#achievements" className="hover:text-primary transition-colors">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="#style" className="hover:text-primary transition-colors">
                    Style Profile
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="hover:text-primary transition-colors">
                    Visual Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Connect & Top Button */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <div className="text-xs font-mono uppercase tracking-widest text-foreground font-bold">
              Follow Pedri
            </div>
            <div className="flex md:justify-end items-center gap-2.5">
              <a
                href="https://instagram.com/pedri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Pedri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X Twitter"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors cursor-pointer pt-2"
            >
              Back to top
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <div>
            © 2026 Pedri González Fan Website.
          </div>
          <div className="text-center sm:text-right text-[11px] max-w-lg">
            Unofficial fan tribute website created for informational and aesthetic portfolio demonstration. Not affiliated with FC Barcelona, RFEF, or UEFA.
          </div>
        </div>
      </div>
    </footer>
  );
}
