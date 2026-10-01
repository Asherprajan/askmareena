import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    phase: "Understand",
    title: "Discovery & Activity Assessment",
    description:
      "We begin by reviewing your commercial model, intended activities, target market, and shareholder configuration to establish your exact jurisdiction requirements.",
  },
  {
    number: "02",
    phase: "Structure",
    title: "Jurisdiction & Corporate Blueprint",
    description:
      "Comparing Dubai Mainland, premier Free Zones, or Offshore holding vehicles. Designing an ownership and governance structure tailored for tax efficiency and asset safety.",
  },
  {
    number: "03",
    phase: "Establish",
    title: "Licensing & Authority Coordination",
    description:
      "Trade name approvals, constitutional drafting (MOA/Bylaws), government liaising, initial approvals, and official trade license issuance with establishment card registration.",
  },
  {
    number: "04",
    phase: "Support",
    title: "Residency, Tax & Continuity",
    description:
      "Coordinating investor/employment visas, Emirates ID biometrics, Corporate Tax registration, and ongoing annual corporate maintenance to safeguard good standing.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-20 sm:py-32 bg-[#F3EFEA]/40 border-t border-b border-[#E8E4DC]">
      <Container>
        <div className="max-w-3xl mb-16">
          <SectionHeading
            eyebrow="The Framework"
            title="A structured, predictable path to UAE establishment."
            description="Four intentional stages designed to replace procedural guesswork with disciplined execution."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="relative p-6 sm:p-7 bg-white rounded-sm border border-[#E8E4DC] shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#E8E4DC]/60 pb-3">
                  <span className="font-serif text-3xl font-light text-[#B8976C]">
                    {step.number}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#9E7B4F] bg-[#F8F4EE] px-2.5 py-0.5 rounded-full">
                    {step.phase}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#14171A] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 text-[11px] text-[#7A8291] italic border-t border-[#E8E4DC]/40">
                Phase {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 sm:p-5 bg-white rounded-sm border border-[#E8E4DC] text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#7A8291] leading-relaxed">
            <span className="font-semibold text-[#14171A]">Please note:</span> Processing timeframes and requirements are determined by competent UAE government authorities and vary by activity, jurisdiction, and clearances.
          </p>
        </div>
      </Container>
    </section>
  );
}
