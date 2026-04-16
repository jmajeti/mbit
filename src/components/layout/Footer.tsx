import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const services = [
  { label: "IT Staffing", href: "/services/it-staffing" },
  { label: "AI & Data Science", href: "/services/ai-data-science" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "Business Intelligence", href: "/services/business-intelligence" },
  { label: "ERP Consulting", href: "/services/erp-consulting" },
  { label: "Quality Assurance", href: "/services/quality-assurance" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Jobs Board", href: "/jobs" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-sm">MB</span>
              </div>
              <span className="font-bold text-lg text-white">IT Associates</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your niche partner for AI, Data, and Enterprise Technology talent.
              20+ years of precision placements across the US.
            </p>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/mbitassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1768FF] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* X / Twitter */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1768FF] flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Facebook */}
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1768FF] flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#00C2FF] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-slate-400 leading-relaxed">
                  90 E Halsey Rd, Suite 360<br />
                  Parsippany, NJ 07054
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#00C2FF] flex-shrink-0" />
                <a href="tel:+12107443322" className="text-sm text-slate-400 hover:text-white transition-colors">
                  (210) 744-3322
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#00C2FF] flex-shrink-0" />
                <a href="mailto:info@mbitassociates.com" className="text-sm text-slate-400 hover:text-white transition-colors">
                  info@mbitassociates.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} MB IT Associates LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
