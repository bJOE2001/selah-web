"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles, Feather, ShieldCheck } from "lucide-react";

interface HeroProps {
  onOpenDownload: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDownload }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-paper-grain">
      {/* Subtle organic ambient glow */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-[#FAF3E4]/60 via-[#EAF3EA]/40 to-transparent dark:from-stone-900/40 dark:via-stone-900/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Copy Column (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Eyebrow with fine brass divider line */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF3E4] dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 text-stone-700 dark:text-stone-300 text-xs sm:text-sm font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A84B]" />
              <span>A quieter way to meet Scripture</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-[1.1]">
              Pause. Reflect. <br className="hidden sm:inline" />
              <span className="italic text-[#3A7D3A] dark:text-[#52A752] font-normal">Praise.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="font-sans text-base sm:text-lg md:text-xl text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Selah is a peaceful Bible and devotional journaling companion designed to help you slow down, listen closely, and carry God&apos;s Word into your day.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium bg-[#2C2520] hover:bg-stone-800 dark:bg-[#FAF7F2] dark:text-[#2C2520] dark:hover:bg-white text-[#FAF7F2] shadow-paper hover:shadow-paper-lift transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Begin Your Selah</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#rhema"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-[#E8E0D4] dark:border-stone-700 bg-white/70 dark:bg-stone-800/60 hover:bg-white dark:hover:bg-stone-800 transition-all shadow-sm"
              >
                <span>Explore the Experience</span>
              </a>
            </div>

            {/* Quiet trust badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-stone-500 dark:text-stone-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#3A7D3A]" />
                <span>100% Local-First &amp; Private</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C46246]" />
                <span>Offline KJV Scripture</span>
              </div>
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#D4A84B]" />
                <span>Zero Ads or Distractions</span>
              </div>
            </div>

          </div>

          {/* Right Visual Phone Mockup Column (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Stationery textured base pad */}
            <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
              
              {/* Subtle vintage bookmark ribbon hanging off top */}
              <div className="absolute -top-6 left-12 w-6 h-14 bg-[#C46246] rounded-b shadow-sm z-20 hidden sm:block" />
              <div className="absolute -top-6 left-20 w-6 h-10 bg-[#D4A84B] rounded-b shadow-sm z-20 hidden sm:block" />

              {/* Physical Smartphone Mockup */}
              <div className="relative mx-auto rounded-[42px] p-3 sm:p-3.5 bg-gradient-to-b from-[#2E2824] to-[#1C1815] shadow-2xl ring-1 ring-black/20 border border-[#443C36]/50">
                {/* Dynamic island / phone notch speaker */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-end px-2">
                  <div className="w-2 h-2 rounded-full bg-stone-800/80" />
                </div>

                {/* Phone screen container */}
                <div className="relative rounded-[32px] overflow-hidden bg-[#FAF7F2] aspect-[9/19.5] border border-stone-800/20 shadow-inner">
                  <Image
                    src="/assets/images/store_screenshots/screenshot_1_home.png"
                    alt="Selah App Daily Dashboard Mockup"
                    width={400}
                    height={850}
                    className="w-full h-full object-cover object-top"
                    priority
                  />
                </div>

                {/* Subtle sheen highlight across glass */}
                <div className="absolute inset-3 rounded-[32px] pointer-events-none bg-gradient-to-tr from-transparent via-white/5 to-white/15" />
              </div>

              {/* Selah Lamb Mascot Companion resting peacefully beside phone */}
              <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-10 w-28 sm:w-36 z-30 filter drop-shadow-lg transition-transform hover:scale-105 duration-300">
                <Image
                  src="/assets/images/mascot_waving_transparent.webp"
                  alt="Selah the Gentle Lamb Mascot"
                  width={160}
                  height={160}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute -top-2 -left-4 bg-white dark:bg-stone-800 px-2.5 py-1 rounded-full shadow-md border border-[#E8E0D4] dark:border-stone-700 text-[11px] font-handwriting font-bold text-stone-800 dark:text-stone-200 rotate-[-4deg] whitespace-nowrap">
                  Pause &amp; breathe 🌿
                </div>
              </div>

              {/* Warm paper under-shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-stone-900/15 dark:bg-black/40 blur-xl -z-10 rounded-full" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
