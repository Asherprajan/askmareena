import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "compliance");

export const metadata = constructMetadata({
  title: "AML/CFT Compliance, goAML & Internal Audit UAE | Ask Mareena",
  description:
    "Anti-Money Laundering frameworks, goAML portal registration with the UAE FIU, transfer pricing alignment, and ongoing corporate compliance monitoring.",
  path: "/services/compliance",
});

export default function CompliancePage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
