"use client";

import { motion } from "framer-motion";
import { FounderNote } from "@/components/founder-note";
import { CtaWaitlist } from "@/components/cta-waitlist";

const brandPillars = [
  {
    tag: "PILLAR 01",
    title: "Zero App Friction",
    desc: "No app store downloads, no password resets, no wallet plastic. A simple 3-second QR scan on your phone's camera is all it takes.",
    badgeColor: "border-ink-navy text-ink-navy bg-ink-navy/5",
  },
  {
    tag: "PILLAR 02",
    title: "Tactile Joy, Digital Memory",
    desc: "We preserved the nostalgic 'thump' of an ink stamp landing on paper, while ensuring your progress is safely saved to your phone number forever.",
    badgeColor: "border-ink-red text-ink-red bg-ink-red/5",
  },
  {
    tag: "PILLAR 03",
    title: "Built for Local Counters",
    desc: "Designed specifically for neighborhood cafés, bakeries, salons, and boutique shops. Simple, affordable, and setup in under 5 minutes.",
    badgeColor: "border-brass text-brass bg-brass/10",
  },
  {
    tag: "PILLAR 04",
    title: "Privacy & Respect",
    desc: "We don't sell customer data, flood inboxes with marketing spam, or track location. Pure loyalty between local shops and their regulars.",
    badgeColor: "border-charcoal text-charcoal bg-charcoal/5",
  },
];

export function AboutContent() {
  return (
    <div className="space-y-16 py-8">
      {/* About Hero Header */}
      <section className="page-section pt-10 pb-6 text-center">
        <div className="mx-auto max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block -rotate-1 rounded-sm border border-ink-red px-4 py-1.5 font-hand text-xl sm:text-2xl font-bold text-ink-red"
          >
            our journey &amp; brand identity
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-charcoal"
          >
            Reimagining Local Loyalty <br />
            <span className="text-ink-navy">Without the Paper Waste.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4a443f]"
          >
            Stampogen was born out of a simple observation at a local Mumbai café: regular customers loved collecting stamps, but lost their paper cards before ever unlocking a reward.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section (Founder Note) */}
      <FounderNote />

      {/* Unique Branding & Pillars */}
      <section className="page-section py-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center max-w-3xl mx-auto flex flex-col items-center justify-center">
            <span className="mb-3 block font-mono text-xl sm:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-widest text-ink-red leading-tight text-center">
              what makes us different
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal text-center">
              Our Unique Brand Philosophy
            </h2>
            <p className="mt-3 text-[#4a443f] text-sm sm:text-base text-center max-w-xl">
              The principles that guide how we design every interaction for shops and regulars.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {brandPillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="flex flex-col justify-between rounded-xl border border-line bg-card p-6 shadow-sm hover:shadow-panel transition-all"
              >
                <div>
                  <span
                    className={`inline-block mb-3 rounded border px-2 py-0.5 font-mono text-[11px] font-bold ${pillar.badgeColor}`}
                  >
                    {pillar.tag}
                  </span>
                  <h3 className="mb-2 font-display text-xl font-bold text-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4a443f]">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Banner */}
      <CtaWaitlist />
    </div>
  );
}
