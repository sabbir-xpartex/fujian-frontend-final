import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us | Fujian Accessories CO. Ltd.",
  description:
    "Contact Fujian Accessories CO. Ltd. for garment accessories manufacturing, OEM services, quotations, and export inquiries.",
  keywords: [
    "contact garment accessories manufacturer",
    "Fujian Accessories contact",
    "garment accessories factory China",
    "OEM garment accessories supplier",
  ],
  openGraph: {
    title: "Contact Fujian Accessories CO. Ltd.",
    description:
      "Get in touch with Fujian Accessories CO. Ltd. for factory-direct garment accessories manufacturing and global export.",
    url: "https://faclbangladesh.com/contact",
    siteName: "Fujian Accessories CO. Ltd.",
    type: "website",
  },
  alternates: {
    canonical: "https://faclbangladesh.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <section className="w-full">
      <ContactPageClient />
    </section>
  );
}
