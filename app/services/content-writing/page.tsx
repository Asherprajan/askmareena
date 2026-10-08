import React from "react";
import { notFound } from "next/navigation";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { servicesData } from "@/content/services";
import { constructMetadata } from "@/lib/seo/metadata";

const service = servicesData.find((s) => s.slug === "content-writing");

export const metadata = constructMetadata({
  title: "Professional Corporate Content Writing | Ask Mareena",
  description:
    "Professional business content writing for company profiles, websites, presentations, proposals and other corporate communication, with clear and engaging messaging tailored to your brand.",
  path: "/services/content-writing",
});

export default function ContentWritingPage() {
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
