import Link from "next/link";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import CTASection from "@/components/sections/CTASection";

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  highlights: string[];
  roles: string[];
  process: { step: string; title: string; description: string }[];
  technologies: string[];
  relatedServices: { title: string; href: string }[];
}

export default function ServicePageTemplate({
  badge,
  title,
  subtitle,
  description,
  icon: Icon,
  iconColor,
  iconBg,
  highlights,
  roles,
  process,
  technologies,
  relatedServices,
}: ServicePageProps) {
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
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
                {badge}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
                {title}
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">{subtitle}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Get Started <ArrowRight size={16} />
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                >
                  Browse Jobs
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={150} className="hidden lg:block">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-2xl ${iconBg} bg-opacity-20 flex items-center justify-center mb-6`}>
                  <Icon size={28} className={iconColor} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Why MBIT for {badge}?</h3>
                <ul className="space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-300">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
                Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A] mb-6">
                What We Deliver
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed mb-6">{description}</p>
              <div className="flex flex-col gap-3">
                {highlights.map((h) => (
                  <div key={h} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-600">{h}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={100}>
              <div className="bg-[#F7F9FC] rounded-2xl p-7 border border-slate-100">
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-5">Roles We Place</h3>
                <ul className="space-y-2.5">
                  {roles.map((role) => (
                    <li key={role} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{role}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D1B2A]">
              Our Process
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {process.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 80}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full relative">
                  <div className="text-5xl font-black text-blue-50 mb-3 leading-none">{step.step}</div>
                  <h3 className="text-base font-bold text-[#0D1B2A] mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-pad bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
              Technologies & Tools
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1B2A]">
              Skills We Cover
            </h2>
          </AnimatedSection>
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium px-4 py-2 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-pad bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-[#0D1B2A]">Related Services</h2>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {relatedServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-300 bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-600 font-medium text-sm px-5 py-2.5 rounded-xl transition-all duration-200"
              >
                {s.title} <ArrowRight size={14} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
