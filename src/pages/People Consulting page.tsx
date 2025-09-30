
import React from "react";
import { motion } from "framer-motion";

const  PeopleConsulting: React.FC = () => {
  return (
    <div className="w-full font-[Montserrat]">
      {/* Hero Section */}
      <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}

        {/* Desktop Banner */}
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134097/policy_yqcquu.png"
          alt="TGinc Desktop Banner"
          className="hidden lg:block w-full object-contain"
        />

        {/* Tablet / Large Laptop Banner */}
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134097/policy_yqcquu.png"
          alt="TGinc Tablet Banner"
          className="hidden md:block lg:hidden w-full object-contain"
        />

        {/* Mobile Banner */}
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134097/policy_yqcquu.png"
          alt="TGinc Mobile Banner"
          className="block md:hidden w-full object-contain bg-white"
        />
      </section>
    

     {/* ================= Section 2 (Empowering Workflows Half-Width) ================= */}
<section className="w-full flex justify-center items-center py-4 sm:py-6 px-4 sm:px-6 lg:px-8 font-montserrat">
  <div
    className="relative w-full max-w-6xl rounded-2xl overflow-hidden flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Group_598_mgkrjk.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 text-white/100">
      {/* Heading */}
      <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3 text-white">
         People Consulting with Purpose  <br />
Empowering People, Driving Transformation 
        
      </h2>

      {/* Divider */}
      <div className="w-16 sm:w-20 h-0.5 bg-white mx-auto my-2"></div>

      {/* Description */}
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90 max-w-full sm:max-w-3xl mx-auto text-white/100">
        At Technogen, we believe people are the heart of every transformation. That’s why we invest deeply in attracting and nurturing exceptional  <br /> talent- guided   by a simple principle: treating our people the way we want to be treated. Our passionate professionals bring respect, integrity, and excellence to their work, values that extend seamlessly to how we serve our customers. 
      </p>
    </div>
  </div>
</section>
      {/* ================= Section: Technogen Advantage ================= */}
      <section className="py-24 bg-white text-center font-[Montserrat]">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          TECHNOGEN ADVANTAGE
        </h2>
        <div className="w-24 h-1 bg-gray-200 mx-auto mb-8"></div>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758544296/Technogen_Advantage_a309ni.png"
            alt="Technogen Advantage"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* ================= Section: Our Expertise ================= */}
      <section className="py-10 bg-gray-50 font-[Montserrat]">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blueTheme inline-block">
            Our Expertise
          </h2>
          <div className="mt-2 h-1 w-16 bg-gray-400 rounded-full mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {/* <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block">
                Policies
              </h3> */}
              <p className="text-gray-700 text-base sm:text-base md:text-lg">
                From agile software development and software assurance to risk mitigation, quality testing, and validation, we cover the complete lifecycle. We ensure every product and service consistently meets its intended goals with reliability and excellence 
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758544297/Policies_tbit4c.png"
                alt="Policies"
                className="w-full h-auto"
              />
            </div>
          </div>

         
        </div>
      </section>

      {/* ================= Section: Certifications + CTA ================= */}
      <section className="max-w-6xl mx-auto">
        <div className="mt-8"></div>
        <div
          className="relative bg-cover bg-center text-white rounded-lg overflow-hidden h-[500px]"
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758544297/P_C_CTA_phoxdp.png')",
          }}
        >
          <div className="absolute inset-0"></div>
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6 font-[Montserrat]">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-3xl mx-auto text-white">
             Transform your workforce, empower your future
            </h3>
            <button
              className="font-[Montserrat] flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#22224b] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                         before:rounded-full before:bg-[#ce3266] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 
                         before:hover:duration-500 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
              type="button"
            >
           Let’s Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 19"
                className="w-8 h-8 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-2 rotate-45"
              >
                <path
                  className="fill-gray-800 group-hover:fill-gray-800"
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PeopleConsulting;
