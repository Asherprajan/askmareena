export interface FAQItem {
  id: string;
  category: "General" | "Company Formation" | "Structuring & Tax" | "Visas & Residency";
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "What does Ask Mareena do?",
    answer:
      "Ask Mareena provides personal, practical business consultancy and coordination across six core pillars: Company Formation (Mainland, Free Zones, Offshore), Corporate Structuring (Holding structures, DIFC/ADGM Foundations), Tax & Accounting (Corporate Tax, VAT, TRCs), Compliance (AML/CFT, goAML, internal audit), Visas & Residency (Golden Visas, Investor Visas), and Ongoing Corporate Services (Renewals, Amendments, Liquidation).",
  },
  {
    id: "faq-2",
    category: "General",
    question: "Who works directly on my setup?",
    answer:
      "You consult directly with Mareena Tessa Thomas. Rather than dealing with anonymous sales representatives or rotating agency staff, you receive personal guidance and consistent attention from an experienced consultant living in the UAE for over 12 years.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Are outcomes and government approvals guaranteed?",
    answer:
      "No legitimate consultant can guarantee government approvals or specific timelines. All applications are subject to competent authority approvals, security clearances, background checks, and applicable UAE regulations. What Ask Mareena guarantees is diligent preparation, proper documentation, and transparent coordination at every stage.",
  },
  {
    id: "faq-4",
    category: "Company Formation",
    question: "How do I choose between Dubai Mainland and a Free Zone?",
    answer:
      "Dubai Mainland allows your business to trade anywhere across the UAE and directly bid on government contracts, with 100% foreign ownership now permitted across most commercial and industrial activities. Free Zones provide 100% foreign ownership, import/export duty exemptions, and specialized industry clusters, but may have geographic limitations for local mainland commercial operations. We evaluate your target clientele, office needs, and commercial activities to recommend the optimal route.",
  },
  {
    id: "faq-5",
    category: "Company Formation",
    question: "What documents are required to start a company in the UAE?",
    answer:
      "Typically, individual shareholders need to provide a clear passport copy, proof of residential address, entry stamp or current UAE visa copy (if resident), passport-size photographs, and proposed trade names. Corporate shareholders require board resolutions, certificates of incorporation, and attested constitutional documents.",
  },
  {
    id: "faq-6",
    category: "Structuring & Tax",
    question: "Why should I consider a DIFC or ADGM Foundation?",
    answer:
      "DIFC and ADGM Foundations operate under English common law and provide a robust corporate vehicle to hold shares, real estate, and intellectual property. They allow founders to implement clear succession planning, avoid probate complications, protect against family disputes, and segregate business operational risks from underlying wealth.",
  },
  {
    id: "faq-7",
    category: "Structuring & Tax",
    question: "Do all UAE companies need to register for Corporate Tax?",
    answer:
      "Yes. Under UAE Corporate Tax legislation (Federal Decree-Law No. 47 of 2022), all taxable corporate persons—including Mainland entities and Free Zone companies—must register for Corporate Tax with the Federal Tax Authority (FTA) and obtain a Tax Registration Number (TRN), regardless of turnover or exemption eligibility.",
  },
  {
    id: "faq-8",
    category: "Structuring & Tax",
    question: "When is VAT registration mandatory in the UAE?",
    answer:
      "VAT registration is mandatory for any UAE business whose taxable supplies and imports exceed AED 375,000 within the previous 12-month period or are expected to exceed that threshold in the next 30 days. Businesses with taxable supplies exceeding AED 187,500 may register voluntarily.",
  },
  {
    id: "faq-9",
    category: "Visas & Residency",
    question: "Who is eligible for a UAE Golden Visa?",
    answer:
      "The UAE Golden Visa offers a 10-year residency for investors (such as real estate owners with properties valued at AED 2,000,000 or more, or business investors), entrepreneurs, exceptional talents, scientists, and senior executive leaders meeting specific salary and educational criteria. We assess your credentials against current GDRFA and ICP guidelines.",
  },
  {
    id: "faq-10",
    category: "Visas & Residency",
    question: "Can I sponsor my family under my investor or partner visa?",
    answer:
      "Yes. Once your UAE residency visa and Emirates ID are issued, you can sponsor your spouse, children, and parents, provided you meet minimum salary, housing (Ejari), and document attestation requirements specified by immigration authorities.",
  },
  {
    id: "faq-11",
    category: "General",
    question: "How do I get started?",
    answer:
      "The process begins by submitting an enquiry through our contact form detailing your proposed activities, timeline, and current requirements. Mareena reviews your submission and schedules an initial consultation to map out the legal, licensing, and structural requirements for your venture.",
  },
];
