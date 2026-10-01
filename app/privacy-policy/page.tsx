import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo/metadata";
import { privacyPolicyContent } from "@/content/legal";

export const metadata = constructMetadata({
  title: "Privacy Policy | Ask Mareena",
  description:
    "Privacy Policy for Ask Mareena. Transparent details on how client consultation records and data are handled under UAE privacy standards.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </li>
          </ol>
        </nav>

        <header className="border-b border-[#E8E4DC] pb-8 mb-10 space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#14171A]">
            {privacyPolicyContent.title}
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#7A8291]">
            Last Updated: {privacyPolicyContent.lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-sm sm:text-base text-[#525866] leading-relaxed">
          {privacyPolicyContent.sections.map((section) => (
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
            If you have questions regarding this policy or how your details are protected, please{" "}
            <Link
              href="/contact"
              className="text-[#14171A] underline hover:text-[#B8976C] font-semibold"
            >
              contact Mareena directly
            </Link>
            .
          </p>
        </footer>
      </Container>
    </article>
  );
}
