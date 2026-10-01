"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

export default function MobileNav({ isOpen, onClose, navLinks }: MobileNavProps) {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Trap Escape key and prevent background scroll when open
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
      className="fixed inset-0 z-50 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#14171A]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FAF8F5] shadow-2xl flex flex-col justify-between p-6 sm:p-8 border-l border-[#E8E4DC] transform transition-transform duration-300 ease-out"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
            <Link
              href="/"
              onClick={onClose}
              className="font-serif text-xl tracking-tight font-semibold text-[#14171A]"
            >
              Ask Mareena
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 text-[#525866] hover:text-[#14171A] hover:bg-[#F3EFEA] rounded-md transition-colors"
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
                  className={`flex items-center justify-between py-3 px-3 rounded-md text-lg font-medium transition-colors ${
                    isActive
                      ? "text-[#14171A] font-semibold bg-[#F3EFEA]"
                      : "text-[#525866] hover:text-[#14171A] hover:bg-[#F8F4EE]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#B8976C]" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer in Drawer */}
        <div className="pt-6 border-t border-[#E8E4DC] space-y-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="w-full shadow-md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Ask Mareena
          </Button>

          <p className="text-xs text-center text-[#7A8291]">
            UAE Corporate Structuring & Company Formation
          </p>
        </div>
      </div>
    </div>
  );
}
