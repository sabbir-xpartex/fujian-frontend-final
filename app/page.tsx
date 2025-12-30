import AboutSection from "@/src/components/home/AboutSection";
import CTASection from "@/src/components/home/CTASection";
import HeroSection from "@/src/components/home/HeroSection";
import ManufacturingSection from "@/src/components/home/ManufacturingSection";
import MarketsSection from "@/src/components/home/MarketsSection";
import OurClient from "@/src/components/home/OurClient";
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
    "faclbangladesh",
    "faclbangla",
    "faclbangladesh.com",
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
        <OurClient/>
        <WhyChooseUs />
        <ManufacturingSection />
        <MarketsSection />
      </main>
      <CTASection />

      <div className="mx-auto w-full px-6 max-w-7xl space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Factory Location
        </h2>

        <div className="overflow-hidden rounded-2xl border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.751238279067!2d90.35045497518992!3d23.827443378617897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10001edce73%3A0xf6404849b479ee0c!2sFujian%20Accessories%20CO.%20Ltd.!5e0!3m2!1sen!2sbd!4v1766307335815!5m2!1sen!2sbd"
            className="h-100 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
