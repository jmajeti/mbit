/**
 * Jobs Board Data
 * ---------------
 * To add, edit, or remove a job posting, update this array.
 * No CMS or database required — just edit this file and redeploy.
 *
 * Fields:
 *  - id:          Unique slug (used in URL, no spaces)
 *  - title:       Job title
 *  - department:  Service area (maps to /services/*)
 *  - type:        "Contract" | "Contract-to-Hire" | "Direct Hire"
 *  - location:    City, State or "Remote" or "Hybrid – City, State"
 *  - posted:      ISO date string (YYYY-MM-DD)
 *  - description: Short paragraph describing the role
 *  - requirements: Array of requirement strings
 *  - nice_to_have: Array of nice-to-have strings (optional)
 */

export interface Job {
  id: string;
  title: string;
  department: string;
  type: "Contract" | "Contract-to-Hire" | "Direct Hire";
  location: string;
  posted: string;
  description: string;
  requirements: string[];
  nice_to_have?: string[];
}

export const jobs: Job[] = [
  {
    id: "senior-ml-engineer-remote",
    title: "Senior Machine Learning Engineer",
    department: "AI & Data Science",
    type: "Contract",
    location: "Remote (US)",
    posted: "2026-04-10",
    description:
      "We are placing a Senior ML Engineer for a fintech client building real-time fraud detection models. You'll design, train, and deploy production ML systems using Python and AWS SageMaker. Strong MLOps experience required.",
    requirements: [
      "5+ years of machine learning engineering experience",
      "Proficiency in Python, TensorFlow or PyTorch",
      "Experience with AWS SageMaker or similar MLOps platforms",
      "Strong understanding of feature engineering and model evaluation",
      "Experience deploying models to production at scale",
    ],
    nice_to_have: [
      "Experience with real-time fraud detection systems",
      "Familiarity with Kafka or streaming pipelines",
      "Prior fintech or financial services background",
    ],
  },
  {
    id: "sap-s4hana-functional-consultant",
    title: "SAP S/4HANA Functional Consultant (FI/CO)",
    department: "ERP Consulting",
    type: "Contract",
    location: "Hybrid – Parsippany, NJ",
    posted: "2026-04-08",
    description:
      "Our enterprise client is mid-way through an SAP S/4HANA migration and needs a seasoned FI/CO functional consultant to support configuration, testing, and go-live activities. 12-month contract with strong likelihood of extension.",
    requirements: [
      "8+ years of SAP FI/CO implementation experience",
      "Minimum 2 full-cycle SAP S/4HANA implementations",
      "Experience with the Universal Journal and new G/L in S/4HANA",
      "Strong knowledge of integration points between FI and other modules (MM, SD)",
      "SAP certification preferred",
    ],
    nice_to_have: [
      "Experience with SAP Activate methodology",
      "Manufacturing industry background",
      "S/4HANA Cloud (Private Edition) experience",
    ],
  },
  {
    id: "tableau-developer-data-analyst",
    title: "Tableau Developer / Data Analyst",
    department: "Business Intelligence",
    type: "Contract-to-Hire",
    location: "Remote (US)",
    posted: "2026-04-05",
    description:
      "Retail client seeking a Tableau Developer to build self-service analytics dashboards for their merchandising and supply chain teams. You'll work closely with business stakeholders to turn data warehouse queries into actionable visualizations.",
    requirements: [
      "3+ years of Tableau development experience",
      "Strong SQL skills (Snowflake preferred)",
      "Experience building row-level security and published data sources",
      "Ability to translate business questions into data visualizations",
      "Experience working directly with non-technical stakeholders",
    ],
    nice_to_have: [
      "Tableau Server / Tableau Cloud administration",
      "dbt or data modeling experience",
      "Retail or supply chain domain knowledge",
    ],
  },
  {
    id: "full-stack-engineer-react-node",
    title: "Full-Stack Engineer (React / Node.js)",
    department: "Application Development",
    type: "Direct Hire",
    location: "Remote (US)",
    posted: "2026-04-03",
    description:
      "Growing healthcare SaaS company seeking a Full-Stack Engineer to join their product team. You'll build new features across the React frontend and Node.js backend, contributing to a platform used by thousands of healthcare providers nationwide.",
    requirements: [
      "4+ years of full-stack development experience",
      "Strong proficiency in React and TypeScript",
      "Node.js and REST API development experience",
      "PostgreSQL or similar relational database experience",
      "Familiarity with CI/CD pipelines and Git workflows",
    ],
    nice_to_have: [
      "Healthcare or HIPAA experience",
      "AWS or cloud deployment experience",
      "GraphQL experience",
    ],
  },
  {
    id: "qa-automation-engineer",
    title: "QA Automation Engineer (Playwright)",
    department: "Quality Assurance",
    type: "Contract",
    location: "Remote (US)",
    posted: "2026-04-01",
    description:
      "E-commerce client seeking a QA Automation Engineer to build and maintain their end-to-end test automation suite using Playwright. You'll work alongside the engineering team in an Agile environment with 2-week sprints.",
    requirements: [
      "3+ years of test automation experience",
      "Hands-on experience with Playwright or Cypress",
      "Proficiency in JavaScript or TypeScript for test scripting",
      "Experience integrating tests into CI/CD pipelines",
      "Strong understanding of testing best practices and design patterns",
    ],
    nice_to_have: [
      "API testing experience (Postman, REST Assured)",
      "Performance testing experience (k6 or JMeter)",
      "E-commerce platform experience",
    ],
  },
  {
    id: "data-engineer-aws",
    title: "Data Engineer (AWS / Spark)",
    department: "AI & Data Science",
    type: "Contract-to-Hire",
    location: "Hybrid – New York, NY",
    posted: "2026-03-28",
    description:
      "Financial services client is building a modern data lakehouse architecture and needs a Data Engineer to design and implement ETL pipelines using AWS Glue, Apache Spark, and Snowflake. Strong opportunity for conversion to permanent role.",
    requirements: [
      "4+ years of data engineering experience",
      "Strong Python and SQL skills",
      "Apache Spark experience (PySpark preferred)",
      "AWS services: S3, Glue, EMR, Lambda",
      "Experience with Snowflake or Redshift",
    ],
    nice_to_have: [
      "dbt experience for data transformation",
      "Airflow or Step Functions for orchestration",
      "Financial services or capital markets background",
    ],
  },
];

export function getJobById(id: string): Job | undefined {
  return jobs.find((j) => j.id === id);
}

export function getJobsByDepartment(department: string): Job[] {
  return jobs.filter((j) => j.department === department);
}
