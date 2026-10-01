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
              Your 360°<br />
              Business Guide<br />
              in the UAE.
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
                className="inline-flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white text-white font-medium text-sm rounded-xs tracking-tight transition-all duration-200 bg-black/20 hover:bg-white/10 backdrop-blur-xs text-center"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Right Column: Floating Dark Glassmorphic Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md p-8 sm:p-10 bg-[#0C0F13]/85 backdrop-blur-md border border-white/15 rounded-sm shadow-2xl space-y-6">
              {/* Card Eyebrow */}
              <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
                Clarity · Compliance · Structure
              </div>

              {/* Card Headline */}
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white leading-[1.18]">
                From an idea<br />
                to an operating<br />
                UAE business.
              </h2>

              {/* Card Body */}
              <p className="text-sm text-[#C5CCD6] leading-relaxed font-normal">
                One point of contact to help you understand the process, coordinate the right steps and keep your business moving.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
