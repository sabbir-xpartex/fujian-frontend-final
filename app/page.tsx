import AboutSection from "@/src/components/home/AboutSection";
import CTASection from "@/src/components/home/CTASection";
import HeroSection from "@/src/components/home/HeroSection";
import ManufacturingSection from "@/src/components/home/ManufacturingSection";
import MarketsSection from "@/src/components/home/MarketsSection";
import ProductCategories from "@/src/components/home/ProductCategories";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fujian Accessories CO. Ltd. | Garment Accessories Manufacturer",
  description:
    "Fujian Accessories CO. Ltd. is a professional garment accessories manufacturer providing buttons, zippers, labels, and custom accessories for global brands.",
  keywords: [
    "Fujian Accessories",
    "garment accessories manufacturer",
    "buttons supplier",
    "zippers manufacturer",
    "custom clothing accessories",
    "China accessories factory",
  ],
  openGraph: {
    title: "Fujian Accessories CO. Ltd.",
    description:
      "Professional garment accessories manufacturer for global fashion brands.",
    url: "https://faclbangladesh.com",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "https://faclbangladesh.com/fujian-og.png",
        width: 1200,
        height: 630,
        alt: "Fujian Accessories CO. Ltd.",
      },
    ],

    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com",
  },
};

export default function Home() {
  return (
    <section className="flex flex-col lg:gap-20">
      <main className="flex flex-col gap-10  lg:gap-20">
        <HeroSection />
        <AboutSection />
        <ProductCategories />
        <WhyChooseUs />
        <ManufacturingSection />
        <MarketsSection />
      </main>
        <CTASection />
    </section>
  );
}
