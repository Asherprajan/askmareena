import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex items-center pt-8 pb-10 lg:pt-12 lg:pb-14 overflow-hidden bg-[#080A0C]">
      {/* Background Skyline Image with Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dubai-skyline-night.jpg"
          alt="Dubai Skyline Night with Burj Khalifa"
          fill
          priority
          sizes="100vw"
          className="object-cover object-right md:object-center opacity-85"
        />
        {/* Dark Vignettes & Gradients for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080A0C] via-[#080A0C]/80 to-[#080A0C]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C] via-transparent to-[#080A0C]/50" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#080A0C] to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-6 lg:pt-10">
          {/* Left Column: Primary Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tracked Eyebrow */}
            <div className="text-xs uppercase tracking-[0.24em] text-[#9EA6B0] font-medium">
              Ask Mareena · UAE
            </div>

            {/* Massive Serif Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-normal tracking-tight text-white leading-[1.06]">
              Strategic Clarity<br />
              for Your<br />
              UAE Business.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed max-w-xl font-normal">
              Practical guidance for company formation, corporate structuring, tax, compliance, residency and ongoing business support.
            </p>

            {/* Action Buttons matching reference */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md text-center"
              >
                Ask Mareena
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-7 py-3.5 glass-surface-interactive hover:border-white text-white font-medium text-sm rounded-xs tracking-tight transition-all duration-200 text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Dark Glassmorphic Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-8 sm:p-10 glass-surface rounded-xs shadow-2xl space-y-6 relative overflow-hidden">
              {/* Top specular highlight edge */}
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/35 to-transparent pointer-events-none" />
              {/* Internal subtle light bloom */}
              <div
                className="absolute -top-16 -right-16 w-44 h-44 bg-white/[0.04] blur-2xl pointer-events-none rounded-full"
                aria-hidden="true"
              />

              {/* Card Eyebrow */}
              <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium relative z-10">
                Clarity · Compliance · Structure
              </div>

              {/* Card Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-[1.18] relative z-10">
                From an idea<br />
                to an operating<br />
                UAE business.
              </h2>

              {/* Card Body */}
              <p className="text-sm text-[#C5CCD6] leading-relaxed font-normal relative z-10">
                One point of contact to help you understand the process, coordinate the right steps and keep your business moving.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
