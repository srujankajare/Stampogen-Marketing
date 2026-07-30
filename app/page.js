import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Journey } from "@/components/journey";
import { OwnerDashboard } from "@/components/owner-dashboard";
import { Testimonials } from "@/components/testimonials";
import { CtaWaitlist } from "@/components/cta-waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Journey />
        <OwnerDashboard />
        <Testimonials />
        <CtaWaitlist />
      </main>
      <Footer />
    </>
  );
}
