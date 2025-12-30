"use client";

import { memo } from "react";
import { Layers, Cog, PackageCheck, Truck } from "lucide-react";

const steps = [
  {
    icon: <Layers />,
    title: "Raw Material Sourcing",
    text: "Certified raw materials sourced from audited suppliers.",
  },
  {
    icon: <Cog />,
    title: "Precision Production",
    text: "Automated machinery with skilled technical operators.",
  },
  {
    icon: <PackageCheck />,
    title: "Multi-level Quality Inspection",
    text: "In-line, final, and random quality inspections.",
  },
  {
    icon: <Truck />,
    title: "Packing & Global Delivery",
    text: "Export-grade packing and worldwide logistics.",
  },
];

function ManufacturingProcessSteps() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Our Manufacturing Process
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps?.map((step, i) => (
          <div
            key={i}
            className="rounded-3xl border bg-white p-6 hover:shadow-lg transition"
          >
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#00019A]">
              {step.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(ManufacturingProcessSteps);
