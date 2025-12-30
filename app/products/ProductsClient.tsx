"use client";

import ProductsGrid from "@/src/components/products/ProductsGrid";
import { memo } from "react";

function ProductsClient() {
  return (
    <main className="mx-auto max-w-7xl w-full px-4 lg:px-0 pt-20 lg:pt-26 pb-16 space-y-8">
      <section className="max-w-2xl mx-auto text-center  space-y-2">
        <h1 className="text-2xl lg:text-3xl font-semibold lg:font-bold bg-linear-to-r from-[#00019A] to-blue-600 bg-clip-text text-transparent">
          Our Products
        </h1>

        <p className="text-sm text-gray-600">
Fujian Accessories Co. Ltd. is a trusted manufacturer and supplier of high-quality garments accessories for global apparel brands. We provide a complete range of labeling, trimming and packaging solutions that enhance brand identity, functionality and garment value. Our products are manufactured using premium raw materials and modern technology to meet international quality standards.
        </p>
      </section>

      <ProductsGrid />
    </main>
  );
}

export default memo(ProductsClient);
