import AnimatedSection from "@/components/ui/AnimatedSection";
import Link from "next/link";
import {
  Building2,
  HeartPulse,
  ShoppingBag,
  Cpu,
  Landmark,
  Truck,
  GraduationCap,
  Banknote,
} from "lucide-react";

const industries = [
  { icon: Banknote, label: "Financial Services", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: HeartPulse, label: "Healthcare & Life Sciences", color: "text-rose-500", bg: "bg-rose-50" },
  { icon: Cpu, label: "Technology", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: ShoppingBag, label: "Retail & E-Commerce", color: "text-orange-500", bg: "bg-orange-50" },
  { icon: Landmark, label: "Government & Public Sector", color: "text-teal-600", bg: "bg-teal-50" },
  { icon: Building2, label: "Real Estate", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: Truck, label: "Logistics & Supply Chain", color: "text-amber-600", bg: "bg-amber-50" },
  { icon: GraduationCap, label: "Education", color: "text-indigo-600", bg: "bg-indigo-50" },
];

export default function IndustriesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0D1B2A] mb-4">
            Across Every Sector
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our technology staffing experience spans diverse industries — we understand your sector's unique demands.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {industries.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <AnimatedSection key={industry.label} delay={i * 60}>
                <div className="group flex flex-col items-center text-center p-6 rounded-2xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200 cursor-default">
                  <div className={`w-12 h-12 rounded-xl ${industry.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={industry.color} />
                  </div>
                  <p className="text-sm font-semibold text-[#0D1B2A]">{industry.label}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm border border-blue-200 hover:border-blue-400 px-6 py-2.5 rounded-xl transition-colors"
          >
            View all industries
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
