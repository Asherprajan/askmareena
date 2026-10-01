"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import MobileNav from "@/components/layout/MobileNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
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
            ? "bg-[#080A0C]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus-visible:outline-2 focus-visible:outline-white rounded-xs"
              aria-label="Ask Mareena - Home"
            >
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/70 bg-black/60 shadow-xs shrink-0">
                <Image
                  src="/images/brand/mareena-tessa-thomas.jpg"
                  alt="Mareena Tessa Thomas"
                  fill
                  sizes="40px"
                  className="object-cover grayscale contrast-125"
                  priority
                />
              </div>
              <span className="font-serif text-sm sm:text-base tracking-[0.2em] uppercase font-medium text-white group-hover:text-[#EAE6DF] transition-colors">
                Ask Mareena
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav
              className="hidden md:flex items-center gap-8 text-sm"
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
                    className={`transition-colors text-sm font-normal tracking-wide ${
                      isActive
                        ? "text-white font-medium"
                        : "text-[#9EA6B0] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-white/35 rounded-xs text-xs uppercase tracking-[0.14em] font-medium text-white hover:bg-white hover:text-[#080A0C] transition-all duration-200"
              >
                <span>Ask Mareena</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Mobile hamburger button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 text-white hover:bg-white/10 rounded-xs transition-colors focus-visible:outline-2 focus-visible:outline-white"
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
