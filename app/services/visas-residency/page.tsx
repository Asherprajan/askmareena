import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "visas-residency");

export const metadata = constructMetadata({
  title: "UAE Golden Visa, Investor & Employment Visas | Ask Mareena",
  description:
    "10-Year Golden Visa assessment, Investor and Partner visas, and corporate employment visa processing with establishment card coordination.",
  path: "/services/visas-residency",
});

export default function VisasResidencyPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
