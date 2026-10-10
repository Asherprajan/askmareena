export interface SubService {
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  id: string; // e.g. "01"
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopeItems: string[];
  subServices: SubService[];
  targetAudience: string[];
  engagementSteps: string[];
  importantConsiderations: string[];
  faqs?: { question: string; answer: string }[];
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "corporate-structuring-company-formation",
    id: "01",
    title: "Corporate Structuring & Company Formation",
    shortDescription:
      "Guidance on selecting the right structure and jurisdiction, setting up UAE mainland, free zone and offshore entities, and navigating the legal and procedural requirements of establishment.",
    fullDescription:
      "Guidance on selecting the right structure and jurisdiction, setting up UAE mainland, free zone and offshore entities, and navigating the legal and procedural requirements of establishment. Mareena provides comprehensive, straight-talking guidance across Dubai Mainland, UAE Free Zones, and Offshore jurisdictions, ensuring your business is structurally sound from day one.",
    scopeItems: [
      "Selection of optimal jurisdiction (Dubai Mainland vs. Free Zones vs. Offshore)",
      "Commercial, professional, and industrial trade licensing coordination",
      "100% foreign ownership advisory under UAE commercial company laws",
      "Holding entity architecture and SPV structuring",
      "Memorandum of Association (MOA), resolutions, and shareholder agreements",
      "End-to-end procedural coordination with DET and Free Zone registries",
      "Corporate bank account opening guidance and establishment support",
    ],
    subServices: [
      {
        title: "Dubai Mainland Entities",
        description:
          "Full commercial freedom to trade directly within the local UAE market and participate in government tenders with tailored ownership structures.",
      },
      {
        title: "UAE Free Zones",
        description:
          "Strategic entity formation within specialized free zones offering 100% foreign ownership, zero import/export duties, and focused industry ecosystems.",
      },
      {
        title: "Offshore Entities",
        description:
          "Discreet, flexible international business vehicles for cross-border holding, intellectual property protection, and global operations.",
      },
      {
        title: "Corporate Structuring & SPVs",
        description:
          "Multi-layered corporate architectures, holding companies, and shareholder agreements designed for risk mitigation and asset protection.",
      },
    ],
    targetAudience: [
      "Entrepreneurs launching their first business venture in the UAE",
      "International companies expanding their commercial presence to Dubai and the Middle East",
      "Founders seeking to optimize existing corporate structures across mainland and free zones",
      "Investors and family businesses requiring dedicated holding vehicles",
    ],
    engagementSteps: [
      "Initial consultation to evaluate your business model, target market, and activity requirements",
      "Comparative jurisdiction analysis with transparent fee and timeline outlines",
      "Trade name reservation and preliminary authority approvals",
      "Drafting and legal execution of constitutional documents and MOA",
      "Issuance of official trade license and operational establishment card",
    ],
    importantConsiderations: [
      "Trade licenses and corporate approvals are granted at the discretion of competent UAE government authorities.",
      "Capital requirements, regulatory clearances, and costs vary based on chosen activities and licensing bodies.",
      "Services represent professional business consultancy, structuring guidance, and liaison coordination.",
    ],
    faqs: [
      {
        question: "Should I establish in Dubai Mainland or a Free Zone?",
        answer:
          "The decision depends on where your clients are located, whether you need a physical retail or commercial presence in the mainland, and your specific business activities. Mainland entities can trade anywhere in the UAE and bid on government contracts, while Free Zones offer distinct sector clusters and streamlined operations. During our consultation, we analyze your exact model to determine the most cost-effective and operationally sound choice.",
      },
      {
        question: "Can I hold 100% ownership of my UAE company?",
        answer:
          "Yes. Under the amended UAE Commercial Companies Law, 100% foreign ownership is permitted for the vast majority of commercial and industrial activities on the Mainland, and 100% ownership has always been standard in UAE Free Zones.",
      },
    ],
  },
  {
    slug: "tax-treaties-consulting",
    id: "02",
    title: "Business Consulting with the Country’s Tax Treaties",
    shortDescription:
      "Business consulting with consideration of the relevant country’s tax treaties, helping clients understand how international structures and cross-border business arrangements may interact with applicable treaty frameworks.",
    fullDescription:
      "Business consulting with consideration of the relevant country’s tax treaties, helping clients understand how international structures and cross-border business arrangements may interact with applicable treaty frameworks. Establishing a business in the UAE often involves cross-border trade, intellectual property, or overseas shareholders. Mareena provides structured consulting to ensure your UAE presence harmonizes with international tax treaty networks and bilateral agreements.",
    scopeItems: [
      "Double Taxation Avoidance Agreement (DTAA) network analysis",
      "Cross-border business arrangement review and entity interaction",
      "Permanent Establishment (PE) exposure and risk assessment",
      "Tax Residency Certificate (TRC) requirements and application guidance",
      "Alignment with UAE Corporate Tax regulations and international substance standards",
      "Withholding tax implications on cross-border payments, dividends, and royalties",
    ],
    subServices: [
      {
        title: "Tax Treaty Interaction",
        description:
          "Evaluating how bilateral Double Taxation Avoidance Agreements apply between the UAE and your home jurisdiction.",
      },
      {
        title: "Cross-Border Structuring",
        description:
          "Designing international corporate relationships to avoid double taxation and regulatory friction across jurisdictions.",
      },
      {
        title: "Permanent Establishment Review",
        description:
          "Assessing management control, physical presence, and operational substance to minimize unplanned tax liabilities.",
      },
      {
        title: "Tax Residency Certificates (TRC)",
        description:
          "Assistance with obtaining Ministry of Finance TRCs for corporate entities and individual residents.",
      },
    ],
    targetAudience: [
      "International business owners operating across multiple jurisdictions",
      "Multinational companies establishing UAE regional headquarters or trading subsidiaries",
      "Expatriate entrepreneurs seeking clarity on cross-border dividend and profit repatriation",
      "Foreign investors managing global assets through UAE structures",
    ],
    engagementSteps: [
      "Detailed intake on existing overseas corporate structure, residency, and transaction flows",
      "Review of applicable bilateral tax treaties between the UAE and relevant jurisdictions",
      "Formulation of practical structuring recommendations to optimize compliance",
      "Coordination of required documentation, substance proofs, and TRC applications",
    ],
    importantConsiderations: [
      "Tax treaty interpretation depends on bilateral conventions and domestic legislation in each respective country.",
      "Consultancy provides strategic business guidance; independent legal and tax opinions should be obtained for specific statutory filings in overseas jurisdictions.",
    ],
    faqs: [
      {
        question: "How do UAE tax treaties protect international businesses?",
        answer:
          "The UAE has signed over 140 Double Taxation Avoidance Agreements (DTAAs) globally. These treaties prevent businesses and individuals from being taxed twice on the same income across different jurisdictions, clarifying tax taxing rights, reducing withholding tax rates on cross-border payments, and facilitating global trade.",
      },
      {
        question: "What is required to qualify for UAE Tax Residency Certificate (TRC)?",
        answer:
          "To obtain a corporate TRC from the UAE Federal Tax Authority, an entity typically must demonstrate operational existence in the UAE for at least one year, submit audited financial statements, provide a valid commercial lease (Ejari), and demonstrate local economic substance.",
      },
    ],
  },
  {
    slug: "feasibility-services",
    id: "03",
    title: "Feasibility Services",
    shortDescription:
      "Practical feasibility support to assess business ideas, market potential, operational requirements and suitable setup options before moving forward with a UAE business venture.",
    fullDescription:
      "Practical feasibility support to assess business ideas, market potential, operational requirements and suitable setup options before moving forward with a UAE business venture. Before committing capital and resources to a new enterprise in the UAE, having an objective, experienced perspective on market realities, regulatory hurdles, and startup costs is essential for long-term success.",
    scopeItems: [
      "Business model evaluation within the context of the UAE commercial market",
      "Market potential, competition overview, and customer segmentation",
      "Regulatory and operational requirements by activity category",
      "Comparative setup cost estimations across Mainland and Free Zones",
      "Physical office space (Ejari) vs. flexi-desk feasibility and staffing quotas",
      "Risk assessment and procedural roadmap prior to entity incorporation",
    ],
    subServices: [
      {
        title: "Business Idea Assessment",
        description:
          "Constructive evaluation of your commercial concept against UAE market dynamics and regulatory standards.",
      },
      {
        title: "Market Potential & Demographics",
        description:
          "Analysis of target audience, competitive landscape, and local demand indicators in Dubai and the wider Emirates.",
      },
      {
        title: "Operational & Regulatory Feasibility",
        description:
          "Mapping mandatory external approvals, professional qualifications, and operational prerequisites.",
      },
      {
        title: "Setup Cost & Budget Modeling",
        description:
          "Realistic projections for licensing fees, office leases, visas, compliance, and ongoing operating overheads.",
      },
    ],
    targetAudience: [
      "Entrepreneurs vetting a new concept before committing initial capital",
      "Foreign companies testing feasibility before full-scale Middle East expansion",
      "Investors evaluating prospective business opportunities or partnerships in Dubai",
      "Founders comparing different business models and jurisdiction costs",
    ],
    engagementSteps: [
      "Discovery session to review the proposed business idea, target market, and commercial objectives",
      "Comprehensive feasibility investigation covering regulations, market benchmarks, and setup requirements",
      "Preparation of a structured feasibility memo with practical setup options",
      "Review consultation to align on findings and define next operational steps",
    ],
    importantConsiderations: [
      "Feasibility studies provide practical business advisory and market insights; commercial outcomes remain dependent on business execution and market factors.",
    ],
    faqs: [
      {
        question: "Why is a feasibility assessment essential before setting up in Dubai?",
        answer:
          "The UAE business landscape is dynamic and regulated by specific activity lists. A preliminary feasibility check ensures your intended business model is legally viable under standard licensing categories, prevents unexpected external ministry approvals or capital requirements, and establishes a realistic startup and operating budget.",
      },
    ],
  },
  {
    slug: "content-writing",
    id: "04",
    title: "Content Writing",
    shortDescription:
      "Professional business content writing for company profiles, websites, presentations, proposals and other corporate communication, with clear and engaging messaging tailored to your brand.",
    fullDescription:
      "Professional business content writing for company profiles, websites, presentations, proposals and other corporate communication, with clear and engaging messaging tailored to your brand. In the UAE's competitive business ecosystem, establishing credibility with government authorities, commercial banks, institutional partners, and clients requires authoritative, articulate, and compelling written communication.",
    scopeItems: [
      "Corporate company profiles tailored for banking compliance, vendor registrations, and client introductions",
      "High-converting website copy for business landing pages and service directories",
      "Investor pitch decks, executive summaries, and presentation narratives",
      "Commercial proposals, RFPs, and tender response writing",
      "Corporate communication guidelines and brand tone of voice",
      "Executive bios, LinkedIn profiles, and leadership positioning",
    ],
    subServices: [
      {
        title: "Company Profiles & Dossiers",
        description:
          "Authoritative corporate profiles specifically crafted to meet UAE bank due diligence and stakeholder review standards.",
      },
      {
        title: "Website Copywriting",
        description:
          "Clear, engaging web messaging that explains your value proposition and builds customer trust.",
      },
      {
        title: "Presentations & Pitch Decks",
        description:
          "Compelling presentation content for investor pitches, board reviews, and sales meetings.",
      },
      {
        title: "Proposals & Corporate Documents",
        description:
          "High-impact commercial proposals, client agreements, and executive business correspondence.",
      },
    ],
    targetAudience: [
      "Newly established UAE companies preparing for corporate bank account compliance and market launch",
      "Growing businesses refreshing their company profiles, proposals, and digital presence",
      "Entrepreneurs preparing investor presentations or venture capital pitch materials",
      "Consultancies and corporate service providers needing polished client-facing documentation",
    ],
    engagementSteps: [
      "Briefing session to identify your company's core strengths, target audience, and brand voice",
      "Review of existing materials, industry benchmarks, and specific audience needs (banks, investors, clients)",
      "Drafting high-impact corporate copy with clear structure and compelling messaging",
      "Collaborative review and finalization of polished, ready-to-deploy content",
    ],
    importantConsiderations: [
      "Content writing provides executive messaging and editorial drafting tailored to client direction and brand goals.",
    ],
    faqs: [
      {
        question: "Why do UAE banks require a detailed company profile?",
        answer:
          "UAE banks operate under strict international AML and KYC compliance standards. A clear, professional company profile explaining your business activities, shareholder background, supply chain, counterparties, and anticipated cash flows is one of the most critical documents for opening a corporate bank account smoothly.",
      },
    ],
  },
  {
    slug: "golden-visa-assistance-support",
    id: "05",
    title: "Golden Visa Assistance & Support",
    shortDescription:
      "Professional guidance and end-to-end assistance for UAE Golden Visa applications across all eligible categories, helping individuals, investors, entrepreneurs, professionals, and families navigate the process smoothly and confidently.",
    fullDescription:
      "Secure your long-term future in the UAE with dedicated, end-to-end Golden Visa guidance. Mareena provides professional guidance and end-to-end assistance for UAE Golden Visa applications across all eligible categories, helping individuals, investors, entrepreneurs, professionals, and families navigate the process smoothly and confidently. From initial eligibility assessment and dossier compilation to government approvals, VIP medical testing, and family sponsorship, we handle every milestone with precision and transparency.",
    scopeItems: [
      "Comprehensive Golden Visa eligibility assessment across all active UAE regulatory routes",
      "Assistance across all UAE Golden Visa categories (Property Investors, Entrepreneurs, Specialized Talents, Executive Professionals, and Outstanding Students)",
      "Meticulous documentation review, translation advisory, and application dossier compilation",
      "Government approval liaising and proactive follow-up with ICP and Dubai GDRFA authorities",
      "VIP medical fitness test appointment and Emirates ID biometric coordination",
      "Family sponsorship and dependent visa assistance for spouses, children of any age, and parents",
      "Visa status amendment, in-country adjustment, or transition from existing corporate/employment visas",
    ],
    subServices: [
      {
        title: "Golden Visa Eligibility Assessment",
        description:
          "Pre-screening of your credentials, investment assets, or professional qualifications against the latest ICP and GDRFA qualification benchmarks.",
      },
      {
        title: "Assistance Across All UAE Golden Visa Categories",
        description:
          "Tailored guidance for real estate investors (AED 2M+), entrepreneurs, senior executives (AED 30k+ salary), healthcare experts, engineers, and creatives.",
      },
      {
        title: "Documentation & Application Processing Support",
        description:
          "Rigorous verification of property title deeds, bank statements, Ministry of Education equivalency letters, and attested qualification certificates.",
      },
      {
        title: "Government Approval & Application Follow-up",
        description:
          "Direct administrative tracking, authority coordination, and swift resolution of any additional information requests from immigration departments.",
      },
      {
        title: "Medical Fitness & Emirates ID Coordination",
        description:
          "Seamless scheduling for express medical screenings and biometric appointments to finalize your Emirates ID without unnecessary delays.",
      },
      {
        title: "Family Sponsorship & Dependent Visa Assistance",
        description:
          "Turnkey visa processing for family dependents, extending 10-year residency security to your spouse, children, and parents under your sponsorship.",
      },
    ],
    targetAudience: [
      "Property investors with UAE real estate holdings valued at AED 2,000,000 or more",
      "Senior executives, managers, and specialized professionals earning AED 30,000+ monthly with accredited degrees",
      "Entrepreneurs, business owners, and startup founders with accredited commercial enterprises",
      "Doctors, engineers, researchers, and creative talents seeking independent 10-year residency",
      "Families seeking long-term UAE residency security without relying on corporate employment sponsorship",
    ],
    engagementSteps: [
      "Eligibility review: Evaluating your background, salary, property investments, or creative/scientific credentials",
      "Dossier preparation: Assembling, translating, and verifying mandatory certificates, bank statements, and attestations",
      "Nomination submission: Filing the initial nomination with ICP or Dubai GDRFA channels for preliminary clearance",
      "Entry permit & medicals: Securing the entry permit, coordinating fast-track medical fitness exams and biometric captures",
      "Residency issuance & family sponsorship: Finalizing the 10-year Golden Visa residency sticker/ID and onboarding family dependents",
    ],
    importantConsiderations: [
      "UAE Golden Visa approvals and category eligibility guidelines are determined at the discretion of the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and the General Directorate of Residency and Foreigners Affairs (GDRFA).",
      "Salary criteria, educational degree equivalencies from the UAE Ministry of Education, and property valuation benchmarks must satisfy official standards.",
      "Services represent professional business consultancy, documentation preparation, and administrative coordination; official government approvals cannot be guaranteed by any third party.",
    ],
    faqs: [
      {
        question: "What are the primary benefits of holding a UAE Golden Visa?",
        answer:
          "The UAE Golden Visa provides 10 years of self-sponsored residency without needing an employer or local national sponsor. It allows you to stay outside the UAE for more than 6 months without your residency becoming invalid, sponsor family members (including spouses and children of any age), sponsor unlimited domestic staff, and enjoy long-term stability in the Emirates.",
      },
      {
        question: "Can real estate investors qualify with mortgaged or off-plan properties?",
        answer:
          "Yes, provided the total property value meets or exceeds AED 2,000,000 and the equity paid satisfies current Dubai Land Department (DLD) or relevant emirate land registry criteria. Specific bank letters and NOCs may be required for mortgaged assets.",
      },
      {
        question: "What are the requirements for skilled professionals under the Golden Visa?",
        answer:
          "Professionals generally require a valid UAE employment contract, a job classification within MOHRE Skill Level 1 or 2, a minimum monthly salary of AED 30,000, a bachelor's degree (or higher) with UAE Ministry of Education equivalency, and 6 months of bank statements.",
      },
      {
        question: "Can I sponsor my spouse, children, and parents?",
        answer:
          "Yes. A primary Golden Visa holder can sponsor their spouse and children regardless of age, as well as their parents for a 10-year renewable residency. Furthermore, in the event of the primary visa holder passing away, family members are permitted to remain on their Golden Visa until the end of its duration.",
      },
    ],
  },
];

