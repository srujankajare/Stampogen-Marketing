import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { AboutContent } from "@/components/about-content";

export const metadata = {
  title: "About Us — Our Story & Brand Identity | Stampogen",
  description:
    "Learn why we built Stampogen, our unique brand philosophy, and how we're reimagining local shop loyalty without paper waste.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
