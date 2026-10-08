import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden bg-[#080A0C]">
      {/* Background ambient lighting and subtle texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Personal Consultant Identity & Locked Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Personal Brand Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs tracking-[0.2em] uppercase font-medium text-[#C5CCD6]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EAE6DF]" />
              <span>Ask Mareena · UAE Business Consultant</span>
            </div>

            {/* Locked Client Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-normal tracking-tight text-white leading-[1.08]">
              Hi, I’m<br />
              <span className="text-white">Mareena Tessa Thomas</span>
            </h1>

            {/* Locked Client Lead */}
            <div className="text-lg sm:text-xl text-[#EAE6DF] leading-relaxed font-normal">
              A straight-talking Business Consultant specializing in{" "}
              <b className="font-semibold text-white">
                Corporate Structuring &amp; Company Formation in the UAE.
              </b>
            </div>

            {/* Locked Client Mission Statement */}
            <p className="text-base sm:text-lg text-[#A3ABB5] leading-relaxed max-w-xl font-normal">
              I work with ambitious individuals who are ready to move forward but need that first guiding hand to set up their business here. Helping people turn their ideas into reality is not just my profession – it’s my passion.
            </p>

            {/* Locked Client Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md text-center"
              >
                <span>Explore My Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 glass-surface-interactive hover:border-white text-white font-medium text-sm rounded-xs tracking-tight transition-all duration-200 text-center"
              >
                Book a Consultation
              </Link>
            </div>

            {/* Consultant Quick Credentials Ribbon */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#8E99A8]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5CCD6]" />
                <span>12+ Years in the UAE</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5CCD6]" />
                <span>Personal Guidance &amp; Structuring</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mareena Tessa Thomas Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Subtle back decorative frame */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 border border-white/10 rounded-sm -z-10 bg-[#0E1216]"
                aria-hidden="true"
              />

              {/* Main Portrait Frame */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-[#0E1216] border border-white/15 shadow-2xl">
                <Image
                  src="/images/mareena-hero.jpeg"
                  alt="Mareena Tessa Thomas - UAE Business Consultant"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                  priority
                  className="object-cover object-top"
                />

                {/* Subtle gradient overlay at bottom of photo for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080A0C]/90 via-[#080A0C]/20 to-transparent pointer-events-none" />

                {/* Personal Bio Badge at bottom of image */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xs glass-surface border border-white/15 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-serif text-base text-white font-medium">
                        Mareena Tessa Thomas
                      </div>
                      <div className="text-xs text-[#C5CCD6]">
                        Business Consultant · UAE
                      </div>
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold px-2 py-1 rounded-full bg-white/10 text-[#EAE6DF]">
                      12+ Yrs UAE
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
