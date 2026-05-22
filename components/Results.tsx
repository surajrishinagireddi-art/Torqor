"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "./ui/icons";

const outcomes = [
  {
    headline: "Streamlined hiring workflows",
    detail:
      "Founders report significantly shorter time-to-hire once a structured pipeline is in place. Screening happens faster, decisions are clearer, and onboarding produces results sooner.",
  },
  {
    headline: "Reduced operational drag",
    detail:
      "Manual, repetitive tasks that once consumed entire afternoons are eliminated or automated. Teams move faster because the friction has been removed.",
  },
  {
    headline: "Cleaner execution systems",
    detail:
      "Operations become predictable. Work flows through defined stages instead of piling up in inboxes and Slack threads, giving teams clarity on what happens next.",
  },
  {
    headline: "Improved founder efficiency",
    detail:
      "The founders TORQOR works with consistently reclaim meaningful hours each week — time redirected toward strategy, relationships, and the work that only they can do.",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-24 md:py-32 border-t border-[#1F2124]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 lg:mb-0 lg:sticky lg:top-32"
          >
            <p className="text-[#2563EB] text-xs tracking-[0.15em] uppercase font-medium mb-3">
              Results
            </p>
            <h2
              className="font-heading font-bold text-[#F5F7FA] leading-tight mb-6"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              What changes when operations work.
            </h2>
            <p className="text-[#9CA3AF] text-base leading-relaxed">
              The outcome of well-built operational systems isn't just saved time — it's a
              fundamentally different way of running a business. Execution becomes a competitive
              advantage.
            </p>
          </motion.div>

          <div className="flex flex-col gap-0">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={outcome.headline}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="py-7 border-b border-[#1F2124] first:border-t first:pt-7"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/30 flex items-center justify-center shrink-0">
                    <CheckIcon className="w-3 h-3 text-[#2563EB]" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-[#F5F7FA] text-base mb-2">
                      {outcome.headline}
                    </h3>
                    <p className="text-[#9CA3AF] text-sm leading-relaxed">{outcome.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
