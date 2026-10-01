"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0C0F13] shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-white/10 transform transition-transform duration-300 ease-out text-white"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-serif text-lg tracking-[0.16em] uppercase font-medium text-white">
              Ask Mareena
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 text-[#9EA6B0] hover:text-white hover:bg-white/10 rounded-xs transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile main navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between py-3 px-3 rounded-xs text-base font-normal tracking-wide transition-colors ${
                    isActive
                      ? "text-white font-medium bg-white/10"
                      : "text-[#9EA6B0] hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-3.5 px-4 bg-[#EAE6DF] text-[#080A0C] font-semibold text-xs uppercase tracking-wider rounded-xs hover:bg-white transition-colors"
          >
            <span>Ask Mareena</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <p className="text-xs text-center text-[#8E99A8]">
            UAE Corporate Structuring & Company Formation
          </p>
        </div>
      </div>
    </div>
  );
}
