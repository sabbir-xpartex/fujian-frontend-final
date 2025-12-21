"use client";

import { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="relative mt-8 border border-[#00019A]/10 overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#00019A]/5 via-white to-white" />

      <div className="mx-auto max-w-7xl px-4 py-4 lg:pt-10 md:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Image
              src="/fujian.svg"
              alt="Fujian Accessories Co. Ltd."
              width={160}
              height={48}
              className="w-40"
            />
            <p className="text-sm leading-relaxed text-[#00019A]/80">
              Professional garment accessories manufacturer providing
              high-quality buttons, zippers, labels, and custom accessories for
              global fashion brands.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center lg:items-start gap-3">
            <h3 className="text-sm font-semibold text-[#00019A]">Company</h3>
            <Link
              href="/about"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              About Us
            </Link>
            <Link
              href="/manufacturing"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Manufacturing
            </Link>
            <Link
              href="/quality"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Quality Control
            </Link>
            <Link
              href="/contact"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="text-sm font-semibold text-[#00019A]">Products</h3>
            <Link
              href="/products/buttons"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Buttons
            </Link>
            <Link
              href="/products/zippers"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Zippers
            </Link>
            <Link
              href="/products/labels"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Labels & Tags
            </Link>
            <Link
              href="/products/custom"
              className="text-sm text-[#00019A]/70 hover:text-[#00019A]"
            >
              Custom Accessories
            </Link>
          </div>

          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="text-sm font-semibold text-[#00019A]">Contact</h3>

            <div className="flex items-start gap-3 text-sm text-[#00019A]/80">
              <MapPin className="h-4 w-4 text-[#00019A]" />
              <span>Fujian, Bangladesh</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#00019A]/80">
              <Mail className="h-4 w-4 text-[#00019A]" />
              <span>info@faclbangladesh.com</span>
            </div>

            <div className="flex items-start gap-3 text-sm text-[#00019A]/80">
              <Phone className="h-4 w-4 text-[#00019A]" />
              <span>+880 1714 813840</span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#00019A]/15 pt-4 text-center text-xs text-[#00019A]/70">
          © {new Date().getFullYear()} Fujian Accessories Co. Ltd. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
