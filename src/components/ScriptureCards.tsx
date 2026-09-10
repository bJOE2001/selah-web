"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Download, Share2, Copy, Check, Palette } from "lucide-react";

export const ScriptureCards: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"linen" | "minimal" | "midnight">("linen");
  const [copied, setCopied] = useState(false);

  const handleCopyQuote = () => {
    navigator.clipboard.writeText("“Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.” — Psalm 46:10");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="cards" className="py-24 sm:py-32 bg-paper-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF3E4] dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <Palette className="w-3.5 h-3.5 text-[#C46246]" />
            Scripture Keepsakes
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            Keep the verse close.
          </h2>

          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Turn meaningful Scriptures and reflections into beautiful cards you can keep, print, or share.
          </p>

          {/* Theme Selector Pills */}
          <div className="mt-8 inline-flex p-1.5 rounded-2xl bg-white dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 shadow-sm gap-1">
            <button
              onClick={() => setActiveTheme("linen")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTheme === "linen"
                  ? "bg-[#FAF7F2] text-stone-900 shadow-sm border border-[#E8E0D4]"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              1. Classic Linen
            </button>

            <button
              onClick={() => setActiveTheme("minimal")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTheme === "minimal"
                  ? "bg-white text-stone-900 shadow-sm border border-stone-300"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              2. Minimal Clean
            </button>

            <button
              onClick={() => setActiveTheme("midnight")}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTheme === "midnight"
                  ? "bg-[#151311] text-[#D4A84B] shadow-sm border border-[#D4A84B]/40"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              3. Midnight Gold
            </button>
          </div>
        </div>

        {/* Physical Cards Presentation Area */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Active Card Mockup */}
          <div className="w-full max-w-md sm:max-w-lg transition-all duration-500 transform hover:scale-[1.01]">
            
            {/* 1. Classic Linen Theme */}
            {activeTheme === "linen" && (
              <div className="relative rounded-3xl p-8 sm:p-12 bg-[#FAF7F2] border-2 border-[#E8E0D4] shadow-paper-deep text-stone-900 text-center flex flex-col justify-between aspect-[4/5]">
                {/* Washi tape at top */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape-terracotta rounded-sm shadow-xs" />
                
                <div className="pt-4">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C46246] font-semibold">
                    Psalm 46:10
                  </span>
                </div>

                <div className="my-auto py-6">
                  <span className="font-serif text-5xl sm:text-6xl text-[#C46246] block -mb-4 opacity-50 font-bold leading-none">
                    &ldquo;
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-900 leading-snug font-bold">
                    Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.
                  </p>
                </div>

                <div className="border-t border-[#E8E0D4] pt-4 flex items-center justify-between text-xs text-stone-500">
                  <span className="font-serif italic">King James Version</span>
                  <span className="font-handwriting text-lg text-stone-700">Selah Devotions 🐑</span>
                </div>
              </div>
            )}

            {/* 2. Minimal Clean Theme */}
            {activeTheme === "minimal" && (
              <div className="relative rounded-3xl p-8 sm:p-12 bg-white border border-stone-200 shadow-paper-deep text-stone-900 text-center flex flex-col justify-between aspect-[4/5]">
                {/* Subtle sage top border */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#3A7D3A] rounded-t-3xl" />

                <div className="pt-4">
                  <span className="font-sans text-xs uppercase tracking-[0.3em] text-stone-400 font-bold">
                    PSALM 46:10 &bull; SCRIPTURE
                  </span>
                </div>

                <div className="my-auto py-6">
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-stone-800 leading-relaxed font-normal">
                    Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.
                  </p>
                </div>

                <div className="border-t border-stone-100 pt-4 flex items-center justify-between text-xs text-stone-400 font-sans">
                  <span>Distraction-Free</span>
                  <span>Selah &bull; Daily Reflection</span>
                </div>
              </div>
            )}

            {/* 3. Midnight Gold Theme */}
            {activeTheme === "midnight" && (
              <div className="relative rounded-3xl p-8 sm:p-12 bg-[#151311] border-2 border-[#D4A84B]/40 shadow-paper-deep text-[#FAF7F2] text-center flex flex-col justify-between aspect-[4/5]">
                {/* Gold foil emblem */}
                <div className="pt-4">
                  <span className="font-serif italic text-xs tracking-[0.25em] text-[#D4A84B] font-semibold">
                    &mdash; SACRED SCRIPTURE &mdash;
                  </span>
                </div>

                <div className="my-auto py-6">
                  <span className="font-serif text-5xl sm:text-6xl text-[#D4A84B] block -mb-4 opacity-70 font-bold leading-none">
                    &ldquo;
                  </span>
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F6F0EB] leading-snug font-bold">
                    Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.
                  </p>
                  <p className="font-serif italic text-sm text-[#D4A84B] mt-4 font-normal">
                    Psalm 46:10 (KJV)
                  </p>
                </div>

                <div className="border-t border-stone-800 pt-4 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono text-[#D4A84B]/80">Midnight Edition</span>
                  <span className="font-handwriting text-lg text-[#FAF7F2]">Selah 🐑</span>
                </div>
              </div>
            )}

          </div>

          {/* Action Toolbar below card */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleCopyQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-stone-800 border border-[#E8E0D4] dark:border-stone-700 text-xs sm:text-sm font-semibold text-stone-700 dark:text-stone-200 hover:bg-stone-50 shadow-sm transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#3A7D3A]" />
                  <span>Verse Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-stone-500" />
                  <span>Copy Scripture Text</span>
                </>
              )}
            </button>

            <div className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A84B]" />
              <span>Export high-resolution wallpaper directly in the Selah mobile app.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
