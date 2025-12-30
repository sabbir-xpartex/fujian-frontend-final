"use client";

import { memo } from "react";
import Image from "next/image";
import { Globe2, Building2, Shirt, Store } from "lucide-react";

function MarketsSection() {
  return (
    <section className="relative ">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#00019A]/5 to-white" />

      <div className="mx-auto max-w-7xl ">
        <div className="mb-6 lg:mb-14 px-4 md:px-6 max-w-2xl">
          <span className="w-fit rounded-full border border-[#00019A]/20 bg-[#00019A]/10 px-4 py-1 text-xs font-medium text-[#00019A]">
            Global Markets
          </span>

          <h2 className="mt-4 text-xl lg:text-3xl font-semibold lg:font-bold tracking-tight text-gray-900 sm:text-4xl">
            Serving Brands
            <span className="block text-[#00019A]">Worldwide</span>
          </h2>

          <p className="mt-2 lg:mt-4 text-sm lg:text-base text-gray-600">
            Fujian Accessories CO. Ltd. exports garment accessories to multiple
            international markets, supporting fashion brands, manufacturers, and
            retailers across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:pr-4 gap-4 lg:gap-8 lg:grid-cols-2">
          <div className="grid px-4 md:px-6  grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2">
            <MarketItem
              icon={<Globe2 className="h-6 w-6 text-[#00019A]" />}
              title="International Export"
              text="Supplying markets across Asia, Europe, and America"
            />
            <MarketItem
              icon={<Building2 className="h-6 w-6 text-[#00019A]" />}
              title="Fashion Brands"
              text="Trusted by global apparel brands"
            />
            <MarketItem
              icon={<Shirt className="h-6 w-6 text-[#00019A]" />}
              title="Garment Factories"
              text="Reliable B2B manufacturing support"
            />
            <MarketItem
              icon={<Store className="h-6 w-6 text-[#00019A]" />}
              title="Retail & Wholesale"
              text="Supporting retail and wholesale supply chains"
            />
          </div>
          <div className="relative overflow-hidden lg:rounded-3xl">
            <Image
              src="/cover/Acctrims-banner (1).jpg"
              alt="Global export markets map"
              width={900}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="lg:h-full h-60 w-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.12)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface MarketItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const MarketItem = memo(function MarketItem({
  icon,
  title,
  text,
}: MarketItemProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 rounded-3xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00019A]/10">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
});

export default memo(MarketsSection);
