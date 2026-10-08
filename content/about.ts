export interface AboutContent {
  brand: string;
  intro: {
    headline: string;
    lead: string;
  };
  supportingEntrepreneurs: {
    statement: string;
    commitment: string;
  };
  hubCompany: {
    overview: string;
    synergy: string;
  };
  whoCanWorkWithMe: {
    heading: string;
    description: string;
  };
  aLittleMoreAboutMe: {
    heading: string;
    background: string;
    quote: string;
  };
  letsConnect: {
    heading: string;
    connectionText: string;
    linkedInPrompt: {
      beforeLink: string;
      linkText: string;
      afterLink: string;
      url: string;
    };
  };
}

export const aboutData: AboutContent = {
  brand: "Ask Mareena",
  intro: {
    headline:
      "Hi, I’m Mareena Tessa Thomas – a straight-talking Business Consultant specializing in Corporate Structuring & Company Formation in the UAE.",
    lead:
      "I work with ambitious individuals who are ready to move forward but need that first guiding hand to set up their business here. Helping people turn their ideas into reality is not just my profession – it’s my passion.",
  },
  supportingEntrepreneurs: {
    statement:
      "I love supporting entrepreneurs who have a clear vision and are committed to achieving their goals.",
    commitment:
      "Whether it’s guiding them through the legal and procedural steps or helping them structure their business for success, I’m here to make the process smooth, practical, and stress-free.",
  },
  hubCompany: {
    overview:
      "I am also the Founder of 360° HUB L.L.C., UAE, a business consultancy providing the same core services I personally specialize in, including company formation, corporate structuring, tax and compliance, accounting and bookkeeping, AML support, residency and visa services, and ongoing corporate support.",
    synergy:
      "Through Ask Mareena and 360° HUB, I bring together personal guidance and practical business expertise to support entrepreneurs throughout their UAE business journey.",
  },
  whoCanWorkWithMe: {
    heading: "Who can work with me?",
    description:
      "Anyone looking to open a business in the UAE or seeking expert consultation on company formation and corporate structuring. If you have a solid business idea and are ready to take the next step, I can help you make it happen.",
  },
  aLittleMoreAboutMe: {
    heading: "A little more about me…",
    background:
      "I have been living in the UAE for the past 12 years, bringing with me a background in Journalism and Social Work from India. This unique combination allows me to not only understand the technical aspects of business formation but also the emotional journey behind starting a business.",
    quote:
      "For many entrepreneurs, their business is like their baby – and I treat it with the care, attention, and guidance it deserves.",
  },
  letsConnect: {
    heading: "Let’s Connect",
    connectionText:
      "I believe in the power of connection and collaboration. If you’re looking for someone who combines professional expertise with a proactive, solutions-oriented mindset, let’s explore how we can work together.",
    linkedInPrompt: {
      beforeLink: "You can also learn more about my experience and professional insights on ",
      linkText: "LinkedIn",
      afterLink: ".",
      url: "https://www.linkedin.com/in/mareena-tessa-thomas/",
    },
  },
};
