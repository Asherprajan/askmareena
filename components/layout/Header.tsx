"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import MobileNav from "@/components/layout/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E4DC]/80 py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#B8976C] rounded-sm"
              aria-label="Ask Mareena - Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#E8E4DC] bg-white flex items-center justify-center shadow-xs">
                <Image
                  src="/images/brand/logo-dark.png"
                  alt="Ask Mareena Emblem"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#14171A] group-hover:text-[#9E7B4F] transition-colors leading-none">
                  Ask Mareena
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#7A8291] font-medium pt-1 hidden sm:block">
                  UAE Business Consultancy
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-[#FAF8F5]/70 border border-[#E8E4DC]/60 backdrop-blur-xs"
              aria-label="Main Navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 relative ${
                      isActive
                        ? "text-[#14171A] font-semibold bg-[#F3EFEA] shadow-2xs"
                        : "text-[#525866] hover:text-[#14171A] hover:bg-[#F8F4EE]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="shadow-xs hover:shadow-sm"
                >
                  Ask Mareena
                </Button>
              </div>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-[#14171A] hover:bg-[#F3EFEA] rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#B8976C]"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}
