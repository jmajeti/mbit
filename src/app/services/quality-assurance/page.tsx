import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { TestTube } from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance Staffing",
  description:
    "QA staffing for manual and automated testing. MB IT Associates places QA engineers and SDET professionals who ensure software quality at every stage.",
};

export default function QualityAssurancePage() {
  return (
    <ServicePageTemplate
      badge="Quality Assurance"
      title="QA Talent That Ships With Confidence"
      subtitle="Manual testers, automation engineers, and performance QA specialists — ensuring your software is production-ready before users see it."
      icon={TestTube}
      iconColor="text-rose-400"
      iconBg="bg-rose-500"
      description="Quality assurance is often the last thing teams invest in and the first thing they regret skipping. MB IT Associates places QA professionals who take pride in breaking things before customers do. From manual exploratory testers to SDET engineers building test automation frameworks — we match the right QA talent to every project stage."
      highlights={[
        "Manual and automated QA engineering talent",
        "SDET engineers who code production-quality test frameworks",
        "Performance, load, and security testing specialists",
        "API testing and integration testing expertise",
        "Agile QA professionals who fit sprint cycles",
        "Contract testers for release cycles or permanent QA hires",
      ]}
      roles={[
        "Manual QA Engineers & Testers",
        "Automation Engineers (SDET)",
        "Performance & Load Test Engineers",
        "API Testing Specialists",
        "Security / Penetration Testers",
        "QA Leads & Test Managers",
        "Mobile App QA Testers",
        "Accessibility Testing Specialists",
      ]}
      process={[
        {
          step: "01",
          title: "Stack Discovery",
          description: "We understand your tech stack, release cadence, existing test coverage, and team structure.",
        },
        {
          step: "02",
          title: "Technical Assessment",
          description: "QA candidates are screened on test case writing, automation frameworks, and defect reporting quality.",
        },
        {
          step: "03",
          title: "Team Fit Evaluation",
          description: "We assess communication skills, Agile experience, and collaboration style for your team's workflow.",
        },
        {
          step: "04",
          title: "Placement",
          description: "From single sprint contractors to full-time QA leads — we support every engagement model.",
        },
      ]}
      technologies={[
        "Selenium", "Playwright", "Cypress", "Appium",
        "Jest", "JUnit", "TestNG", "PyTest",
        "Postman", "REST Assured", "SoapUI",
        "JMeter", "Gatling", "k6",
        "TestRail", "Zephyr", "JIRA", "qTest",
        "Java", "Python", "JavaScript", "C#",
        "BDD (Cucumber, Gherkin)", "CI/CD pipelines",
      ]}
      relatedServices={[
        { title: "Application Development", href: "/services/application-development" },
        { title: "IT Staffing", href: "/services/it-staffing" },
        { title: "AI & Data Science", href: "/services/ai-data-science" },
      ]}
    />
  );
}
