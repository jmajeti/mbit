import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";
import {
  Banknote, HeartPulse, Cpu, ShoppingBag, Landmark, Building2, Truck, GraduationCap,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "MB IT Associates serves technology staffing needs across Financial Services, Healthcare, Technology, Retail, Government, and more.",
};

const industries = [
  {
    icon: Banknote,
    name: "Financial Services",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
    description:
      "From investment banks to fintech startups, we place technology professionals who understand compliance, security, and the speed of financial markets.",
    roles: ["Quantitative Analysts", "Risk & Compliance Tech", "Core Banking Engineers", "Trading Systems Developers", "FinTech Data Scientists"],
  },
  {
    icon: HeartPulse,
    name: "Healthcare & Life Sciences",
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "border-rose-100",
    description:
      "Healthcare technology is complex. We place professionals who understand HIPAA, HL7, EHR systems, and the stakes of healthcare data accuracy.",
    roles: ["EHR Implementation Specialists", "Healthcare Data Analysts", "Medical Device Software Engineers", "HIPAA Compliance Experts", "Health IT Project Managers"],
  },
  {
    icon: Cpu,
    name: "Technology & Software",
    color: "text-purple-600",
    bg: "bg-purple-50",
    border: "border-purple-100",
    description:
      "Software companies need talent who ships fast without breaking things. We understand agile teams, product cycles, and engineering culture.",
    roles: ["Full-Stack Engineers", "Platform & Infrastructure Engineers", "AI/ML Engineers", "Developer Advocates", "Engineering Managers"],
  },
  {
    icon: ShoppingBag,
    name: "Retail & E-Commerce",
    color: "text-orange-500",
    bg: "bg-orange-50",
    border: "border-orange-100",
    description:
      "Retail technology demands speed, scale, and personalization. We staff e-commerce engineers, data analysts, and digital transformation leaders.",
    roles: ["E-Commerce Platform Engineers", "Digital Analytics Specialists", "Supply Chain Tech Consultants", "Personalization Engineers", "CX Technology Leads"],
  },
  {
    icon: Landmark,
    name: "Government & Public Sector",
    color: "text-teal-600",
    bg: "bg-teal-50",
    border: "border-teal-100",
    description:
      "Government technology projects require cleared professionals, compliance expertise, and experience navigating complex procurement cycles.",
    roles: ["Cleared IT Professionals", "Government ERP Consultants", "Cybersecurity Analysts", "GIS & Data Specialists", "IT Project Managers (PMP)"],
  },
  {
    icon: Building2,
    name: "Real Estate & Construction",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    description:
      "PropTech and real estate technology is evolving rapidly. We staff developers, data analysts, and systems integrators for this sector.",
    roles: ["PropTech Developers", "Real Estate Data Analysts", "CRM Integration Specialists", "GIS Engineers", "Systems Administrators"],
  },
  {
    icon: Truck,
    name: "Logistics & Supply Chain",
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-100",
    description:
      "Supply chain technology powers global operations. We place engineers and analysts who understand WMS, TMS, and IoT-driven logistics.",
    roles: ["Supply Chain Data Analysts", "WMS / TMS Consultants", "IoT Platform Engineers", "ERP Integration Specialists", "Logistics Tech PMs"],
  },
  {
    icon: GraduationCap,
    name: "Education & EdTech",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    border: "border-indigo-100",
    description:
      "EdTech requires a unique blend of technical skill and purpose. We staff engineers and data professionals driving innovation in learning.",
    roles: ["LMS Developers & Administrators", "EdTech Data Scientists", "Learning Analytics Engineers", "Platform Engineers", "Instructional Designers (Technical)"],
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0D1B2A] pt-32 pb-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(23,104,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(23,104,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Industries
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Technology Staffing<br />
              <span className="gradient-text-light">Across Every Sector</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              We understand the unique demands of your industry — the compliance requirements, the technical standards, and the talent that drives it.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <AnimatedSection key={industry.name} delay={i * 60}>
                  <div className={`bg-white border ${industry.border} rounded-2xl p-7 h-full card-hover`}>
                    <div className="flex items-start gap-5">
                      <div className={`w-12 h-12 rounded-xl ${industry.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} className={industry.color} />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-[#0D1B2A] mb-3">{industry.name}</h2>
                        <p className="text-sm text-slate-500 leading-relaxed mb-5">
                          {industry.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Common roles we place</p>
                          {industry.roles.map((role) => (
                            <div key={role} className="flex items-center gap-2">
                              <CheckCircle2 size={13} className={`${industry.color} flex-shrink-0`} />
                              <span className="text-sm text-slate-600">{role}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
