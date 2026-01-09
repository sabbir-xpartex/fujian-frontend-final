import HeroSection from "@/src/components/home/HeroSection";
import AboutSection from "@/src/components/home/AboutSection";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import OurClient from "@/src/components/home/OurClient";
import CTASection from "@/src/components/home/CTASection";
import Certifications from "@/src/components/home/Certifications";
import ProductCategories from "@/src/components/home/ProductCategories";

export default function Home() {
  return (
    <section className="flex flex-col">
      <main className="flex flex-col gap-20">
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        {/* <WhyChooseUs /> */}
        <Certifications />
        <OurClient />
      </main>
      {/* <CTASection /> */}
    </section>
  );
}
