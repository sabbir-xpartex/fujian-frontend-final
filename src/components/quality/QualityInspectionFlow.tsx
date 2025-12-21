"use client";

import { memo, useMemo } from "react";
import Image from "next/image";

interface QualityStep {
  title: string;
  description: string;
  image: string;
}

const steps: QualityStep[] = [
  {
    title: "Raw Material Inspection",
    description:
      "Every batch of raw materials is tested for strength, color consistency, and safety compliance before entering production.",
    image: "/products/market.jpg",
  },
  {
    title: "In-Process Quality Control",
    description:
      "Real-time inspections during manufacturing ensure dimensional accuracy, durability, and process stability.",
    image: "/products/market.webp",
  },
  {
    title: "Final Product Testing",
    description:
      "Finished accessories undergo physical, chemical, and visual tests to meet international standards.",
    image: "/products/rubber.webp",
  },
  {
    title: "Packaging & Dispatch Audit",
    description:
      "Before shipment, packaging integrity, labeling accuracy, and order quantities are strictly verified.",
    image: "/products/wovenLabel.webp",
  },
];

function QualityInspectionFlow() {
  const qualityBlocks = useMemo(
    () =>
      steps.map((step, index) => (
        <div key={index} className="grid items-center gap-8 lg:grid-cols-2">
          <div className={`space-y-3 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
            <span className="text-sm font-medium text-[#00019A]">
              Step {index + 1}
            </span>

            <h3 className="text-xl font-semibold text-gray-900">
              {step.title}
            </h3>

            <p className="text-gray-600 max-w-xl">{step.description}</p>
          </div>

          <div
            className={`relative aspect-video w-full overflow-hidden rounded-3xl border shadow-sm ${
              index % 2 === 1 ? "lg:order-1" : ""
            }`}
          >
            <Image
              src={step.image}
              alt={step.title}
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
      <div className="max-w-3xl space-y-3">
        <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900">
          Quality Inspection Process
        </h2>
        <p className="text-gray-600">
          A transparent, step-by-step quality control workflow ensuring every
          product meets global compliance and customer expectations.
        </p>
      </div>

      <div className="space-y-20">{qualityBlocks}</div>
    </section>
  );
}

export default memo(QualityInspectionFlow);
