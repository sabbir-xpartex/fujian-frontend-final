"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, memo } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Products", href: "/products" },
  { name: "Manufacturing", href: "/manufacturing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openQuote, setOpenQuote] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  const activeClass =
    "font-semibold bg-linear-to-r from-[#00019A] to-blue-600 bg-clip-text text-transparent";

  return (
    <header className="fixed top-2 z-50 w-full px-4">
      <div className="mx-auto bg-white flex px-2 lg:px-4 h-14 lg:h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/20 backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.08)]">
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
              className={`group relative text-sm font-medium transition-colors ${
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
            variant="outline"
            className="hidden border-blue-600 cursor-pointer text-[#00019A] transition-all hover:bg-[#00019A] hover:text-white md:flex"
            onClick={() => setOpenQuote(true)}
          >
            Get Quote
          </Button>

          <Sheet open={openMenu} onOpenChange={setOpenMenu}>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="md:hidden">
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
                      onClick={() => setOpenMenu(false)}
                      className={`text-sm transition-colors ${
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
                  className="w-full bg-[#00019A] text-white hover:bg-[#00019A]"
                  onClick={() => {
                    setOpenMenu(false);
                    setOpenQuote(true);
                  }}
                >
                  Get a Quote
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <Sheet open={openQuote} onOpenChange={setOpenQuote}>
        <SheetContent
          side="top"
          className="max-w-lg mx-auto mt-24 rounded-3xl border bg-white p-8 shadow-lg"
        >
          <SheetTitle className="text-xl font-semibold text-gray-900">
            Request a Quote
          </SheetTitle>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00019A]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00019A]"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00019A]"
            />
            <textarea
              placeholder="Message"
              className="w-full rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00019A]"
              rows={4}
            />
            <Button className="w-full bg-[#00019A] text-white hover:bg-[#00019A]">
              Submit
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export default memo(Navbar);
