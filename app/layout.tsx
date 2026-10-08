import type { Metadata } from "next";
import { Syne, Inter, Sora } from "next/font/google";
import "./globals.css";
import { constructMetadata } from "@/lib/seo/metadata";
import { generateOrganizationSchema, generatePersonSchema } from "@/lib/seo/schema";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = constructMetadata({
  title: "Ask Mareena | UAE Corporate Structuring & Company Formation Consultant",
  description:
    "Straight-talking UAE business consultancy by Mareena Tessa Thomas. Over 12 years of hands-on expertise in Dubai Mainland, Free Zones, corporate structuring, and tax compliance.",
  path: "/",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationSchema();
  const personSchema = generatePersonSchema();

  return (
    <html lang="en" className={`${syne.variable} ${sora.variable} ${inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <meta name="theme-color" content="#080A0C" />
      </head>
      <body className="min-h-screen flex flex-col bg-[#080A0C] text-white selection:bg-[#EAE6DF] selection:text-[#080A0C]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#14171A] text-white rounded-md text-sm font-medium shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
