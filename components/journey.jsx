"use client";

import { motion } from "framer-motion";

const steps = [
  {
    word: "DISCOVER",
    title: "SPOT THE\nCOUNTER QR",
    body: "A small 'collect loyalty points' sticker at billing — cafés, salons, gyms, car washes, the corner store.",
    img: "/discover.png",
  },
  {
    word: "SCAN",
    title: "SCAN AFTER\nYOU PAY",
    body: "Opens straight in the camera or browser. No app store, no install screen, no seven permissions.",
    img: "/scan.png",
  },
  {
    word: "COLLECT",
    title: "WATCH THE\nLOYALTY POINT LAND",
    body: "The card fills with one more mark, and shows exactly how many visits are left to go.",
    img: "/collect.png",
  },
  {
    word: "REDEEM",
    title: "CASH IN\nTHE REWARD",
    body: "Show the full card next visit. The shop marks it redeemed, and your card resets to zero.",
    img: "/redeem.png",
  },
];

export function Journey() {
  return (
    <section className="page-section py-4 sm:py-8 px-3 sm:px-4">
      <div className="w-full">
        {/* Heading */}
        <div className="mx-auto max-w-7xl mb-3 sm:mb-12 px-1 sm:px-4">
          <span className="mb-1.5 sm:mb-3 block font-mono text-[28px] xs:text-[38px] sm:text-[68px] md:text-[88px] lg:text-[94px] font-black uppercase leading-[1.08] sm:leading-[1.05] tracking-tight text-ink-red">
            <span className="block">how a customer</span>
            <span className="block">collects loyalty points</span>
          </span>
          <h2 className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-charcoal">
            Four steps, under ten seconds.
          </h2>
        </div>

        {/* Stacking Steps Container (Normal scroll on mobile, sticky stacking on desktop) */}
        <div className="flex flex-col gap-6 md:gap-12 pb-8 md:pb-16">
          {steps.map((s, i) => (
            <div
              key={s.word}
              className="relative md:sticky md:top-4 flex items-center justify-center h-auto md:h-[calc(100vh-32px)] py-2 md:py-0"
              style={{
                zIndex: i + 1,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:grid md:grid-cols-[40%_60%] gap-0 md:gap-4 w-full h-full items-stretch overflow-hidden rounded-2xl md:rounded-none shadow-[0_15px_35px_-10px_rgba(15,40,80,0.18)] md:shadow-none border border-line/80 md:border-0 bg-card md:bg-transparent"
              >
                {/* 40% Description Box */}
                <div className="flex flex-col justify-center rounded-none md:rounded-3xl border-0 md:border md:border-line bg-card p-5 sm:p-8 md:p-14 shadow-none md:shadow-lg flex-1 md:h-full relative z-10">
                  <div>
                    {/* Big word with top-to-bottom navy-to-transparent fade effect */}
                    <div className="mb-2 sm:mb-6 md:mb-8">
                      <span className="font-display text-[32px] sm:text-[54px] md:text-[68px] font-black uppercase tracking-tight leading-none bg-gradient-to-b from-[#0F2850] via-[#1E3350] to-[#1E3350]/20 bg-clip-text text-transparent block">
                        {s.word}
                      </span>
                    </div>

                    {/* Bold uppercase condensed title */}
                    <h3 className="mb-2 sm:mb-6 font-display text-[22px] sm:text-[32px] md:text-[42px] font-black uppercase leading-[1.1] tracking-tight text-charcoal whitespace-pre-line">
                      {s.title}
                    </h3>

                    {/* Clean sentence body */}
                    <p className="text-[13.5px] sm:text-[17px] md:text-[19px] leading-relaxed text-[#3d3733] font-sans">
                      {s.body}
                    </p>
                  </div>

                  <div className="mt-3 sm:mt-8 flex items-center gap-2 font-mono text-[11px] sm:text-[13px] text-ink-red font-bold tracking-wider">
                    <span>STEP {i + 1} OF 4</span>
                  </div>
                </div>

                {/* 60% Image Box (Merged lower half with subtle inner shadow separator on mobile) */}
                <div className="overflow-hidden rounded-none md:rounded-3xl border-t border-line/70 md:border md:border-line bg-card shadow-[inset_0_4px_12px_rgba(0,0,0,0.06)] md:shadow-lg flex-1 md:h-full h-[220px] sm:h-[300px] md:h-full relative">
                  <img
                    src={s.img}
                    alt={s.title.replace("\n", " ")}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
