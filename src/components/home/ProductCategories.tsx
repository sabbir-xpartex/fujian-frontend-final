"use client";

import { memo, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product } from "@/lib/getProducts";
import CommonHead from "@/shared/CommonHead";

type CategoryCard = {
  title: string;
  description: string;
  image: string;
  href: string;
};

function ProductCategories() {
  const [categories, setCategories] = useState<CategoryCard[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const map = new Map<string, Product>();
        data.forEach((product) => {
          if (!map.has(product.category)) {
            map.set(product.category, product);
          }
        });

        const firstFour = Array.from(map.entries())
          .slice(0, 4)
          .map(([category, product]) => ({
            title: category,
            description: product.description.short,
            image: product.images.cover,
            href: `/products`,
          }));

        setCategories(firstFour);
      });
  }, []);

  if (!categories.length) return null;

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <CommonHead
          badge="Our Products"
          title="Our Prominent Product"
          description="Explore our diverse range of product categories at Fujian Accessories Co. Ltd., your trusted manufacturer and supplier of high-quality garment accessories."
        />

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {categories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative overflow-hidden rounded-3xl border bg-white transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width:768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2 p-5">
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600">{item.description}</p>

                <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#00019A]">
                  View Products
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductCategories);
