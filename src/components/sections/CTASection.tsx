import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { ArrowRight, UserSearch } from "lucide-react";

export default function CTASection() {
  return (
    <section className="section-pad bg-[#0D1B2A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(23,104,255,0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(23,104,255,0.6) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hire Talent */}
          <AnimatedSection direction="left">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#1768FF]/20 flex items-center justify-center mb-6">
                <UserSearch size={22} className="text-[#00C2FF]" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                Ready to Build Your Dream Team?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Tell us what you need and we'll send you shortlisted, pre-vetted candidates within 48 hours. No long contracts. Just results.
              </p>
              <ul className="space-y-2 mb-8">
                {["Free initial consultation", "Candidates in 48 hours", "90-day placement guarantee"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-blue-900/40"
              >
                Hire Talent Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Find a Job */}
          <AnimatedSection direction="right" delay={150}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
              <div className="w-12 h-12 rounded-2xl bg-cyan-400/20 flex items-center justify-center mb-6">
                <ArrowRight size={22} className="text-cyan-400" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
                Looking for Your Next Opportunity?
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                We work with top companies who are actively hiring. Submit your resume and our recruiters will match you with roles that fit your skills and career goals.
              </p>
              <ul className="space-y-2 mb-8">
                {["Contract & full-time roles", "Top US employers", "Dedicated career support"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
              >
                Browse Open Jobs
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
