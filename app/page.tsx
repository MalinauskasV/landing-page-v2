import Navbar from "@/components/Navbar";
import HeroSplit from "@/components/HeroSplit";
import HeroFull from "@/components/HeroFull";
import Testimonial from "@/components/Testimonial";
import Logos from "@/components/Logos";
import Features from "@/components/Features";
import ManagementTools from "@/components/ManagementTools";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSplit />
      <HeroFull />
      <Testimonial />
      <Logos />
      <Features />
      <ManagementTools />
      <WorkflowSection />
      <TestimonialsSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
