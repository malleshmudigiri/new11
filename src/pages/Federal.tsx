
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Federal(): JSX.Element {
  return (
    <div className="w-full">
     {/* Hero Section */}
{/* Hero Section - Full image below header */}
<section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758881167/tmp_47c7a3a7-792c-4cf4-902b-d05fa299fa82_ajgmoz.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758881167/tmp_47c7a3a7-792c-4cf4-902b-d05fa299fa82_ajgmoz.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758880607/Mobile_Banner_bsoia2.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain"
  />
</section>


     {/* <section className="rounded-xl overflow-hidden relative -mt-1">
  <img
    src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757597115/Web_1920_15_xd4gyx.png"
    alt="Capitol Mobile"
    className="block md:hidden w-full h-[520px] object-cover"
  />
  <img
    src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757666230/BG_Banner_eebaip.png"
    alt="Capitol Desktop"
    className="hidden md:block w-full h-[124vh] object-cover"
  />
</section> */}

      {/* Section 2: Two Columns */}
      <section className="w-full py-16 bg-white grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 md:px-20 font-montserrat">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#22224b] mb-4 font-montserrat" >
            Strengthening Federal Missions Through Innovation and Security
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed max-w-3xl font-montserrat">
           Technogen partners with federal agencies to modernize operations, bolster resilience, and deliver mission-focused solutions. Through our deep expertise in IT service management, financial analytics, DevSecOps, and cybersecurity. We’re supporting critical initiatives across Health & Human Services, Labor, Defense, and more. Our tailored solutions streamline workflows, enhance insight, and strengthen infrastructure while ensuring compliance and driving lasting impact for public service. 
          </p>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757666446/Intro_Image_brbj7a.png"
            alt="Innovation and Security"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* 🔹 Big Wrapper with ONE Background Video + Overlay */}
      <section className="relative w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Content wrapper */}
        <div className="relative z-10">
          {/* Section: Health and Human Services
          <div className="w-full py-16 px-6 md:px-20 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Health and Human Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center">
              {[
                {
                  to: "/health-sector",
                  icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
                  title: " Health and Human Services (HHS)",
                  desc: " Technogen is committed to advancing healthcare equity with smart IT solutions. We integrate ITSM and ITAM to streamline operations, improve resource use, and ensure compliance. By partnering with institutes, we build data models and dashboards that simplify budgeting and reporting. Our expertise also supports vital research, helping address healthcare challenges and improving outcomes for communities. ",
                },
                // {
                //   to: "/itsm-itam",
                //   icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
                //   title: "Integrated ITSM and ITAM Solutions",
                //   desc: "Technogen integrates IT Service Management (ITSM) and IT Asset Management (ITAM) using ServiceNow to enhance IT operations, optimize resources, and ensure compliance. Our solutions enhance efficiency, scalability, and compliance, ultimately empowering HRSA to better serve underserved and vulnerable populations.",
                // },
                // {
                //   to: "/nia",
                //   icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
                //   title: "Driving Innovation for NIA",
                //   desc: " Technogen partners with the National Institute on Aging (NIA) to design, implement, and maintain financial data models and dashboards. Using QlikView and Qlik Sense, we streamline budget formulation, execution, and reporting for greater efficiency and transparency. ",
                // },
                // {
                //   to: "/nida",
                //   icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
                //   title: "Supporting NIDA with Advanced IT Solutions",
                //   desc: "Technogen, as a subcontractor to LCG under the CIO-SP3 Small Business Set-Aside, supports the National Institute on Drug Abuse (NIDA) in advancing critical addiction research. Our contributions help address the opioid crisis and substance use challenges, driving better outcomes for individuals and communities. ",
                // },
              ].map((card, idx) => (
                <Link to={card.to} key={idx} className="h-full flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 + idx * 0.2 }}
                    className="relative cursor-pointer rounded-2xl shadow-lg bg-white text-[#22224b] flex flex-col items-start 
                    w-[85%] min-h-[480px] p-8"
                  >
                    <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100 mb-[200px]">
                      <img src={card.icon} alt={card.title} className="w-8 h-8 object-contain" />
                    </div>
                    <h3 className="font-bold text-xl border-b border-gray-300 pb-2 mb-4 w-full">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                      {card.desc}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div> */}

          {/* Section: Department of Labor */}
          <div className="w-full py-16 px-6 md:px-20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center font-montserrat">
              Health and Human Services
            </h2>

            <div className="w-full md:w-4/5 lg:w-2/3 bg-white rounded-lg shadow-md p-8 flex flex-col items-start mx-auto">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full mb-4 bg-white"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-montserrat">
                Technogen is committed to advancing healthcare equity with smart IT solutions. We integrate ITSM and ITAM to streamline operations, improve resource use, and ensure compliance. By partnering with institutes, we build data models and dashboards that simplify budgeting and reporting. Our expertise also supports vital research, helping address healthcare challenges and improving outcomes for communities.
              </p>
            </div>
          </div>
          {/* Section: Department of Labor */}
          <div className="w-full py-16 px-6 md:px-20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center font-montserrat">
              Department of Labor
            </h2>

            <div className="w-full md:w-4/5 lg:w-2/3 bg-white rounded-lg shadow-md p-8 flex flex-col items-start mx-auto">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full mb-4 bg-white"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-montserrat">
                We support the Department of Labor in modernizing legacy systems through DevSecOps practices. Our solutions boost efficiency, scalability, and security, while reducing technical debt. With future-ready applications, we create a strong foundation for sustainable, secure, and adaptable operations
              </p>
            </div>
          </div>
          {/* Section: Department of Labor */}
          <div className="w-full py-16 px-6 md:px-20 text-white">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 uppercase text-center font-montserrat">
              Department of  DEFENSE
            </h2>

            <div className="w-full md:w-4/5 lg:w-2/3 bg-white rounded-lg shadow-md p-8 flex flex-col items-start mx-auto">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-400 rounded-full mb-4 bg-white"></div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-montserrat">
               Technogen partners with defense health agencies in delivering world-class care and operational excellence. We also provide full-spectrum IT services for logistics, like covering infrastructure, system optimization, and oversight. We’re ensuring dependable, efficient, and mission-ready IT operations for all.

              </p>
            </div>
          </div>
    </div>
    </section>
    </div>
  );
}
