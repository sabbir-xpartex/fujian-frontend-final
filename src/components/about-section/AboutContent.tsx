import { Factory, ShieldCheck, Globe } from "lucide-react";
import Link from "next/link";

const AboutContent = () => {
  return (
    <div className="lg:col-span-2 space-y-2">
      <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 text-xs font-medium text-[#00019A]">
        About Fujian Accessories
      </span>

      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
        Manufacturing Excellence in Garment Accessories
      </h2>

      <p className="text-base text-gray-600 leading-relaxed">
        Fujian Accessories Co. Ltd. is a leading manufacturer and supplier of
        garment accessories, dedicated to supporting the global apparel industry
        with high-quality, reliable, and innovative solutions.
      </p>

      <div className="space-y-3">
        <Feature
          icon={<Factory />}
          title="Factory Direct"
          desc="Complete in-house manufacturing"
        />
        <Feature
          icon={<ShieldCheck />}
          title="Quality Assured"
          desc="Multi-stage inspection systems"
        />
        <Feature
          icon={<Globe />}
          title="Global Export"
          desc="Serving international markets"
        />
      </div>

      <Link
        href="/about"
        className="inline-block mt-4 text-sm font-medium text-[#00019A] hover:underline"
      >
        <button className="w-full bg-[#00019A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Learn More About Us
        </button>
      </Link>
    </div>
  );
};

const Feature = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-[#00019A]">
      {icon}
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-900">{title}</p>
      <p className="text-xs text-gray-600">{desc}</p>
    </div>
  </div>
);

export default AboutContent;
