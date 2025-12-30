"use client";

import { memo } from "react";
import { Factory, Globe, ShieldCheck, Award, Truck, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

function AboutPageClient() {
  return (
    <main className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <section className="mx-auto max-w-7xl px-4 md:px-6 space-y-12">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            About Fujian Accessories
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Manufacturing Excellence in Garment Accessories
          </h1>

          <p className="text-sm sm:text-base text-gray-600">
            Factory-direct garment accessories manufacturer serving global apparel brands with consistent quality and scale.
          </p>
        </div>

        <div className="mx-auto max-w-5xl space-y-6 text-gray-700">
          <p className="text-base leading-relaxed">
            Fujian Accessories Co. Ltd. is a leading manufacturer and supplier of garment accessories, dedicated to supporting the global apparel industry with high-quality, reliable, and innovative solutions. Based in Bangladesh, we serve international fashion brands, buying houses, and garment manufacturers with a comprehensive range of labels, trims, and packaging accessories.
          </p>
          <p className="text-base leading-relaxed">
            With a strong focus on quality, consistency, and customer satisfaction, Fujian Accessories Co. Ltd. combines modern production facilities, skilled manpower, and strict quality control systems to meet international standards. Our products enhance brand identity, functionality, and garment value across fashion, casual, sportswear, and industrial apparel segments.
          </p>
          <p className="text-base leading-relaxed">
            We specialize in customized solutions, working closely with our clients from product development to final delivery. Our commitment to timely delivery, competitive pricing, and compliance with buyer requirements has earned us long-term partnerships in global markets.
          </p>
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

  

        <section className="mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">Company Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <Certification title="OEKO-TEX" />
            <Certification title="Forest Stewardship Council" />
            <Certification title="Global Recycled Standard" />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-10">
          <h2 className="text-2xl font-semibold text-gray-900 text-center text-center">
            Our Journey
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <JourneyCard icon={<Users className="h-5 w-5 text-[#00019A]" />} title="Company Established" text="Started as a specialized garment accessories manufacturer." />
            <JourneyCard icon={<Award className="h-5 w-5 text-[#00019A]" />} title="Capacity Expansion" text="Invested in modern machinery and skilled workforce." />
            <JourneyCard icon={<Truck className="h-5 w-5 text-[#00019A]" />} title="Global Supply" text="Supplying accessories to international apparel brands." />
          </div>
        </div>
      </section>
    </main>
  );
}

interface CardProps {
  icon?: React.ReactNode;
  title: string;
  text: string;
}

const AboutCard = memo(({ icon, title, text }: CardProps) => (
  <div className="rounded-3xl border bg-white p-8 text-center shadow-sm transition hover:shadow-md">
    {icon && <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">{icon}</div>}
    <h3 className="text-base font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{text}</p>
  </div>
));

const ProductCard = memo(({ title, text }: { title: string; text: string }) => (
  <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition">
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-sm text-gray-600">{text}</p>
  </div>
));

const JourneyCard = memo(({ icon, title, text }: CardProps) => (
  <div className="rounded-2xl border bg-white p-6 text-center shadow-sm">
    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">{icon}</div>
    <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{text}</p>
  </div>
));

const Certification = memo(({ title }: { title: string }) => (
  <div className="flex items-center gap-2 rounded-xl border bg-blue-50 px-4 py-2 text-sm font-medium text-[#00019A]">
    <CheckCircle className="h-4 w-4 text-[#00019A]" /> {title}
  </div>
));

export default memo(AboutPageClient);
