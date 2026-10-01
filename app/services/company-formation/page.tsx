import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "company-formation");

export const metadata = constructMetadata({
  title: "Company Formation in Dubai & UAE Free Zones | Ask Mareena",
  description:
    "Strategic setup across Dubai Mainland, UAE Free Zones, and Offshore jurisdictions. Licensing, activity selection, shareholder coordination, and establishment support.",
  path: "/services/company-formation",
});

export default function CompanyFormationPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
