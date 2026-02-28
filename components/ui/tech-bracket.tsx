"use client";

import { ReactNode } from "react";

interface TechBracketProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "glow" | "solid";
  size?: "sm" | "md" | "lg";
}

export function TechBracket({
  children,
  className = "",
  variant = "default",
  size = "md",
}: TechBracketProps) {
  const sizeClasses = {
    sm: "before:w-2 before:h-2 after:w-2 after:h-2",
    md: "before:w-3 before:h-3 after:w-3 after:h-3",
    lg: "before:w-4 before:h-4 after:w-4 after:h-4",
  };

  const variantClasses = {
    default: "border-quantum-border before:border-quantum-cyan after:border-quantum-cyan",
    glow: "border-quantum-border-bright before:border-quantum-cyan after:border-quantum-cyan quantum-glow-cyan",
    solid: "border-quantum-cyan before:border-quantum-cyan after:border-quantum-cyan bg-quantum-cyan/10",
  };

  return (
    <div
      className={`relative inline-flex ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {/* Top-left bracket */}
      <span
        className="absolute -top-px -left-px border-l border-t opacity-60"
        style={{ width: size === "sm" ? "6px" : size === "md" ? "8px" : "10px", height: "calc(100% + 2px)" }}
      />
      {/* Top-right bracket */}
      <span
        className="absolute -top-px -right-px border-r border-t opacity-60"
        style={{ width: size === "sm" ? "6px" : size === "md" ? "8px" : "10px", height: "calc(100% + 2px)" }}
      />
      {/* Bottom-left bracket */}
      <span
        className="absolute -bottom-px -left-px border-l border-b opacity-60"
        style={{ width: size === "sm" ? "6px" : size === "md" ? "8px" : "10px", height: "calc(100% + 2px)" }}
      />
      {/* Bottom-right bracket */}
      <span
        className="absolute -bottom-px -right-px border-r border-b opacity-60"
        style={{ width: size === "sm" ? "6px" : size === "md" ? "8px" : "10px", height: "calc(100% + 2px)" }}
      />
      {children}
    </div>
  );
}
