import React from "react";
import Image from "next/image";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

export default function PersonalConsultationSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#080A0C] scroll-mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Access & Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5CCD6]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EAE6DF]" />
                <span>Direct Access · Ask Mareena</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white leading-tight">
                Book a Consultation
              </h2>

              <p className="text-base text-[#C5CCD6] leading-relaxed">
                Connect directly with Mareena Tessa Thomas for straightforward guidance on your UAE business setup and corporate structure.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-2">
              <a
                href="tel:+971525839925"
                className="flex items-center gap-4 p-4 rounded-xs bg-[#0E1216] border border-white/10 hover:border-white/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#EAE6DF] group-hover:bg-white group-hover:text-[#080A0C] transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E99A8] font-medium">
                    Phone / WhatsApp
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#EAE6DF] transition-colors">
                    +971 52 583 9925
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E99A8] group-hover:text-white transition-colors" />
              </a>

              <a
                href="mailto:askmareena@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xs bg-[#0E1216] border border-white/10 hover:border-white/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#EAE6DF] group-hover:bg-white group-hover:text-[#080A0C] transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-wider text-[#8E99A8] font-medium">
                    Direct Email
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#EAE6DF] transition-colors truncate">
                    askmareena@gmail.com
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#8E99A8] group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Personal Consultant Note */}
            <div className="p-5 rounded-xs bg-[#0C0F13] border border-white/10 flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src="/images/brand/mareena-tessa-thomas.jpg"
                  alt="Mareena Tessa Thomas"
                  fill
                  sizes="48px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <div className="font-serif text-sm font-medium text-white">
                  Mareena Tessa Thomas
                </div>
                <div className="text-xs text-[#8E99A8]">
                  Personal Consultation · 12+ Years in the UAE
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-xs bg-[#0E1216] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-normal text-white">
                  Send a Consultation Enquiry
                </h3>
                <p className="text-xs text-[#8E99A8] mt-1">
                  Provide your business requirement below to receive direct guidance.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
