"use client";

import { motion, Variants } from "framer-motion";
import Button from "./ui/Button";

export default function CTA() {
  return (
    <section id="contact" className="py-24 md:py-36 border-t border-[#1F2124] relative overflow-hidden">
      {/* Faint blue glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(37,99,235,0.09) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="max-w-2xl mx-auto"
        >
          <h2
            className="font-heading font-bold text-[#F5F7FA] leading-tight mb-5"
            style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
          >
            Built for businesses that move fast.
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg leading-relaxed mb-10">
            TORQOR helps modern businesses reduce operational chaos through AI-powered
            execution systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="mailto:hello@torqor.com" variant="primary" className="px-6 py-3.5 text-base">
              Book Founder Audit
            </Button>
            <Button href="#services" variant="secondary" className="px-6 py-3.5 text-base">
              Explore Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
