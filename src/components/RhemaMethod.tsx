"use client";

import React, { useState } from "react";
import Image from "next/image";
import { RHEMA_STEPS, RhemaStep } from "@/lib/tokens";
import { Sparkles, ArrowRight, BookMarked, Check } from "lucide-react";

export const RhemaMethod: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const currentStep = RHEMA_STEPS[activeStepIndex];

  return (
    <section id="rhema" className="py-24 sm:py-32 bg-[#F5EFE6] dark:bg-[#12100E] relative border-y border-[#E8E0D4] dark:border-[#26211C] overflow-hidden">
      
      {/* Background paper texture elements */}
      <div className="absolute inset-0 bg-paper-grain opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-semibold tracking-wider uppercase mb-3 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <BookMarked className="w-3.5 h-3.5 text-[#C46246]" />
            The Heart of Selah
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100">
            Read it. Sit with it. <br />
            <span className="italic font-normal text-[#C46246] dark:text-[#E07A5F]">Live it.</span>
          </h2>
          
          <p className="mt-4 font-sans text-stone-600 dark:text-stone-400 text-base sm:text-lg max-w-2xl mx-auto">
            A simple four-step rhythm for turning Scripture into personal reflection and action.
          </p>
        </div>

        {/* 4 Interactive Ribbon Tabs (Notebook Tabs / Bookmarks) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {RHEMA_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`group relative p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? "bg-white dark:bg-[#1C1917] shadow-paper-lift border-transparent scale-[1.02] ring-2"
                    : "bg-white/60 dark:bg-stone-900/40 hover:bg-white dark:hover:bg-stone-800 border-[#E8E0D4] dark:border-stone-800 hover:shadow-sm"
                }`}
                style={{
                  outlineColor: isActive ? step.color : "transparent",
                }}
              >
                {/* Visual Ribbon Bookmark at Top */}
                <div
                  className="absolute -top-3 left-6 w-8 h-4 rounded-t-sm shadow-sm transition-all"
                  style={{ backgroundColor: step.color }}
                />

                <div className="flex items-center justify-between mb-2 mt-1">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
                    style={{
                      backgroundColor: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    Step 0{step.stepNumber}
                  </span>
                  {isActive && (
                    <span
                      className="w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: step.color }}
                    />
                  )}
                </div>

                <div className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100">
                  {step.name}
                </div>

                <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-2 mt-1 font-sans">
                  {step.question}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Step Card Experience */}
        <div className="relative rounded-3xl bg-white dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-stone-800 p-6 sm:p-10 lg:p-12 shadow-paper-deep overflow-hidden">
          
          {/* Top Washi Tape Accent */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-2 rounded-b-md shadow-sm"
            style={{ backgroundColor: currentStep.color }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Area (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-white shadow-sm"
                  style={{ backgroundColor: currentStep.color }}
                >
                  {currentStep.stepNumber}
                </span>
                <span
                  className="font-mono text-xs uppercase tracking-widest font-bold"
                  style={{ color: currentStep.color }}
                >
                  The {currentStep.name} Prompt
                </span>
              </div>

              {/* Step Core Question */}
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 dark:text-stone-100 leading-tight">
                &ldquo;{currentStep.question}&rdquo;
              </h3>

              <p className="font-sans text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                {currentStep.guidance}
              </p>

              {/* Sample Reflection on College-Ruled Notebook Simulation */}
              <div className="relative rounded-2xl p-5 sm:p-6 bg-[#FAF7F2] dark:bg-[#151311] border border-[#E8E0D4] dark:border-stone-800 ruled-lines shadow-inner">
                <div className="text-[11px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                  Example Journal Entry
                </div>
                <p className="font-handwriting text-xl sm:text-2xl text-stone-800 dark:text-stone-200 leading-[32px]">
                  {currentStep.sampleInput}
                </p>
              </div>

              {/* Step Navigation Controls */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : RHEMA_STEPS.length - 1))}
                  className="text-xs font-semibold text-stone-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors py-2 px-3 rounded-lg hover:bg-stone-100 dark:hover:bg-stone-800"
                >
                  &larr; Previous Step
                </button>

                <div className="flex items-center gap-1.5">
                  {RHEMA_STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStepIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeStepIndex ? "w-6" : "w-2 bg-stone-300 dark:bg-stone-700"
                      }`}
                      style={{
                        backgroundColor: i === activeStepIndex ? currentStep.color : undefined,
                      }}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveStepIndex((prev) => (prev < RHEMA_STEPS.length - 1 ? prev + 1 : 0))}
                  className="inline-flex items-center gap-1.5 text-xs font-bold py-2 px-4 rounded-xl text-white shadow-sm transition-all"
                  style={{ backgroundColor: currentStep.color }}
                >
                  <span>{activeStepIndex === RHEMA_STEPS.length - 1 ? "Restart Cycle" : "Next Step"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Mascot Visual Area (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-square flex items-center justify-center">
                
                {/* Soft colored backdrop halo */}
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-25 dark:opacity-15 transition-all duration-500"
                  style={{ backgroundColor: currentStep.color }}
                />

                {/* Mascot Artwork specifically for this step */}
                <div className="relative w-full h-full flex items-center justify-center transition-transform duration-500 transform hover:scale-105">
                  <Image
                    src={currentStep.mascotImage}
                    alt={`Selah Lamb Mascot for ${currentStep.name} Step`}
                    width={320}
                    height={320}
                    className="w-auto h-full max-h-72 object-contain drop-shadow-xl"
                  />
                </div>

                {/* Hand-drawn encouragement tag */}
                <div className="absolute -bottom-3 right-4 bg-white dark:bg-stone-800 px-3 py-1 rounded-full shadow-md border border-[#E8E0D4] dark:border-stone-700 rotate-2">
                  <span className="font-handwriting text-base font-bold text-stone-800 dark:text-stone-200 flex items-center gap-1.5">
                    <span>Step {currentStep.stepNumber}: {currentStep.name}</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#D4A84B]" />
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
