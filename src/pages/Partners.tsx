
// import React from "react";

// const partners = [
//   { name: "AWS", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104092/Amazon_Web_Services_Logo.svg_1_tvkfno.png" },
//   { name: "Salesforce", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104056/Salesforce.com_logo.svg_ny6c0k.png" },
//   { name: "ServiceNow", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104045/servicenow_bqzolj.png" },
//   { name: "Microsoft", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104066/Microsoft_logo__2012.svg_sbmka1.png" },
//   { name: "Appian", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104085/Appian_Logo.svg_pc1xbn.png" },
//   { name: "Databricks", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104074/Databricks_Logo_ko3l0w.png" },
//   { name: "Snowflake", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104034/Snowflake-Emblem_i4wy0j.png" },
//   { name: "Splunk", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104026/Splunk-a-Cisco-Company-Logo.png_a2prho.png" },
//   { name: "SuccessKPI", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104018/successkpi-inc-largex5-logo_tkp3s9.png" },
// ];

// export default function Partners() {
//   return (
//     <section className="relative w-full">
//       {/* 🔹 Section 1 - Hero Background Image (auto height) */}
//       <div className="w-full">
//         <img
//           src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758103678/Partners-Page-Banner_zimvlu.png"
//           alt="Partners Hero"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* 🔹 Section 2 - Heading + Logos */}
//       <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22224b]">
//           PARTNERS
//         </h2>
//         <div className="w-24 h-[3px] bg-[#22224b] mx-auto my-6"></div>

//         {/* Subheading */}
//         <p className="text-center text-gray-700 max-w-5xl mx-auto mb-16 text-base md:text-lg">
//           TechnoGen is a trusted partner. We believe in collaborating and
//           building robust teams with decades of expertise to improve business
//           processes using cutting edge technology solutions.
//         </p>

//         {/* Logos Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">
//           {partners.map((partner) => (
//             <div
//               key={partner.name}
//               className="flex items-center justify-center h-48 w-full bg-white rounded-xl border border-gray-200 shadow-sm 
//                          transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
//             >
//               <img
//                 src={partner.logo}
//                 alt={partner.name}
//                 // className="h-24 md:h-28 object-contain grayscale hover:grayscale-0 transition-all duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from "react";

const partners = [
  { name: "AWS", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104092/Amazon_Web_Services_Logo.svg_1_tvkfno.png" },
  { name: "Salesforce", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104056/Salesforce.com_logo.svg_ny6c0k.png" },
  { name: "ServiceNow", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104045/servicenow_bqzolj.png" },
  { name: "Microsoft", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104066/Microsoft_logo__2012.svg_sbmka1.png" },
  { name: "Appian", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104085/Appian_Logo.svg_pc1xbn.png" },
  { name: "Databricks", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104074/Databricks_Logo_ko3l0w.png" },
  { name: "Snowflake", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104034/Snowflake-Emblem_i4wy0j.png" },
  { name: "Splunk", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104026/Splunk-a-Cisco-Company-Logo.png_a2prho.png" },
  { name: "SuccessKPI", logo: "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104018/successkpi-inc-largex5-logo_tkp3s9.png" },
];

export default function Partners() {
  return (
    <section className="relative w-full">
      {/* Hero Image */}
           {/* Hero Section */}
  <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134650/Partners_vubgvu.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134650/Partners_vubgvu.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759134650/Partners_vubgvu.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>
      {/* <div className="w-full">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758103678/Partners-Page-Banner_zimvlu.png"
          alt="Partners Hero"
          className="w-full h-auto object-cover"
        />
      </div> */}
{/* Hero Banner */}
{/* <div className="w-full h-[220px] sm:h-[280px] md:h-[350px] lg:h-[420px] relative">
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758103678/Partners-Page-Banner_zimvlu.png"
    alt="Partners Hero"
    className="w-full h-full object-cover"
  />
</div> */}

      {/* Heading + Logos */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#22224b]">
          PARTNERS
        </h2>
        <div className="w-24 h-[3px] bg-[#22224b] mx-auto my-6"></div>

        <p className="text-center text-gray-700 max-w-5xl mx-auto mb-16 text-base md:text-lg">
          TechnoGen is a trusted partner. We believe in collaborating and
          building robust teams with decades of expertise to improve business
          processes using cutting edge technology solutions.
        </p>

        {/* Logos Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-40 w-full bg-white rounded-xl border border-gray-200 shadow-sm 
                         transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:bg-gradient-to-br hover:from-gray-50 hover:to-white"
            >
              {/* Inner rectangle box */}
              <div className="w-[80%] h-[70%] flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-100">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-14 lg:h-16 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
