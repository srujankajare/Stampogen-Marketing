"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CtaWaitlist() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(data) {
    // Wire this up to your waitlist endpoint / spreadsheet / CRM.
    console.log("waitlist signup:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      window.location.href = "https://app.stampogen.in/";
    }, 500);
  }

  return (
    <section id="join" className="page-section py-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-xl bg-charcoal px-8 py-14 text-center text-paper sm:px-11">
          <h2 className="mb-3 font-display text-3xl font-black sm:text-4xl">
            Be first in line to stamp.
          </h2>
          <p className="mb-7 text-paper/75">
            We're onboarding the first hundred shops in Mumbai before opening
            up city by city.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto flex max-w-[480px] flex-col sm:flex-row items-center justify-center gap-3"
            noValidate
          >
            <Input
              type="email"
              placeholder="you@business.com"
              aria-label="Email address"
              className="w-full sm:w-auto flex-1"
              {...register("email", { required: true })}
            />
            <Button type="submit" variant="primary" className="w-full sm:w-auto font-bold px-7 py-3 text-base whitespace-nowrap shadow-lg">
              Join Now →
            </Button>
          </form>
          {errors.email && (
            <p className="mt-2 font-mono text-xs text-[#E0A24A]">
              Please enter your email address to join now
            </p>
          )}

          <AnimatePresence>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, rotate: -4, scale: 1.15 }}
                animate={{ opacity: 1, rotate: -4, scale: 1 }}
                exit={{ opacity: 0 }}
                className="mt-4 font-hand text-[15px] text-[#E0A24A]"
              >
                ✔ received — we'll stamp you in soon
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
