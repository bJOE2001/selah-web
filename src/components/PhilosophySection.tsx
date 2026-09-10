"use client";

import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

export const PhilosophySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 md:py-36 relative bg-[#FAF7F2] dark:bg-[#151311] border-y border-[#E8E0D4] dark:border-[#2B2621] overflow-hidden">
      
      {/* Editorial Watermark Ornament in Background */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none font-serif text-[280px] leading-none text-stone-900 dark:text-stone-100 font-bold">
        Selah
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Top Ornament */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-px w-16 bg-[#E8E0D4] dark:bg-stone-800" />
          <span className="text-xs uppercase tracking-[0.25em] font-sans text-stone-500 dark:text-stone-400 font-medium">
            Our Philosophy
          </span>
          <div className="h-px w-16 bg-[#E8E0D4] dark:bg-stone-800" />
        </div>

        {/* Large Editorial Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-stone-900 dark:text-stone-100 font-bold leading-[1.2]">
            Not another app <br />
            <span className="italic font-normal text-[#C46246] dark:text-[#E07A5F]">
              demanding your attention.
            </span>
          </h2>
        </div>

        {/* Two-Column Literary Editorial Spread */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column with antique Drop Cap */}
          <div className="md:col-span-6 space-y-6 text-stone-700 dark:text-stone-300 font-serif text-lg sm:text-xl leading-relaxed">
            <p>
              <span className="float-left text-5xl sm:text-6xl font-serif font-bold text-[#3A7D3A] dark:text-[#52A752] mr-3 mt-1 leading-none">
                I
              </span>
              n a world filled with endless scrolling, notification alerts, and algorithmic noise, Selah creates a quiet room to simply stop. A sanctuary where you are not the product, and your attention is not on auction.
            </p>
            <p className="font-sans text-base text-stone-600 dark:text-stone-400 leading-relaxed font-normal">
              Read a passage. Notice the verse that arrests your heart. Reflect on what it reveals. Write honestly. Then carry one small, enduring truth into your day.
            </p>
          </div>

          {/* Right Column: Highlight Box with stationery deckled styling */}
          <div className="md:col-span-6">
            <div className="relative p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#1E1B18] border border-[#E8E0D4] dark:border-[#2E2924] shadow-paper">
              
              {/* Corner washi tape */}
              <div className="absolute -top-3 right-8 w-20 h-6 washi-tape-sage rounded-sm transform rotate-2 opacity-80" />

              <Quote className="w-8 h-8 text-[#D4A84B] mb-4 opacity-80" />
              
              <blockquote className="font-serif italic text-xl sm:text-2xl text-stone-800 dark:text-stone-200 leading-snug">
                &ldquo;No noisy feeds. No distractions. Just Scripture, reflection, and stillness.&rdquo;
              </blockquote>

              <div className="mt-6 pt-4 border-t border-[#E8E0D4] dark:border-stone-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E8E0D4] bg-[#FAF7F2]">
                    <Image
                      src="/assets/images/mascot-whispering_transparent.png"
                      alt="Selah Whispering Quietly"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-900 dark:text-stone-100 uppercase tracking-wider">
                      The Selah Rhythm
                    </div>
                    <div className="text-xs font-handwriting text-stone-500 dark:text-stone-400 text-sm">
                      Pause. Reflect. Praise.
                    </div>
                  </div>
                </div>

                <div className="text-xs font-mono text-stone-400 dark:text-stone-500">
                  Psalm 46:10
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
