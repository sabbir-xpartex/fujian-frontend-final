"use client";

import { memo } from "react";
import Image, { StaticImageData } from "next/image";

import client1 from "@/public/client/img (1).jpeg";
import client2 from "@/public/client/img (2).png";
import client3 from "@/public/client/img (3).png";
import client4 from "@/public/client/img (4).png";
import client5 from "@/public/client/img (5).png";
import client6 from "@/public/client/img (6).png";

type Client = {
  name: string;
  src: StaticImageData;
};

const clients: Client[] = [
  { name: "Client One", src: client1 },
  { name: "Client Two", src: client2 },
  { name: "Client Three", src: client3 },
  { name: "Client Four", src: client4 },
  { name: "Client Five", src: client5 },
  { name: "Client Six", src: client6 },
];

const OurClient = () => (
  <section className="py-6 mx-auto max-w-7xl w-full">
    <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
      Our Trusted Clients
    </h2>
    <div className="overflow-hidden mt-10 relative">
      <div className="flex gap-6 w-max animate-marquee">
        {[...clients, ...clients].map((client, idx) => (
          <div key={idx} className="shrink-0 w-32 h-16 relative">
            <Image
              src={client.src}
              alt={client.name}
              title={client.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
    <style jsx>{`
      .animate-marquee {
        animation: marquee 20s linear infinite;
      }
      @keyframes marquee {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `}</style>
  </section>
);

export default memo(OurClient);
