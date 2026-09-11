"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhilosophySection } from "@/components/PhilosophySection";
import { FeatureShowcase } from "@/components/FeatureShowcase";
import { RhemaMethod } from "@/components/RhemaMethod";
import { MascotSection } from "@/components/MascotSection";
import { JournalExperience } from "@/components/JournalExperience";
import { JournalHistory } from "@/components/JournalHistory";
import { PrivacySection } from "@/components/PrivacySection";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { DownloadModal } from "@/components/DownloadModal";

export default function HomePage() {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  const handleOpenDownload = () => {
    setDownloadModalOpen(true);
  };

  const handleCloseDownload = () => {
    setDownloadModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-paper-grain selection:bg-[#C46246] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Main Marketing Narrative Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section with 3D-styled phone mockup & waving Selah lamb */}
        <Hero onOpenDownload={handleOpenDownload} />

        {/* 2. Philosophy Section: Editorial magazine layout */}
        <PhilosophySection />

        {/* 3. Feature Showcase: 6 signature capabilities */}
        <FeatureShowcase />

        {/* 4. Rhema Method: 4-step interactive tactile rhythm */}
        <RhemaMethod />

        {/* 5. Meet Selah: The gentle lamb companion */}
        <MascotSection />

        {/* 6. Journal Experience: Open ruled notebook spread */}
        <JournalExperience />

        {/* 7. Journal History: Notebook View vs Timeline View */}
        <JournalHistory />

        {/* 8. Privacy Section: Local-first and guardian key */}
        <PrivacySection />

        {/* 10. Membership / Pricing: Stationery membership cards */}
        <PricingSection onOpenDownload={handleOpenDownload} />

        {/* 11. Testimonials: Early reader reflections */}
        <Testimonials />

        {/* 12. Final CTA: Closing journal page bookplate */}
        <FinalCTA onOpenDownload={handleOpenDownload} />
      </main>

      {/* Literary Footer */}
      <Footer />

      {/* Interactive Download Dialog */}
      <DownloadModal isOpen={downloadModalOpen} onClose={handleCloseDownload} />
    </div>
  );
}
