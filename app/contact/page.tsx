import React from "react";
import Image from "next/image";
import { Mail, ShieldCheck, Phone, MessageSquare } from "lucide-react";
import Container from "@/components/ui/Container";
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
      <section className="pt-10 sm:pt-16 pb-14 sm:pb-20 border-b border-white/10 bg-[#080A0C]">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="text-xs uppercase tracking-[0.22em] text-[#9EA6B0] font-medium">
              Direct Engagement
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.1]">
              Let&apos;s talk about what you want to build in the UAE.
            </h1>

            <p className="text-lg sm:text-xl text-[#C5CCD6] leading-relaxed font-normal">
              Whether you are evaluating Dubai Mainland versus a Free Zone, setting up a family foundation, or resolving corporate tax obligations, Mareena provides straight answers.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content Form & Context */}
      <section className="py-16 sm:py-24 bg-[#0C0F13]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Context & Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              {/* Consultant Card */}
              <div className="p-6 rounded-sm bg-[#0E1216] border border-white/10 space-y-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/20 shrink-0">
                    <Image
                      src="/images/brand/mareena-tessa-thomas.jpg"
                      alt="Mareena Tessa Thomas"
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-serif text-lg font-normal text-white">
                      Mareena Tessa Thomas
                    </h2>
                    <p className="text-xs text-[#8E99A8]">
                      Business Consultant & Founder
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-[#C5CCD6] leading-relaxed">
                  &ldquo;I review every enquiry personally. My priority is to understand your business model before proposing jurisdictions or licensing frameworks.&rdquo;
                </p>
              </div>

              {/* What Happens Next */}
              <div className="space-y-4">
                <h3 className="font-serif text-xl font-normal text-white">
                  What happens after you submit?
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm text-[#A3ABB5]">
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-normal text-white/60 shrink-0">
                      1.
                    </span>
                    <span>
                      <strong className="text-white font-medium">Preliminary Review:</strong> Mareena analyzes your activities against current UAE licensing classifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-normal text-white/60 shrink-0">
                      2.
                    </span>
                    <span>
                      <strong className="text-white font-medium">Direct Response:</strong> You receive an email or WhatsApp within 1–2 business days to schedule a consultation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-serif text-base font-normal text-white/60 shrink-0">
                      3.
                    </span>
                    <span>
                      <strong className="text-white font-medium">Tailored Roadmap:</strong> An objective assessment of suitable jurisdictions, costs, and timeline parameters.
                    </span>
                  </li>
                </ol>
              </div>

              {/* Direct Contact Details */}
              <div className="pt-4 border-t border-white/10 space-y-4">
                <h3 className="text-xs uppercase tracking-wider font-medium text-[#8E99A8]">
                  Direct Contact
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {/* Email */}
                  <a
                    href="mailto:askmareena@gmail.com"
                    className="flex items-center gap-3 p-3.5 rounded-sm bg-[#0E1216] border border-white/10 hover:border-white/30 text-white group transition-colors shadow-sm"
                  >
                    <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-[#080A0C] transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#8E99A8] font-medium block">
                        Email Enquiries
                      </span>
                      <span className="text-sm font-medium text-white group-hover:text-[#EAE6DF] transition-colors">
                        askmareena@gmail.com
                      </span>
                    </div>
                  </a>

                  {/* Phone & WhatsApp */}
                  <div className="p-3.5 rounded-sm bg-[#0E1216] border border-white/10 shadow-sm space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#8E99A8] font-medium block">
                          Phone & WhatsApp
                        </span>
                        <span className="text-sm font-medium text-white">
                          +971 54 265 8225
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pt-1 pl-12">
                      <a
                        href="tel:+971542658225"
                        className="text-xs font-medium px-2.5 py-1 rounded-xs bg-white/10 border border-white/15 hover:bg-white hover:text-[#080A0C] transition-colors text-white"
                      >
                        Call Direct
                      </a>
                      <a
                        href="https://wa.me/971542658225"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium px-2.5 py-1 rounded-xs bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors inline-flex items-center gap-1"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Digital Channels */}
              <div className="pt-2 border-t border-white/10 space-y-3">
                <h3 className="text-xs uppercase tracking-wider font-medium text-[#8E99A8]">
                  Official Digital Channels
                </h3>
                <div className="flex flex-col gap-2.5 text-sm">
                  <a
                    href="https://www.linkedin.com/in/mareena-tessa-thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-sm bg-[#0E1216] border border-white/10 hover:border-white/30 text-white transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                      in
                    </span>
                    <span>linkedin.com/in/mareena-tessa-thomas</span>
                  </a>

                  <a
                    href="https://www.instagram.com/mareena_tessa_thomas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-sm bg-[#0E1216] border border-white/10 hover:border-white/30 text-white transition-colors"
                  >
                    <span className="w-7 h-7 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-semibold">
                      ig
                    </span>
                    <span>@mareena_tessa_thomas</span>
                  </a>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="p-4 rounded-sm bg-[#0E1216] border border-white/10 text-xs text-[#8E99A8] leading-relaxed space-y-1">
                <div className="flex items-center gap-1.5 font-medium text-white">
                  <ShieldCheck className="w-4 h-4 text-white/80" />
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
