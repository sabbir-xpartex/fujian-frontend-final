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

  if (!product) return null;

  return ( 
    <main className="w-full space-y-12 ">
      <section className="relative pb-10 pt-24  h-[70vh] lg:h-[60vh] bg-gray-50 flex items-center">
        <div className="container max-w-7xl  lg:grid grid-cols-2 mx-auto flex flex-col lg:flex-row items-center lg:items-stretch h-full px-6 lg:px-0">
          <div className="lg:w-3/4 items-start flex flex-col justify-center h-full space-y-4 z-10">
             <button
        onClick={() => router.back()}
        className=" cursor-pointer z-50 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 shadow hover:bg-white"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="hidden lg:inline">Back</span>
      </button>
            <span className="items-center flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-[#00019A]">
              {product.category}
            </span>
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900">
              {product.name}
            </h1>
            <p className="text-sm lg:text-base text-gray-700 max-w-lg">
              {product.description.long}
            </p>
            <div className="mt-4 w-fit rounded-xl border bg-gray-50 px-4 py-3">
              <p className="text-xs font-medium text-gray-500">
                Daily Production Capacity
              </p>
              <p className="mt-1 text-base font-semibold text-[#00019A]">
                {product.capacity.daily}
              </p>
            </div>
          </div>

          <div className="relative w-full h-64 lg:h-full mt-6 lg:mt-0 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={product.images.cover}
              alt={product.name}
              fill
              className="object-cover w-full"
            />
          </div>
        </div>
      </section>

   

      <section className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Manufacturing Setup
          </h2>
          <p className="text-sm leading-6 text-gray-700">
            Our production facilities operate with modern machinery and skilled
            technicians to ensure consistent quality and stable output.
          </p>
          <div className="pt-4">
            <div className="overflow-hidden rounded-xl border">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-medium text-gray-600">
                      Machine Name
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-gray-600">
                      Installed Sets
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {product.machines.map((machine) => (
                    <tr key={machine.name} className="border-t last:border-b-0">
                      <td className="px-4 py-3 text-gray-700">{machine.name}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">
                        {machine.count}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="relative shadow aspect-4/3 overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={product.images.primary}
            alt={`${product.name} manufacturing`}
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2 items-center">
        <div className="relative shadow aspect-4/3 overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={product.images.secondary}
            alt={`${product.name} quality`}
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Quality & Compliance
          </h2>
          <p className="text-sm leading-6 text-gray-700">
            Every production stage follows strict quality control aligned with
            international garment accessory standards.
          </p>
          <p className="text-sm leading-6 text-gray-700">
            Trusted by global apparel brands for durability, precision, and
            ethical manufacturing.
          </p>
        </div>
      </section>
    </main>
  );
}

export default memo(ProductPageClient);
