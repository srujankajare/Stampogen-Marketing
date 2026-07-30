"use client";

import { Lock, Mail } from "lucide-react";

export function PrivacyContent() {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center space-y-3 border-b border-line pb-8">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-4 py-1 font-mono text-xs font-bold text-emerald-900 uppercase tracking-wider border border-emerald-300">
          <Lock className="h-4 w-4 text-emerald-700" />
          <span>DATA PROTECTION</span>
        </span>
        <h1 className="font-display text-3xl sm:text-5xl font-black text-charcoal tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-sm sm:text-base text-gray-500 font-sans max-w-xl mx-auto">
          This Privacy Policy describes how Stampogen collects, uses, and protects your information when you use our platform.
        </p>
      </div>

      {/* Privacy Policy Content Body */}
      <div className="space-y-8 text-charcoal text-sm sm:text-base leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            1. Information We Collect
          </h2>
          <p className="text-[#57514A]">
            We collect information that you provide directly when using Stampogen, including your name, phone number, email address, business information (for business accounts), and other details required to create and manage your account.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            2. How We Use Your Information
          </h2>
          <p className="text-[#57514A] mb-2">
            We use your information to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Create and manage your account.</li>
            <li>Provide and improve our Services.</li>
            <li>Enable digital loyalty programs and reward redemption.</li>
            <li>Generate QR codes and manage digital stamp cards.</li>
            <li>Process subscription payments.</li>
            <li>Communicate important account updates, service notifications, and support requests.</li>
            <li>Analyze platform usage to improve customer experience.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            3. QR Code &amp; Loyalty Verification
          </h2>
          <p className="text-[#57514A]">
            Stampogen uses QR code scanning to verify customer participation in loyalty programs. Information collected during QR scans is used to validate stamp collection, reward eligibility, and prevent fraudulent activities. Verification data is processed securely and only for the intended purpose.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            4. Data Sharing
          </h2>
          <p className="text-[#57514A] mb-2">
            We do not sell or rent your personal information.
          </p>
          <p className="text-[#57514A] mb-2">
            We may share limited information with:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Participating businesses to manage loyalty programs and reward redemption.</li>
            <li>Trusted third-party service providers such as payment gateways, cloud hosting providers, messaging services, and analytics providers that help us operate the platform.</li>
            <li>Government or legal authorities when required by applicable law.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            5. Data Security
          </h2>
          <p className="text-[#57514A]">
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. While we strive to protect your data, no online service can guarantee absolute security.
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
            <li>Correct inaccurate information.</li>
            <li>Update your account details.</li>
            <li>Delete your account and personal data, subject to applicable legal obligations.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            To exercise these rights, contact us at <a href="mailto:support@stampogen.in" className="font-bold underline hover:text-ink-red">support@stampogen.in</a>.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            7. Cookies &amp; Similar Technologies
          </h2>
          <p className="text-[#57514A] mb-2">
            Stampogen uses cookies, local storage, and session technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Maintain your login session.</li>
            <li>Remember your preferences.</li>
            <li>Improve platform performance and user experience.</li>
            <li>Provide secure authentication.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            These technologies do not collect sensitive personal information for advertising purposes.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            8. Business Partner Information
          </h2>
          <p className="text-[#57514A] mb-2">
            For businesses using Stampogen, we may collect additional information including:
          </p>
          <ul className="list-disc pl-6 space-y-1.5 text-[#57514A]">
            <li>Business name and contact details.</li>
            <li>Business address.</li>
            <li>Subscription and billing information.</li>
            <li>Payment transaction details.</li>
            <li>Customer loyalty program data.</li>
            <li>Reward and campaign information.</li>
            <li>Analytics related to customer visits, QR scans, stamp collections, and reward redemptions.</li>
          </ul>
          <p className="text-[#57514A] pt-2">
            This information is used solely to provide and improve the Stampogen platform and related business services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            9. Changes to this Privacy Policy
          </h2>
          <p className="text-[#57514A]">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised &quot;Last Updated&quot; date. Continued use of the Services after such changes constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section className="space-y-3 border-t border-line pt-6">
          <h2 className="font-display text-lg sm:text-xl font-bold text-[#0A192F]">
            10. Contact Us
          </h2>
          <p className="text-[#57514A]">
            If you have any questions regarding this Privacy Policy or our data practices, please contact us at:
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
