"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CheckCircle2,
  Copy,
  Upload,
  Video,
  Mail,
  FileCheck,
  Check,
  Sparkles,
  HelpCircle,
  Share2,
  ShieldCheck,
  Clock,
  Send,
  Calendar,
  ExternalLink,
  FileUp
} from "lucide-react";

export function AffiliateOnboardingContent() {
  // Form State for Step 1
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    affiliateType: "",
    joinReason: "",
    agreedTerms: false,
    handle: "",
  });

  // State for File Upload Step 4
  const [uploadedFile, setUploadedFile] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const generatedLink = `https://stampogen.com/ref/${formData.handle || "your-handle"}`;

  const copyToClipboard = () => {
    navigator.clipboard?.writeText(generatedLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Banner Header */}
      <section className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-red/40 bg-ink-red/10 px-5 py-2 text-xs sm:text-sm font-mono font-bold text-ink-red uppercase tracking-wider"
        >
          <Sparkles className="h-4 w-4" />
          <span>AFFILIATE PARTNER ONBOARDING PROCESS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-charcoal leading-tight tracking-tight mb-4"
        >
          How to Become an Affiliate Partner <br className="hidden sm:inline" />
          <span className="text-ink-red">4-Step Simple Onboarding Guide</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-xl text-[#57514A] max-w-2xl mx-auto leading-relaxed"
        >
          Follow the simple 4-step process below to complete your partner application, interview, agreement verification, and launch your account.
        </motion.p>

        {/* Divider Line between Hero and Step 1 */}
        <div className="w-full max-w-4xl mx-auto border-t border-line mt-10 sm:mt-12 opacity-80" />
      </section>

      {/* Main Vertical Scroll Process Steps */}
      <section className="mx-auto max-w-4xl space-y-16">

        {/* STEP 1: Apply for Form */}
        <div className="space-y-6 pb-12 border-b border-line">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-red text-white font-mono text-xl font-black shrink-0 shadow-md">
                01
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                Apply for Form
              </h2>
            </div>
            <span className="self-start md:self-auto rounded-full bg-ink-red/10 text-ink-red px-3.5 py-1 font-mono text-xs font-bold border border-ink-red/20">
              100% Free Application
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
            Fill out your basic details below to submit your initial partner application. This reserves your custom referral handle and payout account.
          </p>

          <div className="mx-auto max-w-xl py-4">
            {/* Form Title & Subtitle */}
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-400 text-slate-950 border-2 border-amber-500 px-4 py-1 font-mono text-xs font-black uppercase tracking-wider shadow-md mb-2">
                <Sparkles className="h-3.5 w-3.5 text-slate-950 shrink-0" />
                <span>DEMO FORM PREVIEW</span>
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#0A192F] mb-1.5">
                Join as Affiliate Partner
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-sans">
                Create your affiliate account and verify with a one-time email code.
              </p>
            </div>

            {/* Continue with Google */}
            <button
              type="button"
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-300 bg-white py-3 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 mb-6 cursor-pointer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="relative flex items-center justify-center mb-6">
              <div className="w-full border-t border-gray-200"></div>
              <span className="absolute bg-paper px-3 font-mono text-[11px] font-bold uppercase tracking-wider text-gray-400">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            {/* Application Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    First name
                  </label>
                  <Input
                    value={formData.firstName || ""}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="John"
                    className="bg-white border-gray-300 rounded-lg py-2.5 text-sm text-gray-900 font-medium placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Last name
                  </label>
                  <Input
                    value={formData.lastName || ""}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Doe"
                    className="bg-white border-gray-300 rounded-lg py-2.5 text-sm text-gray-900 font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Email Address & Affiliate Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3 h-4 w-4 text-gray-400 z-10" />
                    <Input
                      type="email"
                      value={formData.email || ""}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className="bg-white border-gray-300 rounded-lg pl-9 py-2.5 text-sm text-gray-900 font-medium placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-800 mb-1">
                    Affiliate type <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.affiliateType || ""}
                    onChange={(e) => handleInputChange("affiliateType", e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm font-medium text-gray-900 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                  >
                    <option value="" disabled>Select type</option>
                    <option value="student">Student / Campus Ambassador</option>
                    <option value="creator">Social Media Creator / Influencer</option>
                    <option value="freelancer">Freelancer / Digital Marketer</option>
                    <option value="agency">Agency / Consultant</option>
                  </select>
                </div>
              </div>

              {/* Why do you join with us? */}
              <div>
                <label className="block text-xs font-bold text-gray-800 mb-1">
                  Why do you join with us? <span className="text-red-500">*</span>
                </label>
                <Input
                  value={formData.joinReason || ""}
                  onChange={(e) => handleInputChange("joinReason", e.target.value)}
                  placeholder="Give a valid answer"
                  className="bg-white border-gray-300 rounded-lg py-2.5 text-sm text-gray-900 font-medium placeholder:text-gray-400"
                />
              </div>

              {/* Terms and Conditions Checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms-check"
                  checked={formData.agreedTerms || false}
                  onChange={(e) => handleInputChange("agreedTerms", e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-[#0F1E33] focus:ring-[#0F1E33]"
                />
                <label htmlFor="terms-check" className="text-xs text-gray-600 font-medium cursor-pointer">
                  I have read and agree to the <a href="/terms" target="_blank" rel="noreferrer" className="font-bold underline text-gray-800 hover:text-black">Terms and Conditions</a> <span className="text-red-500">*</span>
                </label>
              </div>

              {/* Fake Create Account Button */}
              <button
                type="button"
                className="w-full rounded-xl bg-[#0F1E33] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#16283f] transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer"
              >
                <span>Create Account</span>
                <span>→</span>
              </button>

              {/* Already have an account */}
              <div className="text-center pt-2 text-xs text-gray-500 font-medium">
                Already have an account? <span className="font-bold text-blue-600 cursor-pointer hover:underline">Sign in</span>
              </div>
            </form>
          </div>
        </div>

        {/* STEP 2: Interview on Google Meet */}
        <div className="space-y-6 pb-12 border-b border-line">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-navy text-white font-mono text-xl font-black shrink-0 shadow-md">
                02
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                Interview on Google Meet
              </h2>
            </div>
            <span className="self-start md:self-auto rounded-full bg-ink-navy/10 text-ink-navy px-3.5 py-1 font-mono text-xs font-bold border border-ink-navy/20 flex items-center gap-1.5">
              <Video className="h-3.5 w-3.5 text-ink-navy" /> 10-15 Min Video Call
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
            After reviewing your application, our team will schedule a brief Google Meet interview to align on your local network, answer your questions, and explain the commission model.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <div className="space-y-2">
              <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal">1. Receive Calendar Invite</h3>
              <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                Check your WhatsApp or Email for a Google Meet calendar link sent within 24 hours.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal">2. 15-Min Quick Intro</h3>
              <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                Join the Google Meet call to discuss your target business niche (cafés, salons, stores).
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal">3. Alignment & Approval</h3>
              <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed">
                Once approved on the call, your official partner agreement document is dispatched to your email.
              </p>
            </div>
          </div>
        </div>

        {/* STEP 3: Accept the Agreement Comes Through Email */}
        <div className="space-y-6 pb-12 border-b border-line">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-600 text-white font-mono text-xl font-black shrink-0 shadow-md">
                03
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                Accept the Agreement Comes Through Email
              </h2>
            </div>
            <span className="self-start md:self-auto rounded-full bg-amber-100 text-amber-900 px-3.5 py-1 font-mono text-xs font-bold flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-amber-700" /> Email Agreement Link
            </span>
          </div>

          <p className="text-sm sm:text-base text-[#57514A] leading-relaxed">
            Following your Google Meet interview, a formal Stampogen Affiliate Partner Agreement will arrive in your email inbox from <strong className="text-charcoal font-bold">support@stampogen.in</strong>.
          </p>

          <div className="space-y-3 pt-2">
            <h3 className="font-display text-base font-bold text-charcoal">
              Email Agreement Instructions:
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#4a443f] leading-relaxed">
              <li className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-amber-600 shrink-0">•</span>
                <span>Open the email attachment containing the official Partner Commission Agreement.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-amber-600 shrink-0">•</span>
                <span>Click the <strong>Upload Signed Document</strong> button provided inside the email.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="font-mono font-bold text-amber-600 shrink-0">•</span>
                <span>After opening that link, you will get the option to upload your document (PDF, PNG, or JPG - Max size: 5MB).</span>
              </li>
            </ul>
          </div>

          {/* Email Preview Explanation Card */}
          <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8 space-y-4 shadow-sm mt-6">
            <div className="flex items-center gap-3 border-b border-amber-200/80 pb-4">
              <Mail className="h-6 w-6 text-amber-700 shrink-0" />
              <div>
                <h4 className="font-display text-base font-bold text-gray-900">
                  Email Action Preview
                </h4>
                <p className="text-xs text-amber-800 font-mono">From: support@stampogen.in</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-gray-700">
              <p>
                Click the <strong>Upload Signed Document</strong> button given in your email to open the upload page:
              </p>
              <div className="pt-1">
                <span className="inline-flex items-center gap-2 rounded-xl bg-[#0F1E33] px-6 py-2.5 text-xs font-bold text-white shadow-sm cursor-default">
                  <span>Upload Signed Document →</span>
                </span>
              </div>
              <p className="text-xs text-gray-500 italic pt-1">
                * Opening that link provides the option to upload your signed agreement document (PDF, PNG, JPG up to 5MB).
              </p>
            </div>
          </div>
        </div>

        {/* STEP 4: If company verification is done then your account is successfully created */}
        <div className="space-y-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-mono text-xl font-black shrink-0 shadow-md">
                04
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal">
                If Company Verification is Done then Your Account is Successfully Created
              </h2>
            </div>
            <span className="self-start md:self-auto rounded-full bg-emerald-100 text-emerald-950 px-4 py-1.5 font-mono text-xs font-extrabold flex items-center gap-1.5 border border-emerald-300">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Final Step Completed
            </span>
          </div>

          <div className="space-y-4 text-center max-w-3xl mx-auto pt-4">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-4xl shadow-md">
              🎉
            </div>

            <div>
              <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 block mb-1">
                VERIFICATION COMPLETE & ACTIVE
              </span>
              <p className="text-sm sm:text-base text-[#57514A] font-medium leading-relaxed">
                Your affiliate account and live dashboard will be activated immediately once our verification team confirms your submitted agreement.
              </p>
            </div>
          </div>
        </div>

      </section>

      {/* Divider Line before FAQ */}
      <div className="w-full max-w-4xl mx-auto border-t border-line my-12 opacity-80" />

      {/* FAQ Section */}
      <section className="mx-auto max-w-4xl pt-4">
        <div className="text-center mb-8">
          <span className="font-mono text-xs sm:text-sm font-extrabold uppercase tracking-widest text-ink-red block mb-1">
            ONBOARDING QUESTIONS
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-charcoal">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-line bg-card p-5 sm:p-6 shadow-sm space-y-2">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-ink-red shrink-0" />
              How long does the Google Meet interview take?
            </h3>
            <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed pl-7">
              The Google Meet call is a quick 10-15 minute casual session to introduce our team, align on target local shops, and explain commission payouts.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-card p-5 sm:p-6 shadow-sm space-y-2">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-ink-red shrink-0" />
              How will I receive the agreement document?
            </h3>
            <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed pl-7">
              The agreement is automatically sent to the email address you enter in Step 1 immediately following your Google Meet interview.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-card p-5 sm:p-6 shadow-sm space-y-2">
            <h3 className="font-display text-base sm:text-lg font-extrabold text-charcoal flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-ink-red shrink-0" />
              How long does company verification take?
            </h3>
            <p className="text-xs sm:text-sm text-[#57514A] leading-relaxed pl-7">
              Once you upload proof of your signed agreement in Step 4, our company verification team reviews and activates your account within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
