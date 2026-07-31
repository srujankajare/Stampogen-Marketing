"use client";

import { Lock, Mail } from "lucide-react";

export function AffiliatePrivacyContent() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-line pb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-4 py-1 font-mono text-xs font-bold text-emerald-900 uppercase tracking-wider border border-emerald-300">
          <Lock className="h-4 w-4 text-emerald-700" />
          <span>AFFILIATE PRIVACY POLICY</span>
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-charcoal tracking-tight">
          Affiliate Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
          How Stampogen (a SaaS product of <strong className="font-bold text-charcoal">Business Growth Services</strong>) collects, tracks, processes, and protects partner information in the Affiliate Program.
        </p>
      </div>

      {/* Content Body */}
      <div className="space-y-8 text-charcoal text-sm sm:text-base leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            1. Information We Collect
          </h2>
          <p className="text-[#57514A] mb-2">
            When you join the Stampogen Affiliate Program, we may collect:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Payment details</li>
            <li>Tax information (where applicable)</li>
            <li>Bank account or UPI details for commission payouts</li>
            <li>Referral performance data</li>
            <li>Device and browser information</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            2. How We Use Your Information
          </h2>
          <p className="text-[#57514A] mb-2">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Register and manage your affiliate account.</li>
            <li>Track referrals and commission earnings.</li>
            <li>Process commission payments.</li>
            <li>Prevent fraud and abuse.</li>
            <li>Communicate important Program updates.</li>
            <li>Improve the Affiliate Program.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            3. Referral Tracking
          </h2>
          <p className="text-[#57514A]">
            Stampogen uses cookies, referral links, tracking parameters, and related technologies to identify successful referrals and accurately calculate commissions. These technologies are used solely for affiliate attribution and Program management.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            4. Information Sharing
          </h2>
          <p className="text-[#57514A] mb-2">
            We do not sell your personal information.
          </p>
          <p className="text-[#57514A] mb-2">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Payment processors for commission payouts.</li>
            <li>Trusted service providers supporting the Affiliate Program.</li>
            <li>Government authorities when legally required.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            5. Data Security
          </h2>
          <p className="text-[#57514A]">
            We implement appropriate technical and organizational measures to safeguard affiliate information against unauthorized access, disclosure, alteration, or destruction.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            6. Your Rights
          </h2>
          <p className="text-[#57514A] mb-2">
            You may request to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Access your personal information.</li>
            <li>Update inaccurate information.</li>
            <li>Delete your affiliate account, subject to legal and financial record retention requirements.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Requests may be sent to <a href="mailto:support@stampogen.in" className="font-bold underline hover:text-emerald-700">support@stampogen.in</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            7. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-[#57514A] mb-2">
            The Affiliate Program uses cookies and similar technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Track referrals.</li>
            <li>Record conversions.</li>
            <li>Prevent duplicate commissions.</li>
            <li>Improve Program performance.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Disabling cookies may affect referral tracking and commission eligibility.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            8. Data Retention
          </h2>
          <p className="text-[#57514A]">
            Affiliate information may be retained for legal, accounting, fraud prevention, and tax compliance purposes, even after an affiliate account is closed.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            9. Changes to this Privacy Policy
          </h2>
          <p className="text-[#57514A]">
            We may update this Privacy Policy periodically. The revised version will be published with an updated &quot;Last Updated&quot; date.
          </p>
        </section>

        <section className="space-y-3 border-t border-line pt-6">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            10. Contact Us
          </h2>
          <p className="text-[#57514A]">
            For questions regarding affiliate privacy, contact:
          </p>
          <div className="flex items-center gap-2 font-mono text-sm text-ink-navy bg-card border border-line p-4 rounded-xl">
            <Mail className="h-4 w-4 text-emerald-600 shrink-0" />
            <span>Email:</span>
            <a href="mailto:support@stampogen.in" className="font-bold underline hover:text-emerald-700">
              support@stampogen.in
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
