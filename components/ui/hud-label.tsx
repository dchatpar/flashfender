"use client";

import { ReactNode } from "react";

interface HudLabelProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "warning" | "success" | "alert";
  showBrackets?: boolean;
}

export function HudLabel({
  children,
  className = "",
  variant = "default",
  showBrackets = true,
}: HudLabelProps) {
  const variantClasses = {
    default: "border-quantum-border text-white/70",
    warning: "border-amber-500/50 text-amber-400",
    success: "border-emerald-500/50 text-emerald-400",
    alert: "border-red-500/50 text-red-400",
  };

  return (
    <div
      className={`relative inline-flex items-center gap-2 px-3 py-1.5 quantum-glass-bright font-mono text-xs tracking-wider ${variantClasses[variant]} ${className}`}
    >
      {showBrackets && (
        <>
          {/* Corner brackets */}
          <span className="absolute top-0 left-0 w-2 h-px bg-current opacity-50" />
          <span className="absolute top-0 left-0 w-px h-2 bg-current opacity-50" />
          <span className="absolute top-0 right-0 w-2 h-px bg-current opacity-50" />
          <span className="absolute top-0 right-0 w-px h-2 bg-current opacity-50" />
          <span className="absolute bottom-0 left-0 w-2 h-px bg-current opacity-50" />
          <span className="absolute bottom-0 left-0 w-px h-2 bg-current opacity-50" />
          <span className="absolute bottom-0 right-0 w-2 h-px bg-current opacity-50" />
          <span className="absolute bottom-0 right-0 w-px h-2 bg-current opacity-50" />
        </>
      )}
      {children}
    </div>
  );
}

interface HudStatBoxProps {
  value: string;
  label: string;
  className?: string;
}

export function HudStatBox({ value, label, className = "" }: HudStatBoxProps) {
  return (
    <div
      className={`relative p-3 quantum-glass-bright min-w-[100px] ${className}`}
    >
      {/* Corner brackets */}
      <span className="absolute top-1 left-1 w-2 h-px bg-quantum-cyan/50" />
      <span className="absolute top-1 left-1 w-px h-2 bg-quantum-cyan/50" />
      <span className="absolute top-1 right-1 w-2 h-px bg-quantum-cyan/50" />
      <span className="absolute top-1 right-1 w-px h-2 bg-quantum-cyan/50" />
      <span className="absolute bottom-1 left-1 w-2 h-px bg-quantum-cyan/50" />
      <span className="absolute bottom-1 left-1 w-px h-2 bg-quantum-cyan/50" />
      <span className="absolute bottom-1 right-1 w-2 h-px bg-quantum-cyan/50" />
      <span className="absolute bottom-1 right-1 w-px h-2 bg-quantum-cyan/50" />

      <div className="text-2xl font-bold text-quantum-cyan quantum-text-glow">
        {value}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-white/50 font-mono mt-1">
        {label}
      </div>
    </div>
  );
}
