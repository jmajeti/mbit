import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import { Award, Users, MapPin, Handshake, Lightbulb, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MB IT Associates — 20+ years of connecting technology talent with leading companies across the US.",
};

const values = [
  {
    icon: Award,
    title: "Excellence in Every Placement",
    description:
      "We never settle for 'good enough.' Every candidate we present has been thoroughly screened for technical depth, culture fit, and career alignment.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We don't chase transactions. We build relationships with clients and candidates that last years — because trust compounds over time.",
  },
  {
    icon: Lightbulb,
    title: "Industry Insight",
    description:
      "Our recruiters stay current on technology trends, compensation benchmarks, and market demand so they can advise, not just execute.",
  },
  {
    icon: Globe,
    title: "Nationwide Reach",
    description:
      "Headquartered in Parsippany, NJ — with active talent pipelines spanning every major US tech market.",
  },
];

const team = [
  {
    name: "Leadership Team",
    role: "Executive & Strategy",
    description: "Decades of combined experience in IT staffing, technology consulting, and talent acquisition across the US market.",
  },
  {
    name: "Technical Recruiters",
    role: "Domain Specialists",
    description: "Each recruiter focuses on a specific technology domain — AI/ML, ERP, BI, or application development — for deeper expertise.",
  },
  {
    name: "Client Partners",
    role: "Account Management",
    description: "Dedicated account managers who understand your business, your team, and your hiring standards inside and out.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(23,104,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(23,104,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Two Decades of Connecting<br />
              <span className="gradient-text-light">Technology & Talent</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              MB IT Associates was built on a simple belief: the right person in the right role changes everything — for the company and the individual.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] mb-6 leading-tight">
                20+ Years of Precision in a World Full of Noise
              </h2>
              <div className="space-y-4 text-slate-500 leading-relaxed">
                <p>
                  MB IT Associates was founded with a focus on quality over quantity. While the staffing industry has often chased volume, we chose depth — building niche expertise in specific technology domains and developing long-term relationships with both clients and candidates.
                </p>
                <p>
                  Over more than two decades, we've placed technology professionals across Fortune 500 companies, high-growth startups, and government agencies. From New Jersey to nationwide, our network of pre-vetted technology talent gives our clients a competitive advantage in a market where finding the right person fast is everything.
                </p>
                <p>
                  Today, we specialize in AI, Data Science, Business Intelligence, ERP, Application Development, and Quality Assurance — the technology disciplines that are defining the next era of business.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-5">
                {[
                  { icon: Users, value: "500+", label: "Successful Placements" },
                  { icon: Award, value: "20+", label: "Years of Experience" },
                  { icon: MapPin, value: "50+", label: "States Covered" },
                  { icon: Handshake, value: "95%", label: "Client Retention" },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="bg-[#F7F9FC] rounded-2xl p-6 text-center border border-slate-100"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mx-auto mb-3">
                        <Icon size={18} className="text-blue-600" />
                      </div>
                      <div className="text-3xl font-extrabold text-[#0D1B2A] mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] mb-4">
              Our Values
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <AnimatedSection key={v.title} delay={i * 80}>
                  <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-[#0D1B2A] mb-2">{v.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] mb-4">
              The People Behind the Placements
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              A dedicated team of technology recruiting specialists, each committed to getting the match right.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 100}>
                <div className="bg-[#F7F9FC] border border-slate-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-5">
                    <Users size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-blue-600 mb-3">{member.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{member.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
