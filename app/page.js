"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const colorPalettes = [
  ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE", "#EDE9FE"],
  ["#EC4899", "#F472B6", "#F9A8D4", "#FBCFE8", "#FCE7F3"],
  ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE", "#DBEAFE"],
  ["#10B981", "#34D399", "#6EE7B7", "#A7F3D0", "#D1FAE5"],
  ["#F59E0B", "#FBBF24", "#FCD34D", "#FDE68A", "#FEF3C7"],
  ["#EF4444", "#F87171", "#FCA5A5", "#FECACA", "#FEE2E2"],
  ["#6366F1", "#818CF8", "#A5B4FC", "#C7D2FE", "#E0E7FF"],
  ["#78716C", "#A8A29E", "#D6D3D1", "#E7E5E4", "#F5F5F4"],
  ["#92400E", "#B45309", "#D97706", "#F59E0B", "#FCD34D"],
];

const features = [
  {
    icon: "◐",
    title: "Rate Your Day",
    description: "Simple 1-5 scale. No pressure, no paragraphs—just how you felt.",
  },
  {
    icon: "▦",
    title: "See Your Year",
    description: "Watch patterns emerge in a beautiful color grid. Year, month, or week view.",
  },
  {
    icon: "◎",
    title: "Passive Check-ins",
    description: "Share your colors with family. They see you're okay without awkward texts.",
  },
  {
    icon: "♡",
    title: "Thinking of You",
    description: "Send a gentle nudge when words feel like too much.",
  },
];

const testimonialScenarios = [
  {
    quote: "My daughter's at college. I don't want to be that parent who texts 'how are you?' every day. Now I just glance at her colors.",
    context: "Parent of a college student",
  },
  {
    quote: "We're long distance. Seeing his mood each day makes me feel closer without needing constant updates.",
    context: "In a long-distance relationship",
  },
  {
    quote: "I started noticing patterns. Mondays were always dark. That insight alone was worth it.",
    context: "Tracking for 6 months",
  },
];

function MockCalendarGrid({ palette, className = "" }) {
  const [cells, setCells] = useState([]);
  
  useEffect(() => {
    const newCells = Array.from({ length: 52 * 7 }, () => 
      Math.random() > 0.1 ? palette[Math.floor(Math.random() * 5)] : "transparent"
    );
    setCells(newCells);
  }, [palette]);

  return (
    <div className={`grid grid-cols-52 gap-[2px] ${className}`}>
      {cells.map((color, i) => (
        <div
          key={i}
          className="w-[6px] h-[6px] sm:w-[8px] sm:h-[8px] rounded-[1px]"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

function PaletteSelector({ selected, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {colorPalettes.map((palette, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={`flex rounded-lg overflow-hidden transition-all duration-200 ${
            selected === i 
              ? "ring-2 ring-white ring-offset-2 ring-offset-black scale-110" 
              : "opacity-60 hover:opacity-100"
          }`}
        >
          {palette.map((color, j) => (
            <div
              key={j}
              className="w-4 h-6"
              style={{ backgroundColor: color }}
            />
          ))}
        </button>
      ))}
    </div>
  );
}

function AppStoreBadge() {
  return (
    <a
      href="https://apps.apple.com/app/id6757321223"
      className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-xl font-medium hover:bg-neutral-200 transition-colors"
    >
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
      </svg>
      <div className="text-left">
        <div className="text-[10px] leading-none opacity-70">Download on the</div>
        <div className="text-base leading-tight">App Store</div>
      </div>
    </a>
  );
}

export default function InHueLanding() {
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialScenarios.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/inhue-icon.webp"
              alt="InHue"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg"
            />
            <span className="font-semibold text-lg tracking-tight">InHue</span>
          </div>
          <AppStoreBadge />
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            Your colors
            <br />
            <span
              className="transition-colors duration-300"
              style={{ color: colorPalettes[selectedPalette][0] }}
            >
              speak for you
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Track your year in color. Share your mood without saying a word.
            <br className="hidden sm:block" />
            A gentler way to stay connected.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <AppStoreBadge />
            <span className="text-neutral-500 text-sm">Free to download</span>
          </div>

          {/* Interactive Calendar Preview */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />
            <div className="bg-neutral-900/50 rounded-2xl p-6 sm:p-8 border border-white/5 overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <span className="text-neutral-500 text-sm">2025</span>
                <span className="text-neutral-500 text-sm">Your Year in Review</span>
              </div>
              <div className="overflow-x-auto pb-4">
                <MockCalendarGrid palette={colorPalettes[selectedPalette]} />
              </div>
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-neutral-500 text-sm mb-4">Choose your palette</p>
                <PaletteSelector selected={selectedPalette} onSelect={setSelectedPalette} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
            Mood tracking, simplified
          </h2>
          <p className="text-neutral-400 text-center mb-16 max-w-xl mx-auto">
            No lengthy journals. No complicated metrics. Just a daily color that captures how you felt.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-neutral-900/30 rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="text-3xl mb-4 opacity-60">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How it works
          </h2>
          <div className="space-y-12">
            {[
              { step: "01", title: "Rate your day", desc: "Tap 1-5 based on how you felt. Add tags or voice notes if you want—or don't." },
              { step: "02", title: "Watch patterns form", desc: "Your year fills in like a canvas. See trends across weeks, months, or the full year." },
              { step: "03", title: "Invite your people", desc: "Share your colors with family or close friends. They see your mood, not your notes." },
              { step: "04", title: "Stay gently connected", desc: "No pressure to explain. A glance at someone's colors says enough." },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <span className="text-neutral-600 font-mono text-sm">{item.step}</span>
                <div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-neutral-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Use Cases */}
      <section className="py-20 px-6 border-t border-white/5 bg-neutral-900/20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="min-h-[160px] flex flex-col justify-center">
            <p className="text-2xl sm:text-3xl font-medium mb-6 transition-opacity duration-500">
              "{testimonialScenarios[currentTestimonial].quote}"
            </p>
            <p className="text-neutral-500">
              — {testimonialScenarios[currentTestimonial].context}
            </p>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonialScenarios.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentTestimonial ? "bg-white" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Start tracking your year
          </h2>
          <p className="text-neutral-400 text-lg mb-10">
            It takes 5 seconds a day. By December, you'll have a year of colors to look back on.
          </p>
          <AppStoreBadge />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Image
                src="/inhue-icon.webp"
                alt="InHue"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="font-medium">InHue</span>
            </div>
            <div className="flex gap-8 text-sm text-neutral-500">
              <a href="/privacy" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="mailto:support@inhue.io" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-center text-neutral-600 text-sm">
            © {new Date().getFullYear()} InHue, LLC. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
