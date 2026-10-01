import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateFAQSchema } from "@/lib/seo/schema";
import { faqData } from "@/content/faq";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | UAE Business Setup & Advisory | Ask Mareena",
  description:
    "Direct answers regarding Dubai Mainland vs. Free Zones, Corporate Tax registration, Golden Visas, DIFC foundations, and consultation procedures.",
  path: "/faq",
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqData);

  const categories: ("General" | "Company Formation" | "Structuring & Tax" | "Visas & Residency")[] = [
    "General",
    "Company Formation",
    "Structuring & Tax",
    "Visas & Residency",
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-white/10 bg-[#080A0C]">
        <Container size="narrow">
          <div className="space-y-6 text-center">
            <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
              Questions & Answers
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Straight answers to your UAE business questions.
            </h1>

            <p className="text-lg sm:text-xl text-[#C5CCD6] leading-relaxed font-normal max-w-2xl mx-auto">
              Clear, realistic guidance regarding mainland and free zone setup, corporate tax obligations, DIFC foundations, and residency pathways.
            </p>
          </div>
        </Container>
      </section>

      {/* Categorized FAQs */}
      <section className="py-20 sm:py-28 bg-[#0C0F13]">
        <Container size="narrow">
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryItems = faqData.filter((item) => item.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                    <span className="w-2 h-2 rounded-full bg-white/70" />
                    <h2 className="font-serif text-2xl font-normal text-white">
                      {category}
                    </h2>
                  </div>

                  <Accordion items={categoryItems} defaultOpenId={category === "General" ? "faq-1" : undefined} />
                </div>
              );
            })}
          </div>

          {/* Direct Question Card */}
          <div className="mt-16 p-8 bg-[#0E1216] border border-white/10 rounded-sm text-center space-y-4 shadow-xl">
            <h3 className="font-serif text-2xl font-normal text-white">
              Don&apos;t see your specific scenario answered?
            </h3>
            <p className="text-sm text-[#A3ABB5] max-w-xl mx-auto leading-relaxed">
              Every business activity, shareholder profile, and tax residency situation has nuance. Discuss your specific case directly with Mareena.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xs bg-[#EAE6DF] text-[#080A0C] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
              >
                <span>Ask Your Question Directly</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to take the next step?"
        description="Share your timeline and requirements to receive a structured breakdown tailored to your venture."
        primaryCtaText="Contact Mareena"
      />
    </>
  );
}
