"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon, Download, Sparkles } from "lucide-react";
import { SoundscapePlayer } from "./SoundscapePlayer";

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Rhema Method", href: "#rhema" },
    { name: "Journal", href: "#journal" },
    { name: "Membership", href: "#membership" },
    { name: "Privacy", href: "#privacy" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF7F2]/90 dark:bg-[#151311]/90 backdrop-blur-md shadow-sm border-b border-[#E8E0D4] dark:border-[#2B2621] py-3"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-[#3A7D3A] rounded-lg p-1"
          aria-label="Selah Home"
        >
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden shadow-sm border border-[#E8E0D4] dark:border-stone-700 bg-white dark:bg-stone-800 transition-transform group-hover:scale-105">
            <Image
              src="/assets/images/icon.png"
              alt="Selah Lamb Mascot"
              width={40}
              height={40}
              className="object-cover"
              priority
            />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
              Selah
            </span>
            <span className="block text-[10px] sm:text-[11px] font-sans text-stone-500 dark:text-stone-400 tracking-wider uppercase -mt-1 font-medium">
              Bible &amp; Devotional
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#3A7D3A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Soundscape Ambient Generator */}
          <SoundscapePlayer />

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            title={isDark ? "Switch to Linen Light Mode" : "Switch to Midnight Dark Mode"}
            aria-label="Toggle paper theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-600" />}
          </button>

          {/* Primary CTA */}
          <button
            onClick={onOpenDownload}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[#3A7D3A] hover:bg-[#2F662F] text-white shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="w-4 h-4" />
            <span>Download App</span>
          </button>
        </div>

        {/* Mobile Hamburger & Quick Action */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            aria-label="Toggle paper theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-stone-700 dark:text-stone-300 hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Sheet */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E0D4] dark:border-stone-800 bg-[#FAF7F2] dark:bg-[#151311] px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-base font-medium text-stone-800 dark:text-stone-200 hover:bg-stone-200/40 dark:hover:bg-stone-800/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-3 border-t border-[#E8E0D4] dark:border-stone-800 flex flex-col gap-3">
            <div className="flex items-center justify-between px-1">
              <span className="text-xs text-stone-500 dark:text-stone-400">Ambient sound</span>
              <SoundscapePlayer />
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-base font-semibold bg-[#3A7D3A] text-white shadow-sm hover:bg-[#2F662F] transition-colors"
            >
              <Download className="w-5 h-5" />
              <span>Download Selah App</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
