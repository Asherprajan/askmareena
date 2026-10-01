import React from "react";
import Link from "next/link";
import { FileText, BarChart3, Users, Layers, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const quickServices = [
  {
    icon: FileText,
    title: "Start a Company",
    description: "Mainland, Free Zone and Offshore incorporation guidance.",
    href: "/services/company-formation",
  },
  {
    icon: BarChart3,
    title: "Tax & Compliance",
    description: "Corporate Tax, VAT, accounting, AML/goAML and related support.",
    href: "/services/tax-accounting",
  },
  {
    icon: Users,
    title: "Residency",
    description: "Golden Visa, investor, partner and employment visa coordination.",
    href: "/services/visas-residency",
  },
  {
    icon: Layers,
    title: "Structure & Grow",
    description: "Corporate structures, holding companies, Family Foundations and ongoing services.",
    href: "/services/corporate-structuring",
  },
];

export default function QuickServicesReference() {
  return (
    <section className="pt-2 sm:pt-4 pb-20 sm:pb-28 bg-[#080A0C] relative">
      <Container className="relative z-10">
        {/* Section Heading matching reference image */}
        <div className="space-y-3 mb-8 sm:mb-10">
          <div className="text-xs uppercase tracking-[0.24em] text-[#9EA6B0] font-medium">
            What I Can Help With
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Business support, without the jargon.
          </h2>
        </div>

        {/* 4 Cards Row matching reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {quickServices.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                href={item.href}
                className="group p-6 sm:p-7 bg-[#0A0D11]/90 backdrop-blur-xs border border-white/10 hover:border-white/25 hover:bg-[#0E1318] rounded-xs transition-all duration-200 flex flex-col justify-between space-y-7 shadow-lg"
              >
                <div>
                  <div className="w-8 h-8 flex items-center justify-center text-white/90 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 stroke-[1.3]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-white group-hover:text-[#EAE6DF] transition-colors mt-5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9EA6B0] leading-relaxed mt-2.5">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom Banner matching reference image: "NOT SURE WHERE TO BEGIN?" */}
        <div className="mt-8 sm:mt-12 p-6 sm:p-9 rounded-xs border border-white/15 bg-gradient-to-r from-[#0C1014]/95 via-[#12171E]/95 to-[#0C1014]/95 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          {/* Subtle light reflection sheen */}
          <div
            className="absolute top-0 right-1/4 w-80 h-32 bg-white/5 blur-[50px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          <div className="space-y-2 relative z-10">
            <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
              Not sure where to begin?
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white tracking-tight">
              Tell me what you want to achieve.
            </h3>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md shrink-0 text-center relative z-10"
          >
            Start a Conversation
          </Link>
        </div>
      </Container>
    </section>
  );
}
