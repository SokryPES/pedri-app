"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { InstagramIcon, TwitterXIcon } from "./icons";

export function Navbar() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Career", href: "#career" },
    { label: "Achievements", href: "#achievements" },
    { label: "Style Profile", href: "#style" },
    { label: "Gallery", href: "#gallery" },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "bg-[var(--nav-bg)] backdrop-blur-xl border-b border-border shadow-md"
          : "bg-[var(--nav-bg)]/60 backdrop-blur-md border-b border-border/40"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand / Monogram */}
        <Link
          href="#hero"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <div
            className={cn(
              "w-9 h-9 rounded-lg flex items-center justify-center font-black transition-all duration-300",
              theme === "barca"
                ? "bg-gradient-to-br from-[#a50044] via-[#004d98] to-[#edbb00] text-white shadow-[0_0_15px_rgba(237,187,0,0.4)] group-hover:rotate-6"
                : "bg-black text-white rounded-xs font-serif group-hover:bg-zinc-800"
            )}
          >
            8
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "text-lg font-black tracking-tight leading-none transition-colors",
                theme === "barca"
                  ? "text-white uppercase font-sans tracking-wider"
                  : "text-zinc-950 font-serif tracking-normal"
              )}
            >
              PEDRI
            </span>
            <span
              className={cn(
                "text-[10px] tracking-widest uppercase transition-colors",
                theme === "barca" ? "text-amber-400 font-semibold" : "text-zinc-500 font-mono"
              )}
            >
              GONZÁLEZ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-md select-none",
                theme === "barca"
                  ? "text-slate-300 hover:text-white hover:bg-white/5 uppercase text-xs tracking-wider font-semibold"
                  : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 font-sans"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Action Area */}
        <div className="hidden sm:flex items-center gap-4">
          <ThemeSwitcher />

          {/* Social icons */}
          <div className="flex items-center gap-2 pl-2 border-l border-border">
            <a
              href="https://instagram.com/pedri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedri Instagram"
              className={cn(
                "p-2 rounded-full transition-colors",
                theme === "barca"
                  ? "text-slate-300 hover:text-amber-400 hover:bg-white/5"
                  : "text-zinc-600 hover:text-black hover:bg-zinc-100"
              )}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://x.com/Pedri"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pedri Twitter"
              className={cn(
                "p-2 rounded-full transition-colors",
                theme === "barca"
                  ? "text-slate-300 hover:text-blue-400 hover:bg-white/5"
                  : "text-zinc-600 hover:text-black hover:bg-zinc-100"
              )}
            >
              <TwitterXIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <ThemeSwitcher className="scale-90" />
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-lg text-foreground hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden border-b border-border bg-card/95 backdrop-blur-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "py-2 text-base font-medium transition-colors border-b border-border/40",
                  theme === "barca"
                    ? "text-slate-200 uppercase tracking-wider font-bold"
                    : "text-zinc-800 font-serif"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
              Official Socials
            </span>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/pedri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Pedri"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary transition-colors"
              >
                <TwitterXIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
