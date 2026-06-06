import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareSection from "@/components/CareSection";
import ProductFeature from "@/components/ProductFeature";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/ProcessSection";
import WipeSection from "@/components/WipeSection";
import FAQ from "@/components/FAQ";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CareSection />
      <ProductFeature />
      <Testimonials />
      <ProcessSection />
      <WipeSection />
      <FAQ />
      <JoinWaitlist />
      <Footer />
    </main>
  );
};

export default page;
