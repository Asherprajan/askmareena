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
      "bg-[#EAE6DF] text-[#080A0C] hover:bg-white active:bg-[#D5D0C7] focus-visible:outline-white shadow-sm font-semibold",
    accent:
      "bg-[#EAE6DF] text-[#080A0C] hover:bg-white active:bg-[#D5D0C7] focus-visible:outline-[#EAE6DF] shadow-sm font-semibold",
    secondary:
      "bg-white/10 text-white hover:bg-white/15 active:bg-white/5 border border-white/15 backdrop-blur-xs",
    outline:
      "bg-black/20 text-white hover:border-white hover:bg-white/10 border border-white/30 backdrop-blur-xs",
    ghost:
      "bg-transparent text-white/80 hover:text-white p-0 hover:bg-transparent active:opacity-80",
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
