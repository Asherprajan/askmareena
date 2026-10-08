import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo/metadata";
import { servicesData } from "@/content/services";

export const metadata = constructMetadata({
  title: "Services | UAE Business Services & Consultancy | Ask Mareena",
  description:
    "Practical, straightforward guidance for entrepreneurs, investors and businesses establishing and structuring their presence in the UAE by Mareena Tessa Thomas.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <article className="min-h-screen bg-[#080A0C] text-white">
      {/* 01. Editorial Monograph Masthead */}
      <header className="border-b border-white/10 pt-10 pb-8 sm:pt-14 sm:pb-10 bg-[#06080A]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-xs uppercase tracking-[0.28em] text-[#8E99A8] font-medium block">
                ASK MAREENA &bull; BUSINESS SERVICES
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mt-1 block">
                Services
              </h1>
            </div>
            <div className="text-xs tracking-wider uppercase text-[#717A87]">
              Dubai, United Arab Emirates
            </div>
          </div>

          <div className="pt-6 max-w-3xl">
            <p className="text-lg sm:text-xl text-[#C5CCD6] leading-relaxed font-normal">
              Practical, straightforward guidance for entrepreneurs, investors and businesses establishing and structuring their presence in the UAE.
            </p>
          </div>
        </Container>
      </header>

      {/* 02. Editorial Services Presentation */}
      <section className="py-12 sm:py-20">
        <Container>
          <div className="space-y-12 sm:space-y-16">
            {servicesData.map((service, idx) => (
              <div
                key={service.slug}
                id={service.slug}
                className="group relative rounded-sm bg-[#0E1216] border border-white/10 p-8 sm:p-12 transition-all duration-300 hover:border-white/25 scroll-mt-28"
              >
                {/* Top specular highlight edge */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-white/40 transition-colors pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
                  {/* Left Column: Number, Title, Description, and Actions */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-3">
                        <span className="font-serif text-3xl sm:text-4xl font-light text-white/50 group-hover:text-white/80 transition-colors">
                          {service.id}
                        </span>
                        <span className="text-xs uppercase tracking-[0.22em] text-[#8E99A8] font-medium">
                          Pillar 0{idx + 1}
                        </span>
                      </div>
                      <span className="text-xs text-[#C5CCD6] glass-pill px-3 py-1 rounded-full">
                        UAE Advisory
                      </span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                      {service.shortDescription}
                    </p>

                    {/* CTAs */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-[#EAE6DF] hover:bg-white text-[#080A0C] text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                      >
                        <span>Explore Full Scope</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xs bg-white/5 hover:bg-white/10 text-white text-xs font-medium border border-white/10 hover:border-white/20 transition-colors"
                      >
                        <span>Enquire About This Service</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C5CCD6]" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Sub-Services / Key Focus Areas */}
                  <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subServices.map((sub) => (
                      <div
                        key={sub.title}
                        className="p-5 rounded-sm bg-[#12161C] border border-white/8 space-y-2 hover:border-white/20 transition-colors flex flex-col justify-between"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#EAE6DF] shrink-0" />
                            <h3 className="font-serif text-sm sm:text-base font-normal text-white">
                              {sub.title}
                            </h3>
                          </div>
                          <p className="text-xs text-[#8E99A8] leading-relaxed">
                            {sub.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 03. Regulatory Context & Expectations */}
      <section className="py-16 sm:py-20 bg-[#06080A] border-t border-b border-white/10">
        <Container size="narrow">
          <div className="text-center space-y-4">
            <span className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium block">
              Clear Expectations
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              Navigating UAE requirements with clarity and precision
            </h3>
            <p className="text-sm sm:text-base text-[#8E99A8] leading-relaxed max-w-2xl mx-auto">
              All commercial setups, trade licenses, residency clearances, and tax registrations in the UAE are granted at the discretion of competent government authorities. Ask Mareena provides thorough, transparent procedural guidance and strategic structuring to ensure smooth execution.
            </p>
          </div>
        </Container>
      </section>

      {/* 04. Direct Consultation Monograph CTA */}
      <section className="py-20 sm:py-28 bg-[#080A0C]">
        <Container size="narrow">
          <div className="relative p-8 sm:p-14 rounded-sm bg-[#0E1216] border border-white/10 text-center space-y-7 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.24em] text-[#8E99A8] font-medium block">
                Next Steps
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                Ready to establish or structure your UAE business?
              </h2>
              <p className="text-base text-[#C5CCD6] max-w-xl mx-auto leading-relaxed">
                Connect directly with Mareena Tessa Thomas for an initial evaluation of your commercial model, jurisdiction requirements, and optimal legal structure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md group"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="https://www.linkedin.com/in/mareena-tessa-thomas"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xs bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </article>
  );
}
