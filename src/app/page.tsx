import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { DownloadSection } from "@/components/sections/Download";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AISection } from "@/components/sections/AISection";
import { AppPreview } from "@/components/sections/AppPreview";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <DownloadSection />
      <Features />
      <HowItWorks />
      <AISection />
      <AppPreview />
      <Stats />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
