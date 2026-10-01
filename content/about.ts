export interface AboutContent {
  name: string;
  role: string;
  tagline: string;
  introParagraphs: string[];
  backgroundNarrative: {
    headline: string;
    subheadline: string;
    paragraphs: string[];
  };
  principles: {
    title: string;
    description: string;
  }[];
  statItems: {
    label: string;
    value: string;
    caption: string;
  }[];
  personalNote: {
    quote: string;
    attribution: string;
  };
}

export const aboutData: AboutContent = {
  name: "Mareena Tessa Thomas",
  role: "Business Consultant — Corporate Structuring & Company Formation",
  tagline: "Straight-talking guidance for ambitious entrepreneurs building in the UAE.",
  introParagraphs: [
    "Establishing a business in the United Arab Emirates is an extraordinary opportunity, but navigating the multitude of jurisdictions, legal frameworks, and regulatory filings can be overwhelming without clear, honest advice.",
    "Mareena Tessa Thomas is an independent UAE business consultant specializing in Corporate Structuring and Company Formation. She works directly with ambitious individuals who have a clear vision and are committed to taking the next step, providing the structured clarity and personal attention needed to bring their ventures to life.",
  ],
  backgroundNarrative: {
    headline: "Procedural precision meets human-centered understanding.",
    subheadline: "A unique blend of journalism, social advocacy, and 12+ years of UAE business experience.",
    paragraphs: [
      "Mareena has lived in the United Arab Emirates for over 12 years. Over this decade-plus journey, she has witnessed the remarkable evolution of the nation's commercial laws, the expansion of world-class free zones, and the introduction of transformative tax and compliance systems.",
      "Her professional foundation originates in Journalism and Social Work from India. This dual background provides an uncommon perspective in the corporate consulting sector: journalism instilled an investigative rigor, an insistence on absolute clarity, and the ability to dissect complex legal directives into clear, actionable steps. Meanwhile, her background in social work established an innate empathy for the human journey.",
      "Starting a business is rarely just a transaction—it is a deeply personal, often stressful milestone involving dreams, capital, and family relocation. By understanding both the procedural technicalities and the emotional weight of starting up, Mareena ensures every client feels supported, informed, and in control at every stage.",
    ],
  },
  principles: [
    {
      title: "Straight-Talking Clarity",
      description:
        "No bureaucratic jargon, hidden caveats, or false promises. You receive transparent, objective advice on what structure genuinely serves your business model.",
    },
    {
      title: "Personal Guidance",
      description:
        "You deal directly with Mareena rather than being passed between anonymous account managers. Your business is treated with personal care and high attention to detail.",
    },
    {
      title: "Friction & Stress Reduction",
      description:
        "Government paperwork, notarization, and banking coordination can consume valuable founder energy. Mareena handles the coordination so you can focus on building.",
    },
    {
      title: "Long-Term Structuring",
      description:
        "A business setup should not only work on Day 1—it must protect your assets, withstand regulatory scrutiny, and accommodate future investment or succession.",
    },
  ],
  statItems: [
    {
      value: "12+",
      label: "Years in UAE",
      caption: "In-depth practical experience across UAE business and regulatory changes.",
    },
    {
      value: "6",
      label: "Core Service Pillars",
      caption: "From initial formation and structuring to corporate tax and long-term maintenance.",
    },
    {
      value: "1-on-1",
      label: "Direct Consultation",
      caption: "Bespoke personal advisory without anonymous intermediary layers.",
    },
  ],
  personalNote: {
    quote:
      "When someone decides to launch a company in the UAE, they are putting their ambition and future on the line. My mission is to give them straight answers, remove the anxiety of the unknown, and structure their venture for lasting stability.",
    attribution: "Mareena Tessa Thomas",
  },
};
