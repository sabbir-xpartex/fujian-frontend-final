"use client";

import { memo } from "react";
import Image from "next/image";

function ManufacturingHero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-2">
      <div className="space-y-4">
        <span className="inline-block rounded-full bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
          Manufacturing Excellence
        </span>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Advanced, Ethical & Scalable Manufacturing
        </h1>

        <p className="max-w-xl text-gray-600">
          Fujian Accessories CO. Ltd. operates a vertically integrated,
          health-compliant manufacturing system delivering consistent quality to
          global fashion brands.
        </p>
      </div>

      <div className="relative">
        <Image
          src="/manufacturing/img(1).jpg"
          alt="Garment accessories manufacturing factory"
          width={700}
          height={500}
          priority
          className="h-80 w-full rounded-3xl object-cover shadow-[0_0_30px_rgba(0,0,0,0.12)] lg:h-105"
        />
      </div>
    </section>
  );
}

export default memo(ManufacturingHero);
