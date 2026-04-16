"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

function ContactForm() {
  const searchParams = useSearchParams();
  const jobTitle = searchParams.get("title");

  const [formType, setFormType] = useState<"employer" | "candidate">(
    jobTitle ? "candidate" : "employer"
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: jobTitle ? `I am interested in the "${jobTitle}" position.` : "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (jobTitle) {
      setForm((prev) => ({
        ...prev,
        message: `I am interested in the "${jobTitle}" position.`,
      }));
    }
  }, [jobTitle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder: wire up to your email provider (Resend, EmailJS, etc.)
    // For now, simulate a submission delay
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const services = [
    "IT Staffing",
    "AI & Data Science",
    "Application Development",
    "Business Intelligence",
    "ERP Consulting",
    "Quality Assurance",
    "General Inquiry",
  ];

  return (
    <div className="bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm">
      {/* Toggle */}
      <div className="flex bg-slate-100 rounded-xl p-1 mb-8">
        <button
          onClick={() => setFormType("employer")}
          className={cn(
            "flex-1 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200",
            formType === "employer"
              ? "bg-white text-[#0D1B2A] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          I'm Hiring
        </button>
        <button
          onClick={() => setFormType("candidate")}
          className={cn(
            "flex-1 text-sm font-semibold py-2.5 rounded-lg transition-all duration-200",
            formType === "candidate"
              ? "bg-white text-[#0D1B2A] shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          )}
        >
          I'm Looking for Work
        </button>
      </div>

      {submitted ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 size={28} className="text-emerald-500" />
          </div>
          <h3 className="text-xl font-bold text-[#0D1B2A] mb-2">Message Received!</h3>
          <p className="text-slate-500">
            {formType === "employer"
              ? "Our team will be in touch within 1 business day with next steps."
              : "A recruiter will review your information and reach out about matching opportunities."}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="jane@company.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              />
            </div>
          </div>

          {formType === "employer" && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              />
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Service Area
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors bg-white"
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              {formType === "employer" ? "Tell us about your hiring need" : "Tell us about yourself"}{" "}
              <span className="text-red-400">*</span>
            </label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder={
                formType === "employer"
                  ? "Describe the role(s) you're looking to fill, your timeline, and any specific requirements..."
                  : "Describe your skills, experience, and the type of roles you're interested in..."
              }
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-[#0D1B2A] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-400 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-[#1768FF] hover:bg-[#0F55E0] disabled:bg-blue-300 text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-sm"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send size={16} />
                {formType === "employer" ? "Request Candidates" : "Submit Your Resume"}
              </>
            )}
          </button>

          <p className="text-xs text-slate-400 text-center">
            We typically respond within 1 business day. Your information is never shared without your consent.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
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
          <AnimatedSection>
            <span className="inline-block text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-4">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              Let's Get to Work
            </h1>
            <p className="text-xl text-slate-400 max-w-xl">
              Whether you're hiring or job seeking, we're ready to help. Reach out and hear back within 1 business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main contact section */}
      <section className="section-pad bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: form (takes more space) */}
            <div className="lg:col-span-3">
              <Suspense fallback={<div className="h-96 bg-white rounded-3xl animate-pulse" />}>
                <ContactForm />
              </Suspense>
            </div>

            {/* Right: contact info */}
            <div className="lg:col-span-2">
              <AnimatedSection direction="right" delay={100}>
                <div className="space-y-6">
                  {/* Office card */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-7">
                    <h3 className="text-lg font-bold text-[#0D1B2A] mb-5">Our Office</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <MapPin size={15} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0D1B2A]">Parsippany, NJ</p>
                          <p className="text-sm text-slate-500">90 E Halsey Rd, Suite 360<br />Parsippany, NJ 07054</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Phone size={15} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0D1B2A]">Phone</p>
                          <a href="tel:+12107443322" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                            (210) 744-3322
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <Mail size={15} className="text-blue-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0D1B2A]">Email</p>
                          <a href="mailto:info@mbitassociates.com" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                            info@mbitassociates.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Connect */}
                  <div className="bg-white border border-slate-100 rounded-2xl p-7">
                    <h3 className="text-lg font-bold text-[#0D1B2A] mb-5">Connect With Us</h3>
                    <a
                      href="https://www.linkedin.com/company/mbitassociates"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                    >
                      <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                      </div>
                      <span className="font-medium">LinkedIn</span>
                    </a>
                  </div>

                  {/* Response time */}
                  <div className="bg-[#0D1B2A] rounded-2xl p-7">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 animate-pulse" />
                      <p className="text-sm font-semibold text-white">Typically responds in under 24 hours</p>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      Our recruiters are active and ready to connect. For urgent staffing needs, call us directly.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
