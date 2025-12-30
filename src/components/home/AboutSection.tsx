"use client";

import { memo } from "react";
import Image from "next/image";
import { Factory, Award, Users } from "lucide-react";

function AboutSection() {
  return (
    <section className="relative ">
      
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-blue-50/40 to-white" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="relative flex items-center justify-center">
          <Image
            src="/cover/1701513690612.png"
            alt="Fujian Accessories manufacturing facility"
            width={700}
            height={700}
            className="w-full rounded-3xl h-70 lg:h-120 object-cover shadow-[0_0_30px_rgba(0,0,0,0.12)]"
          />
        </div>

        <div className="flex flex-col justify-center gap-3 lg:gap-6">
          <span className="w-fit rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-medium text-[#00019A]">
            About Our Company
          </span>

          <h2 className="text-xl lg:text-3xl font-semibold lg:font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Reliable Partner for
            <span className="block text-[#00019A]">
              Garment Accessories Manufacturing
            </span>
          </h2>

          <p className="max-w-xl text-sm lg:text-base leading-relaxed text-gray-600">
            Fujian Accessories CO. Ltd. is a professional manufacturer
            specializing in garment accessories including buttons, zippers,
            labels, and custom trims. With years of factory experience, we serve
            global brands with consistent quality and scalable production.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <AboutItem
              icon={<Factory className="h-5 w-5 text-[#00019A]" />}
              title="Modern Factory"
              text="Advanced production lines"
            />
            <AboutItem
              icon={<Award className="h-5 w-5 text-[#00019A]" />}
              title="Certified Quality"
              text="Strict QC systems"
            />
            <AboutItem
              icon={<Users className="h-5 w-5 text-[#00019A]" />}
              title="Experienced Team"
              text="Skilled professionals"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface AboutItemProps {
  icon: React.ReactNode;
  title: string;
  text: string;
}

const AboutItem = memo(function AboutItem({
  icon,
  title,
  text,
}: AboutItemProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <p className="text-xs text-gray-600">{text}</p>
      </div>
    </div>
  );
});

export default memo(AboutSection);
