"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

import NavHead from "./NavHead";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    subItems: [
      // { name: "Garment Accessories", href: "/products/garment" },
      // { name: "Packaging Solutions", href: "/products/packaging" },
      // { name: "Custom Manufacturing", href: "/products/custom" },
    ],
  },
  { name: "Manufacturing", href: "/manufacturing" },
  // { name: "Quality", href: "/quality" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top Head */}
      <div
        className={`hidden md:block transition-all duration-300 ${
          scrolled ? "h-0 opacity-0 overflow-hidden" : "h-auto opacity-100"
        }`}
      >
        <NavHead scrolled={scrolled} />
      </div>

      {/* Main Navbar */}
      <div
        className={`border-b transition-shadow ${
          scrolled ? "shadow-md" : "border-gray-200"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/fujian.svg"
                alt="Fujian Accessories"
                width={160}
                height={40}
                priority
                className="w-36 lg:w-40"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 text-sm font-semibold transition ${
                      isActive(item.href)
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                  >
                    {item.name}
                    {/* {item?.subItems && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )} */}
                  </Link>

                  {/* Dropdown */}
                  {/* {item.subItems && (
                    <div className="absolute left-0 top-full mt-3 w-56 rounded-lg border bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )} */}
                </div>
              ))}
            </nav>

            {/* Desktop CTA */}
            <Button className="hidden md:block bg-[#00019A] hover:bg-blue-800 text-white">
              Get Quote
            </Button>

            {/* Mobile Controls */}
            <div className="flex items-center gap-3 md:hidden">
              <Button size="sm" className="bg-blue-700 text-white">
                Quote
              </Button>

              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>

                <SheetContent side="left" className="w-80 p-0">
                  <div className="flex h-full flex-col">
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between border-b p-6">
                      <Image
                        src="/fujian.svg"
                        alt="Logo"
                        width={140}
                        height={40}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setMobileOpen(false)}
                      >
                        <X />
                      </Button>
                    </div>

                    {/* Drawer Nav */}
                    <nav className="flex-1 overflow-y-auto px-6 py-8">
                      {navItems.map((item) => (
                        <div key={item.name} className="mb-5">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`block py-2 text-lg font-medium ${
                              isActive(item.href)
                                ? "text-blue-700"
                                : "text-gray-700"
                            }`}
                          >
                            {item.name}
                          </Link>

                          {/* {item.subItems && (
                            <div className="ml-4 mt-2 space-y-2">
                              {item.subItems.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block text-base text-gray-600 hover:text-blue-700"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )} */}
                        </div>
                      ))}
                    </nav>

                    {/* Drawer CTA */}
                    <div className="border-t p-6">
                      <Button className="w-full bg-[#00019A] text-white">
                        <a href="mailto:info@faclbangladesh.com">Get Quote</a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);
