import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CTASection from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo/metadata";
import { aboutData } from "@/content/about";

export const metadata = constructMetadata({
  title: "About Mareena Tessa Thomas | UAE Corporate Structuring Consultant",
  description:
    "Meet Mareena Tessa Thomas: 12+ years living and consulting in the UAE. Journalism precision and social work empathy guiding ambitious entrepreneurs.",
  path: "/about",
  type: "profile",
});

export default function AboutPage() {
  return (
    <>
      {/* Editorial Hero */}
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-white/10 bg-[#080A0C]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
                Meet the Consultant
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
                Personal guidance for ambitious entrepreneurs in the UAE.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                {aboutData.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Stats highlights */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-6">
                {aboutData.statItems.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-medium text-[#9EA6B0]">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#8E99A8] leading-tight hidden sm:block">
                      {stat.caption}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#EAE6DF] hover:bg-white text-[#080A0C] font-semibold text-sm rounded-xs tracking-tight transition-all duration-200 shadow-md"
                >
                  <span>Consult with Mareena</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-white/10 rounded-sm -z-10 bg-[#0E1216]"
                  aria-hidden="true"
                />
                <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-[#0E1216] border border-white/15 shadow-2xl">
                  <Image
                    src="/images/brand/mareena-tessa-thomas.jpg"
                    alt="Mareena Tessa Thomas"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                    priority
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 p-4 bg-[#0E1216] border border-white/10 rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
                  <div>
                    <span className="text-xs font-serif font-medium text-white block">
                      Mareena Tessa Thomas
                    </span>
                    <span className="text-[11px] text-[#8E99A8]">
                      12+ Years Resident in the UAE
                    </span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mareena-tessa-thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-white/10 text-white hover:bg-white hover:text-[#080A0C] text-xs font-medium transition-colors"
                    aria-label="View Mareena Tessa Thomas on LinkedIn"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story & Background Section */}
      <section className="py-20 sm:py-28 bg-[#0C0F13] border-b border-white/10">
        <Container size="narrow">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="The Background"
              title={aboutData.backgroundNarrative.headline}
              description={aboutData.backgroundNarrative.subheadline}
            />

            <div className="space-y-5 text-base sm:text-lg text-[#C5CCD6] leading-relaxed border-t border-white/10 pt-8">
              {aboutData.backgroundNarrative.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="my-10 p-8 sm:p-10 bg-[#101419] border-l-2 border-white rounded-r-sm space-y-4">
              <blockquote className="font-serif text-xl sm:text-2xl text-white italic leading-snug">
                &ldquo;{aboutData.personalNote.quote}&rdquo;
              </blockquote>
              <div className="text-xs uppercase tracking-widest font-medium text-[#9EA6B0]">
                — {aboutData.personalNote.attribution}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 sm:py-28 bg-[#080A0C] border-b border-white/10">
        <Container>
          <div className="max-w-3xl mb-14">
            <SectionHeading
              eyebrow="Philosophy"
              title="Four commitments to every client."
              description="How our consulting engagements are conducted from day one."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {aboutData.principles.map((pr) => (
              <div
                key={pr.title}
                className="p-8 bg-[#0E1216] rounded-sm border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-white/80" />
                  <h3 className="font-serif text-xl font-normal text-white">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#A3ABB5] leading-relaxed pl-7">
                  {pr.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to discuss your UAE venture?"
        description="Share your business concept, target activities, or questions directly with Mareena."
        primaryCtaText="Start a Conversation"
      />
    </>
  );
}
