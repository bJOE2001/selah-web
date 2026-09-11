"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HardDrive, Ban, Cloud, ArrowRight, KeyRound } from "lucide-react";

export const PrivacySection: React.FC = () => {
  return (
    <section id="privacy" className="py-24 sm:py-32 bg-[#FAF7F2] dark:bg-[#12100E] border-y border-[#E8E0D4] dark:border-stone-800 relative overflow-hidden">
      
      {/* Background paper watermark */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full max-w-7xl h-full bg-paper-grain opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mascot with Guardian Key (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm text-center">
              
              {/* Circular paper seal backdrop */}
              <div className="relative mx-auto w-64 sm:w-72 aspect-square rounded-full bg-white dark:bg-stone-900 border-2 border-dashed border-[#E8E0D4] dark:border-stone-700 flex items-center justify-center p-6 shadow-paper">
                <Image
                  src="/assets/images/mascot-guardian-key-transparent.png"
                  alt="Selah Guardian Lamb holding Sacred Key"
                  width={280}
                  height={280}
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>

              {/* Hand-drawn note tag */}
              <div className="mt-4 inline-block bg-white dark:bg-stone-800 px-4 py-2 rounded-xl border border-[#E8E0D4] dark:border-stone-700 shadow-sm rotate-[-1deg]">
                <span className="font-handwriting text-lg text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                  <span>Guarding your sacred reflections</span>
                  <KeyRound className="w-4 h-4 text-[#3A7D3A]" />
                </span>
              </div>

            </div>
          </div>

          {/* Right Column: Principles & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EA] dark:bg-emerald-950/60 text-[#3A7D3A] dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#3A7D3A]/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Uncompromising Privacy
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
                Your reflections are yours.
              </h2>
              
              <p className="mt-4 font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                Your prayers, thoughts, and personal reflections are deeply personal. Selah is designed with a local-first philosophy, keeping your journal on your device by default.
              </p>
            </div>

            {/* The 3 Core Privacy Principles */}
            <div className="space-y-4">
              
              {/* Principle 1: Local-First */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EAF3EA] dark:bg-stone-800 flex items-center justify-center text-[#3A7D3A] shrink-0">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    Local-First Architecture
                  </h3>
                  <p className="font-sans text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                    Your journal stays on your device by default. Powered by local-first storage, your data exists on your phone, not on corporate servers.
                  </p>
                </div>
              </div>

              {/* Principle 2: No Ads */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FBECE8] dark:bg-stone-800 flex items-center justify-center text-[#C46246] shrink-0">
                  <Ban className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    Zero Advertisements
                  </h3>
                  <p className="font-sans text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                    Your quiet time shouldn&apos;t be interrupted by advertising or sponsored feeds. We will never sell, analyze, or monetize your words.
                  </p>
                </div>
              </div>

              {/* Principle 3: Optional Cloud Vault */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2F6] dark:bg-stone-800 flex items-center justify-center text-[#4A7C9B] shrink-0">
                  <Cloud className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                    Optional Encrypted Cloud Vault
                  </h3>
                  <p className="font-sans text-sm text-stone-600 dark:text-stone-400 mt-1 leading-relaxed">
                    Back up and sync your journal across devices with encrypted cloud storage when you choose. You remain in complete control.
                  </p>
                </div>
              </div>

            </div>

            {/* Link to Privacy Policy */}
            <div className="pt-2">
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A7D3A] dark:text-[#52A752] hover:underline"
              >
                <span>Read our full Privacy Policy</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
