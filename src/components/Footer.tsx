"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Feather } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F2] dark:bg-[#12100E] border-t border-[#E8E0D4] dark:border-stone-800 py-16 sm:py-20 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-[#E8E0D4] dark:border-stone-800">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-[#E8E0D4] dark:border-stone-700 bg-white dark:bg-stone-800">
                <Image
                  src="/assets/images/icon.png"
                  alt="Selah Lamb Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-100">
                Selah
              </span>
            </Link>
            <p className="mt-2 font-serif italic text-sm text-[#3A7D3A] dark:text-[#52A752]">
              Pause. Reflect. Praise.
            </p>
            <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-1 max-w-xs">
              A peaceful digital journal and Scripture companion built with intention.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm font-medium text-stone-600 dark:text-stone-300">
            <Link href="#features" className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors">
              Features
            </Link>
            <Link href="#rhema" className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors">
              Method
            </Link>
            <Link href="#journal" className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors">
              Journal
            </Link>
            <Link href="#pricing" className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors">
              Pricing
            </Link>
            <Link href="/privacy" className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors">
              Privacy
            </Link>
            <a 
              href="mailto:support@selahdevotions.app" 
              className="hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors"
            >
              Support
            </a>
          </nav>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-400 font-sans">
          <div>
            &copy; 2026 Selah. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Made with intention.</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#3A7D3A]" />
            <span className="font-handwriting text-sm text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
              Grace &amp; Peace
              <Feather className="w-3.5 h-3.5 text-[#3A7D3A]" />
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
