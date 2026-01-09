"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "@/lib/getProducts";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ProductPageClient({ slug }: { slug: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.slug === slug);
        setProduct(found ?? null);
      });
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-500">Product not found</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* ===================== HERO / BANNER ===================== */}
      <section className="relative h-[70vh] min-h-[580px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={product.images.cover}
            alt={product.name}
            fill
            className="object-cover brightness-[0.65] scale-105 transition-transform duration-700"
            priority
          />
        </div>

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        <div className="relative h-full container max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
          <div className="max-w-2xl text-white space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium">
              <span className="text-blue-300">Category</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              {product.category}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {product.name}
            </h1>

            <p className="text-lg md:text-xl text-gray-200/90 max-w-xl leading-relaxed">
              {product.description.long}
            </p>

            <div className="inline-block rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4">
              <p className="text-sm text-gray-300 uppercase tracking-wider font-medium mb-1">
                Daily Production Capacity
              </p>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {product.capacity.daily}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MANUFACTURING SETUP ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Text */}
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <span className="inline-block text-blue-600 font-medium tracking-wider uppercase text-sm mb-3">
                  Precision Manufacturing
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Manufacturing Setup
                </h2>
              </div>

              <p className="text-lg text-gray-600 leading-relaxed">
                Our production facilities are equipped with modern, high-performance machinery and operated by experienced technicians to guarantee consistent quality and reliable output at industrial scale.
              </p>

              <div className="pt-4">
                <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-gray-700">
                          Machine Type
                        </th>
                        <th className="px-6 py-4 text-right font-semibold text-gray-700">
                          Quantity
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {product.machines.map((machine) => (
                        <tr key={machine.name}>
                          <td className="px-6 py-4 text-gray-800 font-medium">
                            {machine.name}
                          </td>
                          <td className="px-6 py-4 text-right font-bold text-gray-900">
                            {machine.count}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[520px] order-1 lg:order-2">
              <Image
                src={product.images.primary}
                alt={`${product.name} production line`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUALITY & COMPLIANCE ===================== */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left - Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <Image
                src={product.images.secondary}
                alt={`${product.name} quality control`}
                fill
                className="object-cover"
              />
            </div>

            {/* Right - Text */}
            <div className="space-y-8">
              <div>
                <span className="inline-block text-blue-600 font-medium tracking-wider uppercase text-sm mb-3">
                  International Standards
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
                  Quality & Compliance
                </h2>
              </div>

              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Every stage of production follows rigorous quality protocols aligned with international garment accessory standards (OEKO-TEX, ISO, BSCI, etc.).
                </p>
                <p>
                  Trusted long-term partner of global apparel brands for superior durability, dimensional accuracy, color fastness, and fully ethical manufacturing practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Back button or CTA at bottom */}
      <div className="py-16 text-center">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Products
        </button>
      </div>
    </main>
  );
}

export default memo(ProductPageClient);