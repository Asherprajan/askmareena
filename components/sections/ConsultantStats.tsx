import React from "react";
import Container from "@/components/ui/Container";

export default function ConsultantStats() {
  return (
    <section className="py-16 sm:py-24 bg-[#0C0F13] border-t border-b border-white/10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
          {/* Stat 1: 12+ Years in the UAE */}
          <div className="lg:px-8 first:lg:pl-0 space-y-3">
            <div className="font-serif text-4xl sm:text-5xl font-normal text-white">
              12+
            </div>
            <div className="font-serif text-lg font-normal text-[#EAE6DF]">
              Years in the UAE
            </div>
            <p className="text-sm text-[#A3ABB5] leading-relaxed">
              Living and working in the UAE
            </p>
          </div>

          {/* Stat 2: Guiding Entrepreneurs */}
          <div className="lg:px-8 space-y-3">
            <div className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight min-h-[48px] sm:min-h-[56px] flex items-end">
              Guiding Entrepreneurs
            </div>
            <p className="text-sm text-[#A3ABB5] leading-relaxed">
              From ideas to successful businesses
            </p>
          </div>

          {/* Stat 3: Practical & Straightforward */}
          <div className="lg:px-8 space-y-3">
            <div className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight min-h-[48px] sm:min-h-[56px] flex items-end">
              Practical &amp; Straightforward
            </div>
            <p className="text-sm text-[#A3ABB5] leading-relaxed">
              Support at every step
            </p>
          </div>

          {/* Stat 4: Your Goals Are My Priority */}
          <div className="lg:px-8 last:lg:pr-0 space-y-3">
            <div className="font-serif text-2xl sm:text-3xl font-normal text-white leading-tight min-h-[48px] sm:min-h-[56px] flex items-end">
              Your Goals Are My Priority
            </div>
            <p className="text-sm text-[#A3ABB5] leading-relaxed">
              Because your business matters
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
