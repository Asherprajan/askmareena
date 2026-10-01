"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
}

export default function Accordion({
  items,
  defaultOpenId,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-white/10 border-t border-b border-white/10", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const buttonId = `accordion-btn-${item.id}`;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <div key={item.id} className="py-4 sm:py-5 transition-colors">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between text-left gap-4 py-2 group focus-visible:outline-2 focus-visible:outline-white rounded-xs cursor-pointer"
              >
                <span className="font-serif text-lg sm:text-xl font-normal text-white group-hover:text-[#EAE6DF] transition-colors leading-snug">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[#9EA6B0] transition-all duration-300 group-hover:border-white group-hover:text-white",
                    isOpen && "bg-white text-[#080A0C] border-white rotate-180 group-hover:bg-white group-hover:text-[#080A0C]"
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 transition-transform duration-300" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-300 ease-in-out overflow-hidden text-base leading-relaxed text-[#C5CCD6]",
                isOpen ? "grid-rows-[1fr] opacity-100 pt-3 pb-2" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pr-4 sm:pr-8 text-sm sm:text-base leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
