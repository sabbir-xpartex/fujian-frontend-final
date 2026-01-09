import Image from "next/image";

const AboutImageGrid = () => {
  return (
    <div className="lg:col-span-3">
      <div className="grid grid-cols-2 gap-4">
        {/* Large Image */}
        <div className="col-span-2 row-span-2">
          <div className="relative h-80 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="cover/about.jpg"
              alt="Manufacturing facility"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">Modern Factory</h3>
              <p className="text-sm mt-1">State-of-the-art production</p>
            </div>
          </div>
        </div>

        {/* Small Image 1 */}
        <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="manufacturing/img(1).jpg"
            alt="Quality control"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
            Quality Control
          </div>
        </div>

        {/* Small Image 2 */}
        <div className="relative h-40 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="manufacturing/img(2).jpg"
            alt="Production line"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-3 left-3 text-white text-sm font-semibold">
            Production Line
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageGrid;
