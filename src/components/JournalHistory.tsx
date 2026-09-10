"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  BookOpen, 
  Clock, 
  Search, 
  Bookmark, 
  Calendar as CalendarIcon, 
  Star, 
  ChevronRight,
  Filter
} from "lucide-react";

export const JournalHistory: React.FC = () => {
  const [viewMode, setViewMode] = useState<"notebook" | "timeline">("notebook");
  const [searchQuery, setSearchQuery] = useState("");

  const sampleEntries = [
    {
      id: "1",
      date: "Sep 10, 2026",
      day: "Today",
      verse: "Psalm 46:10",
      verseSnippet: "“Be still, and know that I am God...”",
      theme: "Peace & Sovereignty",
      color: "#3A7D3A",
      bookmarked: true,
      takeaway: "Step away from urgency. God holds the earth."
    },
    {
      id: "2",
      date: "Sep 09, 2026",
      day: "Wednesday",
      verse: "Matthew 11:28",
      verseSnippet: "“Come unto me, all ye that labour and are heavy laden...”",
      theme: "Gentle Rest",
      color: "#C46246",
      bookmarked: true,
      takeaway: "His yoke is easy and His burden is light."
    },
    {
      id: "3",
      date: "Sep 08, 2026",
      day: "Tuesday",
      verse: "Proverbs 3:5-6",
      verseSnippet: "“Trust in the LORD with all thine heart; and lean not unto thine own understanding...”",
      theme: "Uncertainty & Guidance",
      color: "#D4A84B",
      bookmarked: false,
      takeaway: "Yield the future path; He directs each step."
    },
    {
      id: "4",
      date: "Sep 07, 2026",
      day: "Monday",
      verse: "Lamentations 3:22-23",
      verseSnippet: "“It is of the LORD's mercies that we are not consumed, because his compassions fail not...”",
      theme: "New Mercies",
      color: "#4A7C9B",
      bookmarked: true,
      takeaway: "Fresh mercies every single sunrise."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF3E4]/50 dark:bg-[#151311] border-b border-[#E8E0D4] dark:border-[#2B2621] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
              <CalendarIcon className="w-3.5 h-3.5 text-[#D4A84B]" />
              Chronicles of Faithfulness
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
              Two ways to revisit your journey.
            </h2>
            <p className="mt-2 font-sans text-stone-600 dark:text-stone-400 text-sm sm:text-base max-w-xl">
              Switch effortlessly between the aesthetic tactile warmth of physical notebook leaves and the structured chronological timeline.
            </p>
          </div>

          {/* Interactive View Toggle Switch */}
          <div className="inline-flex p-1 rounded-2xl bg-stone-200/70 dark:bg-stone-800 border border-[#E8E0D4] dark:border-stone-700 shrink-0">
            <button
              onClick={() => setViewMode("notebook")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === "notebook"
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#3A7D3A]" />
              <span>Notebook View</span>
            </button>

            <button
              onClick={() => setViewMode("timeline")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                viewMode === "timeline"
                  ? "bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 shadow-sm"
                  : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              }`}
            >
              <Clock className="w-4 h-4 text-[#C46246]" />
              <span>Timeline View</span>
            </button>
          </div>
        </div>

        {/* Mockup Toolbar: Search & Filter */}
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              placeholder="Search prayers, verses, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#FAF7F2] dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-700 text-xs sm:text-sm text-stone-800 dark:text-stone-200 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#3A7D3A]"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0">
            <span className="text-xs text-stone-500 flex items-center gap-1 font-medium">
              <Filter className="w-3.5 h-3.5" /> Filters:
            </span>
            <span className="px-2.5 py-1 rounded-full bg-[#EAF3EA] dark:bg-emerald-950/60 text-[#3A7D3A] text-xs font-semibold cursor-pointer border border-[#3A7D3A]/20">
              All (42)
            </span>
            <span className="px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:bg-stone-200">
              Bookmarked (12)
            </span>
            <span className="px-2.5 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs font-medium cursor-pointer hover:bg-stone-200">
              September
            </span>
          </div>
        </div>

        {/* Dynamic Display based on active toggle */}
        {viewMode === "notebook" ? (
          /* NOTEBOOK VIEW: Tactile Deckled Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in duration-300">
            {sampleEntries.map((entry) => (
              <div
                key={entry.id}
                className="relative rounded-2xl p-6 bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper hover:shadow-paper-lift transition-all transform hover:-translate-y-1 ruled-lines group flex flex-col justify-between"
              >
                {/* Washi tape on top */}
                <div
                  className="absolute -top-2.5 left-8 w-16 h-5 rounded-sm opacity-85 shadow-xs"
                  style={{ backgroundColor: entry.color }}
                />

                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pt-1">
                    <span className="font-mono">{entry.date}</span>
                    {entry.bookmarked && (
                      <Bookmark className="w-4 h-4 text-[#D4A84B] fill-[#D4A84B]" />
                    )}
                  </div>

                  <div className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100 mb-1">
                    {entry.verse}
                  </div>

                  <p className="font-serif italic text-xs text-stone-600 dark:text-stone-300 line-clamp-2 mb-3">
                    {entry.verseSnippet}
                  </p>

                  <div className="pt-2 border-t border-[#E8E0D4] dark:border-stone-800">
                    <div className="text-[10px] uppercase font-bold tracking-wider text-stone-400 mb-1">
                      Daily Application
                    </div>
                    <p className="font-handwriting text-xl text-stone-800 dark:text-stone-200 leading-tight">
                      &ldquo;{entry.takeaway}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-dashed border-[#E8E0D4] dark:border-stone-800 flex items-center justify-between text-xs">
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-bold"
                    style={{ backgroundColor: `${entry.color}15`, color: entry.color }}
                  >
                    {entry.theme}
                  </span>
                  <span className="text-stone-400 group-hover:text-stone-700 dark:group-hover:text-stone-200 flex items-center font-medium">
                    Read &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* TIMELINE VIEW: Chronological Line with Streak Milestones */
          <div className="relative pl-6 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-3 sm:before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#E8E0D4] dark:before:bg-stone-800 animate-in fade-in duration-300">
            {sampleEntries.map((entry, idx) => (
              <div key={entry.id} className="relative group">
                {/* Timeline node pin */}
                <div
                  className="absolute -left-6 sm:-left-10 top-4 w-4 h-4 rounded-full border-2 border-white dark:border-stone-900 shadow-sm"
                  style={{ backgroundColor: entry.color }}
                />

                <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 shadow-paper hover:shadow-paper-lift transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-lg font-bold text-stone-900 dark:text-stone-100">
                        {entry.verse}
                      </span>
                      <span
                        className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider"
                        style={{ backgroundColor: `${entry.color}18`, color: entry.color }}
                      >
                        {entry.theme}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
                      <span>{entry.date}</span>
                      {entry.bookmarked && <Bookmark className="w-3.5 h-3.5 text-[#D4A84B] fill-current" />}
                    </div>
                  </div>

                  <p className="font-serif italic text-sm text-stone-700 dark:text-stone-300 mb-3">
                    {entry.verseSnippet}
                  </p>

                  <div className="p-3 rounded-xl bg-[#FAF7F2] dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 text-xs sm:text-sm">
                    <span className="font-bold text-stone-700 dark:text-stone-300 mr-2">Carried into day:</span>
                    <span className="font-handwriting text-lg text-stone-800 dark:text-stone-200">
                      {entry.takeaway}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
