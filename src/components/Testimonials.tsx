"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/tokens";
import { Heart, Quote } from "lucide-react";

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F5EFE6]/60 dark:bg-[#151311] border-b border-[#E8E0D4] dark:border-stone-800 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-[#C46246]" />
            Reader Reflections
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            A little more stillness.
          </h2>

          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Early thoughts from beta readers and friends who have made Selah a home for their morning devotions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="relative rounded-3xl p-8 bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper flex flex-col justify-between hover:shadow-paper-lift transition-all"
            >
              {/* Corner washi tape accent */}
              <div className="absolute -top-2.5 right-8 w-16 h-5 washi-tape rounded-sm opacity-80" />

              <div>
                <Quote className="w-7 h-7 text-[#D4A84B] mb-4 opacity-70" />
                <p className="font-serif italic text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#E8E0D4] dark:border-stone-800">
                <div className="font-serif font-bold text-stone-900 dark:text-stone-100">
                  {t.author}
                </div>
                <div className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {t.context} &bull; {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modest Note */}
        <div className="mt-12 text-center text-xs text-stone-400 dark:text-stone-500 font-sans">
          Early reader reflections collected during the Selah beta journaling period.
        </div>

      </div>
    </section>
  );
};
