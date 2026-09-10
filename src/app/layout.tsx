import type { Metadata, Viewport } from "next";
import { Lora, Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://selahdevotions.app"),
  title: "Selah: Daily Bible & Devotions — Pause. Reflect. Praise.",
  description:
    "Pause, reflect, and praise. Selah is a peaceful Bible reading and devotional journaling companion designed for intentional Scripture meditation, guided Rhema reflection, and private contemplation.",
  keywords: [
    "Selah",
    "Bible app",
    "daily devotions",
    "Rhema method",
    "devotional journaling",
    "KJV Bible",
    "Scripture meditation",
    "peaceful journaling",
    "Christian mindfulness",
    "offline Bible"
  ],
  authors: [{ name: "Selah Team" }],
  creator: "Selah: Daily Bible & Devotions",
  openGraph: {
    title: "Selah: Daily Bible & Devotions — Pause. Reflect. Praise.",
    description:
      "A quieter way to meet Scripture. Complete offline KJV, guided Rhema journaling, habit tracking, and local-first privacy.",
    url: "https://selahdevotions.app",
    siteName: "Selah",
    images: [
      {
        url: "/assets/images/play-store-feature-1024x500.png",
        width: 1024,
        height: 500,
        alt: "Selah: Daily Bible & Devotions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selah: Daily Bible & Devotions",
    description: "A quieter way to meet Scripture. Pause. Reflect. Praise.",
    images: ["/assets/images/play-store-feature-1024x500.png"],
  },
  icons: {
    icon: "/assets/images/icon.png",
    apple: "/assets/images/play-store-icon-512.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${playfair.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAF7F2] dark:bg-[#151311] text-[#2C2520] dark:text-[#F6F0EB] transition-colors duration-300 min-h-screen selection:bg-[#C46246] selection:text-white">
        {children}
      </body>
    </html>
  );
}
