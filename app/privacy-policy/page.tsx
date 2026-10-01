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
    <article className="py-12 sm:py-20 bg-[#080A0C] min-h-screen">
      <Container size="narrow">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-[#8E99A8]">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            </li>
            <li className="text-white font-medium" aria-current="page">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <header className="border-b border-white/10 pb-8 mb-10 space-y-3">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white">
            {privacyPolicyContent.title}
          </h1>
          <p className="text-xs uppercase tracking-wider text-[#8E99A8]">
            Last Updated: {privacyPolicyContent.lastUpdated}
          </p>
        </header>

        <div className="space-y-10 text-sm sm:text-base text-[#C5CCD6] leading-relaxed">
          {privacyPolicyContent.sections.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-normal text-white">
                {section.title}
              </h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>

        <footer className="mt-14 pt-8 border-t border-white/10 text-xs text-[#8E99A8]">
          <p>
            If you have questions regarding this policy or how your details are protected, please{" "}
            <Link
              href="/contact"
              className="text-white underline hover:text-[#EAE6DF] font-medium"
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
