"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, memo } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "Quality", href: "/quality" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const activeClass =
    "font-semibold bg-linear-to-r from-[#00019A] to-blue-600 bg-clip-text text-transparent";

  return (
    <header className="fixed top-2 lg:top-4 z-50 w-full px-4">
      <div
        className="mx-auto bg-white flex px-2 lg:px-4 h-14 lg:h-16 max-w-7xl items-center justify-between rounded-2xl 
border border-white/20 backdrop-blur-xl 
shadow-[0_0_20px_rgba(0,0,0,0.08)]"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/fujian.svg"
            alt="Fujian Accessories CO. Ltd."
            width={38}
            height={38}
            priority
            className="rounded-lg w-28 mx-auto lg:w-40"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`group relative text-sm font-medium transition-colors
                ${
                  isActive(item.href)
                    ? activeClass
                    : "text-gray-700 hover:text-[#00019A]"
                }`}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-linear-to-r from-blue-600 to-blue-400 transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            className="hidden border-blue-600 text-[#00019A] transition-all hover:bg-[#00019A] hover:text-white md:flex"
          >
            <a
              href="mailto:info@faclbangladesh.com"
              aria-label="Request a quote by email"
            >
              Get Quote
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6 text-[#00019A]" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-[320px] rounded-r-2xl px-5">
              <div className="flex flex-col gap-8 pt-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/fujian.svg"
                    alt="Fujian Accessories CO. Ltd."
                    width={34}
                    height={34}
                    className="rounded-lg w-24"
                  />
                </div>

                <nav className="flex flex-col gap-5">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`text-sm transition-colors
                        ${
                          isActive(item.href)
                            ? activeClass
                            : "text-gray-700 hover:text-[#00019A]"
                        }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <Button
                  asChild
                  className="w-full bg-[#00019A] text-white hover:bg-[#00019A]"
                >
                  <a
                    href="mailto:info@faclbangladesh.com"
                    aria-label="Request a quote by email"
                  >
                    Get a Quote
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default memo(Navbar);
