import AboutContent from "../about-section/AboutContent";
import AboutImageGrid from "../about-section/AboutImageGrid";

const AboutSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center">
        <AboutContent />
        <AboutImageGrid />
      </div>
    </section>
  );
};

export default AboutSection;
