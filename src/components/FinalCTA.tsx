"use client";

import React from "react";
import Image from "next/image";
import { Download, ArrowRight, Sparkles, Feather } from "lucide-react";

interface FinalCTAProps {
  onOpenDownload: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenDownload }) => {
  return (
    <section className="py-24 sm:py-32 bg-paper-grain relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bookplate Final Journal Page Container */}
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-[#FAF7F2] dark:bg-[#1C1917] border-2 border-[#E8E0D4] dark:border-stone-700 shadow-paper-deep text-center overflow-hidden">
          
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-36 h-6 washi-tape-gold rounded-sm shadow-xs" />

          {/* Bookplate Fine Framing Border */}
          <div className="border border-dashed border-[#D4C9BC] dark:border-stone-700 p-8 sm:p-12 rounded-2xl relative">
            
            {/* Mascot Emblem in center */}
            <div className="mx-auto w-24 h-24 mb-6 relative">
              <Image
                src="/assets/images/mascot-holding-bible-transparent.png"
                alt="Selah Lamb Final Bookplate Seal"
                width={96}
                height={96}
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>

            <span className="text-xs uppercase tracking-[0.3em] font-sans text-stone-400 font-semibold block mb-3">
              The Closing Page
            </span>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 dark:text-stone-100">
              Make room for stillness.
            </h2>

            {/* Poetic Supporting Copy */}
            <div className="my-8 max-w-md mx-auto space-y-1.5 font-serif italic text-lg sm:text-xl text-stone-700 dark:text-stone-300">
              <p>Open Scripture.</p>
              <p>Write what speaks to you.</p>
              <p className="text-[#3A7D3A] dark:text-[#52A752] font-semibold">Carry it into your day.</p>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenDownload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium bg-[#3A7D3A] hover:bg-[#2F662F] text-white shadow-paper hover:shadow-paper-lift transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Download className="w-5 h-5" />
                <span>Download Selah</span>
              </button>

              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-[#E8E0D4] dark:border-stone-700 bg-white/80 dark:bg-stone-800/80 hover:bg-white transition-all"
              >
                <span>Explore Selah</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Platform Availability */}
            <div className="mt-8 text-xs text-stone-500 dark:text-stone-400 font-sans tracking-wide">
              Available for iOS and Android &bull; Offline KJV &bull; Local-First
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
