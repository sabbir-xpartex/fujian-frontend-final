import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us | Fujian Accessories CO. Ltd.",
  description:
    "Learn about Fujian Accessories CO. Ltd., a professional garment accessories manufacturer supplying labels, elastics, tapes, patches, and packaging solutions worldwide.",
  keywords: [
    "Fujian Accessories",
    "garment accessories manufacturer",
    "label manufacturer",
    "elastic factory",
    "apparel trims supplier",
  ],
  openGraph: {
    title: "About Fujian Accessories CO. Ltd.",
    description:
      "Professional garment accessories manufacturer with factory-direct production and global export experience.",
    url: "https://faclbangladesh.com/about",
    siteName: "Fujian Accessories CO. Ltd.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <section className="w-full">
      <AboutPageClient />
    </section>
  );
}
