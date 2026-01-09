"use client";

import { memo } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

import client1 from "@/public/client/img (1).jpeg";
import client2 from "@/public/client/img (2).png";
import client3 from "@/public/client/img (3).png";
import client4 from "@/public/client/img (4).png";
import client5 from "@/public/client/img (5).png";
import client6 from "@/public/client/img (6).png";
import CommonHead from "@/shared/CommonHead";

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

/* Animation Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const OurClient = () => (
  <section className="mx-auto max-w-7xl w-full px-4 md:px-6">
    <CommonHead
      badge="Trusted Worldwide"
      title="Our Valued Clients"
      description="We’re proud to collaborate with forward-thinking companies who trust us
        to deliver reliable, scalable, and secure digital solutions."
    />

    {/* Logo Marquee */}
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="overflow-hidden relative"
    >
      <div className="flex gap-10 w-max animate-marquee">
        {[...clients, ...clients].map((client, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.08 }}
            className="shrink-0 w-46 h-28 relative transition-all duration-300"
          >
            <Image
              src={client.src}
              alt={client.name}
              title={client.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 120px, 200px"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Marquee Animation */}
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
