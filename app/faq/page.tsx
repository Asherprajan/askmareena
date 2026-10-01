import React from "react";
import Link from "next/link";
import { ArrowRight, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateFAQSchema } from "@/lib/seo/schema";
import { faqData, FAQItem } from "@/content/faq";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | UAE Business Setup & Advisory | Ask Mareena",
  description:
    "Direct answers regarding Dubai Mainland vs. Free Zones, Corporate Tax registration, Golden Visas, DIFC foundations, and consultation procedures.",
  path: "/faq",
});

export default function FAQPage() {
  const faqSchema = generateFAQSchema(faqData);

  // Group by categories
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
      <section className="pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-[#E8E4DC] bg-[#FAF8F5]">
        <Container size="narrow">
          <div className="space-y-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider text-[#9E7B4F]">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14171A] leading-[1.12]">
              Straight answers to your UAE business questions.
            </h1>

            <p className="text-lg sm:text-xl text-[#525866] leading-relaxed font-normal max-w-2xl mx-auto">
              Clear, realistic guidance regarding mainland and free zone setup, corporate tax obligations, DIFC foundations, and residency pathways.
            </p>
          </div>
        </Container>
      </section>

      {/* Categorized FAQs */}
      <section className="py-20 sm:py-28 bg-white">
        <Container size="narrow">
          <div className="space-y-16">
            {categories.map((category) => {
              const categoryItems = faqData.filter((item) => item.category === category);
              if (categoryItems.length === 0) return null;

              return (
                <div key={category} className="space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#E8E4DC] pb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B8976C]" />
                    <h2 className="font-serif text-2xl font-semibold text-[#14171A]">
                      {category}
                    </h2>
                  </div>

                  <Accordion items={categoryItems} defaultOpenId={category === "General" ? "faq-1" : undefined} />
                </div>
              );
            })}
          </div>

          {/* Direct Question Card */}
          <div className="mt-16 p-8 bg-[#FAF8F5] border border-[#E8E4DC] rounded-sm text-center space-y-4">
            <h3 className="font-serif text-2xl font-semibold text-[#14171A]">
              Don&apos;t see your specific scenario answered?
            </h3>
            <p className="text-sm text-[#525866] max-w-xl mx-auto leading-relaxed">
              Every business activity, shareholder profile, and tax residency situation has nuance. Discuss your specific case directly with Mareena.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#14171A] text-white text-xs uppercase tracking-wider font-semibold hover:bg-[#B8976C] transition-colors"
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
