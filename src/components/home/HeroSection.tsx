"use client";

import { memo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Factory, Globe, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

function HeroSection() {
  const handleQuoteClick = useCallback(() => {}, []);

  return (
    <section className="relative flex pt-18 lg:pt-25 items-center ">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="order-2 flex flex-col justify-center gap-3 lg:gap-6 md:order-1">
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Trusted Garment Accessories Manufacturer
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Fujian Accessories CO. Ltd.
            <span className="block lg:text-3xl text-xl text-[#00019A]">
              Professional Garment Accessories Manufacturer
            </span>
          </h1>

          <p className="max-w-xl text-sm lg:text-base leading-relaxed text-gray-600">
            We manufacture high-quality buttons, zippers, labels, and custom
            garment accessories for global fashion brands with strict quality
            control and factory-direct pricing.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              className="bg-[#00019A] px-8 text-white hover:bg-blue-800"
            >
              Get a Quote
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-blue-600 px-8 text-[#00019A] hover:bg-blue-50"
            >
              <Link href="/products">View Products</Link>
            </Button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <TrustItem
              icon={<Factory className="h-5 w-5 text-[#00019A]" />}
              title="Factory Direct"
              text="In-house manufacturing"
            />
            <TrustItem
              icon={<ShieldCheck className="h-5 w-5 text-[#00019A]" />}
              title="Strict QC"
              text="International standards"
            />
            <TrustItem
              icon={<Globe className="h-5 w-5 text-[#00019A]" />}
              title="Global Export"
              text="Worldwide markets"
            />
          </div>
        </div>

        <div className="order-1 relative w-full flex items-center justify-center md:order-2">
          <div className="relative w-full ">
            <Image
              src="/cover/1732012212854.jpeg"
              alt="Garment accessories manufacturing factory"
              width={700}
              height={700}
              priority
              className="rounded-3xl object-cover h-70 lg:h-120 w-full shadow-[0_0_30px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TrustItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const TrustItem = memo(function TrustItem({
  icon,
  title,
  text,
}: TrustItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
});

export default memo(HeroSection);
