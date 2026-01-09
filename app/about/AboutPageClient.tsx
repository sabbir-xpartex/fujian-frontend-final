"use client";

import { memo } from "react";
import Image from "next/image";
import {
  Factory,
  Globe,
  ShieldCheck,
  Award,
  Truck,
  Users,
  CheckCircle,
  Target,
  TrendingUp,
} from "lucide-react";

/*  PAGE */

function AboutPageClient() {
  return (
    <main className="relative overflow-hidden bg-linear-to-b from-blue-50 via-white to-white px-4">
    
    

      {/* ================= OVERVIEW ================= */}
      <section className="">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
                alt="Manufacturing facility"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#00019A] text-white rounded-2xl px-6 py-4 shadow-xl">
              <p className="text-3xl font-bold">04+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Quality Products. Long-Term Partnerships.
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Fujian Accessories Co., Ltd. is a specialized manufacturer of
              premium garment accessories including buttons, zippers, labels,
              and custom trims. Backed by years of factory expertise, advanced
              production facilities, and a skilled workforce, we deliver
              reliable quality, competitive pricing, and scalable manufacturing
              solutions to global apparel brands.
            </p>

            <p className="text-base text-gray-500 leading-relaxed max-w-3xl mx-auto">
              From product development to bulk production and worldwide
              delivery, we support our partners with consistent quality control,
              on-time shipments, and flexible customization to meet diverse
              market requirements.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
              <StatCard
                icon={<Factory />}
                value="50K+"
                label="Monthly Production"
              />
              <StatCard icon={<Globe />} value="30+" label="Countries Served" />
              <StatCard
                icon={<ShieldCheck />}
                value="100%"
                label="Quality Guarantee"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE STRENGTHS ================= */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl">
          <SectionHead
            title="Our Core Strengths"
            subtitle="What makes us different"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StrengthCard
              icon={<Factory />}
              title="Modern Manufacturing"
              description="Advanced machinery ensuring consistent, precise production."
            />
            <StrengthCard
              icon={<Award />}
              title="Quality Assurance"
              description="Strict QC checks from raw materials to final shipment."
            />
            <StrengthCard
              icon={<Users />}
              title="Expert Team"
              description="Experienced professionals in accessories manufacturing."
            />
            <StrengthCard
              icon={<ShieldCheck />}
              title="Compliance & Safety"
              description="International standards and certified processes."
            />
            <StrengthCard
              icon={<TrendingUp />}
              title="Scalable Capacity"
              description="From small orders to mass production runs."
            />
            <StrengthCard
              icon={<Target />}
              title="Custom Solutions"
              description="Tailor-made trims to match your brand identity."
            />
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="p-10 px-4 bg-blue-50">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            title="Our Journey"
            subtitle="Growth through commitment"
          />

          <div className="grid gap-6 md:grid-cols-3">
            <JourneyCard
              icon={<Users />}
              title="Company Founded"
              text="Started with a vision for quality manufacturing."
            />
            <JourneyCard
              icon={<Award />}
              title="Capacity Expansion"
              text="Upgraded machinery and workforce."
            />
            <JourneyCard
              icon={<Truck />}
              title="Global Reach"
              text="Serving brands across continents."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===================== COMPONENTS ===================== */

const SectionHead = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
    <p className="text-gray-600 mt-3">{subtitle}</p>
  </div>
);

/* ---------- Stat ---------- */
const StatCard = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="rounded-xl bg-blue-50 p-4 flex items-center gap-3">
    <div className="bg-[#00019A] p-2 rounded-lg text-white">{icon}</div>
    <div>
      <p className="text-2xl font-bold text-[#00019A]">{value}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  </div>
);

/* ---------- Strength ---------- */
interface StrengthCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrengthCard = memo(({ icon, title, description }: StrengthCardProps) => (
  <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-lg transition">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
));
StrengthCard.displayName = "StrengthCard";

/* ---------- Product ---------- */
interface ProductCardProps {
  title: string;
  text: string;
}

const ProductCard = memo(({ title, text }: ProductCardProps) => (
  <div className="rounded-2xl border bg-white p-6 text-center shadow-sm hover:shadow-md transition">
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
));
ProductCard.displayName = "ProductCard";

/* ---------- Journey ---------- */
interface JourneyCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const JourneyCard = memo(({ icon, title, text }: JourneyCardProps) => (
  <div className="rounded-2xl border bg-white p-8 text-center shadow-sm hover:shadow-md transition">
    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{text}</p>
  </div>
));
JourneyCard.displayName = "JourneyCard";

export default memo(AboutPageClient);
