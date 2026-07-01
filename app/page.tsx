import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WipeCarouselSection from "@/components/WipeCarouselSection";
import CareSection from "@/components/CareSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import JoinWaitlist from "@/components/JoinWaitlist";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <WipeCarouselSection />
      <CareSection />
      <Testimonials />
      <FAQ />
      <JoinWaitlist />
      <Footer />
    </main>
  );
};

export default page;
