"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = ["AI & Machine Learning", "Data Engineering", "ERP Implementation", "IT Staffing", "Application Development", "Business Intelligence"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % rotatingWords.length);
        setFade(true);
      }, 350);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0D1B2A] flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(23,104,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(23,104,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium">20+ Years of Precision Placements</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Your Partner for<br />
            <span
              className="gradient-text-light inline-block transition-opacity duration-300"
              style={{ opacity: fade ? 1 : 0 }}
            >
              {rotatingWords[wordIndex]}
            </span>
            <br />
            Talent
          </h1>

          {/* Sub */}
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
            MB IT Associates connects top-tier technology professionals with forward-thinking companies.
            Niche expertise. Speed. Results. Based in New Jersey, placing talent nationwide.
          </p>

          {/* Trust bullets */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
            {["48-hour candidate delivery", "Contract & Direct Hire", "Nationwide reach"].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0" />
                <span className="text-sm text-slate-300">{point}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40 hover:shadow-blue-700/50 hover:-translate-y-0.5"
            >
              Hire Talent
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>

      {/* Floating tech tags (decorative) */}
      <div className="absolute right-8 top-1/3 hidden xl:flex flex-col gap-3 opacity-60">
        {["Python", "AWS", "Spark", "SAP", "React", "Tableau"].map((tag, i) => (
          <div
            key={tag}
            className="glass text-white/70 text-xs font-mono px-3 py-1.5 rounded-lg"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            {tag}
          </div>
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/5 to-transparent pointer-events-none" />
    </section>
  );
}
