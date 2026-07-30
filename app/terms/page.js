import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { TermsContent } from "@/components/terms-content";

export const metadata = {
  title: "Terms & Conditions | Stampogen",
  description: "Stampogen Terms & Conditions outlining user account guidelines, subscription terms, and platform usage policies.",
};

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper">
        <TermsContent />
      </main>
      <Footer />
    </>
  );
}
