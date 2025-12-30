"use client";

import { memo } from "react";
import { HeartPulse, ShieldCheck, CheckCircle } from "lucide-react";

const items = [
  {
    icon: <HeartPulse />,
    title: "Worker Safety & Health",
    text: "Safe working environment, regular health checks, and training.",
  },
  {
    icon: <ShieldCheck />,
    title: "Compliance & Audits",
    text: "Internal audits and third-party compliance inspections.",
  },
  {
    icon: <CheckCircle />,
    title: "Defect Prevention",
    text: "Standardized SOPs to prevent quality defects.",
  },
];

function QualityAndCompliance() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900 text-center">
        Healthy & Compliant Manufacturing
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div key={i} className="rounded-3xl border bg-white p-6">
            <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-[#00019A]">
              {item.icon}
            </div>
            <h3 className="font-semibold text-gray-900">{item.title}</h3>
            <p className="mt-1 text-sm text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default memo(QualityAndCompliance);
