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
    <section className="py-20 sm:py-32 bg-[#080A0C] border-t border-b border-white/10">
      <Container>
        <div className="max-w-3xl mb-16">
          <SectionHeading
            eyebrow="The Framework"
            title="A structured, predictable path to UAE establishment."
            description="Four intentional stages designed to replace procedural guesswork with disciplined execution."
          />
        </div>

        {/* Desktop connecting light track */}
        <div className="relative">
          <div
            className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-y-12 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className="relative p-6 sm:p-7 glass-surface-interactive rounded-xs space-y-5 flex flex-col justify-between group"
              >
                {/* Subtle top edge highlight line */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-colors" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3.5">
                    <span className="font-serif text-3xl font-light text-white/50 group-hover:text-white/80 transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[11px] uppercase tracking-wider font-medium text-[#C5CCD6] glass-badge px-3 py-1 rounded-full">
                      {step.phase}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-normal text-white group-hover:text-[#EAE6DF] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9EA6B0] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-3.5 text-[11px] text-[#8E99A8] italic border-t border-white/10 flex items-center justify-between">
                  <span>Phase {idx + 1} of 4</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#EAE6DF] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 p-5 sm:p-6 glass-surface rounded-xs text-center max-w-2xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          <p className="text-xs text-[#9EA6B0] leading-relaxed relative z-10">
            <span className="font-medium text-white">Please note:</span> Processing timeframes and requirements are determined by competent UAE government authorities and vary by activity, jurisdiction, and clearances.
          </p>
        </div>
      </Container>
    </section>
  );
}
