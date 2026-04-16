import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyMBIT from "@/components/sections/WhyMBIT";
import IndustriesSection from "@/components/sections/IndustriesSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "MB IT Associates | IT Staffing & Technology Consulting",
  description:
    "MB IT Associates — niche IT staffing and technology consulting. AI, Data Science, ERP, BI, App Development, and QA. 20+ years. Parsippany, NJ.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesGrid />
      <WhyMBIT />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
