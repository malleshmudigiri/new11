import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ITSM_ITAM = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const itmServices = [
    { title: "Data-Driven Integration", desc: "Unified workflows for incident, change and asset management for better insights." },
    { title: "ITAM Implementation", desc: "Comprehensive asset discovery, license management, and compliance reporting." },
    { title: "ITAM System Pilot Deployment", desc: "Streamlined processes, reducing redundancies to improve efficiency and resource allocation." },
    { title: "Enterprise Architecture (EANow)", desc: "Creating a secure centralized IT inventory for governance and collaboration." }
  ];

  const erpBenefits = [
    { title: "Automation", desc: "Reduced errors with streamlined workflows." },
    { title: "Real-Time Data Accuracy", desc: "Consistent asset updates across platforms." },
    { title: "Enhanced Reporting", desc: "Improved compliance and audit capabilities." },
    { title: "Scalability", desc: "Flexible framework for future integrations." },
    { title: "Optimized Asset Lifecycle Management", desc: "Automated asset retirement and new asset creation, ensuring lifecycle visibility." }
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20 font-[Montserrat]">
      {/* Heading */}
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-[#22224b]">Integrated ITSM & ITAM Solutions</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Technogen integrates IT Service Management (ITSM) and IT Asset Management (ITAM) using ServiceNow to enhance IT operations, optimize resources, and ensure compliance.
        </p>
      </div>

      {/* ITM/ITAM Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
        {itmServices.map((item, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition" data-aos="fade-up">
            <h3 className="font-semibold text-lg text-[#ce3266] mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* ERP Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div data-aos="fade-right">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2332/2332668.png"
            alt="ERP"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="grid sm:grid-cols-2 gap-6" data-aos="fade-left">
          {erpBenefits.map((b, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-5 hover:shadow-xl transition">
              <h4 className="text-[#22224b] font-semibold mb-2">{b.title}</h4>
              <p className="text-sm text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DOSB_Services = () => {
  const advisorServices = [
    "Strategic Guidance",
    "Policy Development",
    "Budget Preparation",
    "Financial Monitoring",
    "Stakeholder Engagement",
    "Training & Support",
    "Compliance Analysis",
    "Technical Assistance"
  ];

  const advisorDescriptions = [
    "Provide senior-level advice to the Assistant Secretary for Financial Resources, DOSB leadership, and the SSF Board on budgetary and financial management.",
    "Offer guidance on budget policy management, financial integrity, and create new policies, procedures, or SOPs as needed.",
    "Assist in planning and preparing the SSF budget for presentation to key stakeholders, including OMB and Congress.",
    "Analyze and recommend remedies for financial abnormalities while ensuring compliance with agency requirements.",
    "Represent the SSF in meetings, providing expertise on operations, GrCcoding, and equity statements.",
    "Deliver guidance, training, and SOPs on budget formulation, execution, and apportionment requests.",
    "Review financial controls and ensure transactions are accurate, and assist in policy and procedure updates.",
    "Provide interpretations of OMB circulars, Departmental Budget Policy Memoranda, legislation, and Treasury guidance."
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20 font-[Montserrat]">
      <div className="text-center max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#22224b] mb-4">Technogen: Special Advisor Services for DOSB</h2>
        <p className="text-gray-600">
          Technogen, Inc. (TGI) is proud to provide Special Advisor services to the Division of the Office of the Secretary Budget (DOSB) Service and Supply Fund Branch. 
          Our consultative approach aligns seamlessly with DOSB’s mission to lead budgetary and financial management initiatives.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {advisorServices.map((service, i) => (
          <div key={i} className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition">
            <h3 className="font-semibold text-lg text-[#ce3266] mb-2">{service}</h3>
            <p className="text-sm text-gray-600">{advisorDescriptions[i]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const itsm = () => {
  return (
    <>
      <ITSM_ITAM />
      <DOSB_Services />
    </>
  );
};

export default itsm;
