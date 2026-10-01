import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Credibility() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0F13] border-t border-b border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="The Perspective"
              title="Procedural clarity meets genuine human understanding."
              description="Setting up in the UAE is not just a regulatory filing. It is a milestone that requires legal accuracy, clear communication, and personal reassurance."
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#101419] p-6 sm:p-8 rounded-sm border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest font-medium text-[#9EA6B0]">
                Background
              </span>
              <h3 className="font-serif text-xl font-normal text-white">
                Journalism & Rigor
              </h3>
              <p className="text-sm text-[#A3ABB5] leading-relaxed">
                Journalism demands thorough investigation, factual precision, and clear communication. Mareena cuts through ambiguous bureaucratics to give you plain, direct answers.
              </p>
            </div>

            <div className="bg-[#101419] p-6 sm:p-8 rounded-sm border border-white/10 space-y-3">
              <span className="text-xs uppercase tracking-widest font-medium text-[#9EA6B0]">
                Empathy
              </span>
              <h3 className="font-serif text-xl font-normal text-white">
                Social Work & Care
              </h3>
              <p className="text-sm text-[#A3ABB5] leading-relaxed">
                A background in social work brings authentic empathy to the entrepreneurial journey. Starting a business can be stressful; Mareena listens and treats your goals with personal care.
              </p>
            </div>

            <div className="bg-[#101419] p-6 sm:p-8 rounded-sm border border-white/10 space-y-3 sm:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-medium text-[#9EA6B0]">
                    Local Immersion
                  </span>
                  <h3 className="font-serif text-xl font-normal text-white mt-1">
                    12+ Years in the United Arab Emirates
                  </h3>
                  <p className="text-sm text-[#A3ABB5] leading-relaxed mt-2 max-w-xl">
                    More than a decade of observing changes across Dubai Department of Economy and Tourism (DET), Free Zones, Federal Tax Authority regulations, and immigration policies provides deep, practical context for your setup.
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-white/10 pt-3 sm:pt-0 sm:pl-6">
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-white">
                    12+
                  </div>
                  <div className="text-xs text-[#8E99A8]">Years in the UAE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
