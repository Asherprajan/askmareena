import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "corporate-structuring");

export const metadata = constructMetadata({
  title: "Corporate Structuring & DIFC/ADGM Foundations | Ask Mareena",
  description:
    "Bespoke holding structures, family office coordination, and DIFC/ADGM Foundations designed for succession planning, governance, and asset protection in the UAE.",
  path: "/services/corporate-structuring",
});

export default function CorporateStructuringPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
