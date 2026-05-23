"use client";

import { motion, Variants } from "framer-motion";
import { SearchIcon, PenIcon, UsersIcon, InboxIcon, ZapIcon, BrainIcon } from "./ui/icons";

const services = [
  {
    icon: SearchIcon,
    title: "Lead Generation Pipeline",
    body: "A structured, repeatable system for sourcing qualified leads. No more one-off campaigns — just consistent, scalable outreach.",
  },
  {
    icon: PenIcon,
    title: "LinkedIn Ghostwriting",
    body: "Authoritative content that builds presence and generates inbound opportunities without requiring your time.",
  },
  {
    icon: UsersIcon,
    title: "Hiring Pipeline Systems",
    body: "From job post to signed offer — a streamlined hiring workflow that finds the right people faster and with less friction.",
  },
  {
    icon: InboxIcon,
    title: "Inbox Zero Systems",
    body: "Triage, routing, and response frameworks that transform your inbox from a distraction into a tool you control.",
  },
  {
    icon: ZapIcon,
    title: "Founder Workflow Automation",
    body: "Identify and eliminate the manual work that fills your calendar. Automate where it matters, delegate the rest.",
  },
  {
    icon: BrainIcon,
    title: "AI Operational Setup",
    body: "Deploy AI tools thoughtfully into your operations. Right models, right contexts, measurable impact on execution speed.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-[#1F2124]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-[#2563EB] text-xs tracking-[0.15em] uppercase font-medium mb-3">
            Services
          </p>
          <h2
            className="font-heading font-bold text-[#F5F7FA] leading-tight"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
          >
            Operational systems designed for modern businesses.
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#1A1C1F] border border-[#1F2124] hover:border-[#2a2d32] rounded-xl p-6 flex flex-col gap-4 transition-colors duration-200 cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0B0B0C] border border-[#2a2d32] flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-[#F5F7FA] text-base mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm leading-relaxed">{service.body}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
