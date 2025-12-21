"use client";

import { memo } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

function ContactPageClient() {
  return (
    <main className="relative pt-25 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-blue-50 via-white to-white" />

      <section className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center space-y-4">
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            Contact Fujian Accessories
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Let’s Discuss Your Requirements
          </h1>

          <p className="text-gray-600">
            Contact us directly for quotations, samples, and manufacturing
            details.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 items-start">
          <div className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <ContactItem
                icon={<Mail className="h-5 w-5 text-[#00019A]" />}
                title="Email"
                value="info@faclbangladesh.com"
                href="mailto:info@faclbangladesh.com"
              />

              <ContactItem
                icon={<Phone className="h-5 w-5 text-[#00019A]" />}
                title="Phone"
                value="+8801714813840"
                href="tel:++8801714813840 "
              />

              <ContactItem
                icon={<MessageCircle className="h-5 w-5 text-[#00019A]" />}
                title="WhatsApp"
                value="+8801714813840"
                href="https://wa.me/8801714813840 "
              />

              <ContactItem
                icon={<MapPin className="h-5 w-5 text-[#00019A]" />}
                title="Factory Location"
                value="Mirpur-12, Dhaka, Bangladesh"
              />
            </div>

            <div>
              <Button
                asChild
                size="lg"
                className="bg-[#00019A] px-10 text-white hover:bg-blue-800"
              >
                <a
                  href="mailto:info@faclbangladesh.com?subject=Product%20Inquiry%20-%20Fujian%20Accessories"
                  aria-label="Contact Fujian Accessories by email"
                >
                  Contact via Email
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.751238279067!2d90.35045497518992!3d23.827443378617897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c10001edce73%3A0xf6404849b479ee0c!2sFujian%20Accessories%20CO.%20Ltd.!5e0!3m2!1sen!2sbd!4v1766307335815!5m2!1sen!2sbd"
              className="h-105 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactItem = memo(function ContactItem({
  icon,
  title,
  value,
  href,
}: ContactItemProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href
        ? {
            href,
            target: href.startsWith("http") ? "_blank" : undefined,
            rel: "noopener noreferrer",
          }
        : {})}
      className="flex gap-4 rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">{value}</p>
      </div>
    </Wrapper>
  );
});

export default memo(ContactPageClient);
