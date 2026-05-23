"use client";

import { motion, Variants } from "framer-motion";
import { InboxIcon, UsersIcon, MegaphoneIcon, GearIcon } from "./ui/icons";

const pains = [
  {
    icon: InboxIcon,
    title: "Inbox overload",
    body: "Founders spend hours each day in their inbox instead of building. Every unanswered message is momentum lost.",
  },
  {
    icon: UsersIcon,
    title: "Hiring bottlenecks",
    body: "Sourcing, screening, and onboarding without a system turns every hire into a weeks-long distraction.",
  },
  {
    icon: MegaphoneIcon,
    title: "Inconsistent outreach",
    body: "Ad-hoc prospecting produces unpredictable pipelines. Without a repeatable process, revenue growth stalls.",
  },
  {
    icon: GearIcon,
    title: "Operational drag",
    body: "Manual, disconnected workflows slow execution. Tasks that should take minutes consume entire afternoons.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function PainPoints() {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="mb-14 max-w-2xl"
      >
        <h2
          className="font-heading font-bold text-[#F5F7FA] leading-tight"
          style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
        >
          Modern businesses lose momentum to operational chaos.
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {pains.map((pain) => {
          const Icon = pain.icon;
          return (
            <motion.div
              key={pain.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#1A1C1F] border border-[#1F2124] rounded-xl p-6 flex flex-col gap-4 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-[#0B0B0C] border border-[#2a2d32] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#2563EB]" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-[#F5F7FA] text-base mb-2">
                  {pain.title}
                </h3>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">{pain.body}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
