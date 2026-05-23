"use client";

import { motion, Variants } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#1F2124]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <p className="text-[#2563EB] text-xs tracking-[0.15em] uppercase font-medium mb-3">
              About
            </p>
            <h2
              className="font-heading font-bold text-[#F5F7FA] leading-tight mb-8"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Built by operators, for founders.
            </h2>
          </motion.div>

          <div className="flex flex-col gap-5">
            {[
              "TORQOR was built on a straightforward observation: most founders aren't losing because of strategy. They're losing to operational overhead — the slow accumulation of manual tasks, disjointed tools, and reactive workflows that consume time without producing proportional results.",
              "We work closely with a small number of founders at a time to design and implement operational systems that actually fit how their business works. Every engagement starts with a deep audit, not a template. Every system is built for the specific constraints of your stage, team, and goals.",
              "We use AI deliberately. Not as a buzzword, but as a practical tool for removing friction from specific workflows where it genuinely helps. The goal is always operational clarity and execution speed — not complexity for its own sake.",
              "If you're a founder spending more time managing operations than building your business, that's the gap we close.",
            ].map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.55, ease: "easeOut" as const }}
                className="text-[#9CA3AF] text-base leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
