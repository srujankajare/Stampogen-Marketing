import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AffiliatePrivacyContent } from "@/components/affiliate-privacy-content";

export const metadata = {
  title: "Affiliate Privacy Policy | Stampogen",
  description: "Affiliate Privacy Policy explaining referral tracking, commission data protection, and privacy practices.",
};

export default function AffiliatePrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper">
        <AffiliatePrivacyContent />
      </main>
      <Footer />
    </>
  );
}
