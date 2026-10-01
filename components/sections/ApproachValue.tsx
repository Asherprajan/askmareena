import React from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { MessageSquare, HeartHandshake, Compass, Layers } from "lucide-react";

const values = [
  {
    icon: MessageSquare,
    title: "Straight-Talking Advice",
    description:
      "Clear, honest recommendations without hidden clauses or sales pitches. We outline what is realistic, what is compliant, and what best suits your budget.",
  },
  {
    icon: HeartHandshake,
    title: "Personal Attention",
    description:
      "You engage directly with Mareena. Your questions are answered personally, and your venture receives dedicated strategic focus rather than cookie-cutter templates.",
  },
  {
    icon: Compass,
    title: "Friction & Stress Reduction",
    description:
      "Managing municipal filings, drafting legal translations, and coordinating with ministries can be exhausting. We streamline the steps to keep your momentum high.",
  },
  {
    icon: Layers,
    title: "Built for Longevity",
    description:
      "We don't just secure a trade license for today; we ensure your corporate foundation is ready for corporate tax filings, bank account opening, and future expansion.",
  },
];

export default function ApproachValue() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0F13] border-t border-white/10">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <SectionHeading
            align="center"
            eyebrow="The Approach"
            title="Why founders choose to consult directly with Mareena."
            description="A setup experience grounded in transparency, personal accountability, and deep practical familiarity with UAE commercial regulations."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                className="space-y-4 p-6 sm:p-7 bg-[#101419] rounded-sm border border-white/10 hover:border-white/25 transition-colors"
              >
                <div className="w-10 h-10 rounded-xs bg-white/5 border border-white/15 flex items-center justify-center text-white">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl font-normal text-white">
                  {v.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A3ABB5] leading-relaxed">
                  {v.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
