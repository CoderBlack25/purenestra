import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareSection from "@/components/CareSection";
import WipeSection from "@/components/WipeSection";
import ProductFeature from "@/components/ProductFeature";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <CareSection />
      <WipeSection />
      <ProductFeature />
      <Testimonials />
      <FAQ />
      <JoinWaitlist />
      <Footer />
    </main>
  );
};

export default page;
