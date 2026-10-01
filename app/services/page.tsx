import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo/metadata";
import { servicesData } from "@/content/services";

export const metadata = constructMetadata({
  title: "Services | UAE Company Formation, Structuring, Tax & Visas | Ask Mareena",
  description:
    "Explore our six core advisory pillars: Company Formation, Corporate Structuring, Tax & Accounting, Compliance, Visas & Residency, and Ongoing Corporate Services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-white/10 bg-[#080A0C]">
        <Container>
          <div className="max-w-3xl space-y-6">
            <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
              Consultancy Pillars
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Complete, coordinated corporate services for the UAE.
            </h1>

            <p className="text-lg sm:text-xl text-[#C5CCD6] leading-relaxed font-normal">
              From your initial choice between Dubai Mainland and Free Zones to ongoing Corporate Tax compliance and multi-generational foundations, Mareena provides structured, straight-talking guidance.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 sm:py-28 bg-[#080A0C]">
        <Container>
          <div className="space-y-12">
            {servicesData.map((service, idx) => (
              <div
                key={service.slug}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-10 rounded-sm bg-[#0E1216] border border-white/10 scroll-mt-28 hover:border-white/30 transition-colors"
              >
                {/* Identifier & Core Info */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-4xl font-light text-white/50">
                      {service.id}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-medium text-[#9EA6B0]">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#A3ABB5] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#EAE6DF] text-[#080A0C] text-xs font-semibold uppercase tracking-wider hover:bg-white transition-colors"
                    >
                      <span>Explore Full Scope</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

                {/* Sub-Services List */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.subServices.map((sub) => (
                    <div
                      key={sub.title}
                      className="p-5 rounded-sm bg-[#13171D] border border-white/10 space-y-2"
                    >
                      <h3 className="font-serif text-base font-normal text-white">
                        {sub.title}
                      </h3>
                      <p className="text-xs text-[#A3ABB5] leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Regulatory Context */}
      <section className="py-16 sm:py-20 bg-[#0C0F13] border-t border-b border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white">
              Clear expectations on government approvals
            </h3>
            <p className="text-sm text-[#A3ABB5] leading-relaxed max-w-xl mx-auto">
              All commercial setups, trade licenses, visa quotas, and tax approvals in the UAE are granted at the discretion of competent government departments. Ask Mareena provides diligent consultation and procedural coordination; timelines and fees vary by activity.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Not sure which setup aligns with your plans?"
        description="Share your business concept and Mareena will provide a structured breakdown of suitable mainland, free zone, or structuring options."
        primaryCtaText="Ask Mareena"
      />
    </>
  );
}
