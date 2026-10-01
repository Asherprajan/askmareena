import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Award, Clock, Users, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
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
      <section className="pt-8 sm:pt-14 pb-16 sm:pb-24 border-b border-[#E8E4DC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Text Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider text-[#9E7B4F]">
                <span>Meet the Consultant</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14171A] leading-[1.12]">
                Personal guidance for ambitious entrepreneurs in the UAE.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#525866] leading-relaxed font-normal">
                {aboutData.introParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Stats highlights */}
              <div className="pt-6 border-t border-[#E8E4DC] grid grid-cols-3 gap-4 sm:gap-6">
                {aboutData.statItems.map((stat) => (
                  <div key={stat.label} className="space-y-1">
                    <div className="font-serif text-3xl sm:text-4xl font-normal text-[#14171A]">
                      {stat.value}
                    </div>
                    <div className="text-xs uppercase tracking-wider font-semibold text-[#9E7B4F]">
                      {stat.label}
                    </div>
                    <div className="text-[11px] text-[#7A8291] leading-tight hidden sm:block">
                      {stat.caption}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Consult with Mareena
                </Button>
              </div>
            </div>

            {/* Portrait Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className="absolute inset-0 translate-x-3 translate-y-3 border border-[#E8E4DC] rounded-sm -z-10 bg-[#F3EFEA]"
                  aria-hidden="true"
                />
                <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-white border border-[#E8E4DC] shadow-md">
                  <Image
                    src="/images/brand/mareena-tessa-thomas.jpg"
                    alt="Mareena Tessa Thomas"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 450px"
                    priority
                    className="object-cover object-center"
                  />
                </div>
                <div className="mt-4 p-4 bg-white border border-[#E8E4DC] rounded-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                  <div>
                    <span className="text-xs font-serif font-semibold text-[#14171A] block">
                      Mareena Tessa Thomas
                    </span>
                    <span className="text-[11px] text-[#7A8291]">
                      12+ Years Resident in the UAE
                    </span>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/mareena-tessa-thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#14171A] text-white hover:bg-[#B8976C] text-xs font-medium transition-colors"
                    aria-label="View Mareena Tessa Thomas on LinkedIn"
                  >
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#B8976C]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Story & Background Section */}
      <section className="py-20 sm:py-28 bg-[#FAF8F5]">
        <Container size="narrow">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="The Background"
              title={aboutData.backgroundNarrative.headline}
              description={aboutData.backgroundNarrative.subheadline}
            />

            <div className="space-y-5 text-base sm:text-lg text-[#525866] leading-relaxed border-t border-[#E8E4DC] pt-8">
              {aboutData.backgroundNarrative.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="my-10 p-8 sm:p-10 bg-[#F3EFEA] border-l-4 border-[#B8976C] rounded-r-sm space-y-4">
              <blockquote className="font-serif text-xl sm:text-2xl text-[#14171A] italic leading-snug">
                &ldquo;{aboutData.personalNote.quote}&rdquo;
              </blockquote>
              <div className="text-xs uppercase tracking-widest font-semibold text-[#9E7B4F]">
                — {aboutData.personalNote.attribution}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 sm:py-28 bg-[#F3EFEA]/50 border-t border-b border-[#E8E4DC]">
        <Container>
          <div className="max-w-3xl mb-14">
            <SectionHeading
              eyebrow="Philosophy"
              title="Four commitments to every client."
              description="How our consulting engagements are conducted from day one."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.principles.map((pr) => (
              <div
                key={pr.title}
                className="p-8 bg-white rounded-sm border border-[#E8E4DC] shadow-2xs space-y-3"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#B8976C]" />
                  <h3 className="font-serif text-xl font-semibold text-[#14171A]">
                    {pr.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-[#525866] leading-relaxed pl-7">
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
