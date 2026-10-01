import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = theme === "light";

  return (
    <div
      className={cn(
        "space-y-3.5 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-2", align === "center" && "justify-center")}>
          <span
            className={cn(
              "text-xs uppercase tracking-[0.22em] font-medium",
              isLight ? "text-[#525866]" : "text-[#9EA6B0]"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.14]",
          isLight ? "text-[#14171A]" : "text-white"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal pt-1",
            isLight ? "text-[#525866]" : "text-[#A3ABB5]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
