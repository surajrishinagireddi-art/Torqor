"use client";

import { motion } from "framer-motion";
import { LinkedInIcon } from "./ui/icons";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1F2124] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-base tracking-tight text-[#F5F7FA]">
            TOR<span className="text-[#2563EB]">Q</span>OR
          </a>

          {/* Nav links */}
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors duration-150"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social + email */}
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors duration-150"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:hello@torqor.com"
              className="text-sm text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors duration-150"
            >
              hello@torqor.com
            </a>
          </div>
        </motion.div>

        <div className="mt-8 pt-6 border-t border-[#1F2124]">
          <p className="text-xs text-[#4B5563]">
            © {new Date().getFullYear()} TORQOR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
