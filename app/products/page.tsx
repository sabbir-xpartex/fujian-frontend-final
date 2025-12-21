import type { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Fujian Accessories CO. Ltd.",
  description:
    "Explore our full range of garment accessories including buttons, zippers, labels, patches, and custom accessories manufactured with strict quality control.",
  keywords: [
    "garment accessories products",
    "buttons manufacturer",
    "zippers supplier",
    "labels manufacturer",
    "custom garment accessories",
    "Fujian Accessories products",
  ],
  openGraph: {
    title: "Garment Accessories Products | Fujian Accessories CO. Ltd.",
    description:
      "Buttons, zippers, labels, patches, and custom garment accessories for global fashion brands.",
    url: "https://faclbangladesh.com/products",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "/products/products-og.jpg",
        width: 1200,
        height: 630,
        alt: "Garment Accessories Products",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com/products",
  },
};

export default function ProductsPage() {
  return (
    <section className="flex flex-col lg:gap-20">
      <ProductsClient />
    </section>
  );
}
