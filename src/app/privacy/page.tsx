import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShieldCheck, Lock, HardDrive, Ban, Cloud } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Selah: Daily Bible & Devotions",
  description: "Our local-first commitment: your personal prayers, journals, and reflections belong exclusively to you.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper-grain py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-600 dark:text-stone-300 hover:text-[#3A7D3A] dark:hover:text-[#52A752] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Return to Selah Home</span>
        </Link>

        {/* Paper Document Container */}
        <article className="relative rounded-3xl p-8 sm:p-14 bg-[#FAF7F2] dark:bg-[#1C1917] border-2 border-[#E8E0D4] dark:border-stone-800 shadow-paper-deep text-stone-900 dark:text-stone-100">
          
          {/* Washi Tape */}
          <div className="absolute -top-3 left-16 w-28 h-6 washi-tape-sage rounded-sm shadow-xs" />

          {/* Header */}
          <header className="border-b border-[#E8E0D4] dark:border-stone-800 pb-8 mb-8 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#E8E0D4] dark:border-stone-700 bg-white dark:bg-stone-800">
                <Image
                  src="/assets/images/icon.png"
                  alt="Selah App Icon"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-serif text-xl font-bold">Selah: Daily Bible &amp; Devotions</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Privacy Policy &amp; Sacred Trust
            </h1>
            <p className="font-sans text-xs text-stone-500 dark:text-stone-400 mt-2 font-mono">
              Last Updated: September 5, 2026 &bull; Local-First Architecture
            </p>
          </header>

          {/* Content Body */}
          <div className="space-y-8 font-sans text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed">
            
            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-[#3A7D3A]" />
                1. Overview &amp; Local-First Philosophy
              </h2>
              <p>
                Selah is built upon an unyielding <strong>local-first</strong> philosophy. Your personal spiritual journey, daily prayers, journal entries, and devotional reflections are private between you and God.
              </p>
              <p>
                By default, all your reflections, devotional notes, reading progress, and bookmarks are stored <strong>locally on your device</strong> in an offline SQLite database. You can use the core features of Selah completely offline without ever creating an account.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Cloud className="w-5 h-5 text-[#4A7C9B]" />
                2. Information We Collect and Why
              </h2>
              
              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 space-y-2 text-sm">
                <div className="font-bold text-stone-900 dark:text-stone-100">Optional Encrypted Cloud Vault</div>
                <p>
                  If you choose to enable the optional <strong>Encrypted Cloud Vault</strong> to back up and sync your devotions across devices, we collect your email address and an encrypted password hash. Your reflections are encrypted prior to transmission. We cannot read the contents of your private reflections.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white dark:bg-stone-900 border border-[#E8E0D4] dark:border-stone-800 space-y-2 text-sm">
                <div className="font-bold text-stone-900 dark:text-stone-100">Subscription &amp; Purchase Information</div>
                <p>
                  When you subscribe to <strong>Selah Grace</strong> or purchase a Patron pass, transactions are processed directly by the <strong>Google Play Store</strong> or <strong>Apple App Store</strong>. We do not collect or store your credit card numbers or financial details.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Ban className="w-5 h-5 text-[#C46246]" />
                3. Zero Advertisements &amp; No Data Monetization
              </h2>
              <p>
                Selah contains <strong>no third-party advertisements</strong>. Your quiet time is never monetized. We will never sell, rent, license, or exchange your personal information or devotional entries with advertisers, data brokers, or third parties.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="font-serif text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Lock className="w-5 h-5 text-[#D4A84B]" />
                4. On-Device Biometric Protection
              </h2>
              <p>
                Selah supports optional Face ID, Fingerprint, or PIN security. Biometric verification occurs strictly within your mobile operating system&apos;s secure enclave and is never transmitted or seen by Selah.
              </p>
            </section>

            <section className="pt-6 border-t border-[#E8E0D4] dark:border-stone-800 space-y-2 text-xs text-stone-500 dark:text-stone-400">
              <p>
                If you have questions regarding this policy or your personal data rights, you may reach out directly to our craft team at{" "}
                <a href="mailto:privacy@selahdevotions.app" className="underline text-[#3A7D3A]">
                  privacy@selahdevotions.app
                </a>.
              </p>
            </section>

          </div>

        </article>

      </div>
    </main>
  );
}
