import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AffiliateTermsContent } from "@/components/affiliate-terms-content";

export const metadata = {
  title: "Affiliate Program Terms & Conditions | Stampogen",
  description: "Official Terms & Conditions for the Stampogen Affiliate Partner Program.",
};

export default function AffiliateTermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper">
        <AffiliateTermsContent />
      </main>
      <Footer />
    </>
  );
}
