import React from "react";
import Link from "next/link";
import { ArrowRight, UserCheck, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";

export default function PersonalInsightCards() {
  return (
    <section className="py-16 sm:py-24 bg-[#080A0C] border-t border-white/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Who can work with me? */}
          <div className="relative p-8 sm:p-12 rounded-sm bg-[#0E1216] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-8 overflow-hidden group">
            {/* Top specular highlight edge */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-white/45 transition-colors pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5CCD6] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <UserCheck className="w-3.5 h-3.5 text-[#EAE6DF]" />
                  <span>Target Guidance</span>
                </span>
                <span className="text-xs font-serif text-white/30">01</span>
              </div>

              {/* Exact Client Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug">
                Who can work with me?
              </h2>

              {/* Exact Client Text */}
              <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                Anyone looking to open a business in the UAE or seeking expert consultation on company formation and corporate structuring. If you have a solid business idea and are ready to take the next step, I can help you make it happen.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-[#EAE6DF] hover:text-white font-medium transition-colors"
              >
                <span>Discuss your business idea</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Card 2: A little more about me… */}
          <div className="relative p-8 sm:p-12 rounded-sm bg-[#0E1216] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between space-y-8 overflow-hidden group">
            {/* Top specular highlight edge */}
            <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent group-hover:via-white/45 transition-colors pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#C5CCD6] px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#EAE6DF]" />
                  <span>Personal Background</span>
                </span>
                <span className="text-xs font-serif text-white/30">02</span>
              </div>

              {/* Exact Client Heading */}
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-snug">
                A little more about me…
              </h2>

              {/* Exact Client Text */}
              <p className="text-base sm:text-lg text-[#C5CCD6] leading-relaxed font-normal">
                I have been living in the UAE for the past 12 years, bringing with me a background in Journalism and Social Work from India. This unique combination allows me to not only understand the technical aspects of business formation but also the emotional journey behind starting a business. For many entrepreneurs, their business is like their baby – and I treat it with the care, attention, and guidance it deserves.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-[#EAE6DF] hover:text-white font-medium transition-colors"
              >
                <span>Read Mareena’s full story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
