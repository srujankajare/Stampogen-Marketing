"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const personas = [
  {
    title: "Students & Campus Ambassadors",
    desc: "Earn side income during college by introducing neighborhood cafés, boba shops, fast-food joints, and bookstores near campus — your referred clients get an exclusive 37% discount.",
    termsUrl: "#terms-students",
    discountBadge: "37% Client Discount",
  },
  {
    title: "Social Media Creators & Influencers",
    desc: "Monetize your local lifestyle or food blog audience by sharing your custom affiliate link in bio or reviewing local hot spots — your referred clients receive a 25% discount.",
    termsUrl: "#terms-[#terms-creators]",
    discountBadge: "25% Client Discount",
  },
  {
    title: "Freelancers & Digital Marketers",
    desc: "Add digital loyalty software & customer retention as a value-added solution for your existing salon, gym, restaurant, and retail clients with a 25% client discount.",
    termsUrl: "#terms-freelancers",
    discountBadge: "25% Client Discount",
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
    desc: "Earn payouts for every shop that launches their digital loyalty software — commission depends on your affiliate account type.",
  },
];

export function AffiliateContent() {
  const [billingCycle, setBillingCycle] = useState("month"); // "month" or "year"
  const [commissionRate, setCommissionRate] = useState(0.20); // 20% default
  const [referredShops, setReferredShops] = useState(10); // 10 shops default (0 - 100)
  const [clientDiscountPct, setClientDiscountPct] = useState(37); // 37% for Students, 25% for Creators & Marketers

  const plans = [
    {
      name: "Month Plan",
      key: "month",
      mrp: 499,
      discountedPrice: 345,
      referralDiscountPct: clientDiscountPct,
      referralPrice: Math.round(345 * (1 - clientDiscountPct / 100)),
      features: [
        "Customer Search",
        "Digital Loyalty Cards",
      
        "Unlimited Loyalty Campaigns",
        "Unlimited Regular Customers",
         "1 Counter QR Code"
        
        
      
      ],
    },
    {
      name: "Year Plan",
      key: "year",
      mrp: 4990,
      discountedPrice: 3450,
      referralDiscountPct: clientDiscountPct,
      referralPrice: Math.round(3450 * (1 - clientDiscountPct / 100)),
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
            Join an affiliate program that values your partnership – it&apos;s completely free of charge! Refer local cafés, salons, and retailers to digital loyalty software and earn a high-value one-time commission for every shop you onboard.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
          >
            <a href="/affiliate/onboarding" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto h-auto px-4 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-lg font-extrabold tracking-wide whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal shadow-lg hover:shadow-xl transition-all"
              >
                How to Become An Affiliate Partner →
              </Button>
            </a>
            <a href="https://app.stampogen.in/affiliate/login" className="w-full sm:w-auto">
              <Button
                variant="navy"
                size="lg"
                className="w-full sm:w-auto h-auto px-4 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-lg font-extrabold tracking-wide whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal shadow-lg hover:shadow-xl transition-all"
              >
                Create Account →
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
            {/* Left Sliders & Partner Category Control Panel */}
            <div className="rounded-2xl sm:rounded-3xl border border-line/70 bg-[#F4F1EA]/80 p-5 sm:p-7 shadow-sm space-y-5 sm:space-y-6">
              {/* Partner Category Selector: Client Discount */}
              <div>
                <label className="font-display text-xs sm:text-sm font-extrabold text-charcoal block mb-2">
                  Partner Category (Client Discount):
                </label>
                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setClientDiscountPct(37)}
                    className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                      clientDiscountPct === 37
                        ? "border-[#A8342A] bg-[#FCE8E6] text-[#A8342A] shadow-xs ring-1 ring-[#A8342A]/30"
                        : "border-line/60 bg-white/70 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-xs">Students &amp; Campus Ambassadors</div>
                      <div className="text-[10px] opacity-75 font-normal">Referred clients get 37% discount</div>
                    </div>
                    <span className="font-mono bg-[#A8342A] text-white px-2 py-0.5 rounded text-[10px] font-black shrink-0 ml-1">
                      37% OFF
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setClientDiscountPct(25)}
                    className={`w-full flex items-center justify-between p-2.5 sm:p-3 rounded-xl border text-xs font-bold transition-all text-left cursor-pointer ${
                      clientDiscountPct === 25
                        ? "border-ink-navy bg-ink-navy/10 text-ink-navy shadow-xs ring-1 ring-ink-navy/30"
                        : "border-line/60 bg-white/70 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <div>
                      <div className="font-extrabold text-xs">Creators, Influencers &amp; Marketers</div>
                      <div className="text-[10px] opacity-75 font-normal">Referred clients get 25% discount</div>
                    </div>
                    <span className="font-mono bg-ink-navy text-white px-2 py-0.5 rounded text-[10px] font-black shrink-0 ml-1">
                      25% OFF
                    </span>
                  </button>
                </div>
              </div>

              {/* Slider 1: Commission Rate */}
              <div className="border-t border-line/40 pt-4 sm:pt-5">
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
                      <span className="absolute -top-3 right-4 sm:right-6 rounded-full bg-[#A8342A] px-2.5 sm:px-3 py-0.5 font-mono text-[9px] sm:text-[10px] font-bold text-paper shadow-sm uppercase tracking-wider">
                        COMING SOON
                      </span>
                    )}
                    <div>
                      {/* Plan Name & Price */}
                      <div className="mb-4 sm:mb-5">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-display text-xl sm:text-2xl font-black text-charcoal">
                            {p.name}
                          </h3>
                          {isYear && (
                            <span className="rounded-md bg-amber-100 border border-amber-300 px-2 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold text-amber-900 uppercase tracking-wide">
                              Coming Soon
                            </span>
                          )}
                        </div>
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
                  <div className="flex items-center justify-between gap-2 mb-3 border-b border-line/60 pb-2">
                    <h3 className="font-display text-base sm:text-base lg:text-lg font-black text-ink-navy uppercase tracking-tight leading-snug sm:whitespace-nowrap sm:overflow-hidden sm:text-ellipsis">
                      {p.title}
                    </h3>
                    <span className="font-mono text-[10px] font-extrabold bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded shrink-0">
                      {p.discountBadge}
                    </span>
                  </div>
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4">
            <a
              href="/affiliate/onboarding"
              className="w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto h-auto px-4 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-xl font-extrabold tracking-wide whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal shadow-xl hover:shadow-2xl transition-all"
              >
                How to Become An Affiliate Partner →
              </Button>
            </a>
            <a
              href="https://app.stampogen.in/affiliate/login"
              className="w-full sm:w-auto"
            >
              <Button
                variant="navy"
                size="lg"
                className="w-full sm:w-auto h-auto px-4 sm:px-10 py-3.5 sm:py-5 text-sm sm:text-xl font-extrabold tracking-wide whitespace-normal sm:whitespace-nowrap leading-tight sm:leading-normal shadow-xl hover:shadow-2xl transition-all"
              >
                Create Account →
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
