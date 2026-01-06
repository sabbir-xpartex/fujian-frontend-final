
import CTASection from "@/src/components/home/CTASection";
import HeroSection from "@/src/components/home/HeroSection";
import OurClient from "@/src/components/home/OurClient";
import { CheckCircle, Factory, Globe, ShieldCheck } from "lucide-react";
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
  const AboutCard = memo(({ icon, title, text }: CardProps) => (
    <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:shadow-md">
      {icon && <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">{icon}</div>}
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{text}</p>
    </div>
  ));

  interface CardProps {
    icon?: React.ReactNode;
    title: string;
    text: string;
  }
  return (
    <section className="flex flex-col lg:gap-20">
      <main className="flex flex-col gap-10  lg:gap-20">
        <HeroSection />

        <section className="mx-auto max-w-5xl text-center space-y-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
              About Fujian Accessories
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Manufacturing Excellence in Garment Accessories
            </h1>

            <p className="text-sm sm:text-base text-gray-600">
              Factory-direct garment accessories manufacturer serving global
              apparel brands with consistent quality and scale.
            </p>
          </div>

          <div className="mx-auto max-w-5xl space-y-6 text-gray-700">
            <p className="text-base leading-relaxed">
              Fujian Accessories Co. Ltd. is a leading manufacturer and supplier
              of garment accessories, dedicated to supporting the global apparel
              industry with high-quality, reliable, and innovative solutions.
              Based in Bangladesh, we serve international fashion brands, buying
              houses, and garment manufacturers with a comprehensive range of
              labels, trims, and packaging accessories.
            </p>
            <p className="text-base leading-relaxed">
              With a strong focus on quality, consistency, and customer
              satisfaction, Fujian Accessories Co. Ltd. combines modern
              production facilities, skilled manpower, and strict quality
              control systems to meet international standards. Our products
              enhance brand identity, functionality, and garment value across
              fashion, casual, sportswear, and industrial apparel segments.
            </p>
            <p className="text-base leading-relaxed">
              We specialize in customized solutions, working closely with our
              clients from product development to final delivery. Our commitment
              to timely delivery, competitive pricing, and compliance with buyer
              requirements has earned us long-term partnerships in global
              markets.
            </p>
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Company Certifications
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-10 text-gray-700">
            <Certification title="OEKO-TEX" />
            <Certification title="Forest Stewardship Council" />
            <Certification title="Global Recycled Standard" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <AboutCard
              icon={<Factory className="h-5 w-5 text-[#00019A]" />}
              title="Factory Direct Production"
              text="Complete in-house manufacturing with controlled processes."
            />
            <AboutCard
              icon={<ShieldCheck className="h-5 w-5 text-[#00019A]" />}
              title="Quality Assurance"
              text="Multi-stage inspection aligned with global standards."
            />
            <AboutCard
              icon={<Globe className="h-5 w-5 text-[#00019A]" />}
              title="Global Export Experience"
              text="Serving international apparel markets worldwide."
            />
          </div>
          <OurClient />
        </section>
      </main>
      <CTASection />
    </section>
  );
}
