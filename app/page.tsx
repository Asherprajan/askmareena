import React from "react";
import Hero from "@/components/sections/Hero";
import PersonalInsightCards from "@/components/sections/PersonalInsightCards";
import ConsultantStats from "@/components/sections/ConsultantStats";
import PersonalConsultationSection from "@/components/sections/PersonalConsultationSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PersonalInsightCards />
      <ConsultantStats />
      <PersonalConsultationSection />
    </>
  );
}
