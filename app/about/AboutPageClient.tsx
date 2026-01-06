"use client";

import { memo } from "react";
import { Factory, Globe, ShieldCheck, Award, Truck, Users, CheckCircle } from "lucide-react";
import Image from "next/image";

function AboutPageClient() {
  
  return (
    <main className="relative pt-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <section className="mx-auto max-w-7xl px-4 md:px-6 space-y-12">
      

      

 

  

        <section className="mx-auto max-w-5xl text-center space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">Company Certifications</h2>
          <div className="flex flex-wrap justify-center gap-4 text-gray-700">
            <Certification title="OEKO-TEX" />
            <Certification title="Forest Stewardship Council" />
            <Certification title="Global Recycled Standard" />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-10">
          <h2 className="text-2xl font-semibold text-gray-900  text-center">
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
