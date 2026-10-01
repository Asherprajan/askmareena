import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqData } from "@/content/faq";

export default function HomeFAQPreview() {
  // Select top representative questions for the homepage
  const previewFaqs = faqData.slice(0, 5);

  return (
    <section className="py-20 sm:py-32">
      <Container size="narrow">
        <div className="space-y-4 text-center mb-12 sm:mb-16">
          <SectionHeading
            align="center"
            eyebrow="Answers & Insights"
            title="Frequently asked questions on UAE setup."
            description="Clear, realistic answers regarding company formation, tax registration, foundations, and government procedures."
          />
        </div>

        <Accordion items={previewFaqs} defaultOpenId="faq-1" />

        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14171A] hover:text-[#9E7B4F] transition-colors group"
          >
            <span>Read all frequently asked questions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
