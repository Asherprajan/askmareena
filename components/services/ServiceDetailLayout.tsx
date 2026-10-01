import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronRight, AlertCircle, HelpCircle } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Accordion from "@/components/ui/Accordion";
import CTASection from "@/components/sections/CTASection";
import { ServiceDetail, servicesData } from "@/content/services";
import { generateServiceSchema, generateFAQSchema } from "@/lib/seo/schema";

interface ServiceDetailLayoutProps {
  service: ServiceDetail;
}

export default function ServiceDetailLayout({ service }: ServiceDetailLayoutProps) {
  const serviceSchema = generateServiceSchema(
    service.title,
    service.shortDescription,
    `/services/${service.slug}`
  );

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? generateFAQSchema(service.faqs)
      : null;

  // Other services for navigation
  const otherServices = servicesData.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero Header */}
      <section className="pt-8 sm:pt-12 pb-16 sm:pb-20 border-b border-[#E8E4DC] bg-[#FAF8F5]">
        <Container>
          {/* Breadcrumbs */}
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
              <li>
                <Link href="/services" className="hover:text-[#14171A] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-[#B8976C]" />
              </li>
              <li className="text-[#14171A] font-medium" aria-current="page">
                {service.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="font-serif text-3xl font-light text-[#B8976C]">
                  {service.id}
                </span>
                <span className="text-xs uppercase tracking-[0.14em] font-semibold text-[#9E7B4F] bg-[#F3EFEA] px-3 py-1 rounded-full border border-[#E8E4DC]">
                  UAE Advisory Scope
                </span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14171A] leading-[1.12]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#525866] leading-relaxed max-w-3xl">
                {service.fullDescription}
              </p>

              <div className="pt-2">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Consult on {service.title}
                </Button>
              </div>
            </div>

            {/* Quick Scope Card */}
            <div className="lg:col-span-4 bg-white p-6 sm:p-7 rounded-sm border border-[#E8E4DC] shadow-xs space-y-4">
              <h3 className="font-serif text-base font-semibold text-[#14171A] border-b border-[#E8E4DC] pb-3">
                Scope Highlights
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#525866]">
                {service.scopeItems.slice(0, 5).map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#B8976C] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-wider font-semibold text-[#9E7B4F] hover:text-[#14171A] transition-colors inline-flex items-center gap-1"
                >
                  <span>Request detailed quote</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What is Covered / Sub-Services */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#E8E4DC]">
        <Container>
          <div className="max-w-3xl mb-14">
            <SectionHeading
              eyebrow="Coverage"
              title="What is covered in this service."
              description="A clear breakdown of key areas and procedures coordinated for your setup."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.subServices.map((sub, i) => (
              <div
                key={sub.title}
                className="p-6 bg-[#FAF8F5] rounded-sm border border-[#E8E4DC] shadow-2xs space-y-3"
              >
                <div className="text-xs uppercase tracking-wider font-semibold text-[#B8976C]">
                  Area 0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-semibold text-[#14171A]">
                  {sub.title}
                </h3>
                <p className="text-sm text-[#525866] leading-relaxed">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Target Audience & Process */}
      <section className="py-20 sm:py-28 bg-[#F3EFEA]/40 border-b border-[#E8E4DC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Who It Is For */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Target Audience"
                title="Who this service is designed for."
              />
              <ul className="space-y-3.5 pt-2">
                {service.targetAudience.map((audience, i) => (
                  <li
                    key={i}
                    className="p-4 bg-white rounded-sm border border-[#E8E4DC] flex items-start gap-3 shadow-2xs"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#F8F4EE] border border-[#E8E4DC] flex items-center justify-center text-xs font-semibold text-[#9E7B4F] shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-[#14171A] font-medium leading-relaxed">
                      {audience}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Engagement Process */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Engagement"
                title="How we move forward together."
              />
              <ol className="space-y-4 pt-2">
                {service.engagementSteps.map((step, i) => (
                  <li
                    key={i}
                    className="p-4 bg-white rounded-sm border border-[#E8E4DC] flex items-start gap-4 shadow-2xs"
                  >
                    <span className="font-serif text-xl font-light text-[#B8976C] shrink-0">
                      0{i + 1}
                    </span>
                    <div>
                      <p className="text-sm text-[#525866] leading-relaxed">
                        {step}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* Important Considerations / Disclaimer Callout */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E8E4DC]">
        <Container size="narrow">
          <div className="p-6 sm:p-8 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] space-y-4">
            <div className="flex items-center gap-2.5 text-[#9E7B4F]">
              <AlertCircle className="w-5 h-5" />
              <h3 className="font-serif text-lg font-semibold text-[#14171A]">
                Important Considerations & Regulatory Context
              </h3>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-[#525866] leading-relaxed list-disc list-inside">
              {service.importantConsiderations.map((note, i) => (
                <li key={i} className="pl-1">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {/* Service FAQs if available */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E8E4DC]">
          <Container size="narrow">
            <div className="space-y-4 text-center mb-12">
              <SectionHeading
                align="center"
                eyebrow="FAQ"
                title={`Common questions about ${service.title}`}
                description="Specific procedural queries and regulatory clarifications."
              />
            </div>
            <Accordion items={service.faqs.map((f, i) => ({ id: `faq-${i}`, ...f }))} />
          </Container>
        </section>
      )}

      {/* Explore Other Services */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E8E4DC]">
        <Container>
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E8E4DC]">
            <h3 className="font-serif text-2xl font-semibold text-[#14171A]">
              Explore Other Services
            </h3>
            <Link
              href="/services"
              className="text-xs uppercase tracking-wider font-semibold text-[#9E7B4F] hover:text-[#14171A] transition-colors"
            >
              View all 6 services
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href={`/services/${item.slug}`}
                className="group p-6 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#B8976C] transition-all"
              >
                <span className="font-serif text-xl text-[#B8976C] block mb-2">
                  {item.id}
                </span>
                <h4 className="font-serif text-lg font-semibold text-[#14171A] group-hover:text-[#9E7B4F] transition-colors flex items-center justify-between">
                  <span>{item.title}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs text-[#525866] mt-2 line-clamp-2">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Consultation CTA */}
      <CTASection
        title={`Discuss your ${service.title.toLowerCase()} requirements.`}
        description="Share your details with Mareena to understand jurisdiction choices, documentation steps, and licensing coordination."
        primaryCtaText={`Enquire About ${service.title}`}
      />
    </>
  );
}
