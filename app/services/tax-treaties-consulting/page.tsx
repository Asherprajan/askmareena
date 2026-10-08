import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "tax-treaties-consulting");

export const metadata = constructMetadata({
  title:
    "Business Consulting with the Country's Tax Treaties | Ask Mareena",
  description:
    "Business consulting with consideration of the relevant country’s tax treaties, helping clients understand how international structures and cross-border business arrangements may interact with applicable treaty frameworks.",
  path: "/services/tax-treaties-consulting",
});

export default function TaxTreatiesConsultingPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
