import React from "react";
import { motion } from "framer-motion";

const CyberSecurity: React.FC = () => {
  return (
    <div className="w-full text-gray-900 font-montserrat">
      {/* ================== Section 1 (Banner) ================== */}
 <div className="w-full text-gray-900 font-montserrat">
  {/* ================== Section 1 (Banner) ================== */}
 {/* ================== Section 1 (Banner) ================== */}
    {/* Section: Banner */}
  <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135808/Cyber-Security_tpg6qv.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135808/Cyber-Security_tpg6qv.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135148/cyber-Security_t6ncm5.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>

{/* ================== Section 2 (Introduction) ================== */}
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
    <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24">
      {/* Heading */}
      <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3">
        PROTECTING YOUR BUSINESS <br />
        WITH COMPREHENSIVE CYBERSECURITY
      </h2>

      {/* Divider */}
      {/* <div className="w-16 sm:w-20 h-0.5 bg-white mx-auto my-2 align-left"></div> */}

      {/* Description */}
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90 max-w-full sm:max-w-3xl mx-auto">
        Technogen’s Trust Center is the cornerstone of our security and
        compliance approach. Helping organizations meet stringent regulatory
        and operational requirements whilst safeguarding critical assets.
      </p>
    </div>
  </div>
</section>


</div>

      {/* ================== Section 3 (Technogen Advantage) ================== */}
      {/* <section className="py-16 ">
        <div className="full-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"> */}
          {/* Left Image */}
          {/* <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/cyber_vut8pn.png"
              alt="Technogen Advantage"
              className="w-3/4 md:w-full"
            />
          </div> */}
          {/* Right Content */}
          {/* <div>
            <h2 className="text-3xl font-bold mb-6">Technogen Advantage</h2>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Zero Trust Architecture:</span>{" "}
                Focus on identity authentication and authorization for all users
                and devices.
              </li>
              <li> */}
                {/* <span className="font-semibold">Comprehensive Coverage:</span>{" "}
                Security across government, applications, infrastructure, and
                corporate operations.
              </li>
              <li>
                <span className="font-semibold">Transparent Reporting:</span>{" "}
                Security scorecards and independent assessments ensure trust and
                compliance.
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* ================== Section 3 (Technogen Advantage) ================== */}
{/* ================== Section 3 (Technogen Advantage) ================== */}
<section className="py-16 font-montserrat">
  <div className="max-w-6xl mx-auto px-6">
    {/* Centered Heading with underline */}
    <div className="text-center mb-12">
      <h2 className="text-5xl font-extrabold font-bold text-bluetheme ">
        Technogen Advantage
      </h2>
      <div className="mt-2 w-24 h-1 bg-bluetheme mx-auto rounded-full"></div>
    </div>

    {/* Content Area */}
    <div className="flex flex-col md:flex-row items-center gap-12">
      {/* Left Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758279029/Infographic_Image_mcn7ur.png"
          alt="Technogen Advantage"
          className="w-full max-w-[400px] object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2">
        <ul className="space-y-6">
          <li className="flex items-start gap-3">
            {/* Arrow */}
            <div className="w-0 h-0 mt-1 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-blue-500 "></div>
            {/* Text */}
            <div>
              <span className="font-semibold">Zero Trust Architecture:</span>{" "}
              <span className="font-montserrat ">
                Focus on identity authentication and authorization for all users
                and devices.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-0 h-0 mt-1 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-blue-400"></div>
            <div>
              <span className="font-semibold">Comprehensive Coverage:</span>{" "}
              <span className="font-montserrat">
                Security across government, applications, infrastructure, and
                corporate operations.
              </span>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <div className="w-0 h-0 mt-1 border-t-[8px] border-b-[8px] border-l-[14px] border-t-transparent border-b-transparent border-l-blue-300"></div>
            <div>
              <span className="font-semibold">Transparent Reporting:</span>{" "}
              <span className="font-montserrat">
                Security scorecards and independent assessments ensure trust and
                compliance.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* ================== Section 3 (Technogen Advantage) ================== */}
{/* <section className="py-16">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center md:items-center gap-12"> */}
    {/* Left Image */}
    {/* <div className="flex justify-center w-full md:w-1/2">
      <img
        src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/cyber_vut8pn.png"
        alt="Technogen Advantage"
        className="w-full object-contain"
      />
    </div> */}

    {/* Right Content */}
    {/* <div className="w-full md:w-1/2 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
        Technogen Advantage
      </h2>
      <ul className="space-y-4 text-center md:text-left">
        <li>
          <span className="font-semibold">Zero Trust Architecture:</span>{" "}
          Focus on identity authentication and authorization for all users
          and devices.
        </li>
        <li>
          <span className="font-semibold">Comprehensive Coverage:</span>{" "}
          Security across government, applications, infrastructure, and
          corporate operations.
        </li>
        <li>
          <span className="font-semibold">Transparent Reporting:</span>{" "}
          Security scorecards and independent assessments ensure trust and
          compliance.
        </li>
      </ul>
    </div>
  </div>
</section>
 */}

{/* ================== Section 4 (Our Expertise) ================== */}
<section className="py-10 bg-gray-50 font-montserrat">
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-blueTheme inline-block">
      Our Expertise
    </h2>
    {/* Short gray line below H2 */}
    <div className="mt-2 h-1 w-16 bg-gray-400 rounded-full mx-auto"></div>
  </div>

  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
    {/* Row 1 */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block">
          Government Security
        </h3>
        <div className="h-0.5 w-24 h-0.5 bg-gray-300 mx-left mb-4"></div>
        <p className="text-gray-700 text-base sm:text-base md:text-lg">
          Compliance with DISA STIGs, VPATs, SSDF,<br /> and other federal and
          regulatory security standards.
        </p>
      </div>
      <div className="relative">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Government_Security_pinb0p.png"
          alt="Government Security"
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="order-2 md:order-1 relative">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203834/Application_Product_Security_leyx4e.png"
          alt="Application Security"
          className="w-full h-auto"
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block font-montserrat">
          Application & Product Security
        </h3>
        <div className="h-0.5 w-24 h-0.5 bg-gray-300 mx-left mb-4"></div>
        <p className="text-gray-700 text-base sm:text-base md:text-lg  font-montserrat">
          Secure SDLC, MFA, vulnerability disclosure,  <br></br> audit logging.
        </p>
      </div>
    </div>

    {/* Row 3 */}
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block  font-montserrat">
          Infrastructure & Data Security
        </h3>
        <div className="h-1 w-24 h-0.5 bg-gray-400 mx-left mb-4"></div>
        <p className="text-gray-700 text-base sm:text-base md:text-lg  font-montserrat">
          Continuous monitoring, secure backups,<br /> access auditing, secure
          deletion.
        </p>
      </div>
      <div className="relative">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203843/Infrastructure_Data_Security_lfuuks.png"
          alt="Infrastructure Security"
          className="w-full h-auto"
        />
      </div>
    </div>

    {/* Row 4 */}
    <div className="grid md:grid-cols-2 gap-8 items-center  font-montserrat">
      <div className="order-2 md:order-1 relative">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Cloud_Corporate_Security_c7pv8u.png"
          alt="Cloud Security"
          className="w-full h-auto"
        />
      </div>
      <div className="order-1 md:order-2">
        <h3 className="text-2xl font-semibold mb-2 text-blueTheme inline-block  font-montserrat">
          Cloud & Corporate Security
        </h3>
        <div className="h-0.5 w-24 h-0.5 bg-gray-300 mx-left mb-4"></div>
        <p className="text-gray-700 text-base sm:text-base md:text-lg  font-montserrat">
          Safeguard cloud environments and corporate assets with threat
          monitoring, training, and phishing protection.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* ================== Section 5 (Certifications + CTA) ================== */}
   <section className="max-w-6xl mx-auto">
  {/* Top Certification Box */}
  <div className="border border-gray-300 rounded-lg shadow-md px-6 py-10 text-center bg-white  font-montserrat">
    <h2 className="text-2xl md:text-3xl font-bold text-blue-900  tracking-wide mb-2">
     Certifications
    </h2>
    <div className="w-24 h-0.5 bg-gray-400 mx-auto mb-4"></div>
    <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto  font-montserrat">
      Technogen guides organizations in securing key cybersecurity certifications: 
      ISO, CMMC, NIST, and more. We also conduct SOC 2 audits and independent 
      penetration testing to validate robust security frameworks.
    </p>
  </div>

  {/* Space between box and image */}
  <div className="mt-8"></div>

  {/* Image Section */}
  <div
    className="relative bg-cover bg-center text-white rounded-lg overflow-hidden h-[500px]" 
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203843/CTA_cyber_yxfemm.png')",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0"></div>

    <div className="relative h-full flex flex-col items-center justify-center text-center px-6  font-montserrat">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 max-w-3xl mx-auto text-white  font-montserrat">
        Leverage Technogen’s cybersecurity expertise to build resilient security frameworks.
      </h3>

      {/* Uiverse Button */}
      <button
        className="font-montserrat flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-[#22224b] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
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

export default CyberSecurity;
