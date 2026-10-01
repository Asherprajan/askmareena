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
    slug: "company-formation",
    id: "01",
    title: "Company Formation",
    shortDescription:
      "Strategic setup across Dubai Mainland, Free Zones, and Offshore jurisdictions with end-to-end licensing and establishment coordination.",
    fullDescription:
      "Establishing a legal entity in the UAE requires selecting the right jurisdiction, licensing category, and corporate structure for your specific operational goals. Mareena provides hands-on, practical guidance from initial jurisdiction assessment through to shareholder coordination and complete trade license issuance.",
    scopeItems: [
      "Dubai Mainland company setup and Department of Economy and Tourism (DET) coordination",
      "UAE Free Zone selection and registration across premier free zones",
      "Offshore entity formation for international asset and holding requirements",
      "Commercial, professional, and industrial licensing coordination",
      "Business activity selection aligned with regulatory classifications",
      "Shareholder documentation, resolutions, and registry coordination",
      "Comprehensive establishment support and initial operational registration",
    ],
    subServices: [
      {
        title: "Dubai Mainland Formation",
        description:
          "Full commercial freedom to trade directly within the local UAE market and participate in government tenders with 100% foreign ownership on most commercial and industrial activities.",
      },
      {
        title: "UAE Free Zones",
        description:
          "Tailored establishment across UAE free zones, offering 100% foreign ownership, import/export duty exemptions, and specialized sector ecosystems.",
      },
      {
        title: "Offshore Structures",
        description:
          "Discreet, flexible international business company (IBC) vehicles for cross-border holding, intellectual property protection, and global operations.",
      },
      {
        title: "Licensing & Activity Structuring",
        description:
          "Careful evaluation and selection of permitted commercial, professional, or industrial activities to ensure ongoing compliance and regulatory alignment.",
      },
      {
        title: "Shareholder Coordination & Establishment",
        description:
          "Preparation of constitutional documents, drafting shareholder agreements, managing notarization, and coordinating with licensing authorities.",
      },
    ],
    targetAudience: [
      "Entrepreneurs launching their first business in the UAE",
      "International business owners establishing a regional commercial presence",
      "Founders transitioning between Free Zone and Mainland jurisdictions",
      "Investors requiring specialized corporate holding or trading vehicles",
    ],
    engagementSteps: [
      "Initial consultation to understand your business model, activities, and commercial goals",
      "Jurisdiction evaluation comparing Mainland, Free Zone, and Offshore options",
      "Trade name reservation and preliminary authority initial approvals",
      "Drafting and notarization of the Memorandum of Association (MOA) and legal documents",
      "Securing the official Trade License and establishment card registration",
    ],
    importantConsiderations: [
      "All company formations are subject to regulatory authority approvals, activity eligibility, and applicable UAE commercial company laws.",
      "Licensing fees, capital requirements, and processing durations vary depending on the chosen jurisdiction, activity class, and government department requirements.",
      "Services represent professional business consultancy, structuring guidance, and liaison coordination; outcomes depend on competent authority approvals.",
    ],
    faqs: [
      {
        question: "Should I choose Dubai Mainland or a Free Zone?",
        answer:
          "The decision depends on where your clients are located, whether you need a physical office in the mainland, and your specific business activities. Mainland entities can trade anywhere in the UAE and bid on government contracts, while Free Zones offer distinct sector clusters and specialized regulatory frameworks. During our consultation, we analyze your exact business model to determine the most cost-effective and operationally sound choice.",
      },
      {
        question: "How long does company formation typically take in the UAE?",
        answer:
          "Timelines vary depending on the chosen jurisdiction, licensing authority, required security approvals, and whether external ministry clearances are needed for your activities. Free zone setups may conclude in days, whereas mainland entities with specialized activity approvals require longer coordination. Exact timeframes are determined by competent government authorities.",
      },
    ],
  },
  {
    slug: "corporate-structuring",
    id: "02",
    title: "Corporate Structuring",
    shortDescription:
      "Bespoke holding structures, DIFC and ADGM Family Foundations, and family office coordination for long-term governance and asset protection.",
    fullDescription:
      "Sound corporate structuring protects business assets, streamlines ownership transitions, and provides sustainable governance for multi-generational wealth and corporate groups. Mareena guides clients in evaluating holding companies, specialized financial free zone foundations, and restructuring frameworks tailored to UAE regulations.",
    scopeItems: [
      "Holding company structuring and multi-entity group organization",
      "DIFC Family Foundations setup and governance coordination",
      "ADGM Family Foundations establishment and asset consolidation",
      "Family Office structuring support and operational coordination",
      "Corporate restructuring, share reallocations, and reorganization coordination",
    ],
    subServices: [
      {
        title: "Holding Structures",
        description:
          "Segregating operating liabilities from underlying assets through centralized holding entities in optimal UAE jurisdictions.",
      },
      {
        title: "DIFC Family Foundations",
        description:
          "Common law foundation vehicles registered in the Dubai International Financial Centre (DIFC) for wealth preservation, succession planning, and estate governance.",
      },
      {
        title: "ADGM Family Foundations",
        description:
          "Robust legal entities established in Abu Dhabi Global Market (ADGM) providing succession certainty, asset protection, and flexible governance bylaws.",
      },
      {
        title: "Family Office Support",
        description:
          "Structuring private family offices to coordinate investment holdings, real estate portfolios, and operational companies under unified oversight.",
      },
      {
        title: "Corporate Restructuring Coordination",
        description:
          "Guiding existing businesses through share transfers, capital restructuring, board reconfigurations, and entity consolidations.",
      },
    ],
    targetAudience: [
      "Business owners with multiple operating entities seeking consolidated ownership",
      "High-net-worth individuals and families seeking succession planning and asset protection",
      "Entrepreneurs planning equity expansion, investor entry, or group reorganization",
    ],
    engagementSteps: [
      "Comprehensive review of existing assets, operating entities, and long-term succession objectives",
      "Comparative analysis of DIFC, ADGM, and onshore holding alternatives",
      "Charter and bylaw design in alignment with family governance principles and applicable laws",
      "Authority submission and coordination of foundation or holding registration",
      "Asset transfer coordination and ongoing governance framework implementation",
    ],
    importantConsiderations: [
      "Establishment of foundations and specialized holding vehicles is governed by respective financial center regulations (DIFC/ADGM) and common law principles.",
      "Structuring guidance constitutes business consultancy and coordination; formal legal opinions should be verified with licensed legal counsel where required.",
      "Registration timelines and ongoing regulatory filings depend on the chosen jurisdiction's registrar of companies.",
    ],
    faqs: [
      {
        question: "What is the primary benefit of a DIFC or ADGM Foundation?",
        answer:
          "DIFC and ADGM Foundations combine the asset protection of a trust with the legal personality of a company under English common law principles. They allow founders to retain control over governance while shielding family assets from probate delays, forced heirship disputes, and external business liabilities.",
      },
      {
        question: "Can an existing UAE business be moved under a new holding structure?",
        answer:
          "Yes, existing operating companies can be restructured so that shares are held by a newly formed UAE holding company or foundation. This requires coordinating share transfers and authority amendments across the relevant licensing departments.",
      },
    ],
  },
  {
    slug: "tax-accounting",
    id: "03",
    title: "Tax & Accounting",
    shortDescription:
      "End-to-end Corporate Tax and VAT registration, filing coordination, bookkeeping, and Tax Residency Certificates.",
    fullDescription:
      "With the introduction of UAE Federal Corporate Tax and established VAT frameworks, tax compliance is vital for every UAE operating entity. Mareena coordinates registration, periodic filings, bookkeeping, and Tax Residency Certificates, ensuring your business stays fully compliant with Federal Tax Authority (FTA) requirements.",
    scopeItems: [
      "Corporate Tax registration with the Federal Tax Authority (FTA)",
      "Corporate Tax return preparation and filing coordination",
      "Corporate Tax advisory coordination and qualifying income analysis",
      "VAT registration (mandatory and voluntary thresholds)",
      "Periodic VAT return filing and reconciliation",
      "VAT advisory and transaction coordination",
      "Cloud bookkeeping and financial record maintenance",
      "Annual accounting and financial statement coordination",
      "Tax Residency Certificate (TRC) applications for individuals and corporates",
    ],
    subServices: [
      {
        title: "Corporate Tax Registration & Filing",
        description:
          "Ensuring your business registers within statutory deadlines with the FTA and coordinating annual corporate tax returns under Federal Decree-Law No. 47 of 2022.",
      },
      {
        title: "VAT Registration & Filing",
        description:
          "Determining VAT registration requirements, preparing monthly or quarterly return submissions, and managing input tax credits.",
      },
      {
        title: "Bookkeeping & Accounting Coordination",
        description:
          "Maintaining organized general ledgers, financial statements, and balance sheets conforming to IFRS and UAE commercial record-keeping regulations.",
      },
      {
        title: "Tax Residency Certificates (TRC)",
        description:
          "Coordinating applications with the FTA and Ministry of Finance for corporate and individual tax residency status under double taxation avoidance treaties.",
      },
    ],
    targetAudience: [
      "UAE Mainland and Free Zone companies required to register for Corporate Tax",
      "Businesses reaching the mandatory VAT threshold of AED 375,000 or voluntary AED 187,500 threshold",
      "Foreign residents and business owners needing Tax Residency Certificates",
      "Growing companies that need structured, reliable bookkeeping and accounting support",
    ],
    engagementSteps: [
      "Assessment of tax liability, registration deadlines, and revenue thresholds",
      "Collection and verification of required corporate documents and financial summaries",
      "Submission of registration applications via the FTA EmaraTax portal",
      "Implementation of compliant bookkeeping workflows and financial schedules",
      "Coordination of periodic return filings and deadline tracking",
    ],
    importantConsiderations: [
      "Federal Tax Authority penalties apply for late registration and delayed filings; compliance must be observed within statutory deadlines.",
      "Services provide tax coordination, registration assistance, and procedural compliance; complex tax positions or legal disputes should be formally vetted by certified tax agents.",
      "Tax Residency Certificates require meeting physical presence, tenancy, and financial documentation requirements established by the FTA.",
    ],
    faqs: [
      {
        question: "Does every UAE company have to register for Corporate Tax?",
        answer:
          "Yes. Under UAE Corporate Tax Law, all taxable persons—including Free Zone companies and Mainland businesses—are required to register for Corporate Tax and obtain a Tax Registration Number (TRN), regardless of their turnover or whether they qualify for exemptions or 0% Free Zone rates.",
      },
      {
        question: "What is required to obtain a UAE Tax Residency Certificate?",
        answer:
          "For individuals, requirements generally include a minimum physical presence in the UAE (e.g. 183 days or 90 days with primary center of financial/personal interests), valid residency visa, Emirates ID, verified tenancy contract (Ejari), and 6 months of bank statements. For companies, operational history and audited financial records are typically required by the FTA.",
      },
    ],
  },
  {
    slug: "compliance",
    id: "04",
    title: "Compliance",
    shortDescription:
      "Anti-Money Laundering (AML/CFT) frameworks, goAML system registration, internal audit support, and transfer pricing coordination.",
    fullDescription:
      "The UAE enforces stringent anti-money laundering and regulatory compliance frameworks across Designated Non-Financial Businesses and Professions (DNFBPs) and standard commercial enterprises. Mareena assists businesses in establishing internal compliance mechanisms, registering on official systems, and meeting regulatory scrutiny.",
    scopeItems: [
      "AML/CFT policy drafting and framework implementation",
      "goAML system registration with the UAE Financial Intelligence Unit (FIU)",
      "Risk assessment procedures and Customer Due Diligence (CDD/KYC) protocols",
      "Internal audit preparation and compliance review coordination",
      "Transfer pricing documentation and master/local file alignment",
      "Ongoing corporate compliance support and regulatory deadline monitoring",
    ],
    subServices: [
      {
        title: "AML/CFT Compliance Frameworks",
        description:
          "Developing customized Anti-Money Laundering and Counter-Terrorism Financing policies and procedures aligned with Ministry of Economy guidelines.",
      },
      {
        title: "goAML System Registration",
        description:
          "Guiding DNFBPs and regulated entities through the mandatory registration and reporting process on the UAE Financial Intelligence Unit's goAML portal.",
      },
      {
        title: "Internal Audit Coordination",
        description:
          "Conducting independent reviews of corporate policies, internal controls, and procedural adherence to identify compliance gaps before regulatory inspection.",
      },
      {
        title: "Transfer Pricing Documentation",
        description:
          "Assisting related-party transactions in documenting arm's-length terms in accordance with OECD transfer pricing principles and UAE Corporate Tax rules.",
      },
      {
        title: "Ongoing Regulatory Monitoring",
        description:
          "Continuous oversight of regulatory changes, annual compliance filings, and statutory register maintenance.",
      },
    ],
    targetAudience: [
      "Designated Non-Financial Businesses and Professions (real estate, corporate service providers, dealers in precious metals/stones)",
      "Trading companies handling high-volume cross-border fund flows",
      "Corporate groups conducting intercompany transactions subject to transfer pricing rules",
    ],
    engagementSteps: [
      "Regulatory scope evaluation based on business license activities and transaction profiles",
      "Review and drafting of AML/CFT manual, risk evaluation matrices, and customer KYC procedures",
      "Technical registration on the FIU goAML system and appointment of compliance officer",
      "Staff onboarding and procedural briefing for transaction monitoring",
      "Periodic internal audit checkups and file maintenance",
    ],
    importantConsiderations: [
      "Non-compliance with UAE AML regulations and failure to register on goAML carries substantial administrative fines imposed by supervisory authorities.",
      "Compliance advisory supports procedural readiness and regulatory filings; the entity remains ultimately responsible for adhering to all legal mandates.",
    ],
    faqs: [
      {
        question: "Who is required to register on the goAML portal?",
        answer:
          "All reporting entities, including financial institutions and Designated Non-Financial Businesses and Professions (DNFBPs) such as real estate brokers, auditors, dealers in precious metals and stones, and corporate service providers, are legally required to register on the UAE FIU goAML platform.",
      },
      {
        question: "What is transfer pricing and does it affect my UAE company?",
        answer:
          "Transfer pricing applies to transactions between related parties or connected persons to ensure they take place on an arm's-length basis. Under UAE Corporate Tax Law, companies with related-party dealings must maintain adequate transfer pricing documentation and disclosure forms where thresholds apply.",
      },
    ],
  },
  {
    slug: "visas-residency",
    id: "05",
    title: "Visas & Residency",
    shortDescription:
      "Golden Visas, Investor and Partner residency, employment visa coordination, and full establishment card processing.",
    fullDescription:
      "Securing residency in the UAE is fundamental for business founders, executives, and family members. Mareena provides complete coordination for long-term Golden Visas, company investor and partner visas, employee quota approvals, and medical and biometric procedures.",
    scopeItems: [
      "UAE 10-Year Golden Visa eligibility assessment and application coordination",
      "Investor Visa and Partner Visa processing under company trade licenses",
      "Company Establishment Card and Ministry of Human Resources and Emiratisation (MOHRE) files",
      "Employment visa quota applications and work permit processing coordination",
      "Medical fitness examination, biometric registration, and Emirates ID coordination",
      "Family dependent visa sponsorship coordination (spouse, children, parents)",
    ],
    subServices: [
      {
        title: "UAE Golden Visa",
        description:
          "Coordination for 10-year residency grants for real estate investors, business entrepreneurs, senior executives, and specialized talents.",
      },
      {
        title: "Investor & Partner Visas",
        description:
          "Direct residency pathways for company shareholders and directors holding equity in Mainland or Free Zone entities.",
      },
      {
        title: "Employment Visa Coordination",
        description:
          "Managing work permits, labor contracts, entry permits, and visa stamping for corporate staff within authorized quotas.",
      },
      {
        title: "Family Dependent Visas",
        description:
          "Streamlined sponsorship coordination for family members, including document attestation guidance and application processing.",
      },
    ],
    targetAudience: [
      "Foreign investors establishing or acquiring shares in UAE companies",
      "Property owners and high-net-worth individuals eligible for Golden Visa status",
      "Entrepreneurs bringing family members to relocate to the UAE",
      "Companies expanding their team and requiring employee visa processing",
    ],
    engagementSteps: [
      "Eligibility verification against current General Directorate of Residency and Foreigners Affairs (GDRFA) and Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) criteria",
      "Securing the company establishment card and immigration establishment file",
      "Entry permit issuance and status adjustment",
      "Scheduling and accompanying medical fitness testing and biometric appointments for Emirates ID",
      "Residency visa stamping and Emirates ID delivery coordination",
    ],
    importantConsiderations: [
      "Residency visas and Golden Visas are subject to discretionary approvals, security clearances, and medical fitness results determined by UAE immigration authorities.",
      "Eligibility criteria, minimum salary thresholds, real estate investment values, and government fees are subject to official regulatory updates.",
      "Mareena acts as a consultant coordinating procedural execution; approvals remain at the sole discretion of the government.",
    ],
    faqs: [
      {
        question: "What are the primary criteria for a UAE Golden Visa through investment?",
        answer:
          "Investors can qualify for a 10-year Golden Visa by owning real estate valued at AED 2,000,000 or more, or through capital investment in a UAE commercial enterprise meeting specified criteria. Specialized talent and executive categories have distinct educational, salary, and professional qualification standards.",
      },
      {
        question: "How long does the investor visa process take from start to finish?",
        answer:
          "Once the trade license and establishment card are active, entry permit issuance, medical screening, and Emirates ID biometric processing typically take between 1 to 2 weeks, subject to GDRFA/ICP appointment availability and clearance timelines.",
      },
    ],
  },
  {
    slug: "ongoing-corporate-services",
    id: "06",
    title: "Ongoing Corporate Services",
    shortDescription:
      "Trade license renewals, corporate amendments, Chamber of Commerce support, liquidation, and general administration.",
    fullDescription:
      "Maintaining corporate good standing requires continuous administrative oversight, annual license renewals, lease registrations, and official amendments. Mareena provides reliable corporate maintenance support so founders can focus on growing their core business.",
    scopeItems: [
      "Annual Trade License renewals and tenancy contract (Ejari) updates",
      "Corporate amendments (trade name changes, activity additions, address updates)",
      "Share transfer coordination and board resolution documentation",
      "Chamber of Commerce registration, attestation, and certificates",
      "Company liquidation, deregistration, and license cancellation procedures",
      "General corporate secretarial support and authority liaising",
    ],
    subServices: [
      {
        title: "Trade License Renewals",
        description:
          "Timely processing of annual license renewals with DET or Free Zone authorities to avoid lapses, operational halts, or late penalties.",
      },
      {
        title: "Corporate Amendments",
        description:
          "Executing official modifications to commercial licenses, adding new business activities, updating capital, or changing corporate managers.",
      },
      {
        title: "Share Transfers & Reorganization",
        description:
          "Drafting share sale agreements, board resolutions, and coordinating notarization and authority registration for ownership changes.",
      },
      {
        title: "Company Liquidation & Deregistration",
        description:
          "Structured, orderly wind-down of company entities, clearing bank accounts, canceling visas, settling taxes, and obtaining official dissolution certificates.",
      },
      {
        title: "Chamber of Commerce & General Admin",
        description:
          "Certificates of origin, document legalizations, official attestations, and liaison with government and banking departments.",
      },
    ],
    targetAudience: [
      "Existing UAE companies requiring dependable annual maintenance and renewals",
      "Business owners planning to alter company activities or shareholder equity",
      "Entities concluding operations requiring formal, clean legal liquidation",
    ],
    engagementSteps: [
      "Advance notification of upcoming renewal or amendment milestones",
      "Document collection (Ejari, existing licenses, shareholder passports, resolutions)",
      "Liaison with relevant municipal and licensing departments for approvals",
      "Payment processing and voucher clearance",
      "Issuance and delivery of amended or renewed corporate documentation",
    ],
    importantConsiderations: [
      "Operating with an expired trade license can lead to severe fines, bank account operational freezes, and immigration restrictions.",
      "Company liquidation requires tax clearances from the Federal Tax Authority and closure of immigration and labor files before final cancellation.",
      "Services are provided on a procedural consultancy basis; all official fees are levied directly by competent government authorities.",
    ],
    faqs: [
      {
        question: "When should I start the renewal process for my UAE trade license?",
        answer:
          "We recommend initiating the renewal process 30 to 45 days prior to the expiration date. This provides sufficient time to renew your tenancy contract (Ejari), prepare any required audit reports, and avoid any administrative fines or banking disruptions.",
      },
      {
        question: "What is involved in formally liquidating a UAE company?",
        answer:
          "Formal liquidation involves appointing a registered liquidator, publishing notices where required by jurisdiction, canceling all company-sponsored visas, settling corporate tax and VAT accounts with the FTA, closing corporate bank accounts, and submitting final clearances to obtain the official cancellation certificate.",
      },
    ],
  },
];
