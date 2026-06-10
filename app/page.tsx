import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PilotStat from "@/components/PilotStat";
import Features from "@/components/Features";
import ManagementTools from "@/components/ManagementTools";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CaseStudyGrid from "@/components/CaseStudyGrid";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollObserver from "@/components/ScrollObserver";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollObserver />
      <Navbar />
      <HeroSection />
      <PilotStat />
      <Features />
      <ManagementTools />
      <WorkflowSection />
      <TestimonialsSection />
      <CaseStudyGrid />
      <BlogSection />
      <CTASection />
      <Footer />
    </main>
  );
}
