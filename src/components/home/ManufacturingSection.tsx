"use client";

import { memo } from "react";
import Image from "next/image";
import { Cog, Layers, PackageCheck, Truck } from "lucide-react";

function ManufacturingSection() {
  return (
    <section className="relative  ">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-blue-50/40 to-white" />

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 lg:mb-14 max-w-2xl">
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Manufacturing Process
          </span>

          <h2 className="mt-4 text-xl lg:text-3xl font-semibold lg:font-bold tracking-tight text-gray-900 sm:text-4xl">
            End-to-End
            <span className="block text-[#00019A]">Production Excellence</span>
          </h2>

          <p className="mt-2 lg:mt-4 text-base text-gray-600">
            Our vertically integrated manufacturing process ensures precision,
            efficiency, and consistent quality from raw material sourcing to
            final shipment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:gap-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/cover/Acctrims-banner.jpg"
              alt="Garment accessories production line"
              width={900}
              height={700}
              className="lg:h-full h-50 w-full object-cover shadow-[0_0_30px_rgba(0,0,0,0.12)]"
            />
          </div>

          <div className="grid grid-cols-1 gap-3 lg:gap-6 sm:grid-cols-2">
            <Process
              icon={<Layers className="h-5 w-5 text-[#00019A]" />}
              title="Material Sourcing"
              text="Certified raw materials from trusted suppliers"
            />
            <Process
              icon={<Cog className="h-5 w-5 text-[#00019A]" />}
              title="Precision Production"
              text="Advanced machinery with skilled operators"
            />
            <Process
              icon={<PackageCheck className="h-5 w-5 text-[#00019A]" />}
              title="Quality Inspection"
              text="Multi-stage quality checks and testing"
            />
            <Process
              icon={<Truck className="h-5 w-5 text-[#00019A]" />}
              title="Packing & Delivery"
              text="Secure packaging and global logistics"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface ProcessProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const Process = memo(function Process({ icon, title, text }: ProcessProps) {
  return (
    <div className="flex flex-col gap-2 lg:gap-4 rounded-3xl border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
    </div>
  );
});

export default memo(ManufacturingSection);
