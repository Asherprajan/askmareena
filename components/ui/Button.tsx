import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-sm select-none tracking-tight";

  const sizeClasses = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#14171A] text-white hover:bg-[#2B3036] active:bg-[#0E1012] focus-visible:outline-[#14171A] shadow-sm",
    accent:
      "bg-[#B8976C] text-white hover:bg-[#A18158] active:bg-[#8F724C] focus-visible:outline-[#B8976C] shadow-sm",
    secondary:
      "bg-[#F3EFEA] text-[#14171A] hover:bg-[#EBE5DC] active:bg-[#DDD5C7] border border-[#E8E4DC]",
    outline:
      "bg-transparent text-[#14171A] hover:bg-[#14171A] hover:text-white border border-[#14171A] active:bg-[#2B3036]",
    ghost:
      "bg-transparent text-[#14171A] hover:text-[#B8976C] p-0 hover:bg-transparent active:opacity-80",
  }[variant];

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="shrink-0">{icon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link
        href={props.href}
        className={cn(baseClasses, sizeClasses, variantClasses, className)}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
