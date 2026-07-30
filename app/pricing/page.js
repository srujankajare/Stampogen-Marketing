import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/pricing";

export const metadata = {
  title: "Pricing — Stampogen",
  description:
    "Simple, transparent pricing for Stampogen. Start free, upgrade when you're ready. No setup fee, no long contract.",
  icons: [],
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Pricing />
      </main>
      <Footer />
    </>
  );
}
