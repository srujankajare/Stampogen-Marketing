import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PrivacyContent } from "@/components/privacy-content";

export const metadata = {
  title: "Privacy Policy | Stampogen",
  description: "Stampogen Privacy Policy detailing data protection, QR code scanning verification, data security, and user rights.",
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-paper">
        <PrivacyContent />
      </main>
      <Footer />
    </>
  );
}
