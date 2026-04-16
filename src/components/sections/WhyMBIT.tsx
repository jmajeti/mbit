import { Zap, Target, Shield, Users2, TrendingUp, Clock } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const reasons = [
  {
    icon: Target,
    title: "Niche Expertise",
    description: "We don't try to cover every role in every industry. Our recruiters specialize in specific technology domains, giving you access to deeper candidate networks.",
  },
  {
    icon: Zap,
    title: "Speed Without Compromise",
    description: "Shortlisted candidates in 48 hours — without cutting corners on vetting. Our pre-built talent pipelines mean less time-to-hire for you.",
  },
  {
    icon: Shield,
    title: "Quality You Can Trust",
    description: "Every candidate is technically screened and reference-checked. We stand behind our placements with a 90-day guarantee on direct hires.",
  },
  {
    icon: Users2,
    title: "Two-Sided Commitment",
    description: "We care equally about employers and candidates. Happy placements mean long-term relationships — not transactional fills.",
  },
  {
    icon: TrendingUp,
    title: "20+ Years of Results",
    description: "Two decades of building technology teams across Fortune 500s, startups, and government agencies means we know what good looks like.",
  },
  {
    icon: Clock,
    title: "Flexible Engagement Models",
    description: "Contract, contract-to-hire, direct placement, or project-based staffing — we adapt to how your business hires.",
  },
];

export default function WhyMBIT() {
  return (
    <section className="section-pad bg-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <AnimatedSection direction="left" className="lg:sticky lg:top-28">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] leading-tight mb-6">
              The MBIT Difference
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Any agency can send you resumes. We send you the right people — screened, vetted, and aligned with your team's culture and technical needs.
            </p>
            <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm">
              <p className="text-sm text-slate-500 mb-3 font-medium">Trusted by teams at</p>
              <div className="flex flex-wrap gap-3">
                {["Finance", "Healthcare", "Retail", "Technology", "Government"].map((industry) => (
                  <span
                    key={industry}
                    className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right: reasons grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <AnimatedSection key={reason.title} delay={i * 80} direction="up">
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-[#0D1B2A] mb-2">{reason.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
