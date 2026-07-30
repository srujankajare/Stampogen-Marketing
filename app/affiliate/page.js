import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AffiliateContent } from "@/components/affiliate-content";

export const metadata = {
  title: "Affiliate Program — Earn 30% Recurring Commission | Stampogen",
  description:
    "Join the Stampogen Partner Program. Refer local cafés, salons, and retailers to digital loyalty cards and earn steady 30% monthly recurring passive income.",
};

export default function AffiliatePage() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-charcoal selection:bg-ink-red selection:text-paper">
      <Nav />
      <main className="flex-1">
        <AffiliateContent />
      </main>
      <Footer />
    </div>
  );
}
