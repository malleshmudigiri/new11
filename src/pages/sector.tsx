import React from "react";
import { Link } from "react-router-dom";

const Sector: React.FC = () => {
  return (
    <div className="p-10 bg-white text-center font-sans">
      {/* Banner Section */}
           {/* Hero Section */}
<section className="rounded-xl overflow-hidden relative -mt-1">
  {/* Mobile Image */}
  <img
    src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757597115/Web_1920_15_xd4gyx.png"
    alt="Capitol Mobile"
    className="block md:hidden w-full h-[430px] object-contain"
  />

  {/* Desktop Image */}
  <img
    src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png"
    alt="Capitol Desktop"
    className="hidden md:block w-full h-[99vh] object-fill"
  />

  {/* Centered Heading */}
  <div className="absolute inset-0 flex items-center justify-center z-1">
    <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg bg-black/30 p-4 rounded text-center">
     Sector
    </h2>
  </div>
</section>
      {/* <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
          Industries
        </h2>
        <h1 className="text-3xl md:text-4xl font-bold text-pink-600 mt-2 leading-tight">
          Delivering Purpose-driven Technology <br />
          <span className="text-blue-800">Tailored to Industry Needs</span>
        </h1>
      </div> */}

      {/* Description Section */}
      <div className="max-w-3xl mx-auto text-gray-600 text-md space-y-4 mb-12">
        <p>
          We provide unique and customized IT solutions and services to various industries
          leveraging digital technologies such as Hyper Automation, Big Data, Analytics,
          RPA, AI/ML to achieve superior business outcomes.
        </p>
        <p>
          Our highly experienced and technically proficient team enables meaningful business
          transformation through recommendations tailored to business needs.
        </p>
        <p>
          While our solutions are applicable to all industries, we offer tailored solutions
          for Health Care & Life Science, Hospitality, EdTech and BFSI sectors.
        </p>
      </div>

      {/* Two Rows with Two Boxes Each */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Box - Federal */}
        <Link
          to="/sector/federal"
          className="group bg-gray-100 text-gray-800 p-10 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-900 hover:text-white"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏛️</div>
          <h3 className="text-2xl font-semibold">Federal</h3>
        </Link>

        {/* Box - State and Local */}
        <Link
          to="/sector/state-local"
          className="group bg-gray-100 text-gray-800 p-10 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-900 hover:text-white"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏛️</div>
          <h3 className="text-2xl font-semibold">State and Local</h3>
        </Link>

        {/* Box - Education */}
        <Link
          to="/sector/education"
          className="group bg-gray-100 text-gray-800 p-10 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-900 hover:text-white"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎓</div>
          <h3 className="text-2xl font-semibold">Education</h3>
        </Link>

        {/* Box - Commercial */}
        <Link
          to="/sector/commercial"
          className="group bg-gray-100 text-gray-800 p-10 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:bg-blue-900 hover:text-white"
        >
          <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🏢</div>
          <h3 className="text-2xl font-semibold">Commercial</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sector;
