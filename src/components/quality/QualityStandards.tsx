"use client";

import { memo } from "react";
import { ShieldCheck, Award, ClipboardCheck } from "lucide-react";

function QualityStandards() {
  return (
    <section className="rounded-3xl bg-blue-50 p-8">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
        Company Certifications
      </h2>

      <div className="grid gap-6 sm:grid-cols-3">
        <Item icon={<Award />} text="OEKO-TEX" />
        <Item icon={<ClipboardCheck />} text="Forest Stewardship Council" />
        <Item icon={<ShieldCheck />} text="Global Recycled Standard" />
      </div>
    </section>
  );
}

function Item({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#00019A]">
        {icon}
      </div>
      <p className="text-sm font-medium text-gray-800">{text}</p>
    </div>
  );
}

export default memo(QualityStandards);
