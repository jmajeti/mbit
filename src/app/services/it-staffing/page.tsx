import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { Users } from "lucide-react";

export const metadata: Metadata = {
  title: "IT Staffing",
  description:
    "Contract, contract-to-hire, and direct placement IT staffing. MB IT Associates delivers pre-vetted technology talent in 48 hours.",
};

export default function ITStaffingPage() {
  return (
    <ServicePageTemplate
      badge="IT Staffing"
      title="IT Staffing That Moves at the Speed of Business"
      subtitle="Contract, contract-to-hire, and direct placement — across all technology roles. Pre-vetted candidates delivered in 48 hours."
      icon={Users}
      iconColor="text-blue-400"
      iconBg="bg-blue-500"
      description="Finding great technology talent is harder than ever. MB IT Associates has spent 20+ years building deep candidate pipelines in every major technology discipline. Whether you need a contractor for a 3-month project or a permanent senior engineer, we deliver qualified candidates — not keyword-matched resumes."
      highlights={[
        "Pre-screened technical candidates ready to interview",
        "Nationwide talent network built over 20+ years",
        "Contract, contract-to-hire, and permanent placement",
        "90-day replacement guarantee on all direct hires",
        "Dedicated account manager for every client",
        "Fast turnaround — shortlist in 48 hours",
      ]}
      roles={[
        "Software Engineers (Full-Stack, Frontend, Backend)",
        "Cloud Architects & DevOps Engineers",
        "Data Engineers & Database Administrators",
        "Project Managers & Scrum Masters",
        "IT Support & Systems Administrators",
        "Network Engineers & Security Analysts",
        "Technical Leads & Engineering Managers",
        "CTO / VP Engineering (Executive Search)",
      ]}
      process={[
        {
          step: "01",
          title: "Discovery",
          description: "We learn your technical requirements, team culture, timeline, and hiring budget in a 30-min intake call.",
        },
        {
          step: "02",
          title: "Sourcing",
          description: "We tap our active pipeline and targeted outreach to identify and screen matching candidates within 24 hours.",
        },
        {
          step: "03",
          title: "Shortlist",
          description: "You receive 3–5 pre-vetted, interview-ready candidates with our recruiter notes and technical assessments.",
        },
        {
          step: "04",
          title: "Placement",
          description: "We manage offers, onboarding, and follow-up support to ensure every placement sticks.",
        },
      ]}
      technologies={[
        "JavaScript", "TypeScript", "Python", "Java", "C#", ".NET",
        "React", "Angular", "Vue.js", "Node.js",
        "AWS", "Azure", "GCP", "Kubernetes", "Docker",
        "PostgreSQL", "MySQL", "MongoDB", "Redis",
        "Terraform", "CI/CD", "Jenkins", "GitHub Actions",
      ]}
      relatedServices={[
        { title: "AI & Data Science", href: "/services/ai-data-science" },
        { title: "Application Development", href: "/services/application-development" },
        { title: "Quality Assurance", href: "/services/quality-assurance" },
      ]}
    />
  );
}
