import React from "react";
import Image from "next/image";
import { Mail, Clock, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Contact Mareena Tessa Thomas | UAE Corporate Structuring Consultation",
  description:
    "Direct consultation for company formation in Dubai Mainland and Free Zones, DIFC/ADGM foundations, Corporate Tax, and visas.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-[#E8E4DC] bg-[#FAF8F5]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EFEA] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider text-[#9E7B4F]">
              <span>Direct Engagement</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#14171A] leading-[1.12]">
              Let&apos;s talk about what you want to build in the UAE.
            </h1>

            <p className="text-lg sm:text-xl text-[#525866] leading-relaxed font-normal">
              Whether you are evaluating Dubai Mainland versus a Free Zone, setting up a family foundation, or resolving corporate tax obligations, Mareena provides straight answers.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Form & Context */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Consultant Card */}
              <div className="p-6 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#E8E4DC] shrink-0">
                    <Image
                      src="/images/brand/mareena-tessa-thomas.jpg"
                      alt="Mareena Tessa Thomas"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-[#14171A]">
                      Mareena Tessa Thomas
                    </h2>
                    <p className="text-xs text-[#7A8291]">
                      Business Consultant & Founder
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#525866] leading-relaxed">
                  &ldquo;I review every enquiry personally. My priority is to understand your business model before proposing jurisdictions or licensing frameworks.&rdquo;
                </p>
              </div>

              {/* What Happens Next */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-semibold text-[#14171A]">
                  What happens after you submit?
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm text-[#525866]">
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-bold text-[#B8976C] shrink-0">
                      1.
                    </span>
                    <span>
                      <strong className="text-[#14171A]">Preliminary Review:</strong> Mareena analyzes your activities against current UAE licensing classifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-bold text-[#B8976C] shrink-0">
                      2.
                    </span>
                    <span>
                      <strong className="text-[#14171A]">Direct Response:</strong> You receive an email or WhatsApp within 1–2 business days to schedule a consultation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-bold text-[#B8976C] shrink-0">
                      3.
                    </span>
                    <span>
                      <strong className="text-[#14171A]">Tailored Roadmap:</strong> An objective assessment of suitable jurisdictions, costs, and timeline parameters.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Direct Contact Details */}
              <div className="pt-4 border-t border-[#E8E4DC] space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7A8291]">
                  Direct Contact
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {/* Email */}
                  <a
                    href="mailto:askmareena@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#B8976C] text-[#14171A] group transition-colors shadow-2xs"
                  >
                    <div className="w-9 h-9 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center text-[#B8976C] shrink-0 group-hover:bg-[#14171A] group-hover:text-white transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#7A8291] font-semibold block">
                        Email Enquiries
                      </span>
                      <span className="text-sm font-medium text-[#14171A] group-hover:text-[#9E7B4F] transition-colors">
                        askmareena@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone & WhatsApp */}
                  <div className="p-3.5 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] shadow-2xs space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white border border-[#E8E4DC] flex items-center justify-center text-[#B8976C] shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#7A8291] font-semibold block">
                          Phone & WhatsApp
                        </span>
                        <span className="text-sm font-medium text-[#14171A]">
                          +971 54 265 8225
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1 pl-12">
                      <a
                        href="tel:+971542658225"
                        className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-white border border-[#E8E4DC] hover:bg-[#14171A] hover:text-white transition-colors text-[#14171A]"
                      >
                        Call Direct
                      </a>
                      <a
                        href="https://wa.me/971542658225"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-[#25D366]/10 border border-[#25D366]/30 text-[#128C7E] hover:bg-[#25D366] hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Channels */}
              <div className="pt-2 border-t border-[#E8E4DC] space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-semibold text-[#7A8291]">
                  Official Digital Channels
                </h3>
                <div className="flex flex-col gap-2.5 text-sm">
                  <a
                    href="https://www.linkedin.com/in/mareena-tessa-thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#B8976C] text-[#14171A] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#14171A] text-white flex items-center justify-center text-xs font-semibold">
                      in
                    </span>
                    <span>linkedin.com/in/mareena-tessa-thomas</span>
                  </a>

                  <a
                    href="https://www.instagram.com/mareena_tessa_thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-sm bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#B8976C] text-[#14171A] transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-[#14171A] text-white flex items-center justify-center text-xs font-semibold">
                      ig
                    </span>
                    <span>@mareena_tessa_thomas</span>
                  </a>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="p-4 rounded-sm bg-[#F8F4EE] border border-[#E8E4DC] text-xs text-[#7A8291] leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#9E7B4F]">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Important Notice</span>
                </div>
                <p>
                  Services represent independent business consultancy. Final approvals and licenses are granted solely by competent UAE government departments.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
