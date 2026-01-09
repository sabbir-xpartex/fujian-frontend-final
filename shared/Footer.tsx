"use client";

import { memo } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-20 bg-linear-to-b from-[#000b36] via-[#00071f] to-[#00051f] text-white relative overflow-hidden">
      {/* Optional subtle overlay pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-8 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
          {/* Brand + Social */}
          <div className="lg:col-span-4 flex flex-col">
            {/* Logo + Company Name */}
            <div className="flex items-center gap-3 mb-5">
              {/* Logo placeholder - replace with your real logo */}
              {/* <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg flex-shrink-0">
                <span className="text-white font-bold text-2xl md:text-3xl">F</span>
              </div> */}

              <div>
                <h1 className="text-2xl sm:text-3xl md:text-3.5xl font-extrabold tracking-tight leading-tight">
                  Fujian Accessories
                </h1>
                
              </div>
            </div>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-xs mb-8">
              Premium garment accessories & custom solutions for global fashion
              brands.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" aria-label={`Visit our ${Icon.name}`}>
                  <div className="w-10 h-10 rounded-full bg-white/8 backdrop-blur-sm flex items-center justify-center hover:bg-blue-600/40 transition-all duration-300 hover:scale-110 border border-white/10">
                    <Icon className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Links + Contacts Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {/* Products */}
              <div>
                <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-5">
                  Products
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {["Buttons", "Zippers", "Labels & Tags", "Custom Orders"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="hover:text-white transition-colors"
                        >
                          {item}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-5">
                  Company
                </h4>
                <ul className="space-y-3 text-sm text-gray-300">
                  {[
                    "About Us",
                    "Manufacturing",
                    "Quality Control",
                    "Sustainability",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bangladesh Office */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-blue-300 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  Bangladesh
                </h4>
                <div className="text-sm text-gray-300 space-y-2.5">
                  <p>
                    Rupnagar, Mirpur-10
                    <br />
                    Dhaka-1216, Bangladesh
                  </p>
                  <Link
                    href="tel:+8801725752574"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +880 1725-752574
                  </Link>
                  <Link
                    href="mailto:info@faclbangladesh.com"
                    className="flex items-center gap-2 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4" />
                    info@faclbangladesh.com
                  </Link>
                </div>
              </div>

              {/* China Office */}
              <div className="space-y-4">
                <h4 className="flex items-center gap-2 text-sm font-semibold text-blue-300 uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  China
                </h4>
                <div className="text-sm text-gray-300 space-y-2.5">
                  <p>
                    Jinjiang City
                    <br />
                    Fujian Province, China
                  </p>
                  <Link
                    href="tel:+86585336880"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    +86 585 336 880
                  </Link>
                  <Link
                    href="mailto:facl.china@faclbangladesh.com"
                    className="flex items-center gap-2 hover:text-white transition-colors break-all"
                  >
                    <Mail className="w-4 h-4" />
                    facl.china@faclbangladesh.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/10 text-center text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Fujian Accessories Co. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
