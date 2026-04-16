import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { jobs } from "@/lib/jobs";
import { MapPin, Clock, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Jobs",
  description:
    "Browse open technology jobs at MB IT Associates. Contract, contract-to-hire, and direct placement roles in AI, Data Science, ERP, BI, and more.",
};

const typeColors: Record<string, string> = {
  "Contract": "bg-blue-50 text-blue-700 border-blue-100",
  "Contract-to-Hire": "bg-purple-50 text-purple-700 border-purple-100",
  "Direct Hire": "bg-emerald-50 text-emerald-700 border-emerald-100",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

export default function JobsPage() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Open Positions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Find Your Next<br />
              <span className="gradient-text-light">Technology Role</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8">
              Contract, contract-to-hire, and direct placement opportunities with top US employers. Submit your resume and we'll match you to the right role.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
            >
              Submit Your Resume
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#F7F9FC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
            <span className="font-semibold text-[#0D1B2A]">{jobs.length} open positions</span>
            <span>·</span>
            {["Contract", "Contract-to-Hire", "Direct Hire"].map((type) => {
              const count = jobs.filter((j) => j.type === type).length;
              return (
                <span key={type}>
                  <span className="font-medium text-slate-700">{count}</span> {type}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Jobs list */}
      <section className="section-pad bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <AnimatedSection key={job.id} delay={i * 60}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 card-hover group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColors[job.type]}`}
                        >
                          {job.type}
                        </span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-[#0D1B2A] mb-3 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={13} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={13} /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} /> Posted {formatDate(job.posted)}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/contact?job=${job.id}&title=${encodeURIComponent(job.title)}`}
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 whitespace-nowrap"
                    >
                      Apply Now <ArrowRight size={14} />
                    </Link>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{job.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Key Requirements
                      </p>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req) => (
                          <li key={req} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-slate-400 pl-3.5">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* No jobs fallback (hidden when there are jobs) */}
          {jobs.length === 0 && (
            <div className="text-center py-20">
              <p className="text-slate-500 text-lg mb-4">No open positions right now.</p>
              <p className="text-slate-400 text-sm mb-8">
                Submit your resume and we'll reach out when a matching role opens up.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1768FF] text-white font-semibold px-6 py-3 rounded-xl"
              >
                Submit Resume <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {/* Submit CTA */}
          {jobs.length > 0 && (
            <AnimatedSection delay={jobs.length * 60} className="mt-10">
              <div className="bg-[#0D1B2A] rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-2">Don't see the right fit?</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Submit your resume and our recruiters will reach out when a matching role becomes available.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] text-white font-semibold px-6 py-3 rounded-xl transition-colors"
                >
                  Submit Your Resume <ArrowRight size={16} />
                </Link>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>
    </>
  );
}
