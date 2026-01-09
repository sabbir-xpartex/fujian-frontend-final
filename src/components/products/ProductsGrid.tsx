"use client";

import { memo, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/getProducts";

function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  return (
    <section className="grid gap-2 lg:gap-4 w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:px-4">
      {products.map((product) => {
        console.log(product);

        return (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border bg-white transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative h-40 w-full bg-gray-50">
              <Image
                src={product.images.cover}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col flex-1">
              <div className="lg:p-4 p-2">
                <h3 className="lg:text-sm text-xs font-semibold text-gray-900 group-hover:text-[#00019A]">
                  {product.name}
                </h3>
              </div>

              <div className="mt-auto">
                <span className="block w-full border-t py-1.5 lg:py-3 text-center lg:text-sm text-xs font-medium text-[#00019A] transition group-hover:bg-blue-50">
                  View Product
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
}

export default memo(ProductsGrid);
