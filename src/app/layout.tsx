import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { CustomCursor } from "@/components/providers/CustomCursor";
import { GSAPScrollProvider } from "@/components/providers/GSAPScrollProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Healix — AI-Powered Healthcare for Android",
  description:
    "Healix combines AI-powered healthcare assistance, health monitoring, medical insights, and intelligent health support into one seamless Android experience.",
  keywords: [
    "Healix",
    "AI healthcare",
    "health app",
    "Android health",
    "medical AI",
    "health monitoring",
    "Gemini health",
  ],
  authors: [{ name: "Healix" }],
  openGraph: {
    title: "Healix — Intelligent Healthcare, Reimagined",
    description:
      "Your health. Intelligent, connected, accessible. AI-powered healthcare assistance for Android.",
    type: "website",
    locale: "en_US",
    siteName: "Healix",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healix — AI-Powered Healthcare",
    description: "Experience the future of intelligent healthcare on Android.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#030712",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-healix-navy text-foreground`}
      >
        <SmoothScrollProvider>
          <GSAPScrollProvider>
            <CustomCursor />
            {children}
          </GSAPScrollProvider>
        </SmoothScrollProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
