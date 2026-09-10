"use client";

import React from "react";
import Image from "next/image";
import { PenLine, Bookmark, Sparkles, CheckCircle, Feather } from "lucide-react";

export const JournalExperience: React.FC = () => {
  return (
    <section id="journal" className="py-24 sm:py-32 bg-paper-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF3E4] dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <PenLine className="w-3.5 h-3.5 text-[#3A7D3A]" />
            Sacred Digital Stationery
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            Your thoughts deserve <br />
            <span className="italic font-normal text-[#3A7D3A] dark:text-[#52A752]">a place to rest.</span>
          </h2>
          
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Write prayers. Capture Scripture. Record what you&apos;re learning. Come back months later and see how God has been shaping your journey.
          </p>
        </div>

        {/* Realistic Notebook Double-Spread Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Top Washi Tape Tabs simulating physical stationery */}
          <div className="absolute -top-4 left-16 sm:left-28 w-24 h-7 washi-tape-terracotta rounded-sm transform -rotate-1 z-20" />
          <div className="absolute -top-4 right-16 sm:right-28 w-20 h-7 washi-tape-sage rounded-sm transform rotate-2 z-20" />

          {/* Book Spine Shadow in the center (hidden on small screens, visible on md+) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-gradient-to-r from-stone-400/20 via-stone-800/15 to-stone-400/20 z-20 pointer-events-none" />

          {/* Open Notebook Spread */}
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-[#FAF7F2] dark:bg-[#1C1917] border-2 border-[#E8E0D4] dark:border-stone-700 shadow-paper-deep overflow-hidden">
            
            {/* LEFT PAGE: Date, Scripture & Rhema */}
            <div className="p-6 sm:p-10 border-b md:border-b-0 md:border-r border-[#E8E0D4] dark:border-stone-800 relative ruled-lines">
              
              {/* Date Stamp */}
              <div className="flex items-center justify-between border-b border-[#E8E0D4] dark:border-stone-800 pb-3 mb-6 bg-[#FAF7F2]/90 dark:bg-[#1C1917]/90">
                <div>
                  <div className="text-[11px] uppercase font-mono tracking-widest text-stone-400">
                    Daily Devotion
                  </div>
                  <div className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    Thursday, September 10
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#EAF3EA] dark:bg-emerald-950/60 text-[11px] font-semibold text-[#3A7D3A] dark:text-emerald-400 border border-[#3A7D3A]/20">
                    Day 42 Streak
                  </span>
                </div>
              </div>

              {/* RHEMA PROMPT SECTION */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#C46246] text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-sm">
                  <span>1. Rhema</span>
                  <span className="opacity-70 font-normal">| The Arresting Verse</span>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 shadow-sm mt-2">
                  <p className="font-serif italic text-base sm:text-lg text-stone-900 dark:text-stone-100 leading-relaxed">
                    &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls.&rdquo;
                  </p>
                  <p className="text-right text-xs font-mono text-[#C46246] mt-2 font-bold">
                    — Matthew 11:28-29 (KJV)
                  </p>
                </div>
              </div>

              {/* REFLECTION SECTION */}
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#5B8C5A] text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-sm">
                  <span>2. Reflection</span>
                  <span className="opacity-70 font-normal">| God&apos;s Heart</span>
                </div>
                <div className="pt-2">
                  <p className="font-handwriting text-2xl sm:text-3xl text-stone-800 dark:text-stone-200 leading-[32px]">
                    Jesus does not offer a heavier set of religious demands. He offers Himself. His heart is gentle, not critical. Rest is not inactivity, but yielding my burden to His shoulders.
                  </p>
                </div>
              </div>

              {/* Margin Note */}
              <div className="mt-4 pt-2 border-t border-dashed border-[#E8E0D4] dark:border-stone-800">
                <span className="font-handwriting text-lg text-[#C46246] rotate-[-1deg] block">
                  * Note: Remember this when anxiety hits at 2 PM.
                </span>
              </div>

            </div>

            {/* RIGHT PAGE: Motivation, Application & Hand-drawn Note */}
            <div className="p-6 sm:p-10 relative ruled-lines">
              
              {/* Top Page Number & Quiet Mood */}
              <div className="flex items-center justify-between border-b border-[#E8E0D4] dark:border-stone-800 pb-3 mb-6 bg-[#FAF7F2]/90 dark:bg-[#1C1917]/90">
                <span className="font-serif italic text-stone-500 text-sm">
                  &ldquo;Ye shall find rest unto your souls&rdquo;
                </span>
                <span className="font-mono text-xs text-stone-400">
                  Page 84
                </span>
              </div>

              {/* MOTIVATION SECTION */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#D4A84B] text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-sm">
                  <span>3. Motivation</span>
                  <span className="opacity-70 font-normal">| Soul Check</span>
                </div>
                <div className="pt-2">
                  <p className="font-handwriting text-2xl sm:text-3xl text-stone-800 dark:text-stone-200 leading-[32px]">
                    I have felt an urgent need to perform and please everyone this week. My heart is fatigued because I forgot that my worth was settled at the Cross, not in today&apos;s to-do list.
                  </p>
                </div>
              </div>

              {/* APPLICATION SECTION */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#4A7C9B] text-white text-xs font-bold tracking-wider uppercase mb-2 shadow-sm">
                  <span>4. Application</span>
                  <span className="opacity-70 font-normal">| The Daily Walk</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF7F2] dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 shadow-sm mt-2 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4A7C9B] shrink-0 mt-1" />
                    <p className="font-handwriting text-xl text-stone-800 dark:text-stone-200">
                      Step away from the screen for 10 minutes before the afternoon call.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4A7C9B] shrink-0 mt-1" />
                    <p className="font-handwriting text-xl text-stone-800 dark:text-stone-200">
                      Surrender the unresolved email to God in silent prayer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Seal */}
              <div className="pt-4 flex items-center justify-between text-xs text-stone-400">
                <span className="font-mono">Encrypted &amp; Saved Locally</span>
                <span className="font-handwriting text-lg text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                  Signed, Selah
                  <Feather className="w-3.5 h-3.5 text-[#3A7D3A]" />
                </span>
              </div>

            </div>

          </div>

          {/* Under shadow */}
          <div className="w-[90%] h-8 bg-stone-900/15 dark:bg-black/50 blur-xl mx-auto mt-2 rounded-full" />

        </div>

      </div>
    </section>
  );
};
