import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Credibility() {
  return (
    <section className="py-20 sm:py-28 bg-[#F3EFEA]/60 border-t border-b border-[#E8E4DC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <SectionHeading
              eyebrow="The Perspective"
              title="Procedural clarity meets genuine human understanding."
              description="Setting up in the UAE is not just a regulatory filing. It is a milestone that requires both legal accuracy and personal reassurance."
            />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E8E4DC] shadow-xs space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B4F]">
                Background
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#14171A]">
                Journalism & Rigor
              </h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                Journalism demands thorough investigation, factual precision, and clear communication. Mareena cuts through ambiguous bureaucratics to give you plain, direct answers.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E8E4DC] shadow-xs space-y-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B4F]">
                Empathy
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#14171A]">
                Social Work & Care
              </h3>
              <p className="text-sm text-[#525866] leading-relaxed">
                A background in social work brings authentic empathy to the entrepreneurial journey. Starting a business can be stressful; Mareena listens and treats your goals with personal care.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-sm border border-[#E8E4DC] shadow-xs space-y-3 sm:col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#9E7B4F]">
                    Local Immersion
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#14171A] mt-1">
                    12+ Years in the United Arab Emirates
                  </h3>
                  <p className="text-sm text-[#525866] leading-relaxed mt-2 max-w-xl">
                    More than a decade of observing changes across Dubai Department of Economy and Tourism (DET), Free Zones, Federal Tax Authority regulations, and immigration policies provides deep, practical context for your setup.
                  </p>
                </div>
                <div className="shrink-0 text-left sm:text-right border-t sm:border-t-0 sm:border-l border-[#E8E4DC] pt-3 sm:pt-0 sm:pl-6">
                  <div className="font-serif text-3xl font-bold text-[#14171A]">
                    12+
                  </div>
                  <div className="text-xs text-[#7A8291]">Years of UAE Living & Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
