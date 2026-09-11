"use client";

import React, { useState } from "react";
import { Check, Sparkles, Crown, Feather, Cloud, BookOpen, Heart } from "lucide-react";

interface PricingSectionProps {
  onOpenDownload: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenDownload }) => {
  const [billingCycle, setBillingCycle] = useState<"annual" | "monthly">("annual");

  return (
    <section id="membership" className="py-24 sm:py-32 bg-paper-grain relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF3E4] dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <Feather className="w-3.5 h-3.5 text-[#D4A84B]" />
            Membership &amp; Craft
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            A quiet sanctuary for everyone.
          </h2>

          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            Begin freely, or support the ongoing craftsmanship of Selah with our premium memberships.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white dark:bg-stone-800 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-[#3A7D3A] text-white shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              Annual Pass
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-white/20 text-[10px] uppercase font-bold tracking-wider">
                Save 44%
              </span>
            </button>

            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-[#3A7D3A] text-white shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900"
              }`}
            >
              Monthly Pass
            </button>
          </div>
        </div>

        {/* 3 Stationery Membership Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* TIER 1: BEGIN (Free) */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper flex flex-col justify-between hover:shadow-paper-lift transition-all">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 left-10 w-20 h-5 washi-tape rounded-sm shadow-xs" />

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">
                Essential Sanctuary
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                Begin
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2">
                Everything you need to build a peaceful devotional habit.
              </p>

              <div className="mt-6 mb-8 pb-6 border-b border-[#E8E0D4] dark:border-stone-800">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
                  $0
                </span>
                <span className="text-xs text-stone-400 font-sans ml-2">
                  forever free
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {[
                  "Complete offline KJV Bible",
                  "Downloadable translations (NLT, NIV, ESV, etc.)",
                  "Guided 4-step Rhema devotional journaling",
                  "Local device journal history & search",
                  "Daily habit streaks & devotion calendar",
                  "Verse bookmarks & color highlighters"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#3A7D3A] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E0D4] dark:border-stone-800">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 rounded-xl font-medium text-sm border border-[#E8E0D4] dark:border-stone-700 bg-[#FAF7F2] dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-stone-200/60 dark:hover:bg-stone-700 transition-colors"
              >
                Start Free
              </button>
            </div>
          </div>

          {/* TIER 2: SELAH GRACE (Premium - Highlighted) */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-[#FAF7F2] dark:bg-[#201D1A] border-2 border-[#3A7D3A] shadow-paper-deep flex flex-col justify-between transform lg:-translate-y-2">
            {/* Ribbon Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#3A7D3A] text-white text-xs font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A84B]" />
              {billingCycle === "annual" ? "Most Popular • Save 44%" : "Most Cherished"}
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-[#3A7D3A] dark:text-[#52A752] mb-1">
                Included in Selah Grace
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                Selah Grace
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2">
                Deepen your spiritual walk with luxury notebook craftsmanship, daily devotions, and automatic cloud backups.
              </p>

              <div className="mt-6 mb-8 pb-6 border-b border-[#E8E0D4] dark:border-stone-700">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
                  {billingCycle === "annual" ? "$19.99" : "$2.99"}
                </span>
                <span className="text-xs text-stone-500 font-sans ml-2">
                  {billingCycle === "annual" ? "/ year ($1.66/mo)" : "/ month"}
                </span>
                {billingCycle === "annual" && (
                  <div className="mt-1 text-xs text-[#3A7D3A] dark:text-emerald-400 font-medium">
                    Includes 7-day free trial
                  </div>
                )}
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#EAF3EA] dark:bg-stone-800 flex items-center justify-center text-[#3A7D3A] shrink-0 mt-0.5">
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      Automatic Cloud Backup
                    </div>
                    <div className="text-stone-600 dark:text-stone-400 text-xs mt-0.5 leading-relaxed">
                      Never lose a single entry. Your journal is safely backed up and synced across all your devices.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-[#FAF3E4] dark:bg-stone-800 flex items-center justify-center text-[#D4A84B] shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-stone-900 dark:text-stone-100">
                      Luxury Leather &amp; Vintage Covers
                    </div>
                    <div className="text-stone-600 dark:text-stone-400 text-xs mt-0.5 leading-relaxed">
                      Unlock all handcrafted leather, gold foil embossing, and vintage journal designs.
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#E8E0D4]/60 dark:border-stone-700/60 flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
                  <Check className="w-3.5 h-3.5 text-[#3A7D3A] shrink-0" />
                  <span>Includes everything in the free Begin sanctuary</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E0D4] dark:border-stone-700">
              <button
                onClick={onOpenDownload}
                className="w-full py-3.5 rounded-xl font-medium text-sm bg-[#8B3A2B] hover:bg-[#722F23] text-white shadow-paper hover:shadow-paper-lift transition-all"
              >
                {billingCycle === "annual" ? "Start 7-Day Free Trial" : "Subscribe Monthly ($2.99/mo)"}
              </button>
              <p className="text-[11px] text-center text-stone-400 dark:text-stone-500 mt-2">
                Cancel anytime in Google Play / App Store Settings.
              </p>
            </div>
          </div>

          {/* TIER 3: LIFETIME PASS */}
          <div className="relative rounded-3xl p-8 sm:p-10 bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper flex flex-col justify-between hover:shadow-paper-lift transition-all">
            {/* Top Washi Tape */}
            <div className="absolute -top-3 right-10 w-20 h-5 washi-tape-gold rounded-sm shadow-xs" />

            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#2C2520] text-amber-200 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Crown className="w-3 h-3 text-[#D4A84B]" />
                LIFETIME OWNERSHIP
              </div>
              <h3 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-100">
                Lifetime Pass
              </h3>
              <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2">
                One-time payment, forever yours. Timeless support for independent Christian craft.
              </p>

              <div className="mt-6 mb-8 pb-6 border-b border-[#E8E0D4] dark:border-stone-800">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-stone-900 dark:text-stone-100">
                  $49.99
                </span>
                <span className="text-xs text-stone-400 font-sans ml-2">
                  one-time payment, forever yours
                </span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                {[
                  "Everything in Selah Grace for life",
                  "Automatic Cloud Backup & device sync",
                  "All handcrafted leather & vintage cover designs",
                  "Zero recurring subscriptions forever",
                  "Directly sustains an independent, ad-free sanctuary"
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#D4A84B] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E8E0D4] dark:border-stone-800">
              <button
                onClick={onOpenDownload}
                className="w-full py-3 rounded-xl font-medium text-sm border border-[#D4A84B]/60 text-stone-900 dark:text-stone-100 hover:bg-[#FAF3E4] dark:hover:bg-stone-800 transition-colors"
              >
                Get Lifetime Access
              </button>
            </div>
          </div>

        </div>

        {/* In-App Mission Card & Scripture Anchor (Modeled directly on the App Paywall) */}
        <div className="max-w-4xl mx-auto mt-16 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FDF6F0] dark:bg-stone-900/60 border border-[#F5DCD0] dark:border-stone-800/80 shadow-sm flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
            <div className="w-10 h-10 rounded-2xl bg-[#F8E7DF] dark:bg-stone-800 flex items-center justify-center text-[#8B3A2B] shrink-0">
              <Heart className="w-5 h-5 fill-[#8B3A2B]" />
            </div>
            <div className="space-y-1.5">
              <h4 className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                An Independent, Ad-Free Sanctuary
              </h4>
              <p className="font-sans text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Selah is crafted independently with no advertisements, trackers, or commercial noise. Your membership directly sustains this sacred, distraction-free space for quiet communion with God.
              </p>
            </div>
          </div>

          <div className="text-center space-y-1 pt-2">
            <p className="font-serif italic text-sm sm:text-base text-stone-600 dark:text-stone-400">
              &ldquo;Thy word is a lamp unto my feet, and a light unto my path.&rdquo;
            </p>
            <p className="font-sans text-xs text-stone-400 dark:text-stone-500">
              — Psalm 119:105
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
