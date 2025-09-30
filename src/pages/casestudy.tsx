
import React from "react";
import { ArrowUpRight } from "lucide-react";

const CaseStudy: React.FC = () => {
  const caseStudy = {
    id: 1,
    title: "Modernizing HRSA operations with our IT solutions",
    description:
      "Explore how we helped HRSA modernize IT operations, improve compliance, and strengthen healthcare delivery through innovation.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600", // sample image
  };

  return (
        <div className="w-full font-[Montserrat]">
     <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133993/Case-Study_zrrnzc.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133993/Case-Study_zrrnzc.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133993/Case-Study_zrrnzc.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>

      {/* Section 2: Intro */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2140] mb-4">
          Proven Solutions, Real Results
        </h2>
        <p className="text-gray-700 text-lg">
          See how Technogen helps organizations overcome obstacles and achieve
          sustainable success.
        </p>
      </section>

      {/* Case Study Card */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="group relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden transition">
          {/* Blue hover fill between borders */}
          <div className="absolute inset-0 bg-transparent group-hover:bg-[#1f2140] transition"></div>

          {/* Inner content */}
          <div className="relative bg-white border border-gray-300 rounded-lg overflow-hidden group-hover:bg-[#1f2140] transition">
            <div className="relative">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <button className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-gray-100">
                <ArrowUpRight className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#1f2140] mb-2 group-hover:text-white transition">
                {caseStudy.title}
              </h3>
              <p className="text-gray-600 text-base group-hover:text-gray-200 transition">
                {caseStudy.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;
