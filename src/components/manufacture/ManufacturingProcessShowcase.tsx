"use client";

import { memo, useMemo } from "react";
import Image from "next/image";

interface ProcessItem {
  title: string;
  description: string;
  image: string;
}

const processes: ProcessItem[] = [
  {
    title: "Raw Material Inspection",
    description:
      "All raw materials are inspected and tested before entering production to ensure durability, color consistency, and compliance with buyer requirements.",
    image: "/manufacturing/img (1).webp",
  },
  {
    title: "Automated Production Line",
    description:
      "Advanced machinery combined with skilled operators ensures precision manufacturing with minimal tolerance deviation.",
    image: "/manufacturing/img (2).jpg",
  },
  {
    title: "Quality Control & Testing",
    description:
      "Multi-stage quality inspections are performed during and after production to eliminate defects before packing.",
    image: "/manufacturing/img (2).webp",
  },
];

function ManufacturingProcessShowcase() {
  const processBlocks = useMemo(
    () =>
      processes.map((item, index) => (
        <div key={index} className="grid items-center gap-8 lg:grid-cols-2">
          <div className={`space-y-3 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
            <span className="text-sm font-medium text-[#00019A]">
              Step {index + 1}
            </span>

            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-gray-600 max-w-xl">{item.description}</p>
          </div>

          <div
            className={`relative aspect-video w-full overflow-hidden rounded-3xl border shadow-sm ${
              index % 2 === 1 ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )),
    []
  );

  return (
    <section className="space-y-10">
      <div className="max-w-2xl">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          How Our Manufacturing Process Works
        </h2>
        <p className="mt-2 text-gray-600">
          A transparent look into our production workflow, from raw materials to
          final shipment.
        </p>
      </div>

      <div className="space-y-20">{processBlocks}</div>
    </section>
  );
}

export default memo(ManufacturingProcessShowcase);
