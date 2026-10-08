import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find(
  (s) => s.slug === "corporate-structuring-company-formation"
);

export const metadata = constructMetadata({
  title:
    "Corporate Structuring & Company Formation in Dubai & UAE | Ask Mareena",
  description:
    "Guidance on selecting the right structure and jurisdiction, setting up UAE mainland, free zone and offshore entities, and navigating the legal and procedural requirements of establishment.",
  path: "/services/corporate-structuring-company-formation",
});

export default function CorporateStructuringCompanyFormationPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
