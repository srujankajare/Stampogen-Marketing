import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AffiliateOnboardingContent } from "@/components/affiliate-onboarding-content";

export const metadata = {
  title: "Partner Onboarding Process — Affiliate Program | Stampogen",
  description:
    "Complete partner onboarding in 5 simple steps. Get your custom referral link, promo kit, and start earning 30% recurring payouts.",
};

export default function AffiliateOnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-charcoal selection:bg-ink-red selection:text-paper">
      <Nav />
      <main className="flex-1">
        <AffiliateOnboardingContent />
      </main>
      <Footer />
    </div>
  );
}
