import React from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { servicesData } from "@/content/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#06080A] text-white border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-sm"
              aria-label="Ask Mareena - Home"
            >
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-white/10 p-1 flex items-center justify-center border border-white/20">
                <Image
                  src="/images/brand/logo-white.png"
                  alt="Ask Mareena Emblem"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-white group-hover:text-[#C5A880] transition-colors">
                Ask Mareena
              </span>
            </Link>

            <p className="text-sm text-[#A3ABB5] leading-relaxed max-w-sm">
              Straight-talking UAE business consultancy by Mareena Tessa Thomas. Providing personal guidance in Corporate Structuring, Company Formation, Tax, Compliance, and Residency.
            </p>

            {/* Approved Social Links */}
            <div className="pt-2">
              <span className="text-xs uppercase tracking-[0.14em] text-[#7A8291] font-medium block mb-3">
                Connect Directly
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/mareena-tessa-thomas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#A3ABB5] hover:text-[#C5A880] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-sm"
                  aria-label="Connect with Mareena Tessa Thomas on LinkedIn"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1A1D20] border border-[#272C32] flex items-center justify-center text-xs font-semibold">
                    in
                  </span>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://www.instagram.com/mareena_tessa_thomas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#A3ABB5] hover:text-[#C5A880] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-sm"
                  aria-label="Follow Mareena on Instagram"
                >
                  <span className="w-8 h-8 rounded-full bg-[#1A1D20] border border-[#272C32] flex items-center justify-center text-xs font-semibold">
                    ig
                  </span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-[#A3ABB5]">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                >
                  About Mareena
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                >
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                >
                  Contact & Enquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold">
              Core Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-[#A3ABB5]">
              {servicesData.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Consultation CTA Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.16em] text-[#C5A880] font-semibold">
              Direct Contact
            </h3>
            <div className="space-y-2 text-xs text-[#A3ABB5]">
              <a
                href="mailto:askmareena@gmail.com"
                className="hover:text-white transition-colors block truncate"
                title="askmareena@gmail.com"
              >
                askmareena@gmail.com
              </a>
              <a
                href="tel:+971542658225"
                className="hover:text-white transition-colors block"
              >
                +971 54 265 8225
              </a>
            </div>
            <div className="pt-1">
              <Link
                href="/contact"
                className="inline-block text-xs uppercase tracking-wider font-semibold py-2.5 px-4 bg-[#EAE6DF] text-[#080A0C] hover:bg-white transition-colors rounded-xs text-center"
              >
                Ask Mareena
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer & Legal Bottom */}
        <div className="pt-8 space-y-6">
          <p className="text-xs text-[#8E99A8] leading-relaxed max-w-4xl">
            <strong className="text-white font-medium">Regulatory Notice:</strong> Services are subject to competent authority requirements, eligibility criteria, applicable UAE legislation, and official government approvals. Fees, capital requirements, and timelines vary by case. The information presented on this website is for general educational and informational purposes and does not constitute regulated legal, judicial, or certified tax advice.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs text-[#8E99A8]">
            <p>© {currentYear} Ask Mareena. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy-policy"
                className="hover:text-[#A3ABB5] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-[#A3ABB5] transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-xs"
              >
                Terms of Service & Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
