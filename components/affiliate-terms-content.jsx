"use client";

import { ShieldCheck, Mail } from "lucide-react";

export function AffiliateTermsContent() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-line pb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-red/10 px-4 py-1 font-mono text-xs font-bold text-ink-red uppercase tracking-wider border border-ink-red/20">
          <ShieldCheck className="h-4 w-4 text-ink-red" />
          <span>AFFILIATE PARTNER POLICY</span>
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-charcoal tracking-tight">
          Affiliate Terms &amp; Conditions
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
          Guidelines and terms governing participation in the Stampogen Affiliate Partner Program. Stampogen is a SaaS product of <strong className="font-bold text-charcoal">Business Growth Services</strong>.
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-8 text-charcoal text-sm sm:text-base leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            1. Acceptance of Terms
          </h2>
          <p className="text-[#57514A]">
            By registering for or participating in the Stampogen Affiliate Program (&quot;Program&quot;), for the SaaS product Stampogen operated by <strong className="font-bold text-[#0A192F]">Business Growth Services</strong>, you agree to comply with these Affiliate Terms &amp; Conditions. If you do not agree, you may not participate in the Program.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            2. Affiliate Program
          </h2>
          <p className="text-[#57514A]">
            The Stampogen Affiliate Program allows approved affiliates to promote Stampogen&apos;s digital loyalty software using a unique referral link or referral code. Affiliates are eligible to earn commissions for successful referrals that meet the Program requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            3. Eligibility
          </h2>
          <p className="text-[#57514A] mb-2">
            To participate, you must:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Be at least 18 years of age.</li>
            <li>Provide accurate registration and payment information.</li>
            <li>Comply with all applicable laws and regulations.</li>
            <li>Maintain an active Stampogen affiliate account.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Stampogen reserves the right to approve or reject any affiliate application.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            4. Referral Commissions
          </h2>
          <p className="text-[#57514A] mb-2">
            Affiliates earn commissions only on qualified referrals that:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Successfully purchase an eligible Stampogen subscription.</li>
            <li>Complete payment successfully.</li>
            <li>Are not cancelled, refunded, fraudulent, or duplicate accounts.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Commission percentages, eligibility, and payment schedules may change at Stampogen&apos;s discretion.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            5. Payment &amp; Bank Charges
          </h2>
          <p className="text-[#57514A] mb-2">
            Affiliate commissions are paid according to Stampogen&apos;s payment schedule after the applicable verification period.
          </p>
          <p className="text-[#57514A] mb-2 font-medium bg-amber-50/60 border-l-4 border-amber-500 p-3 rounded-r-lg">
            <strong className="text-charcoal block mb-1">Affiliate Commission and Bank Charges:</strong>
            Affiliate commissions payable to affiliates may be subject to applicable bank charges, payment gateway fees, transaction fees, or other charges incurred during the commission payout process. Any such applicable charges may be deducted from the affiliate commission amount before the final payment is transferred to the affiliate. The affiliate will receive the net commission amount after deduction of applicable charges.
          </p>
          <p className="text-[#57514A]">
            Stampogen may withhold or cancel commissions resulting from fraud, abuse, self-referrals, fake accounts, chargebacks, or violations of these Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            6. Prohibited Activities
          </h2>
          <p className="text-[#57514A] mb-2">
            Affiliates must not:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Create fake or duplicate accounts.</li>
            <li>Refer themselves for commissions.</li>
            <li>Misrepresent Stampogen or its services.</li>
            <li>Send spam messages or unsolicited emails.</li>
            <li>Use misleading advertisements.</li>
            <li>Bid on Stampogen trademarks in paid advertising without written permission.</li>
            <li>Engage in fraudulent or deceptive marketing practices.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Violation may result in immediate removal from the Program and forfeiture of unpaid commissions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            7. Marketing Guidelines
          </h2>
          <p className="text-[#57514A]">
            Affiliates may promote Stampogen using websites, blogs, social media, videos, or other lawful marketing channels. All promotional content must be truthful, accurate, and must not make false promises or misleading claims.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            8. Intellectual Property
          </h2>
          <p className="text-[#57514A]">
            Stampogen grants affiliates a limited, non-exclusive, revocable license to use approved logos, banners, and marketing materials solely for promoting Stampogen. Affiliates may not modify or misuse Stampogen&apos;s trademarks without written permission.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            9. Termination
          </h2>
          <p className="text-[#57514A]">
            Stampogen may suspend or terminate an affiliate account at any time for violations of these Terms or suspected fraudulent activity. Affiliates may leave the Program at any time by closing their affiliate account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            10. Limitation of Liability
          </h2>
          <p className="text-[#57514A]">
            Stampogen is not liable for indirect, incidental, or consequential damages arising from participation in the Affiliate Program.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            11. Changes to the Program
          </h2>
          <p className="text-[#57514A]">
            Stampogen may modify commission rates, payment terms, Program rules, or these Affiliate Terms at any time. Continued participation constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section className="space-y-3 border-t border-line pt-6">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            12. Contact Us
          </h2>
          <p className="text-[#57514A]">
            For Affiliate Program inquiries, contact us at:
          </p>
          <div className="flex items-center gap-2 font-mono text-sm text-ink-navy bg-card border border-line p-4 rounded-xl">
            <Mail className="h-4 w-4 text-ink-red shrink-0" />
            <span>Email:</span>
            <a href="mailto:support@stampogen.in" className="font-bold underline hover:text-ink-red">
              support@stampogen.in
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
