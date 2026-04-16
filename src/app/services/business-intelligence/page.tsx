import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Intelligence Staffing",
  description:
    "BI staffing and consulting. MB IT Associates places data analysts, BI developers, and visualization specialists who turn data into decisions.",
};

export default function BusinessIntelligencePage() {
  return (
    <ServicePageTemplate
      badge="Business Intelligence"
      title="Turn Data Into Strategic Advantage"
      subtitle="BI developers, data analysts, and visualization experts who don't just build dashboards — they build understanding."
      icon={BarChart3}
      iconColor="text-orange-400"
      iconBg="bg-orange-500"
      description="Business Intelligence is only valuable when it drives decisions. MB IT Associates places BI professionals who combine deep technical skills with business acumen — they understand what KPIs matter, how to model data for performance, and how to communicate insights to non-technical stakeholders."
      highlights={[
        "BI developers and analysts with business domain knowledge",
        "Platform expertise across Tableau, Power BI, Looker, and more",
        "Data modeling specialists (star schema, dimensional modeling)",
        "Experience with cloud data warehouses (Snowflake, BigQuery, Redshift)",
        "Both consulting and full-time placement available",
        "QA-minded candidates who validate before they present",
      ]}
      roles={[
        "Business Intelligence Developers",
        "Data Analysts (Business / Financial / Marketing)",
        "BI Architects & Technical Leads",
        "Tableau / Power BI Specialists",
        "Looker / Qlik Developers",
        "Data Warehouse Engineers",
        "Analytics Engineers (dbt)",
        "Reporting & Insights Managers",
      ]}
      process={[
        {
          step: "01",
          title: "Platform Alignment",
          description: "We identify your BI stack, data sources, and reporting goals before searching.",
        },
        {
          step: "02",
          title: "Portfolio Review",
          description: "BI candidates are assessed on dashboard quality, data model design, and storytelling ability.",
        },
        {
          step: "03",
          title: "Business Fit Check",
          description: "We verify candidates can communicate insights clearly to both technical and executive audiences.",
        },
        {
          step: "04",
          title: "Placement",
          description: "From contract analysts to permanent BI leads — we manage the full placement lifecycle.",
        },
      ]}
      technologies={[
        "Tableau", "Power BI", "Looker", "Qlik Sense", "Metabase",
        "Snowflake", "BigQuery", "Redshift", "Azure Synapse",
        "dbt", "Airflow", "Fivetran", "Stitch",
        "SQL", "Python", "R", "DAX", "MDX",
        "Excel (Advanced)", "Google Sheets",
        "SSRS", "SSAS", "SSIS",
      ]}
      relatedServices={[
        { title: "AI & Data Science", href: "/services/ai-data-science" },
        { title: "ERP Consulting", href: "/services/erp-consulting" },
        { title: "IT Staffing", href: "/services/it-staffing" },
      ]}
    />
  );
}
