import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSolutionSection } from './components/ProblemSolutionSection';
import { FoodAmpelCheck } from './components/FoodAmpelCheck';
import { BookContentSection } from './components/BookContentSection';
import { SneakPeekSection } from './components/SneakPeekSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { PricingOfferSection } from './components/PricingOfferSection';
import { AuthorSection } from './components/AuthorSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AnimatedBackground } from './components/AnimatedBackground';

export default function App() {
  return (
    <div className="min-h-screen relative text-stone-800 flex flex-col font-sans selection:bg-[#43644B]/20 selection:text-[#28402F]">
      {/* Immersive Organic Animated Background */}
      <AnimatedBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Page Flow: Proposition -> Mechanism -> Proof -> Conversion */}
      <main className="flex-1">
        {/* Hero Section with 3D Mockup / Cover view */}
        <HeroSection />

        {/* The 3 Core Hurdles Solved & What it is */}
        <ProblemSolutionSection />

        {/* Interactive Food Check / Ampel-Check (Soothing vs Triggers vs Myths) */}
        <FoodAmpelCheck />

        {/* 30-Page Breakdown & 3 Meal Plans */}
        <BookContentSection />

        {/* Interactive PDF Sneak Peek */}
        <SneakPeekSection />

        {/* Target Audience: Who it is for & Who it is not for */}
        <TargetAudienceSection />

        {/* Pricing & Full Bundle Offer Box */}
        <PricingOfferSection />

        {/* Author Bio & Philosophy (Karin Zeit) */}
        <AuthorSection />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer with Branded Social Media Buttons & Disclaimers */}
      <Footer />

      {/* Anonymous Live Purchase Notifications (bottom-left) */}
      <NotificationToast />

      {/* Mobile Sticky Bar (<15% viewport height) */}
      <StickyMobileBar />
    </div>
  );
}
