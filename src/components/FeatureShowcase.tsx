"use client";

import React from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Sparkles, 
  Calendar, 
  BookHeart, 
  Share2, 
  ShieldCheck, 
  CheckCircle2, 
  Lock,
  Compass,
  Bookmark
} from "lucide-react";

export const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="py-24 sm:py-32 bg-paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3EA] dark:bg-emerald-950/60 text-[#3A7D3A] dark:text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#3A7D3A]/20">
            <Compass className="w-3.5 h-3.5" />
            Crafted for Contemplation
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            Thoughtful features. <br />
            <span className="italic font-normal text-stone-600 dark:text-stone-400">Zero unnecessary clutter.</span>
          </h2>
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg">
            Every element in Selah is carefully weighted to foster deep reflection rather than mindless consumption.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          
          {/* FEATURE 1: Complete Offline KJV Bible */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual: Phone Mockup with KJV Bible screen */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
                {/* Vintage Bible ribbon hanging */}
                <div className="absolute -top-4 right-10 w-5 h-12 bg-[#C46246] rounded-b shadow-sm z-20" />
                
                <div className="rounded-[40px] p-3 bg-[#24201D] shadow-2xl border border-stone-700/60 ring-1 ring-black/30">
                  <div className="rounded-[30px] overflow-hidden bg-[#FAF7F2] aspect-[9/19.5]">
                    <Image
                      src="/assets/images/store_screenshots/screenshot_2_bible.png"
                      alt="Selah Bible Reader with KJV and Red-Letter Words"
                      width={400}
                      height={850}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Floating highlight badge */}
                <div className="absolute -bottom-4 -left-6 bg-white dark:bg-stone-800 p-3.5 rounded-xl shadow-paper border border-[#E8E0D4] dark:border-stone-700 max-w-[200px]">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#3A7D3A] mb-1">
                    <Bookmark className="w-3.5 h-3.5" /> Offline Sanctuary
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 leading-tight">
                    Read the entire KJV anywhere — in planes, cabins, or quiet parks.
                  </p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#3A7D3A] dark:text-[#52A752]">
                01 / Scripture Reader
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                The Word, without the noise.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                An offline King James Version (KJV) Bible designed with reverent editorial clarity. No social banners, no ads, no clickbait commentary.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Complete offline KJV SQLite database (instant load)",
                  "Red-letter text for the words of Christ",
                  "Fast book, chapter, and verse navigation",
                  "Adjustable literary serif typography & line spacing",
                  "Gentle highlighters and ribbon bookmark collections"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-[#3A7D3A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FEATURE 2: Guided Rhema Journaling */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#C46246] dark:text-[#E07A5F]">
                02 / Guided Journaling
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                Turn a verse into a conversation.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                The blank page can feel overwhelming. Our guided four-part Rhema rhythm gives your prayerful thoughts a gentle, sacred scaffold.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Prompt cards designed around listening and honesty",
                  "Four focused steps: Rhema, Reflection, Motivation, Application",
                  "Automatic saving so you can pause and return without losing a thought",
                  "Gentle guidance from Selah to keep your quiet time joyful"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-[#C46246] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <a
                  href="#rhema"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#C46246] hover:text-[#A84E34] transition-colors"
                >
                  <span>Explore the 4-step Rhema rhythm</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>

            {/* Visual: Guided Write screen */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
                {/* Washi tape on phone edge */}
                <div className="absolute -top-3 left-10 w-24 h-6 washi-tape-terracotta rounded-sm transform -rotate-3 z-20" />
                
                <div className="rounded-[40px] p-3 bg-[#24201D] shadow-2xl border border-stone-700/60 ring-1 ring-black/30">
                  <div className="rounded-[30px] overflow-hidden bg-[#FAF7F2] aspect-[9/19.5]">
                    <Image
                      src="/assets/images/store_screenshots/screenshot_4_write.png"
                      alt="Selah Guided Rhema Journaling Screen"
                      width={400}
                      height={850}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Mascot artwork preview */}
                <div className="absolute -bottom-6 -right-6 w-24 sm:w-28 filter drop-shadow-md">
                  <Image
                    src="/assets/images/mascot-writing-journal-transparent.png"
                    alt="Selah Mascot Writing Devotional Journal"
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* FEATURE 3: Sacred Habits & Milestones */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual: Calendar and Streaks screen */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
                {/* Gold washi tape */}
                <div className="absolute -top-3 right-12 w-24 h-6 washi-tape-gold rounded-sm transform rotate-2 z-20" />

                <div className="rounded-[40px] p-3 bg-[#24201D] shadow-2xl border border-stone-700/60 ring-1 ring-black/30">
                  <div className="rounded-[30px] overflow-hidden bg-[#FAF7F2] aspect-[9/19.5]">
                    <Image
                      src="/assets/images/store_screenshots/screenshot_5_calendar.png"
                      alt="Selah Calendar and Devotional Habit Streaks"
                      width={400}
                      height={850}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>

                {/* Encouraging milestone note in Caveat */}
                <div className="absolute -bottom-4 -left-6 bg-white dark:bg-stone-800 px-4 py-2.5 rounded-xl shadow-paper border border-[#E8E0D4] dark:border-stone-700 rotate-[-2deg]">
                  <p className="font-handwriting text-lg text-stone-800 dark:text-stone-200">
                    &ldquo;Every morning paused is grace.&rdquo; 🌿
                  </p>
                </div>
              </div>
            </div>

            {/* Copy */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#D4A84B]">
                03 / Sacred Consistency
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                Small moments become sacred habits.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                Consistency without guilt. Selah tracks your weekly devotional rhythm with serene visual indicators that celebrate faithfulness rather than punishing missed days.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Organic weekly rhythm rings that honor real life",
                  "Gentle milestones marking your spiritual dedication",
                  "Visual calendar marking every day you sat with Scripture",
                  "Quiet, configurable morning or evening stillness reminders"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-[#D4A84B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* FEATURE 4: A Journal That Feels Like Yours */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-[#5B8C5A] dark:text-[#6FA46E]">
                04 / Notebook History
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                A journal that feels like yours.
              </h3>
              <p className="font-sans text-stone-600 dark:text-stone-300 text-base sm:text-lg leading-relaxed">
                Designed to evoke the tactile comfort of high-end stationery. Revisit prayers from months ago and watch how God answered unuttered whispers.
              </p>
              
              <ul className="space-y-3 pt-2">
                {[
                  "Dual views: Ruled Notebook View & Chronological Timeline",
                  "College-ruled paper aesthetic with fine margin accents",
                  "Full-text search across all personal reflections & Scripture",
                  "Bookmark your deepest milestones for instant retrieval"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-stone-700 dark:text-stone-300">
                    <CheckCircle2 className="w-5 h-5 text-[#5B8C5A] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual: Journal history screen */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-[320px] sm:max-w-[340px]">
                <div className="rounded-[40px] p-3 bg-[#24201D] shadow-2xl border border-stone-700/60 ring-1 ring-black/30">
                  <div className="rounded-[30px] overflow-hidden bg-[#FAF7F2] aspect-[9/19.5]">
                    <Image
                      src="/assets/images/store_screenshots/screenshot_3_journal.png"
                      alt="Selah Journal History View"
                      width={400}
                      height={850}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* FEATURE 5 & 6: Cards and Privacy highlight */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Feature 5 Card: Scripture Keepsakes */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FBECE8] dark:bg-stone-800 flex items-center justify-center text-[#C46246]">
                  <Share2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Keep the verse close.
                </h4>
                <p className="font-sans text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  Turn meaningful Scriptures into high-resolution cards with three curated paper themes: Classic Linen, Minimal Clean, and Midnight Gold.
                </p>
                <div className="pt-2">
                  <a href="#cards" className="text-xs font-bold uppercase tracking-wider text-[#C46246] hover:underline">
                    View Card Gallery &rarr;
                  </a>
                </div>
              </div>

              {/* Decorative mini card preview */}
              <div className="mt-8 p-4 rounded-xl bg-[#FAF7F2] dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-700 shadow-sm rotate-1">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C46246]">Scripture Card</span>
                <p className="font-serif italic text-sm text-stone-800 dark:text-stone-200 mt-1">
                  &ldquo;The LORD is my shepherd; I shall not want.&rdquo;
                </p>
                <span className="block text-right text-[11px] font-sans text-stone-500 mt-1">— Psalm 23:1</span>
              </div>
            </div>

            {/* Feature 6 Card: Local-First Sacred Privacy */}
            <div className="p-8 rounded-3xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF2F6] dark:bg-stone-800 flex items-center justify-center text-[#4A7C9B]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-stone-900 dark:text-stone-100">
                  Your reflections are yours.
                </h4>
                <p className="font-sans text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                  Your prayers are deeply sacred. Selah is built local-first on SQLite: your entries live on your device by default, with zero advertising and optional encrypted cloud backup.
                </p>
                <div className="pt-2">
                  <a href="#privacy" className="text-xs font-bold uppercase tracking-wider text-[#4A7C9B] hover:underline">
                    Read Privacy Commitment &rarr;
                  </a>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 p-4 rounded-xl bg-[#FAF7F2] dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-700">
                <div className="w-14 h-14 shrink-0">
                  <Image
                    src="/assets/images/mascot-guardian-key-transparent.png"
                    alt="Guardian Key Mascot"
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <div className="text-xs text-stone-600 dark:text-stone-400">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block">Zero-Knowledge Cloud Vault</span>
                  Client-side encrypted backups with Supabase when you choose.
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
