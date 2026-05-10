import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CareSection from "@/components/CareSection";
import ProductFeature from "@/components/ProductFeature";
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
      <ProcessSection />
      <WipeSection />
      <FAQ />
      <JoinWaitlist />
      <Footer />
    </main>
  );
};

export default page;
