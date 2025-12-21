import type { Metadata } from "next";
import QualityPageClient from "./QualityPageClient";

export const metadata: Metadata = {
  title:
    "Quality Control, Inspection & Compliance | Fujian Accessories CO. Ltd.",
  description:
    "Discover Fujian Accessories CO. Ltd.'s advanced quality control system, including raw material inspection, in-process checks, final testing, and global compliance standards for garment accessories.",

  keywords: [
    "quality control garment accessories",
    "manufacturing quality inspection",
    "ISO quality control factory",
    "garment accessories quality assurance",
    "buttons zippers labels quality control",
    "Fujian Accessories quality",
    "textile accessories compliance",
  ],

  openGraph: {
    title:
      "Quality Control & Manufacturing Compliance | Fujian Accessories CO. Ltd.",
    description:
      "From raw material inspection to final shipment audits, explore how Fujian Accessories CO. Ltd. ensures consistent quality and international compliance.",
    url: "https://faclbangladesh.com/quality",
    siteName: "Fujian Accessories CO. Ltd.",
    images: [
      {
        url: "/quality/quality-og.jpg",
        width: 1200,
        height: 630,
        alt: "Quality Control & Inspection Process",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Quality Control & Compliance | Fujian Accessories CO. Ltd.",
    description:
      "Learn how Fujian Accessories CO. Ltd. maintains strict quality inspection and compliance across every manufacturing stage.",
    images: ["/quality/quality-og.jpg"],
  },

  alternates: {
    canonical: "https://faclbangladesh.com/quality",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function QualityPage() {
  return (
    <section className="flex flex-col lg:gap-10">
      <QualityPageClient />
    </section>
  );
}
