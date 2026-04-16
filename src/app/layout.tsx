import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "MB IT Associates | IT Staffing & Technology Consulting",
    template: "%s | MB IT Associates",
  },
  description:
    "MB IT Associates — your niche partner for AI, Data Science, ERP, and IT staffing. 20+ years of precision placements across the US. Parsippany, NJ.",
  keywords: [
    "IT staffing",
    "technology recruiting",
    "AI data science staffing",
    "ERP consulting",
    "application development",
    "business intelligence",
    "quality assurance",
    "New Jersey IT staffing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.mbitassociates.com",
    siteName: "MB IT Associates",
    title: "MB IT Associates | IT Staffing & Technology Consulting",
    description:
      "Niche partner for AI, Data Science, ERP, and IT staffing. 20+ years of precision placements.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
