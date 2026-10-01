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
  theme = "light",
  className,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "space-y-4 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2">
          {align === "center" && (
            <span
              className={cn(
                "h-[1px] w-6",
                isDark ? "bg-[#B8976C]/60" : "bg-[#B8976C]"
              )}
            />
          )}
          <span
            className={cn(
              "text-xs uppercase tracking-[0.16em] font-semibold",
              isDark ? "text-[#C5A880]" : "text-[#9E7B4F]"
            )}
          >
            {eyebrow}
          </span>
          <span
            className={cn(
              "h-[1px] w-6",
              isDark ? "bg-[#B8976C]/60" : "bg-[#B8976C]"
            )}
          />
        </div>
      )}

      <h2
        className={cn(
          "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.18]",
          isDark ? "text-white" : "text-[#14171A]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed font-normal pt-1",
            isDark ? "text-[#A3ABB5]" : "text-[#525866]"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
