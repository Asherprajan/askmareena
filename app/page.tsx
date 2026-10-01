import React from "react";
import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import ServicesOverview from "@/components/sections/ServicesOverview";
import ApproachValue from "@/components/sections/ApproachValue";
import ProcessSteps from "@/components/sections/ProcessSteps";
import HomeFAQPreview from "@/components/sections/HomeFAQPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <ServicesOverview />
      <ApproachValue />
      <ProcessSteps />
      <HomeFAQPreview />
      <CTASection />
    </>
  );
}
