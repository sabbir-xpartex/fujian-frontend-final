"use client";

import { memo } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function CTASection() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-20">
      {/* Modern layered background */}
      <div className="absolute inset-0 -z-20">
        {/* Deep gradient base */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-[#00019A]/90 to-indigo-950" />
        
        {/* Subtle radial glow from top center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(0,1,154,0.25)_0%,transparent_70%)]" />
        
        {/* Soft noise texture overlay (optional visual depth) */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-10 lg:p-16 backdrop-blur-2xl shadow-2xl ring-1 ring-white/20">
          {/* Inner highlight glow */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-transparent" />

          <div className="relative flex flex-col items-center gap-8 text-center">
            <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white">
              Ready to Start Your
              <span className="block bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent">
                Next Manufacturing Project?
              </span>
            </h2>

            <p className="max-w-2xl text-base lg:text-lg leading-relaxed text-white/80">
              Contact Fujian Accessories CO. Ltd. today to receive competitive
              pricing, fast lead times, and reliable garment accessory
              manufacturing solutions tailored to your brand.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              {/* Primary Button - White with brand accent on hover */}
              <Button
                size="lg"
                asChild
                className="group rounded-full bg-white px-10 py-6 text-[#00019A] font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-white hover:to-indigo-50 hover:shadow-xl hover:shadow-white/20"
              >
                <Link href="/contact" className="flex items-center gap-3">
                  Get a Quote
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>

              {/* Secondary Button - Transparent with subtle hover fill */}
              <Button
                size="lg"
                variant="outline"
                asChild
                className="rounded-full border border-white/30 bg-transparent px-10 py-6 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/10"
              >
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(CTASection);