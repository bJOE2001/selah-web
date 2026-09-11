export interface RhemaStep {
  id: string;
  stepNumber: number;
  name: string;
  question: string;
  color: string;
  bgLight: string;
  ribbonClass: string;
  mascotImage: string;
  sampleInput: string;
  guidance: string;
}

export const RHEMA_STEPS: RhemaStep[] = [
  {
    id: "rhema",
    stepNumber: 1,
    name: "RHEMA",
    question: "What verse spoke to your heart today?",
    color: "#C46246",
    bgLight: "#FBECE8",
    ribbonClass: "bg-[#C46246] text-white",
    mascotImage: "/assets/images/mascot/selah-mascot-rhema.png",
    sampleInput: "“Be still, and know that I am God: I will be exalted among the heathen, I will be exalted in the earth.” — Psalm 46:10",
    guidance: "Read slowly without rushing. Pause when a specific phrase or word tugs at your spirit."
  },
  {
    id: "reflection",
    stepNumber: 2,
    name: "REFLECTION",
    question: "What does this reveal about God's character and truth?",
    color: "#5B8C5A",
    bgLight: "#EEF4EE",
    ribbonClass: "bg-[#5B8C5A] text-white",
    mascotImage: "/assets/images/mascot/selah-mascot-reflection.png",
    sampleInput: "God does not ask me to orchestrate every outcome. He invites me to lay down striving because His sovereignty already holds the nations, the earth, and my small hours.",
    guidance: "Look beyond your immediate circumstance. Ask: Who is God here? What is His heart?"
  },
  {
    id: "motivation",
    stepNumber: 3,
    name: "MOTIVATION",
    question: "Why does your heart need this today?",
    color: "#D4A84B",
    bgLight: "#FAF3E4",
    ribbonClass: "bg-[#D4A84B] text-white",
    mascotImage: "/assets/images/mascot/selah-mascot-motivation.png",
    sampleInput: "My mind has been noisy with deadlines, expectations, and unspoken anxieties. My spirit needs permission to breathe, release control, and trust that God is working quietly.",
    guidance: "Be completely honest. God welcomes the unfiltered truth of where your soul sits today."
  },
  {
    id: "application",
    stepNumber: 4,
    name: "APPLICATION",
    question: "What will you carry into today?",
    color: "#4A7C9B",
    bgLight: "#EBF2F6",
    ribbonClass: "bg-[#4A7C9B] text-white",
    mascotImage: "/assets/images/mascot/selah-mascot-application.png",
    sampleInput: "Whenever I feel tension rising during meetings today, I will take three deep breaths, whisper 'Be still, He is God', and choose calm over urgency.",
    guidance: "Select one tangible, achievable posture or action you can weave into the next twelve hours."
  }
];

export interface FeatureItem {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  screenshot?: string;
  mascot?: string;
  accentColor: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "bible",
    tag: "Scripture First",
    title: "The Word, without the noise.",
    tagline: "Pure King James Scripture designed with reverent editorial clarity.",
    description: "Read the ancient text without notification badges, unsolicited banners, or algorithmic feeds. Enjoy complete offline access anywhere you retreat.",
    bullets: [
      "Permanently bundled offline KJV Bible",
      "Downloadable translations (BSB, WEB, Tagalog, Cebuano, etc.)",
      "Clean, reverent editorial typography",
      "Instant book, chapter & verse navigation",
      "Gentle color highlighters & ribbon bookmarks"
    ],
    screenshot: "/assets/images/store_screenshots/screenshot_3.jpg",
    accentColor: "#3A7D3A"
  },
  {
    id: "rhema",
    tag: "The Rhema Method",
    title: "Turn a verse into a conversation.",
    tagline: "Four gentle steps that bridge ancient truth into lived reality.",
    description: "Instead of staring at a blank page, our guided four-part rhythm prompts your heart to listen, reflect, uncover inner motivations, and craft one quiet daily application.",
    bullets: [
      "1. Rhema: Capture the verse that speaks directly to your heart today",
      "2. Reflect: Unpack what God is teaching you through the passage",
      "3. Motivate: Examine why your heart needed this reminder",
      "4. Apply: Craft one practical step or prayer to live out in faith"
    ],
    screenshot: "/assets/images/store_screenshots/screenshot_2.jpg",
    accentColor: "#C46246"
  },
  {
    id: "habits",
    tag: "Sacred Consistency",
    title: "Small moments become sacred habits.",
    tagline: "Build a quiet daily rhythm without guilt or vanity streaks.",
    description: "Track your devotional journey through organic milestones, serene weekly rings, and a visual calendar that celebrates every morning you paused.",
    bullets: [
      "Weekly devotional rhythm rings",
      "Gentle habit milestones without punishing resets",
      "Quiet streak tracking with warm encouragement",
      "Morning and evening stillness reminders"
    ],
    screenshot: "/assets/images/store_screenshots/screenshot_8.jpg",
    accentColor: "#D4A84B"
  },
  {
    id: "journal",
    tag: "Aesthetic Notebook",
    title: "A journal that feels like yours.",
    tagline: "Tactile college-ruled pages and premium leather covers.",
    description: "Revisit past seasons of prayer, see how God answered quiet questions from months ago, and customize your journal with premium leather and vintage styles.",
    bullets: [
      "Dual experience: Notebook View & Timeline View",
      "Premium leather, gold foil & vintage covers",
      "College-ruled texture with genuine stationery warmth",
      "Full text search across all personal reflections"
    ],
    screenshot: "/assets/images/store_screenshots/screenshot_5.jpg",
    accentColor: "#5B8C5A"
  },
  {
    id: "privacy",
    tag: "Sacred Privacy",
    title: "Your reflections are yours.",
    tagline: "Built local-first because your prayers are between you and God.",
    description: "Your journal entries never live on ad servers or track your behavior. Stored securely on your device with optional encrypted cloud backup.",
    bullets: [
      "Local-first private storage on your phone",
      "Zero third-party advertisements or trackers",
      "Works 100% offline without creating an account",
      "Optional client-encrypted Cloud Vault backup"
    ],
    screenshot: "/assets/images/mascot-guardian-key-transparent.png",
    accentColor: "#4A7C9B"
  }
];

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  monthlyPrice?: string;
  annualPrice?: string;
  lifetimePrice?: string;
  period?: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Begin",
    tagline: "The essential quiet sanctuary for everyone.",
    monthlyPrice: "$0",
    annualPrice: "$0",
    period: "Forever free",
    features: [
      "Complete offline KJV Bible",
      "Downloadable translations (BSB, WEB, Tagalog, Cebuano, etc.)",
      "Guided 4-step Rhema devotional journaling",
      "Local device journal history & search",
      "Daily habit streaks & devotion calendar",
      "Verse bookmarks & color highlighters",
      "100% ad-free & distraction-free forever"
    ],
    cta: "Start Free"
  },
  {
    id: "grace",
    name: "Selah Grace",
    tagline: "Automatic cloud backup, luxury covers, and multi-device sync.",
    badge: "Most Popular",
    popular: true,
    monthlyPrice: "$2.99",
    annualPrice: "$19.99",
    period: "/ year ($1.66/mo)",
    features: [
      "Everything in Begin",
      "Automatic Cloud Backup (Never lose a single entry)",
      "Multi-device synchronization across all devices",
      "Luxury Leather & Vintage Covers (Premium & gold foil)",
      "Directly sustains our independent ad-free mission"
    ],
    cta: "Start 7-Day Free Trial"
  },
  {
    id: "patron",
    name: "Lifetime Pass",
    tagline: "One-time payment, forever yours. Timeless support for independent Christian craft.",
    badge: "Lifetime Ownership",
    lifetimePrice: "$49.99",
    period: "One-time payment, forever yours",
    features: [
      "Everything in Selah Grace forever",
      "Automatic Cloud Backup & device sync",
      "All luxury leather & vintage cover designs",
      "Zero recurring subscriptions, forever",
      "Directly sustains an independent, ad-free sanctuary"
    ],
    cta: "Get Lifetime Access"
  }
];

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  location: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Selah has transformed my mornings from frantic to peaceful. The Rhema method gives my prayers a gentle structure that I actually look forward to every sunrise.",
    author: "Hannah M.",
    context: "Early Reader & Daily Devotionalist",
    location: "Nashville, TN"
  },
  {
    quote: "It doesn't feel like an app; it feels like opening a cherished leather notebook. Knowing my deepest prayers stay on my device without trackers gives me true peace of mind.",
    author: "David R.",
    context: "Bible Study Leader",
    location: "Edinburgh, UK"
  },
  {
    quote: "The quiet aesthetic and the sweet Selah lamb companion bring a tear to my eye. There are no loud notifications, just God's Word waiting whenever I'm ready.",
    author: "Elena C.",
    context: "Mother & Educator",
    location: "Toronto, Canada"
  }
];
