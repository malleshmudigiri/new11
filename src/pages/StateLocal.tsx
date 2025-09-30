
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const StateLocalServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    
    <section className="font-[Montserrat] relative overflow-hidden">
      {/* Section: Banner */}
 <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134765/State-_-Local_wrcm8e.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134765/State-_-Local_wrcm8e.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134765/State-_-Local_wrcm8e.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>
     {/* <section className="rounded-xl overflow-hidden relative -mt-1">
  <img
    src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757597115/Web_1920_15_xd4gyx.png"
    alt="Capitol Mobile"
    className="block md:hidden w-full h-[520px] object-cover"
  />
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758105913/State-_-local-banner_myplyu.png"
    alt="Capitol Desktop"
    className="hidden md:block w-full h-[124vh] object-cover"
  />
</section> */}
      

      {/* ===== Section 2: Introduction ===== */}
      <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden ">
        <div className="max-w-7xl mx-auto text-left relative  z-10">
          <h1
            className="text-5xl md:text-4xl font-bold mb-6 font-montserrat"
            data-aos="fade-up"
          >
            Transforming Public Services with Advanced IT Solutions
          </h1>
          <p
            className="text-m md:text-2xl font-medium font-montserrat"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Reliable, Scalable, and Citizen-Centered Technology for Every Agency
          </p>
          <p
            className="text-black text-lg md:text-xl leading-relaxed mb-6 font-montserrat"
            data-aos="fade-up"
          >
            Technogen enables state and local governments to modernize
            infrastructure, improve service delivery, and protect sensitive
            data via secure, scalable IT solutions. We’re partnering with
            agencies across health, education, and public safety to integrate
            AI analytics, cloud transformation, and streamlined workflows.
          </p>
          <p
            className="text-black text-lg md:text-xl leading-relaxed font-montserrat"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            With our solutions, we aim to reduce operational friction, improve
            citizen experience, and ensure compliance.
          </p>
        </div>
      </div>

      {/* ===== Section 3: Services Offered (Video + Cards) ===== */}
      <section className="relative w-full overflow-hidden">
        {/* Background video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source
            src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Content wrapper */}
        <div className="relative z-10 w-full py-20 px-6 md:px-20 text-white/20 font-montserrat">
          <h2 className="text-4xl md:text-4xl font-bold mb-12 text-center font-montserrat text-[white] font-montserrat">
            Services We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-7xl mx-auto font-montserrat">
            {[
              {
                title: "State Government",
                desc: "Technogen delivers end-to-end IT solutions for government agencies, including Cloud Services, Cybersecurity, Network Management, Application Modernization, Data Analytics, ERP, Help Desk, and AI-driven Automation. We provide secure, scalable infrastructure, modernize legacy systems, and ensure reliable networks while protecting sensitive data. Our solutions streamline workflows, support informed decision-making, and enhance operational efficiency to improve government services.",
                icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
              },
              {
                title: "Local Government",
                desc: "Technogen delivers end-to-end IT solutions for government agencies, combining Managed Services, Cybersecurity, and IT Infrastructure. We enhance efficiency, security, and cost management while protecting against cyber threats with advanced monitoring, policy enforcement, and intrusion detection. Our scalable infrastructure solutions ensure reliable, responsive, and future-ready IT services that support government objectives.",
                icon: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757685712/vuesax-linear-cloud-change_cnqlkn.svg",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 + idx * 0.2 }}
                viewport={{ once: true }}
                className="relative cursor-pointer rounded-2xl shadow-lg bg-white text-[#22224b] flex flex-col items-start 
                w-[90%] min-h-[450px] p-8 mx-auto"
              >
                <div className="w-16 h-16 rounded-full border-2 border-gray-300 flex items-center justify-center bg-gray-100 mb-8">
                  <img
                    src={card.icon}
                    alt={card.title}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <h3 className="font-bold text-xl border-b border-gray-300 pb-2 mb-4 w-full">
                  {card.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-grow">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Section 4: Maryland State IT Support & Development ===== */}
      <div className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#172059] mb-6 font-montserrat"
            data-aos="fade-up"
          >
            Maryland State IT Support & Development
          </h2>
          <h3
            className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 font-montserrat"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Technogen’s Commitment to Public Service
          </h3>
          <p
            className="text-lg md:text-xl text-gray-700 leading-relaxed font-montserrat"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Technogen Inc. (TGI) provides comprehensive IT solutions to support
            the State of Maryland’s critical human services programs across
            multiple agencies. Our expertise spans IT applications development,
            operations & maintenance, systems analysis, and technical support,
            ensuring seamless service delivery for programs impacting thousands
            of Maryland residents.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StateLocalServices;
