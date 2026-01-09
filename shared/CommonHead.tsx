import { ShieldCheck } from "lucide-react";
import React from "react";

type CommonHeadProps = {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  center?: boolean;
  Icon?: React.ElementType; // 👈 common icon support
};

export default function CommonHead({
  badge,
  title,
  highlight,
  description,
  center = true,
  Icon = ShieldCheck,
}: CommonHeadProps) {
  return (
    <div
      className={`max-w-7xl mx-auto  mb-6 px-4 lg:mb-14 ${
        center ? "text-start" : "text-left"
      }`}
    >
      {/* Badge */}
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
          <Icon className="w-4 h-4" />
          <span>{badge}</span>
        </div>
      )}

      {/* Title (1 line) */}
      <h2 className="mt-4 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          {title}
        </span>
      </h2>

      {/* Description */}
      {description && (
        <p className="max-w-2xl mt-2 lg:mt-4 text-sm lg:text-base text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
