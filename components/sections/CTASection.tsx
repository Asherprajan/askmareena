import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCtaText?: string;
}

export default function CTASection({
  title = "Tell me what you want to build in the UAE.",
  description = "Whether you are establishing a new commercial trade license, consolidating group holdings through a DIFC Foundation, or registering for Corporate Tax, begin with straight-talking guidance.",
  primaryCtaText = "Ask Mareena",
}: CTASectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#080A0C] border-t border-white/10 text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/5 blur-[120px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <Container size="narrow" className="relative z-10 text-center space-y-8">
        {/* Founder avatar badge */}
        <div className="inline-flex items-center gap-3 p-1.5 pr-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
            <Image
              src="/images/brand/mareena-tessa-thomas.jpg"
              alt="Mareena Tessa Thomas"
              fill
              sizes="32px"
              className="object-cover"
            />
          </div>
          <span className="text-xs uppercase tracking-wider text-[#C5A880] font-medium">
            Direct Consultation with Mareena
          </span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white max-w-2xl mx-auto leading-[1.18]">
          {title}
        </h2>

        <p className="text-base sm:text-lg text-[#A3ABB5] max-w-xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Button
            href="/contact"
            variant="accent"
            size="lg"
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto shadow-md"
          >
            {primaryCtaText}
          </Button>

          <Button
            href="/services"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-[#121517]"
          >
            Explore Services
          </Button>
        </div>

        <p className="text-xs text-[#7A8291] pt-4">
          Services are subject to authority approvals, eligibility, and applicable UAE regulations.
        </p>
      </Container>
    </section>
  );
}
