"use client";

import { motion } from "framer-motion";
import Button from "./ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Atmospheric glow behind the Q */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] max-w-[700px] aspect-square"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 70% 50%, rgba(37,99,235,0.12) 0%, rgba(37,99,235,0.04) 40%, transparent 70%)",
        }}
      />

      {/* Giant faded Q watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-4vw] md:right-[-2vw] top-1/2 -translate-y-1/2 select-none"
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.3 }}
          className="font-heading font-bold text-[28vw] md:text-[22vw] leading-none tracking-tighter"
          style={{
            color: "transparent",
            WebkitTextStroke: "1.5px rgba(37,99,235,0.15)",
            textShadow: "0 0 80px rgba(37,99,235,0.06)",
          }}
        >
          Q
        </motion.span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        {/* Wordmark */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-8 md:mb-10"
        >
          <h1
            className="font-heading font-bold leading-none tracking-tighter text-[#F5F7FA]"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)" }}
          >
            TOR<span className="text-[#2563EB]">Q</span>OR
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.h2
          custom={1}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-heading font-bold text-[#F5F7FA] leading-tight max-w-2xl mb-5"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
        >
          Reclaim time from<br />operational chaos.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          custom={2}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-[#9CA3AF] text-base md:text-lg max-w-lg leading-relaxed mb-10"
        >
          TORQOR builds AI-powered operational systems that help modern
          businesses execute faster.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <Button href="#contact" variant="primary" className="px-6 py-3.5 text-base">
            Book Founder Audit
          </Button>
          <Button href="#services" variant="secondary" className="px-6 py-3.5 text-base">
            Explore Services
          </Button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          custom={4}
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-[#4B5563] text-xs tracking-[0.15em] uppercase font-medium"
        >
          Built for founders who value execution over noise.
        </motion.p>
      </div>
    </section>
  );
}
