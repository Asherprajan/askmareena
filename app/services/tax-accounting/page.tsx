import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "tax-accounting");

export const metadata = constructMetadata({
  title: "Corporate Tax, VAT Registration & Bookkeeping UAE | Ask Mareena",
  description:
    "Federal Tax Authority (FTA) Corporate Tax registration, VAT filings, bookkeeping, and Tax Residency Certificates for UAE businesses and individuals.",
  path: "/services/tax-accounting",
});

export default function TaxAccountingPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
