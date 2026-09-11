"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ShieldCheck } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-headline"
        className="relative w-full max-w-lg bg-[#FAF7F2] dark:bg-[#1C1917] border border-[#E8E0D4] dark:border-[#2E2A27] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
      >
        {/* Decorative corner washi tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 washi-tape-gold rounded-sm transform -rotate-1 opacity-90 shadow-sm" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-800 dark:text-stone-400 dark:hover:text-stone-200 rounded-full hover:bg-stone-200/50 dark:hover:bg-stone-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mt-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white dark:bg-stone-800 shadow-sm border border-[#E8E0D4] dark:border-stone-700 mb-3 overflow-hidden">
            <Image
              src="/assets/images/icon.png"
              alt="Selah App Icon"
              width={56}
              height={56}
              className="object-cover"
            />
          </div>
          <h3 id="modal-headline" className="font-serif text-2xl sm:text-3xl text-stone-900 dark:text-stone-100 font-bold">
            Download Selah
          </h3>
          <p className="font-sans text-sm text-stone-600 dark:text-stone-400 mt-1 max-w-sm mx-auto">
            Experience a quieter way to meet Scripture on your iPhone, iPad, or Android device.
          </p>
        </div>

        {/* Download Options */}
        <div className="mt-6 space-y-3">
          {/* iOS Card */}
          <div className="flex items-center justify-between w-full p-4 rounded-xl bg-white dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] dark:bg-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-2 .6-2.65 1.35-.58.67-1.09 1.74-.96 2.77.99.08 2.06-.52 2.68-1.27z"/>
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">Download for</div>
                <div className="text-base font-bold text-stone-900 dark:text-stone-100">
                  iOS &amp; Apple TestFlight
                </div>
              </div>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
              Coming Soon
            </span>
          </div>

          {/* Android Card */}
          <div className="flex items-center justify-between w-full p-4 rounded-xl bg-white dark:bg-stone-800/80 border border-[#E8E0D4] dark:border-stone-700 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] dark:bg-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-200">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">Download for</div>
                <div className="text-base font-bold text-stone-900 dark:text-stone-100">
                  Android (Google Play &amp; APK)
                </div>
              </div>
            </div>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
              Coming Soon
            </span>
          </div>
        </div>

        {/* Footer reassurance */}
        <div className="mt-6 pt-4 border-t border-[#E8E0D4] dark:border-stone-700/60 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#3A7D3A]" /> Local-first &amp; zero ads
          </span>
          <span>Offline KJV included</span>
        </div>
      </div>
    </div>
  );
};
