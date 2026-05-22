"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "./icons";

type Variant = "primary" | "secondary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  showArrow = true,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-medium text-sm px-5 py-3 rounded-lg transition-all duration-200 cursor-pointer select-none";

  const variants: Record<Variant, string> = {
    primary: "bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-[0_0_20px_rgba(37,99,235,0.25)] hover:shadow-[0_0_28px_rgba(37,99,235,0.4)]",
    secondary: "bg-[#1A1C1F] text-[#F5F7FA] border border-[#2a2d32] hover:bg-[#22252a] hover:border-[#3a3d42]",
  };

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {content}
    </motion.button>
  );
}
