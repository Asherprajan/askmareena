import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "feasibility-services");

export const metadata = constructMetadata({
  title: "Feasibility Services in UAE | Ask Mareena",
  description:
    "Practical feasibility support to assess business ideas, market potential, operational requirements and suitable setup options before moving forward with a UAE business venture.",
  path: "/services/feasibility-services",
});

export default function FeasibilityServicesPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
