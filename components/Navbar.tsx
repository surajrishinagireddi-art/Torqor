"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/Button";
import { MenuIcon, CloseIcon } from "./ui/icons";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Results", href: "#results" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-0 font-heading font-bold text-lg tracking-tight text-[#F5F7FA]">
      TOR
      <span className="text-[#2563EB]">Q</span>
      OR
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0B0C]/95 backdrop-blur-md border-b border-[#1F2124]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
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

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button href="#contact" variant="primary" className="text-sm py-2.5">
              Book Founder Audit
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#0B0B0C] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-[#1F2124]">
              <Logo />
              <button
                className="p-2 text-[#9CA3AF] hover:text-[#F5F7FA] transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>

            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.28 }}
              className="flex-1 flex flex-col justify-center px-8 gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="text-2xl font-heading font-semibold text-[#F5F7FA] hover:text-[#2563EB] transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-4"
              >
                <Button href="#contact" variant="primary" className="w-full justify-center text-base py-3.5">
                  Book Founder Audit
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
