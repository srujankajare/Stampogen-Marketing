"use client";

import { ShieldCheck, Mail } from "lucide-react";

export function TermsContent() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-line pb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-red/10 px-4 py-1 font-mono text-xs font-bold text-ink-red uppercase tracking-wider">
          <ShieldCheck className="h-4 w-4" />
          <span>LEGAL AGREEMENT</span>
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-charcoal tracking-tight">
          Terms &amp; Conditions
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
          Please read these Terms &amp; Conditions carefully before using the Stampogen platform and services.
        </p>
      </div>

      {/* Terms Content Body */}
      <div className="space-y-8 text-charcoal text-sm sm:text-base leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            1. Acceptance of Terms
          </h2>
          <p className="text-[#57514A]">
            By accessing or using the Stampogen platform (&quot;Service&quot;), you agree to be bound by these Terms &amp; Conditions. If you do not agree with these Terms, please do not use our Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            2. Description of Service
          </h2>
          <p className="text-[#57514A]">
            Stampogen is a cloud-based customer loyalty and engagement platform that enables businesses to create digital stamp cards, QR code-based loyalty programs, reward campaigns, customer engagement tools, and business analytics. Customers can earn digital stamps through eligible purchases or visits and redeem rewards offered by participating businesses.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            3. User Accounts
          </h2>
          <p className="text-[#57514A]">
            You must provide accurate, complete, and up-to-date information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Stampogen reserves the right to suspend or terminate accounts that contain false or misleading information.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            4. Loyalty Programs &amp; Rewards
          </h2>
          <p className="text-[#57514A]">
            All loyalty programs, rewards, discounts, offers, and promotional campaigns available through Stampogen are created and managed solely by participating businesses. Stampogen provides only the technology platform and is not responsible for the availability, quality, redemption, expiry, or fulfillment of any reward offered by a business.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            5. User Conduct
          </h2>
          <p className="text-[#57514A] mb-2">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Create fraudulent accounts.</li>
            <li>Earn or redeem digital stamps through unauthorized or deceptive methods.</li>
            <li>Copy, manipulate, or misuse QR codes.</li>
            <li>Attempt to interfere with or disrupt the operation or security of the platform.</li>
            <li>Use the Service for any unlawful or prohibited activity.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            Violation of these Terms may result in suspension or permanent termination of your account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            6. Limitation of Liability
          </h2>
          <p className="text-[#57514A]">
            Stampogen is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any kind. To the maximum extent permitted by law, Stampogen shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of, or inability to use, the Service.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            7. Changes to Terms
          </h2>
          <p className="text-[#57514A]">
            We reserve the right to modify or update these Terms &amp; Conditions at any time. Any changes will become effective upon publication on our platform. Continued use of the Service after such changes constitutes your acceptance of the revised Terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            8. Business Subscription Plans
          </h2>
          <p className="text-[#57514A] mb-2">
            Stampogen offers subscription plans for businesses with features that may include digital loyalty cards, QR code generation, customer management, reward configuration, analytics, and campaign management.
          </p>
          <p className="text-[#57514A]">
            Subscription pricing, billing cycles, and trial offers may vary by plan. Subscription fees are billed according to the selected plan. Subscriptions do not renew automatically; businesses can manually renew their chosen plan at the end of each billing cycle to continue service uninterrupted. Refund eligibility, if any, is governed by our Refund &amp; Cancellation Policy.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            9. Refund &amp; Cancellation Policy
          </h2>
          <p className="text-[#57514A]">
            All Stampogen subscription plans are non-refundable once purchased and activated. No cancellation or pro-rata refund will be provided for unused subscription periods. Refunds may be issued for duplicate payments, payment errors, failure to activate the subscription due to an issue caused by Stampogen, or where required by applicable Indian law.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            10. Intellectual Property
          </h2>
          <p className="text-[#57514A]">
            All software, source code, trademarks, logos, designs, content, graphics, and technology associated with Stampogen are the exclusive property of Stampogen and are protected under applicable intellectual property laws. Users may not reproduce, modify, distribute, reverse engineer, or use any part of the Service without prior written permission.
          </p>
        </section>

        <section className="space-y-3 border-t border-line pt-6">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            11. Contact Us
          </h2>
          <p className="text-[#57514A]">
            If you have any questions regarding these Terms &amp; Conditions, please contact us at:
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
