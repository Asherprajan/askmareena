import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "ongoing-corporate-services");

export const metadata = constructMetadata({
  title: "UAE Trade License Renewals, Amendments & Liquidation | Ask Mareena",
  description:
    "Reliable corporate maintenance: annual trade license renewals, corporate amendments, share transfers, Ejari updates, and formal company liquidation.",
  path: "/services/ongoing-corporate-services",
});

export default function OngoingCorporateServicesPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
