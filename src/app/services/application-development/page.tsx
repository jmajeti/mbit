import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Application Development Staffing",
  description:
    "Application development staffing for web, mobile, and cloud. MB IT Associates places full-stack engineers, cloud architects, and DevOps specialists.",
};

export default function AppDevPage() {
  return (
    <ServicePageTemplate
      badge="Application Development"
      title="Build Faster With the Right Development Talent"
      subtitle="Full-stack web, mobile, and cloud engineering talent — from individual contributors to entire development teams."
      icon={Code2}
      iconColor="text-emerald-400"
      iconBg="bg-emerald-500"
      description="Modern application development requires more than coders — it needs architects who think in systems, engineers who write testable code, and DevOps professionals who keep deployments reliable. MB IT Associates has spent years building relationships with top-tier application developers across every major stack and platform."
      highlights={[
        "Full-stack, frontend, backend, and mobile engineers",
        "Cloud-native architects and infrastructure engineers",
        "DevOps, CI/CD, and platform engineering specialists",
        "Technical screening includes live coding assessments",
        "Team augmentation for both short and long-term projects",
        "Startup to enterprise — we adapt to your environment",
      ]}
      roles={[
        "Full-Stack Engineers",
        "Frontend Developers (React, Angular, Vue)",
        "Backend Engineers (Node, Java, Python, .NET)",
        "iOS & Android Mobile Developers",
        "Cloud Architects (AWS, Azure, GCP)",
        "DevOps & Platform Engineers",
        "Site Reliability Engineers (SRE)",
        "Engineering Managers & Tech Leads",
      ]}
      process={[
        {
          step: "01",
          title: "Stack Assessment",
          description: "We understand your architecture, frameworks, deployment environment, and engineering culture before sourcing.",
        },
        {
          step: "02",
          title: "Code-Level Screening",
          description: "Our technical screens go beyond resume review — we assess code quality, system design thinking, and debugging skills.",
        },
        {
          step: "03",
          title: "Shortlist Delivery",
          description: "Receive 3–5 curated candidates with technical assessment summaries and GitHub/portfolio links.",
        },
        {
          step: "04",
          title: "Onboarding Support",
          description: "We stay engaged through the first 90 days to ensure seamless team integration and role success.",
        },
      ]}
      technologies={[
        "React", "Next.js", "Angular", "Vue.js", "TypeScript",
        "Node.js", "Python", "Java", "Go", "Rust", "C#", ".NET",
        "React Native", "Flutter", "Swift", "Kotlin",
        "AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker",
        "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs",
        "GitHub Actions", "Jenkins", "CircleCI",
      ]}
      relatedServices={[
        { title: "IT Staffing", href: "/services/it-staffing" },
        { title: "Quality Assurance", href: "/services/quality-assurance" },
        { title: "AI & Data Science", href: "/services/ai-data-science" },
      ]}
    />
  );
}
