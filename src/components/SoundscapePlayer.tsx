"use client";

import React, { useState } from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { soundscape } from "@/lib/soundscape";

export const SoundscapePlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const active = soundscape.toggle();
    setIsPlaying(active);
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
        isPlaying
          ? "bg-[#EAF3EA] dark:bg-emerald-950/60 text-[#3A7D3A] dark:text-emerald-400 border-[#3A7D3A]/40 shadow-sm animate-pulse"
          : "bg-white/80 dark:bg-stone-800/80 text-stone-600 dark:text-stone-300 border-[#E8E0D4] dark:border-stone-700 hover:border-stone-400"
      }`}
      title={isPlaying ? "Mute Sanctuary Soundscape" : "Play Gentle Sanctuary Soundscape"}
      aria-label={isPlaying ? "Mute Sanctuary Soundscape" : "Play Gentle Sanctuary Soundscape"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 animate-bounce" />
          <span className="hidden sm:inline">Soundscape Playing</span>
          <span className="sm:hidden">Playing</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-60" />
          <span className="hidden sm:inline">Sanctuary Soundscape</span>
          <span className="sm:hidden">Sound</span>
        </>
      )}
    </button>
  );
};
