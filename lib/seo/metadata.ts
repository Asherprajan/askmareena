import type { Metadata } from "next";

const SITE_URL = "https://askmareena.com";
const SITE_NAME = "Ask Mareena";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/brand/03_Silver_on_Black.png`;

interface MetadataProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
}

export function constructMetadata({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  keywords = [
    "Ask Mareena",
    "Mareena Tessa Thomas",
    "UAE Business Setup",
    "Dubai Company Formation",
    "Corporate Structuring UAE",
    "DIFC Foundations",
    "ADGM Foundations",
    "Corporate Tax UAE",
    "UAE Golden Visa",
    "Dubai Free Zone Consultant",
  ],
  type = "website",
}: MetadataProps): Metadata {
  const url = `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: {
      default: title,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords,
    authors: [{ name: "Mareena Tessa Thomas", url: SITE_URL }],
    creator: "Mareena Tessa Thomas",
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_AE",
      type,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${title} - ${SITE_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@mareenatt",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
