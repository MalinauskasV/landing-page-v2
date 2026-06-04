import Navbar from "@/components/Navbar";
import PricingHero from "@/components/PricingHero";
import PricingCards from "@/components/PricingCards";
import PricingComparison from "@/components/PricingComparison";
import PricingFAQ from "@/components/PricingFAQ";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollObserver />
      <Navbar />
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <PricingFAQ />
      <Footer />
    </main>
  );
}
