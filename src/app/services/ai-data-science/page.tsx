import type { Metadata } from "next";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { Brain } from "lucide-react";

export const metadata: Metadata = {
  title: "AI & Data Science Staffing",
  description:
    "Specialized AI and Data Science recruiting. MB IT Associates places ML engineers, data scientists, and analytics professionals nationwide.",
};

export default function AiDataSciencePage() {
  return (
    <ServicePageTemplate
      badge="AI & Data Science"
      title="AI & Data Science Talent That Drives Real Results"
      subtitle="Specialized recruiting for machine learning, data science, and AI engineering roles. We know the difference between a data analyst and a data scientist."
      icon={Brain}
      iconColor="text-purple-400"
      iconBg="bg-purple-500"
      description="The demand for AI and data talent has exploded — but most staffing firms can't tell a data analyst from an ML engineer. At MB IT Associates, our recruiters specialize exclusively in the AI and data space. We understand model deployment pipelines, the difference between MLE and research roles, and what makes a great data scientist for your specific stack."
      highlights={[
        "Recruiters who understand ML frameworks, not just job titles",
        "Access to passive candidates in the AI/ML community",
        "Technical screening for coding ability and model reasoning",
        "Experience placing at both startups and Fortune 500s",
        "Deep network across data engineering and MLOps roles",
        "Contract, contract-to-hire, and permanent placements",
      ]}
      roles={[
        "Data Scientists (ML, Statistical, Research)",
        "Machine Learning Engineers",
        "MLOps / AI Platform Engineers",
        "Data Engineers & Pipeline Architects",
        "NLP / Computer Vision Specialists",
        "AI Product Managers",
        "Data Analysts & BI Developers",
        "Chief Data Officers (CDO)",
      ]}
      process={[
        {
          step: "01",
          title: "Role Definition",
          description: "We dig into what you actually need — model type, deployment stack, team structure, and research vs. production focus.",
        },
        {
          step: "02",
          title: "Technical Screening",
          description: "Candidates are screened for ML fundamentals, coding skills, and domain-specific expertise — not just resume keywords.",
        },
        {
          step: "03",
          title: "Shortlist",
          description: "You get 3–5 qualified candidates with our technical notes, GitHub profiles reviewed, and interview questions suggested.",
        },
        {
          step: "04",
          title: "Placement & Follow-Up",
          description: "We stay engaged post-hire to ensure candidate success and long-term fit on your AI team.",
        },
      ]}
      technologies={[
        "Python", "R", "Scala", "Julia",
        "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost",
        "Spark", "Hadoop", "Kafka", "Airflow", "dbt",
        "SQL", "BigQuery", "Snowflake", "Databricks",
        "AWS SageMaker", "Azure ML", "GCP Vertex AI",
        "Hugging Face", "LangChain", "OpenAI API",
        "MLflow", "Kubeflow", "Docker", "Kubernetes",
      ]}
      relatedServices={[
        { title: "Business Intelligence", href: "/services/business-intelligence" },
        { title: "IT Staffing", href: "/services/it-staffing" },
        { title: "ERP Consulting", href: "/services/erp-consulting" },
      ]}
    />
  );
}
