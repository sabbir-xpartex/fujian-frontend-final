import AboutSection from "@/src/components/home/AboutSection";
import CTASection from "@/src/components/home/CTASection";
import HeroSection from "@/src/components/home/HeroSection";
import ManufacturingSection from "@/src/components/home/ManufacturingSection";
import MarketsSection from "@/src/components/home/MarketsSection";
import OurClient from "@/src/components/home/OurClient";
import ProductCategories from "@/src/components/home/ProductCategories";
import WhyChooseUs from "@/src/components/home/WhyChooseUs";
import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import { memo } from "react";

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
  const Certification = memo(({ title }: { title: string }) => (
    <div className="flex items-center gap-2 rounded-xl border bg-blue-50 px-4 py-2 text-sm font-medium text-[#00019A]">
      <CheckCircle className="h-4 w-4 text-[#00019A]" /> {title}
    </div>
  ));
  return (
    <section className="flex flex-col lg:gap-20">
      <main className="flex flex-col gap-10  lg:gap-20">
        <HeroSection />

        <OurClient />
        <section className="mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Company Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10 text-gray-700">
            <Certification title="OEKO-TEX" />
            <Certification title="Forest Stewardship Council" />
            <Certification title="Global Recycled Standard" />
          </div>
        </section>
        {/* <WhyChooseUs />
        <ManufacturingSection />
        <MarketsSection /> */}
      </main>
      <CTASection />
    </section>
  );
}
