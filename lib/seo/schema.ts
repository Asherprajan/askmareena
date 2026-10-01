export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mareena Tessa Thomas",
    url: "https://askmareena.com",
    image: "https://askmareena.com/images/brand/mareena-tessa-thomas.jpg",
    jobTitle: "Business Consultant — Corporate Structuring & Company Formation",
    worksFor: {
      "@type": "Organization",
      name: "Ask Mareena",
      url: "https://askmareena.com",
    },
    email: "askmareena@gmail.com",
    telephone: "+971542658225",
    sameAs: [
      "https://www.instagram.com/mareena_tessa_thomas",
      "https://www.linkedin.com/in/mareena-tessa-thomas",
    ],
    description:
      "UAE Business Consultant with 12+ years living in the UAE, specializing in Dubai Mainland and Free Zone company formation, corporate structuring, and tax compliance.",
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ask Mareena",
    url: "https://askmareena.com",
    logo: "https://askmareena.com/images/brand/05_Black_on_OffWhite.png",
    image: "https://askmareena.com/images/brand/mareena-tessa-thomas.jpg",
    email: "askmareena@gmail.com",
    telephone: "+971542658225",
    description:
      "Premium UAE business consultancy specializing in company formation, corporate structuring, tax, compliance, residency, and ongoing corporate services.",
    founder: {
      "@type": "Person",
      name: "Mareena Tessa Thomas",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    serviceArea: "Dubai, Abu Dhabi, and UAE Free Zones",
    sameAs: [
      "https://www.instagram.com/mareena_tessa_thomas",
      "https://www.linkedin.com/in/mareena-tessa-thomas",
    ],
  };
}

export function generateServiceSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    name: title,
    description: description,
    provider: {
      "@type": "ProfessionalService",
      name: "Ask Mareena",
      url: "https://askmareena.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates",
    },
    url: `https://askmareena.com${url}`,
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
