import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find(
  (s) => s.slug === "golden-visa-assistance-support"
);

export const metadata = constructMetadata({
  title: "UAE Golden Visa Assistance & Support | Ask Mareena",
  description:
    "Professional guidance and end-to-end assistance for UAE Golden Visa applications across all eligible categories, helping individuals, investors, entrepreneurs, and families navigate the process smoothly.",
  path: "/services/golden-visa-assistance-support",
});

export default function GoldenVisaAssistanceSupportPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
