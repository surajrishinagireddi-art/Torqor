"use client";

import { motion, Variants } from "framer-motion";
import Button from "./ui/Button";
import LogoWordmark from "./ui/LogoWordmark";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        background:
          "radial-gradient(ellipse at right center, rgba(37,99,235,0.12) 0%, transparent 60%)",
      }}
    >
      {/* Soft radial glow behind the atmospheric Q */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(37,99,235,0.14) 0%, transparent 55%)",
          zIndex: 0,
        }}
      />

      {/* Atmospheric Q — q-mark.png asset, enlarged, bleeding off right edge */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut", delay: 0.3 }}
        className="pointer-events-none absolute select-none"
        style={{
          right: "-15%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "75vw",
          zIndex: 0,
        }}
      >
        <img
          src="/q-mark.png"
          alt=""
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            mixBlendMode: "screen",
            opacity: 0.10,
            filter: "blur(2px)",
          }}
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 py-24 md:py-32 text-left">
        {/* Wordmark */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="mb-10"
        >
          <div className="w-[490px]">
            <LogoWordmark />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="font-heading font-bold text-[#F5F7FA] leading-tight max-w-2xl mb-5"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Reclaim time from<br />operational chaos.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
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
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start gap-3 mb-16"
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
