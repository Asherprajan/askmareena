import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo/metadata";
import { termsAndDisclaimerContent } from "@/content/legal";

export const metadata = constructMetadata({
  title: "Terms of Service & Regulatory Disclaimer | Ask Mareena",
  description:
    "Terms of service, business scope limitations, and regulatory disclaimers for Ask Mareena consultancy services in the United Arab Emirates.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <article className="py-12 sm:py-20 bg-white">
      <Container size="narrow">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#7A8291]">
            <li>
              <Link href="/" className="hover:text-[#14171A] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-[#B8976C]" />
            </li>
            <li className="text-[#14171A] font-medium" aria-current="page">
              Terms & Disclaimer
            </li>
          </ol>
        </nav>

        <header className="border-b border-[#E8E4DC] pb-8 mb-10 space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14171A]">
            {termsAndDisclaimerContent.title}
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#7A8291]">
            Last Updated: {termsAndDisclaimerContent.lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-sm sm:text-base text-[#525866] leading-relaxed">
          {termsAndDisclaimerContent.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-semibold text-[#14171A]">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <footer className="mt-14 pt-8 border-t border-[#E8E4DC] text-xs text-[#7A8291]">
          <p>
            For any clarifications regarding these terms or our consulting scope, please{" "}
            <Link
              href="/contact"
              className="text-[#14171A] underline hover:text-[#B8976C] font-semibold"
            >
              reach out via our contact page
            </Link>
            .
          </p>
        </footer>
      </Container>
    </article>
  );
}
