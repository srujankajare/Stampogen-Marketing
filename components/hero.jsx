"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="page-section pt-10 pb-16 sm:pt-20 sm:pb-20 md:pt-24 md:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-16 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="mb-4 sm:mb-6 inline-block -rotate-2 rounded-sm border border-ink-red px-3 sm:px-3.5 py-1 sm:py-1.5 font-hand text-[16px] sm:text-[22px] font-bold text-ink-red">
            One Scan. One Journey. Endless Loyalty.
          </span>
          <h1 className="mb-6 sm:mb-8 font-display text-[32px] sm:text-[52px] lg:text-[62px] font-black leading-[1.1] sm:leading-[1.05] tracking-tight text-charcoal">
            Every Scan Starts a Story.
            <br />
            Every Story <span className="text-ink-navy">Builds Loyalty.</span>
          </h1>
          <p className="mb-6 sm:mb-8 max-w-[580px] text-base sm:text-xl leading-relaxed text-[#3d3733]">
            You know the shop that remembers your order? Stampogen is how it remembers you back —{" "}
            <strong className="font-extrabold text-ink-navy">
              Scan the QR after you pay
            </strong>
            ,{" "}
            <strong className="font-extrabold text-ink-red">
              Watch a stamp land
            </strong>
            , And{" "}
            <strong className="font-extrabold text-brass">
              Get something free
            </strong>{" "}
            when the card fills up.
          </p>
          <p className="mb-8 sm:mb-10 whitespace-normal sm:whitespace-nowrap font-hand text-[18px] sm:text-[25px] font-bold text-brass leading-snug">
            no app. no card to dig out of your wallet. just your <span className="text-charcoal font-black">Email.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
            <a href="https://app.stampogen.in/" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto">Login as user</Button>
            </a>
            <a href="https://app.stampogen.in/affiliate/login" className="w-full sm:w-auto">
              <Button variant="navy" className="w-full sm:w-auto">Login as affiliate</Button>
            </a>
            <a href="https://app.stampogen.in/" className="w-full sm:w-auto">
              <Button variant="ghost" className="w-full sm:w-auto">I run a business→</Button>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <Image
            src="/mobile_scan.png"
            alt="Mobile scan experience"
            width={400}
            height={500}
            className="w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] drop-shadow-2xl rounded-2xl object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
