
import React from "react";
const technogenStats = [
  {
    title: "Business-Focused Outcomes",
    description:
      "AI workflows that drive efficiency, innovation, and ROI.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3-8 4 16 3-8h4" />
      </svg>
    ),
  },
  {
    title: "Data Control First",
    description:
      "Governance and security are embedded before deploying AI agents.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4V4z" />
      </svg>
    ),
  },
  {
    title: "Built-In Quality & Testing",
    description:
      "Continuous monitoring, testable interfaces, and performance optimization ensure reliability.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6" />
      </svg>
    ),
  },
  {
    title: "Flexible Orchestration Patterns",
    description:
      "From sequential workflows to open-ended problem solving, we tailor AI orchestration to your business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    ),
  },
];
const Capabilities: React.FC = () => {
  return (
    <div className="w-full font-[Montserrat]">
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
      Contract Vehicles
    </h2>
  </div>
</section>


{/* ================= Section 2 (Empowering Workflows Half Width) ================= */}
<section className="relative py-16 flex justify-center">
  <div
    className="relative w-4/5 rounded-2xl overflow-hidden bg-cover bg-center text-center text-white px-6 py-16"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758188881/Empowering_Intelligent_Workflows_jkep98.png')",
    }}
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
     Empowering Your Digital-First Journey with Cloud Solutions
    </h2>
    <p className="text-lg md:text-xl text-white">
 Technogen provides a complete suite of cloud services, helping organizations confidently embrace a digital-first future. 
    </p>
  </div>
</section>

      {/* ================= Section 3 (Technogen Advantage) ================= */}
 <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          TECHNOGEN ADVANTAGE
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          AI isn’t just deployed, it’s orchestrated efficiently, and at scale.
          Our expertise ensures seamless agent collaboration, built-in testing,
          and measurable business impact.
        </p>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188985/Technogen-Advantage_2x_uappap.png"
            alt="Technogen Advantage"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      {/* ================= Section 4 (Our Expertise) ================= */}
 {/* ================= Section 4 (Our Expertise) ================= */}
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
               Cloud migration, infrastructure management, application modernization, multi-cloud strategy, and digital transformation across leading platforms. 
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

          {/* Row 2 */}
          {/* <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1 relative">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758544297/Legal_Compliance_dg2673.png"
                alt="Legal & Compliance"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block">
                Legal & Compliance
              </h3>
              <p className="text-gray-700 text-base sm:text-base md:text-lg">
                Sub-processor management, data processing agreements, EULA
                compliance
              </p>
            </div>
          </div> */}

          {/* Row 3 */}
          {/* <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block">
                AI Governance
              </h3>
              <p className="text-gray-700 text-base sm:text-base md:text-lg">
                Continuous policy enforcement, workload monitoring, anomaly
                detection, and risk mitigation
              </p>
            </div>
            <div className="relative">
              <img
                src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758544297/AI_Governance_ggy9ne.png"
                alt="AI Governance"
                className="w-full h-auto"
              />
            </div>
          </div> */}
        </div>
      </section>



{/* ================= Section 5 (Get Started Today) ================= */}
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
              Drive efficiency, build resilient security, and growth with Technogen's EDGE.
             
            </h3>
            <button
              className="font-[Montserrat] flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#22224b] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
                         before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
                         before:rounded-full before:bg-[#ce3266] hover:text-black before:-z-10 before:aspect-square before:hover:scale-200 
                         before:hover:duration-500 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
              type="button"
            >
              Explore our Solutions
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

export default Capabilities;
