"use client";

import Image from "next/image";
import { memo } from "react";

function QualityHero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <span className="rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
          Quality Assurance
        </span>

        <h1 className="text-3xl mt-6 lg:text-4xl font-bold text-gray-900">
          Consistent Quality. Verified Processes.
        </h1>

        <p className="max-w-xl text-gray-600">
          Our quality control system ensures every garment accessory meets
          international standards before shipment.
        </p>
      </div>

      <Image
        src="/products/"
        alt="Quality inspection process"
        width={700}
        height={450}
        className="h-80 w-full rounded-3xl object-cover shadow lg:h-105"
      />
    </section>
  );
}

export default memo(QualityHero);
