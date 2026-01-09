"use client";

import { memo } from "react";
import QualityHero from "@/src/components/quality/QualityHero";
import QualitySystem from "@/src/components/quality/QualitySystem";
import QualityStandards from "@/src/components/quality/QualityStandards";
import QualityImprovement from "@/src/components/quality/QualityImprovement";
import CTASection from "@/src/components/home/CTASection";
import QualityInspectionFlow from "@/src/components/quality/QualityInspectionFlow";

function QualityClient() {
  return (
    <main className="mx-auto max-w-7xl px-4 md:px-6 pt-26 space-y-10">
      <QualityHero />
      <QualitySystem />
      <QualityInspectionFlow />
      <QualityStandards />
      <QualityImprovement />
    </main>
  );
}

export default memo(QualityClient);
