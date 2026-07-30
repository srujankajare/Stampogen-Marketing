"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const personas = [
  {
    title: "Students & Campus Ambassadors",
    desc: "Earn side income during college by introducing neighborhood cafés, boba shops, fast-food joints, and bookstores near campus to digital stamp cards.",
    termsUrl: "#terms-students",
  },
  {
    title: "Social Media Creators & Influencers",
    desc: "Monetize your local lifestyle or food blog audience by sharing your custom affiliate link in bio or reviewing local hot spots.",
    termsUrl: "#terms-[#terms-creators]",
  },
  {
    title: "Freelancers & Digital Marketers",
    desc: "Add digital loyalty & customer retention as a value-added service for your existing salon, gym, restaurant, and retail clients.",
    termsUrl: "#terms-freelancers",
  },
];

const steps = [
  {
    num: "01",
    title: "Apply & Get Link",
    desc: "Fill out the quick 2-minute form below to get your custom partner referral link instantly.",
  },
  {
    num: "02",
    title: "Verification",
    desc: "Quick review & verification — an interview may be scheduled to align on partnership goals.",
  },
  {
    num: "03",
    title: "Introduce Local Shops",
    desc: "Share Stampogen with cafés, salons, bakeries, & local retailers in your area or network.",
  },
  {
    num: "04",
    title: "Earn Every Month",
    desc: "Earn payouts for every shop that launches their digital stamp program — commission depends on your affiliate account type.",
  },
];

export function AffiliateContent() {
  const [billingCycle, setBillingCycle] = useState("month"); // "month" or "year"
  const [commissionRate, setCommissionRate] = useState(0.20); // 20% default
  const [referredShops, setReferredShops] = useState(10); // 10 shops default (0 - 100)

  const plans = [
    {
      name: "Month Plan",
      key: "month",
      mrp: 299,
      discountedPrice: 200,
      referralPrice: 160,
      referralDiscountPct: 20, // (200- 160) / 200 = 20%
      features: [
        "1 Counter QR Code",
        "Unlimited Regular Customers",
        "Real-Time Stamp Analytics",
        "Instant WhatsApp & Web Cards",
        "Standard Support",
      ],
    },
    {
      name: "Year Plan",
      key: "year",
      mrp: 2990,
      discountedPrice: 2000,
      referralPrice: 1600,
      referralDiscountPct: 20,
      features: [
        "1 Counter QR Code (12 Months)",
        "Unlimited Regular Customers",
        "Advanced Analytics & Trends",
        "Custom Reward Rules & Coupons",
        "Priority 24/7 Partner Support",
      ],
    },
  ];

  const currentPlan = billingCycle === "month" ? plans[0] : plans[1];
  const commissionAmount = currentPlan.referralPrice * commissionRate;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="page-section pt-10 pb-6 text-center">
        <div className="mx-auto max-w-4xl px-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-ink-red/40 bg-ink-red/5 px-5 sm:px-6 py-2 sm:py-2.5 font-mono text-sm sm:text-base font-bold uppercase tracking-wider text-ink-red shadow-sm"
          >
            <span>STAMPOGEN AFFILIATE PROGRAM</span>
            <span className="h-2 w-2 rounded-full bg-ink-red hidden sm:inline-block" />
            <span className="text-emerald-700 font-black">100% FREE TO JOIN</span>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6 font-display text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-ink-red"
          >
            Earn 20% Payout on Every Referral.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-[#4a443f] mb-8"
          >
            Join an affiliate program that values your partnership – it&apos;s completely free of charge! Refer local cafés, salons, and retailers to digital loyalty cards and earn a high-value one-time commission for every shop you onboard.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a href="/affiliate/onboarding">
              <Button
                variant="primary"
                size="lg"
                className="px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-extrabold tracking-wide shadow-lg hover:shadow-xl transition-all"
              >
                Become An Affiliate Partner →
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Interactive Referral Card Section */}
      <section className="page-section py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <span className="font-mono text-[20px] xs:text-[24px] sm:text-3xl lg:text-4xl font-black uppercase tracking-widest text-ink-red block mb-2 sm:mb-3 leading-tight">
              REFERRAL CALCULATOR
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal leading-tight">
              Estimate Your Referral Earnings
            </h2>
          </div>

          {/* Side by Side Grid: Sliders Box on Left (or top), Plan Cards Grid on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 sm:gap-8 items-start max-w-6xl mx-auto">
            {/* Left Sliders Control Panel */}
            <div className="rounded-2xl sm:rounded-3xl border border-line/70 bg-[#F4F1EA]/80 p-5 sm:p-7 shadow-sm space-y-5 sm:space-y-6">
              {/* Slider 1: Commission Rate */}
              <div>
                <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                  <label className="font-display text-xs sm:text-sm font-extrabold text-charcoal">
                    Adjust Commission Rate:
                  </label>
                  <span className="font-mono text-xs font-black text-ink-navy bg-[#EAE3D2] border border-line/40 px-2.5 sm:px-3 py-1 rounded-md shadow-xs">
                    {Math.round(commissionRate * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="20"
                  step="1"
                  value={Math.round(commissionRate * 100)}
                  onChange={(e) => setCommissionRate(Number(e.target.value) / 100)}
                  className="w-full h-2 bg-[#DCD1B4] rounded-lg appearance-none cursor-pointer accent-ink-navy"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#78716a] font-mono mt-1.5 sm:mt-2">
                  <span>0%</span>
                  <span>10%</span>
                  <span>20%</span>
                </div>
              </div>

              <div className="border-t border-line/40 pt-4 sm:pt-5">
                {/* Slider 2: Number of Shops Referred by You (0 - 100) */}
                <div className="flex justify-between items-center mb-2.5 sm:mb-3">
                  <label className="font-display text-xs sm:text-sm font-extrabold text-charcoal">
                    No. of Shops Referred by You:
                  </label>
                  <span className="font-mono text-xs font-bold text-[#A8342A] bg-[#FCE8E6] border border-[#A8342A]/20 px-2 sm:px-2.5 py-1 rounded-md shadow-xs whitespace-nowrap">
                    {referredShops} shops
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  value={referredShops}
                  onChange={(e) => setReferredShops(Number(e.target.value))}
                  className="w-full h-2 bg-[#DCD1B4] rounded-lg appearance-none cursor-pointer accent-[#A8342A]"
                />
                <div className="flex justify-between text-[10px] sm:text-[11px] text-[#78716a] font-mono mt-1.5 sm:mt-2">
                  <span>0 shops</span>
                  <span>50 shops</span>
                  <span>100 shops</span>
                </div>
              </div>
            </div>

            {/* Right Side by Side Plan Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {plans.map((p) => {
                const singleCommission = p.referralPrice * commissionRate;
                const totalCommission = singleCommission * referredShops;
                const isYear = p.key === "year";

                return (
                  <div
                    key={p.name}
                    className={`rounded-2xl sm:rounded-3xl border bg-card p-5 sm:p-7 shadow-md sm:shadow-lg flex flex-col justify-between transition-all relative ${
                      isYear ? "border-ink-red/40 ring-1 ring-ink-red/20" : "border-line"
                    }`}
                  >
                    {isYear && (
                      <span className="absolute -top-3 right-4 sm:right-6 rounded-full bg-[#A8342A] px-2.5 sm:px-3 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-paper shadow-sm">
                        BEST VALUE (10x)
                      </span>
                    )}
                    <div>
                      {/* Plan Name & Price */}
                      <div className="mb-4 sm:mb-5">
                        <h3 className="font-display text-xl sm:text-2xl font-black text-charcoal mb-1">
                          {p.name}
                        </h3>
                        <div className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-charcoal flex items-baseline gap-1.5 flex-wrap">
                          <span>₹ {p.discountedPrice.toFixed(2)}</span>
                          <span className="text-xs text-[#9a938a] line-through font-mono">
                            ₹{p.mrp.toFixed(2)}
                          </span>
                          <span className="text-xs font-medium text-[#78716a]">
                            /{p.key === "month" ? "mo" : "yr"}
                          </span>
                        </div>
                      </div>

                      {/* Features Checklist */}
                      <ul className="space-y-2 mb-5 sm:mb-6 text-xs sm:text-sm font-medium text-charcoal">
                        {p.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2">
                            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-emerald-600 font-black text-xs">
                              ✓
                            </span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* They Pay Referral Discount Box */}
                      <div className="mb-4 rounded-xl sm:rounded-2xl bg-[#F4F1EA] p-3 sm:p-3.5 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                            <span className="text-[10px] sm:text-[11px] font-medium text-[#78716a]">They pay with your link</span>
                            <span className="rounded bg-emerald-100 border border-emerald-300 px-1.5 py-0.5 text-[8.5px] sm:text-[9px] font-bold text-emerald-800">
                              -{p.referralDiscountPct}%
                            </span>
                          </div>
                          <div className="flex items-baseline gap-1.5 sm:gap-2">
                            <span className="text-xs text-[#9a938a] line-through font-mono">
                              ₹ {p.discountedPrice.toFixed(2)}
                            </span>
                            <span className="font-display text-base sm:text-lg font-black text-charcoal">
                              ₹ {p.referralPrice.toFixed(2)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Your Commission Box */}
                      <div className="mb-1 sm:mb-2 rounded-xl sm:rounded-2xl border border-emerald-400/80 bg-[#E8F8F0] p-3.5 sm:p-4">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] sm:text-[11px] font-extrabold text-emerald-900 uppercase tracking-wider leading-snug">
                            TOTAL PAYOUT ({referredShops} SHOPS @ {Math.round(commissionRate * 100)}%)
                          </span>
                        </div>
                        <div className="font-display text-2xl sm:text-3xl font-black text-emerald-600">
                          ₹ {totalCommission.toFixed(2)}
                        </div>
                        <div className="text-[9.5px] sm:text-[10px] font-mono text-emerald-800/80 mt-0.5 sm:mt-1">
                          (₹ {singleCommission.toFixed(2)} per shop onboarded)
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
        </div>
      </section>

      {/* Who Can Benefit Section */}
      <section className="page-section py-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-mono text-[20px] xs:text-[24px] sm:text-3xl lg:text-4xl font-black uppercase tracking-widest text-ink-red block mb-2 sm:mb-3 leading-tight">
              WHO CAN BENEFIT
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal leading-tight">
              Who Can Take Advantage of Our Affiliate Program?
            </h2>
          </div>

          <div className="grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
            {personas.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-line bg-card p-5 sm:p-7 shadow-sm hover:shadow-panel transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-display text-base sm:text-base lg:text-lg font-black text-ink-navy uppercase tracking-tight mb-3 border-b border-line/60 pb-2 leading-snug sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#4a443f]">
                    <span className="font-serif text-lg font-black text-charcoal/90 mr-0.5 select-none">“</span>
                    {p.desc}
                    <span className="font-serif text-lg font-black text-charcoal/90 ml-1 select-none">”</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works 4 Steps */}
      <section className="page-section py-8 sm:py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-mono text-[20px] xs:text-[24px] sm:text-3xl lg:text-4xl font-black uppercase tracking-widest text-ink-red block mb-2 sm:mb-3 leading-tight">
              4 SIMPLE STEPS
            </span>
            <h2 className="font-display text-2xl sm:text-4xl lg:text-6xl font-black text-charcoal leading-tight">
              How the Affiliate Program Works
            </h2>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-line bg-card p-5 sm:p-10 lg:p-12 shadow-md sm:shadow-panel">
            <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start">
              {steps.map((st) => (
                <div key={st.num} className="flex flex-col space-y-2.5 sm:space-y-3">
                  {/* Step Header Row: Big Number & Uppercase Title */}
                  <div className="flex gap-3 items-center min-h-[48px] sm:min-h-[64px]">
                    <span className="inline-block font-display text-4xl sm:text-6xl lg:text-7xl font-black leading-none bg-gradient-to-b from-[#041229] via-[#0F2850] to-[#5C7299] bg-clip-text text-transparent tracking-normal shrink-0 select-none pb-1 px-0.5">
                      {st.num}
                    </span>
                    <h3 className="font-display text-base sm:text-xl font-extrabold uppercase text-charcoal leading-tight tracking-tight">
                      {st.title}
                    </h3>
                  </div>

                  {/* Description placed cleanly underneath, enclosed with quotes */}
                  <p className="text-xs sm:text-base text-[#3d3733] leading-relaxed pt-2 font-sans border-t border-line/40">
                    <span className="font-serif text-lg sm:text-xl font-black text-charcoal/90 mr-0.5 select-none">“</span>
                    {st.desc}
                    <span className="font-serif text-lg sm:text-xl font-black text-charcoal/90 ml-1 select-none">”</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Become An Affiliate Partner Simple CTA Section */}
      <section id="apply-form" className="page-section py-8 sm:py-12 text-center px-4 sm:px-6">
        <div className="mx-auto max-w-4xl rounded-2xl sm:rounded-3xl border border-line bg-card p-6 sm:p-12 lg:p-16 shadow-panel">
          <span className="font-mono text-base sm:text-2xl lg:text-3xl font-black uppercase tracking-widest text-ink-red block mb-2.5 sm:mb-3">
            JOIN US TODAY
          </span>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-charcoal mb-3 sm:mb-4 leading-tight">
            Ready to Start Earning with Stampogen?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#4a443f] max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Join influencers, students, and freelancers who are building steady passive income with local business referrals.
          </p>
          
          <a
            href="/affiliate/onboarding"
            className="inline-block w-full sm:w-auto"
          >
            <Button
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-xl font-extrabold tracking-wide shadow-xl hover:shadow-2xl transition-all"
            >
              Become An Affiliate Partner →
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
