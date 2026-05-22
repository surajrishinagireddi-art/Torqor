"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Audit",
    body: "We map your current operations — workflows, tools, time sinks, and gaps — to understand exactly where execution breaks down.",
  },
  {
    number: "02",
    title: "System Design",
    body: "We design a bespoke operational blueprint built around your specific business, team size, and growth trajectory.",
  },
  {
    number: "03",
    title: "AI Integration",
    body: "The right AI tools are wired into the right processes. Every integration is purposeful and measured against execution outcomes.",
  },
  {
    number: "04",
    title: "Operational Execution",
    body: "Systems go live. You reclaim time, your team gains clarity, and your business starts operating at a higher baseline.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-[#1F2124] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-[#2563EB] text-xs tracking-[0.15em] uppercase font-medium mb-3">
            Process
          </p>
          <h2
            className="font-heading font-bold text-[#F5F7FA] leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            How TORQOR works.
          </h2>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connector line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-[2.25rem] left-0 right-0 h-px bg-[#1F2124] origin-left"
              style={{ zIndex: 0 }}
            />

            <div className="relative grid grid-cols-4 gap-8" style={{ zIndex: 1 }}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col"
                >
                  {/* Number badge */}
                  <div className="mb-6 flex items-center">
                    <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#1A1C1F] border border-[#2a2d32] flex items-center justify-center shrink-0">
                      <span className="font-heading font-bold text-[#2563EB] text-lg">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-[#F5F7FA] text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / tablet vertical timeline */}
        <div className="lg:hidden relative">
          {/* Vertical connector */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-[#1F2124] origin-top"
          />
          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-6 items-start"
              >
                <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-[#1A1C1F] border border-[#2a2d32] flex items-center justify-center shrink-0 relative z-10">
                  <span className="font-heading font-bold text-[#2563EB] text-lg">{step.number}</span>
                </div>
                <div className="pt-3">
                  <h3 className="font-heading font-semibold text-[#F5F7FA] text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
