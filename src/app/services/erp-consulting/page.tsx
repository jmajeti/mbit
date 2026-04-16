import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { Database } from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Consulting & Staffing",
  description:
    "ERP implementation, migration, and support staffing. MB IT Associates places SAP, Oracle, and Microsoft Dynamics consultants and specialists.",
};

export default function ERPConsultingPage() {
  return (
    <ServicePageTemplate
      badge="ERP Consulting"
      title="ERP Talent for Every Phase of Your Journey"
      subtitle="Implementation, migration, upgrade, and support staffing across SAP, Oracle, Microsoft Dynamics, and more."
      icon={Database}
      iconColor="text-cyan-400"
      iconBg="bg-cyan-500"
      description="ERP implementations are high-stakes, complex, and unforgiving of mismatched talent. MB IT Associates has spent years placing ERP professionals who have the certifications, hands-on experience, and communication skills to successfully deliver. Whether you're going live on SAP S/4HANA, upgrading Oracle, or rolling out Dynamics 365, we have the talent."
      highlights={[
        "Certified SAP, Oracle, and Microsoft Dynamics consultants",
        "Full project lifecycle: design, build, test, go-live, support",
        "Functional and technical ERP expertise",
        "Project managers with ERP implementation track records",
        "Change management and training professionals",
        "Contract consultants for project bursts and permanent hires",
      ]}
      roles={[
        "SAP Functional Consultants (FI/CO, MM, SD, PP, HR)",
        "SAP Technical Consultants (ABAP, Basis, Security)",
        "SAP S/4HANA Migration Specialists",
        "Oracle ERP Cloud Consultants",
        "Oracle Fusion Analysts",
        "Microsoft Dynamics 365 Consultants",
        "ERP Project Managers & Program Directors",
        "Change Management & Training Specialists",
      ]}
      process={[
        {
          step: "01",
          title: "Project Scoping",
          description: "We understand your ERP platform, implementation phase, module focus, and timeline to target the right specialists.",
        },
        {
          step: "02",
          title: "Certification Verification",
          description: "All ERP candidates are verified for certifications, real project experience, and go-live track records.",
        },
        {
          step: "03",
          title: "Skills Alignment",
          description: "We map candidate experience to your specific module set, industry, and implementation methodology (Agile, ASAP, etc.).",
        },
        {
          step: "04",
          title: "Flexible Deployment",
          description: "Place contractors for specific project phases or hire permanent ERP professionals for long-term support.",
        },
      ]}
      technologies={[
        "SAP S/4HANA", "SAP ECC", "SAP BW/4HANA", "SAP Fiori", "ABAP",
        "Oracle ERP Cloud", "Oracle Fusion", "Oracle E-Business Suite",
        "Microsoft Dynamics 365", "Microsoft Dynamics AX / NAV",
        "Workday", "NetSuite", "ServiceNow",
        "JIRA", "Confluence", "Visio",
        "SQL", "PL/SQL", "Python (integration)",
      ]}
      relatedServices={[
        { title: "Business Intelligence", href: "/services/business-intelligence" },
        { title: "Application Development", href: "/services/application-development" },
        { title: "IT Staffing", href: "/services/it-staffing" },
      ]}
    />
  );
}
