import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { servicesData } from "@/content/services";

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-32 bg-[#080A0C]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <SectionHeading
              eyebrow="Core Services"
              title="Six pillars of structured UAE corporate guidance."
              description="From choosing your first licensing authority to managing ongoing tax filings and corporate restructuring, every step is coordinated with personal attention."
            />

            <div className="pt-4 hidden lg:block space-y-4">
              <p className="text-sm text-[#8E99A8] leading-relaxed">
                Every business model has different requirements. We do not force one-size-fits-all packages; your setup is designed around your commercial activities and long-term goals.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#EAE6DF] transition-colors group"
              >
                <span>Compare all six service scopes</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Service Cards */}
          <div className="lg:col-span-7 space-y-6">
            {servicesData.map((service) => (
              <div
                key={service.slug}
                className="group relative bg-[#0E1216] border border-white/10 p-6 sm:p-8 rounded-sm hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                  <span className="font-serif text-2xl font-light text-white/50">
                    {service.id}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider font-medium text-[#8E99A8] bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    UAE Advisory
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#EAE6DF] transition-colors">
                  <Link
                    href={`/services/${service.slug}`}
                    className="focus-visible:outline-2 focus-visible:outline-white rounded-xs inline-flex items-center gap-2"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-white" />
                  </Link>
                </h3>

                <p className="text-sm text-[#A3ABB5] leading-relaxed mt-2.5">
                  {service.shortDescription}
                </p>

                {/* Subservice tags preview */}
                <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {service.subServices.slice(0, 3).map((sub) => (
                    <span
                      key={sub.title}
                      className="text-xs text-[#C5CCD6] bg-white/5 px-2.5 py-1 rounded-sm border border-white/10"
                    >
                      {sub.title}
                    </span>
                  ))}
                  {service.subServices.length > 3 && (
                    <span className="text-xs text-[#8E99A8] px-2 py-1">
                      +{service.subServices.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-5 pt-2">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-medium uppercase tracking-wider text-white group-hover:text-[#EAE6DF] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>View Scope & Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}

            <div className="pt-4 lg:hidden">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full py-3.5 px-4 rounded-xs border border-white/30 text-sm font-medium text-white hover:bg-white hover:text-[#080A0C] transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
