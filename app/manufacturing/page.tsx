import type { Metadata } from "next";
import ManufacturingClient from "./ManufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Fujian Accessories CO. Ltd.",
  description:
    "Discover Fujian Accessories CO. Ltd.'s manufacturing capabilities, quality control process, production capacity, and advanced machinery for garment accessories.",
  keywords: [
    "garment accessories manufacturing",
    "buttons factory",
    "zippers manufacturing",
    "labels production",
    "OEM garment accessories",
    "Fujian Accessories manufacturing",
  ],
  openGraph: {
    title: "Manufacturing Capabilities | Fujian Accessories CO. Ltd.",
    description:
      "Advanced manufacturing, strict quality control, and global export-ready production for garment accessories.",
    url: "https://faclbangladesh.com/manufacturing",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "/manufacturing/manufacturing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Garment Accessories Manufacturing",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com/manufacturing",
  },
};

export default function ManufacturingPage() {
  return (
    <section className="flex flex-col lg:gap-20">
      <ManufacturingClient />
    </section>
  );
}
