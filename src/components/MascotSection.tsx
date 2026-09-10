"use client";

import React from "react";
import Image from "next/image";
import { Heart, Sparkles, Coffee, Feather } from "lucide-react";

export const MascotSection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF7F2] dark:bg-[#151311] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-[#FAF3E4]/70 dark:bg-stone-900/50 border border-[#E8E0D4] dark:border-stone-800 p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle paper grain texture */}
          <div className="absolute inset-0 bg-paper-grain opacity-50 pointer-events-none" />

          {/* Decorative Corner Washi Tape */}
          <div className="absolute -top-3 left-12 w-28 h-6 washi-tape-gold rounded-sm transform -rotate-2" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
            
            {/* Mascot Visual beside open journal mockup (6 cols) */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-md">
                
                {/* Simulated Open Journal Page Spread */}
                <div className="relative bg-white dark:bg-[#1E1B18] rounded-2xl p-6 shadow-paper-lift border border-[#E8E0D4] dark:border-stone-800 transform -rotate-1">
                  
                  {/* Journal Header Line */}
                  <div className="flex items-center justify-between border-b border-[#E8E0D4] dark:border-stone-800 pb-3 mb-4">
                    <span className="text-xs uppercase font-mono tracking-widest text-stone-400">
                      Quiet Morning Reflections
                    </span>
                    <span className="text-xs font-handwriting text-[#C46246] text-base">
                      &ldquo;The Lord is my shepherd&rdquo;
                    </span>
                  </div>

                  {/* Ruled lines inside journal */}
                  <div className="space-y-3 ruled-lines text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-sans">
                    <p className="font-handwriting text-lg text-stone-800 dark:text-stone-200">
                      Selah reminds me to breathe before I write. She celebrates the quiet 3-day streak without making me feel guilty when life gets heavy.
                    </p>
                    <p className="font-handwriting text-base text-stone-500">
                      Stillness is not wasted time; it is where roots grow deep.
                    </p>
                  </div>
                </div>

                {/* Selah Lamb Mascot Figure sitting beside journal */}
                <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-52 filter drop-shadow-2xl transition-transform hover:scale-105 duration-300">
                  <Image
                    src="/assets/images/mascot-holding-bible-transparent.png"
                    alt="Selah Lamb sitting quietly holding Scripture"
                    width={240}
                    height={240}
                    className="w-full h-auto object-contain"
                  />
                  <div className="absolute -top-4 -left-4 bg-white dark:bg-stone-800 px-3 py-1 rounded-full shadow-md border border-[#E8E0D4] dark:border-stone-700 text-xs font-handwriting font-bold text-stone-800 dark:text-stone-200 rotate-[-4deg] flex items-center gap-1.5">
                    <span>Always patient</span>
                    <Heart className="w-3 h-3 text-[#C46246]" />
                  </div>
                </div>

              </div>
            </div>

            {/* Copy Column (6 cols) */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
                <Heart className="w-3.5 h-3.5 text-[#C46246]" />
                Gentle Companion
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                Meet Selah.
              </h2>

              <p className="font-serif italic text-lg sm:text-xl text-[#3A7D3A] dark:text-[#52A752]">
                A gentle little companion for your quiet moments.
              </p>

              <div className="space-y-4 font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Selah isn&apos;t here to distract you with gamified rings or loud celebratory confetti. She&apos;s here to gently remind you to slow down, celebrate the quiet milestones, and make space for sincere reflection.
                </p>
                <p>
                  Represented by a calm, tender lamb rooted in timeless biblical pastoral imagery, Selah walks quietly alongside your devotional habit—encouraging, never demanding.
                </p>
              </div>

              {/* Three quiet traits */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
                  <Feather className="w-5 h-5 text-[#3A7D3A] mb-2" />
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif">Unrushed</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">No countdown timers or urgency badges.</div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
                  <Sparkles className="w-5 h-5 text-[#D4A84B] mb-2" />
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif">Grace-Filled</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">Streaks that forgive, because grace is real.</div>
                </div>

                <div className="p-4 rounded-xl bg-white/80 dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
                  <Coffee className="w-5 h-5 text-[#C46246] mb-2" />
                  <div className="text-sm font-bold text-stone-900 dark:text-stone-100 font-serif">Humble</div>
                  <div className="text-xs text-stone-500 dark:text-stone-400 mt-1">Technology serving the Word, not itself.</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
