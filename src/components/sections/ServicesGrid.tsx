import Link from "next/link";
import { Users, Brain, Code2, BarChart3, Database, TestTube, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const services = [
  {
    icon: Users,
    title: "IT Staffing",
    description: "Contract, contract-to-hire, and direct placement for all technology roles. We match the right talent to the right opportunity, fast.",
    href: "/services/it-staffing",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "AI & Data Science",
    description: "Specialists in placing AI/ML engineers, data scientists, and analytics professionals. Stay ahead of the intelligence curve.",
    href: "/services/ai-data-science",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Code2,
    title: "Application Development",
    description: "Full-stack web and mobile development talent — from front-end engineers to cloud architects and DevOps specialists.",
    href: "/services/application-development",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "BI developers, data analysts, and visualization experts who transform raw data into strategic business decisions.",
    href: "/services/business-intelligence",
    color: "from-orange-500 to-orange-600",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Database,
    title: "ERP Consulting",
    description: "End-to-end ERP implementation, migration, and support talent across SAP, Oracle, Microsoft Dynamics, and more.",
    href: "/services/erp-consulting",
    color: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    icon: TestTube,
    title: "Quality Assurance",
    description: "Manual and automated QA engineers who ensure your applications perform flawlessly before they reach your users.",
    href: "/services/quality-assurance",
    color: "from-rose-500 to-rose-600",
    bg: "bg-rose-50",
    iconColor: "text-rose-600",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] mb-4">
            Specialized Services,<br />
            <span className="gradient-text">Not Generalist Guesswork</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            We go deep in each practice area so we can deliver candidates who are truly qualified — not just keyword matches.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.href} delay={i * 80} direction="up">
                <Link
                  href={service.href}
                  className="group flex flex-col h-full bg-white border border-slate-100 rounded-2xl p-7 card-hover"
                >
                  <div className={`w-12 h-12 rounded-xl ${service.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon size={22} className={service.iconColor} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0D1B2A] mb-2 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-1 mt-5 text-blue-600 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
