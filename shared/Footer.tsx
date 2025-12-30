"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  const titleClass =
    "text-sm font-semibold bg-linear-to-r from-[#00019A] to-blue-600 bg-clip-text text-transparent";

  const textClass = "text-sm text-neutral-800 hover:text-[#00019A]";

  return (
    <footer className="relative mt-8 border border-[#00019A]/10 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#00019A]/5 via-white to-white" />

      <div className="mx-auto max-w-7xl px-4 py-2 lg:pt-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/fujian.svg"
              alt="Fujian Accessories Co. Ltd."
              width={160}
              height={48}
              className="w-40"
            />
            <p className="text-sm leading-relaxed text-neutral-800">
              Professional garment accessories manufacturer providing
              high-quality buttons, zippers, labels, and custom accessories for
              global fashion brands.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start gap-3">
            <h3 className={titleClass}>Company</h3>
            <Link href="/about" className={textClass}>About Us</Link>
            <Link href="/manufacturing" className={textClass}>Manufacturing</Link>
            <Link href="/quality" className={textClass}>Quality Control</Link>
            <Link href="/contact" className={textClass}>Contact</Link>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className={titleClass}>Products</h3>
            <Link href="/products/buttons" className={textClass}>Buttons</Link>
            <Link href="/products/zippers" className={textClass}>Zippers</Link>
            <Link href="/products/labels" className={textClass}>Labels & Tags</Link>
            <Link href="/products/custom" className={textClass}>Custom Accessories</Link>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className={titleClass}>Contact</h3>

            <div className="flex items-start gap-3 text-sm text-neutral-800">
              <MapPin className="h-4 w-4 text-[#00019A]" />
              <span>Fujian, Bangladesh</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-neutral-800">
              <Mail className="h-4 w-4 text-[#00019A]" />
              <span>info@faclbangladesh.com</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-neutral-800">
              <Phone className="h-4 w-4 text-[#00019A]" />
              <span>+880 1714 813840</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#00019A]/15 pt-2 text-center text-xs text-neutral-800">
          © {new Date().getFullYear()} Fujian Accessories Co. Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
