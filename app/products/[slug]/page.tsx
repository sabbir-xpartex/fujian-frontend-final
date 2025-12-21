import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductPageClient from "./ProductPageClient";
import { getProducts } from "@/lib/getProducts";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://faclbangladesh.com";

export async function generateStaticParams() {
  const products = getProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  console.log("📌 generateMetadata slug:", slug);

  const products = getProducts();
  console.log("Products", products)
  const product = products.find((p) => p.slug === slug);

  if (!product) notFound();

  const url = `${baseUrl}/products/${product.slug}`;

  return {
    title: `${product.name} Manufacturer | Fujian Accessories CO. Ltd.`,
    description: product.description.short,
    alternates: {
      canonical: url,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("📌 ProductPage slug:", slug);

  return (
    <section className="w-full">
      <ProductPageClient slug={slug} />
    </section>
  );
}
