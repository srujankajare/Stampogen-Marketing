"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaWaitlist() {
  return (
    <section id="join" className="page-section py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-xl bg-charcoal px-8 py-14 text-center text-paper sm:px-11">
          <h2 className="mb-3 font-display text-3xl font-black sm:text-4xl">
            Be the first.
          </h2>
          <p className="mb-7 text-paper/75">
            We're onboarding the first hundred shops in Mumbai before opening
            up city by city.
          </p>

          <motion.div
            animate={{
              scale: [1, 1.03, 1, 1.03, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 1.2,
            }}
            className="w-full max-w-[480px] inline-block mx-auto"
          >
            <a href="https://app.stampogen.in/admin/register" className="block w-full">
              <Button variant="primary" size="lg" className="w-full justify-center px-10 py-4.5 sm:py-5 text-xl sm:text-2xl font-black shadow-xl tracking-wide">
                Start free trial →
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
