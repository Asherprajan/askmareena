import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 lg:pt-16 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle warm background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-[500px] bg-gradient-to-b from-[#F3EFEA]/80 to-transparent pointer-events-none -z-10"
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#F3EFEA] border border-[#E8E4DC] text-xs font-medium text-[#7A8291]">
              <span className="w-2 h-2 rounded-full bg-[#B8976C]" />
              <span className="text-[#14171A] font-semibold uppercase tracking-[0.12em] text-[11px]">
                UAE Business Consultancy
              </span>
              <span className="text-[#B8976C]">•</span>
              <span>12+ Years in the UAE</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-normal tracking-tight text-[#14171A] leading-[1.12]">
              Clear, straight-talking guidance to build your venture in the UAE.
            </h1>

            {/* Lead Narrative */}
            <p className="text-lg sm:text-xl text-[#525866] leading-relaxed max-w-2xl font-normal">
              Navigating mainland jurisdictions, free zones, corporate structuring, and tax compliance requires practical, personal guidance. Consult directly with Mareena Tessa Thomas to turn your business vision into an established reality.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
                className="shadow-sm"
              >
                Ask Mareena
              </Button>
              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Explore Services
              </Button>
            </div>

            {/* Trust highlights strip */}
            <div className="pt-6 sm:pt-8 border-t border-[#E8E4DC] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#14171A]">
                    Direct Advisory
                  </h4>
                  <p className="text-xs text-[#7A8291] mt-0.5">
                    No rotating agency staff
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#14171A]">
                    Complete Scope
                  </h4>
                  <p className="text-xs text-[#7A8291] mt-0.5">
                    Mainland, Free Zones & Tax
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="w-4 h-4 rounded-full border border-[#B8976C] flex items-center justify-center text-[10px] font-bold text-[#B8976C] shrink-0 mt-0.5">
                  12
                </span>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#14171A]">
                    12+ Years in UAE
                  </h4>
                  <p className="text-xs text-[#7A8291] mt-0.5">
                    Deep regulatory familiarity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Decorative subtle frame offset */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border border-[#E8E4DC] rounded-sm -z-10 bg-[#F3EFEA]"
                aria-hidden="true"
              />

              {/* Image Container */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white border border-[#E8E4DC] shadow-md">
                <Image
                  src="/images/brand/mareena-tessa-thomas.jpg"
                  alt="Mareena Tessa Thomas — UAE Business Consultant"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                  priority
                  className="object-cover object-center"
                />
              </div>

              {/* Portrait Label Card */}
              <div className="absolute -bottom-5 left-4 right-4 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-sm p-4 rounded-sm border border-[#E8E4DC] shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#14171A]">
                      Mareena Tessa Thomas
                    </h3>
                    <p className="text-xs text-[#7A8291]">
                      Corporate Structuring & Company Formation
                    </p>
                  </div>
                  <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#FAF8F5] text-[#9E7B4F] border border-[#E8E4DC]">
                    UAE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
