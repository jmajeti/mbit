import type { Metadata } from "next";
import Link from "next/link";
import { Users, Brain, Code2, BarChart3, Database, TestTube, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "MB IT Associates services: IT Staffing, AI & Data Science, Application Development, Business Intelligence, ERP Consulting, and Quality Assurance.",
};

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    description:
      "Contract, contract-to-hire, and direct placement for all technology roles. Pre-vetted candidates in 48 hours.",
    href: "/services/it-staffing",
    color: "text-blue-600",
    bg: "bg-blue-50",
    tags: ["Contract", "Direct Hire", "C2H"],
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description:
      "Specialist recruiting for ML engineers, data scientists, and analytics professionals. We know the stack.",
    href: "/services/ai-data-science",
    color: "text-purple-600",
    bg: "bg-purple-50",
    tags: ["ML Engineering", "Data Science", "MLOps"],
  },
  {
    icon: Code2,
    title: "Application Development",
    description:
      "Full-stack, mobile, and cloud engineering talent — from individual contributors to full development teams.",
    href: "/services/application-development",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    tags: ["Web", "Mobile", "Cloud"],
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description:
      "BI developers, data analysts, and visualization experts who turn raw data into strategic decisions.",
    href: "/services/business-intelligence",
    color: "text-orange-600",
    bg: "bg-orange-50",
    tags: ["Tableau", "Power BI", "Analytics"],
  },
  {
    icon: Database,
    title: "ERP Consulting",
    description:
      "Implementation, migration, and support staffing across SAP, Oracle, Microsoft Dynamics, and Workday.",
    href: "/services/erp-consulting",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    tags: ["SAP", "Oracle", "Dynamics 365"],
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description:
      "Manual and automated QA engineers who ensure applications are production-ready before users see them.",
    href: "/services/quality-assurance",
    color: "text-rose-600",
    bg: "bg-rose-50",
    tags: ["Automation", "Manual Testing", "Performance"],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Deep Expertise,<br />
              <span className="gradient-text-light">Not a Generalist Approach</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Six practice areas. Twenty-plus years of focus. Each one staffed by recruiters who genuinely understand the technology.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.href} delay={i * 80}>
                  <Link
                    href={service.href}
                    className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-7 card-hover"
                  >
                    <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className={service.color} />
                    </div>
                    <h2 className="text-xl font-bold text-[#0D1B2A] mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-5">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold">
                      Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
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
