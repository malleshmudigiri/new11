// import React from "react";
// import { Link } from "react-router-dom";

// const contracts = [
//   {
//     id: "cms-sparc",
//     title: "CMS SPARC",
//     description:
//       "Contract vehicle enabling us to provide innovative IT services and solutions to federal agencies.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/10/Contract-Vehicles3.png",
//       className="hidden md:block w-full h-[99vh] object-fill"
//   },
//   {
//     id: "gsa-mas",
//     title: "GSA MAS",
//     description:
//       "Streamlined procurement for IT services and solutions through the GSA Multiple Award Schedule.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/11/Contract-Vehicles1.png",
//   },
//   {
//     id: "cio-sp3",
//     title: "CIO-SP3 SMALL BUSINESS",
//     description:
//       "Supporting federal IT modernization with innovative small business capabilities.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/11/Contract-Vehicles35.png",
//   },
//   {
//     id: "gsa-stars",
//     title: "GSA 8(a) STARS III GWAC",
//     description:
//       "A Best-in-Class GWAC providing flexible access to customized IT solutions.",
//     logo: "https://technogeninc.com/wp-content/uploads/2022/03/contract-vehicles_star8a.png",
//   },
//   {
//     id: "sewp-v",
//     title: "DLA JETS 2.0",
//     description:
//       "Government-wide acquisition contract for advanced IT products and services.",
//     logo: "https://technogeninc.com/wp-content/uploads/2025/03/defense-logistics-agency-f9153e.png",
//   },
//   {
//     id: "alliant-2",
//     title: "MARYLAND CATS+ MASTER CONTRACT",
//     description:
//       "Best-in-Class GWAC providing comprehensive and flexible IT solutions.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/10/Contract-Vehicles5.png",
//   },
//   {
//     id: "vets-2",
//     title: "MARYLAND HEALTH BENEFIT EXCHANGE",
//     description:
//       "Providing federal agencies access to service-disabled veteran-owned small business IT solutions.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/11/Contract-Vehicles7.png",
//   },
//   {
//     id: "oasis",
//     title: "PRINCE GEORGE’S COUNTY CATS II IDIQ",
//     description:
//       "Flexible and comprehensive contracting vehicle for professional services.",
//     logo: "https://technogeninc.com/wp-content/uploads/2021/10/5.png",
//   },
// ];

// const ContractVehicles: React.FC = () => {
//   return (
//     <div className="w-full font-[Montserrat]">
//       {/* Hero Section */}   
//       <section className="rounded-xl overflow-hidden relative -mt-1">
//   {/* Mobile Image */}
//   <img
//     src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757597115/Web_1920_15_xd4gyx.png"
//     alt="Capitol Mobile"
//     className="block md:hidden w-full h-[520px] object-cover"
//   />

//   {/* Desktop Image */}
//   <img
//     src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png"
//     alt="Capitol Desktop"
//     className="hidden md:block w-full h-[99vh] object-fill"
//   />

//   {/* H2 Text - Top Left */}
//   <h2 className="absolute top-4 left-4 text-white text-xl sm:text-3xl md:text-5xl font-bold drop-shadow-lg">
//     Your Heading Text
//   </h2>
// </section>

//     {/* <section className="rounded-xl overflow-hidden relative -mt-1">
//   <img
//     src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945019/Banners-And-images_o5k5ml.png"
//     alt="Capitol Mobile"
//     className="block md:hidden w-full h-[520px] object-cover"
//   />
//   <img
//     src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757680485/Black-Banner_bqniuy.png"
//     alt="Capitol Desktop"
//     className="hidden md:block w-full h-[124vh] object-cover"
//   />
// </section> */}

//       {/* Intro Section */}
//       <section className="max-w-4xl mx-auto px-6 py-16 text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#1f2140] mb-4">
//           Our  Contract Vehicles
//         </h2>
//         <p className="text-gray-700 text-lg">
//           Explore the  contracting vehicles that enable us to deliver IT
//           excellence and innovative solutions to government agencies.
//         </p>
//       </section>

//       {/* Card Section (8 Grid Layout) */}
//       <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//         {contracts.map((contract) => (
//           <div
//             key={contract.id}
//             className="relative group rounded-xl cursor-pointer"
//           >
//             {/* Outer border */}
//             <div className="absolute inset-0 border-2 border-gray-300 rounded-xl"></div>

//             {/* Inner hover border */}
//             <div className="absolute inset-1 rounded-xl border-2 border-transparent group-hover:border-blue-600 transition-all duration-300"></div>

//             {/* Card content */}
//             <div className="relative bg-white rounded-xl h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition">
//               {/* Image */}
//               <div className="h-40 bg-gray-100 flex items-center object-Fill justify-center">
//                 <img
//                   src={contract.logo}
//                   alt={contract.title}
//                   className="h-24 object-contain"
//                 />
//               </div>

//               {/* Content */}
//               <div className="p-6 flex flex-col flex-1">
//                 <h3 className="text-lg font-bold text-[#1f2140] mb-3 text-center">
//                   {contract.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm text-center flex-grow">
//                   {contract.description}
//                 </p>

//                 {/* Fancy Button */}
//                 <Link to={`/contracts/${contract.id}`} className="mt-6 self-center">
//                   <button className="cssbuttonsIoButton">
//                     View More
//                     <div className="icon">
//                       <svg
//                         height="20"
//                         width="20"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path d="M0 0h24v24H0z" fill="none"></path>
//                         <path
//                           d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                           fill="currentColor"
//                         ></path>
//                       </svg>
//                     </div>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Inline Styles for Button */}
//       <style>
//         {`
//           .cssbuttonsIoButton {
//             background: #22224b;
//             color: white;
//             font-family: inherit;
//             border: 1px solid white;
//             text-align: center;
//             font-size: 14px;
//             font-weight: 600;
//             border-radius: 2rem;
//             letter-spacing: 0.05em;
//             display: flex;
//             align-items: center;
//             overflow: hidden;
//             position: relative;
//             height: 2.6em;
//             padding-right: 3em;
//             padding-left: 1rem;
//             cursor: pointer;
//             transition: background-color 0.4s ease, color 0.4s ease;
//           }

//           .cssbuttonsIoButton .icon {
//             background: white;
//             margin-left: 1em;
//             position: absolute;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             height: 2em;
//             width: 2em;
//             border-radius: 2rem;
//             right: 0.4em;
//             transition: all 0.3s ease-out;
//           }

//           .cssbuttonsIoButton:hover {
//             background-color: white;
//             color: #000000;
//             border: 1px solid #000;
//           }

//           .cssbuttonsIoButton .icon svg {
//             width: 1em;
//             transition: transform 0.3s ease-out;
//             color: #000000;
//           }

//           .cssbuttonsIoButton:hover .icon svg {
//             transform: translateX(0.1em) rotate(-25deg);
//           }

//           .cssbuttonsIoButton:active .icon {
//             transform: scale(0.95);
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default ContractVehicles;
import React from "react";
import { Link } from "react-router-dom";

const contracts = [
  {
    id: "cms-sparc",
    title: "CMS SPARC",
    description:
      "Contract vehicle enabling us to provide innovative IT services and solutions to federal agencies.",
    logo: "https://technogeninc.com/wp-content/uploads/2021/10/Contract-Vehicles3.png",
  },
  {
    id: "gsa-mas",
    title: "GSA MAS",
    description:
      "Streamlined procurement for IT services and solutions through the GSA Multiple Award Schedule.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720250/Contract-Vehicles1-removebg-preview_1_zlzthq.png",
  },
  {
    id: "cio-sp3",
    title: "CIO-SP3 SMALL BUSINESS",
    description:
      "Supporting federal IT modernization with innovative small business capabilities.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720249/Contract-Vehicles35-removebg-preview_zdrxdf.png",
  },
  {
    id: "gsa-stars",
    title: "GSA 8(a) STARS III GWAC",
    description:
      "A Best-in-Class GWAC providing flexible access to customized IT solutions.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720244/contract-vehicles_star8a-removebg-preview_vzhlvs.png",
  },
  {
    id: "sewp-v",
    title: "DLA JETS 2.0",
    description:
      "Government-wide acquisition contract for advanced IT products and services.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720463/defense-logistics-agency-f9153e-removebg-preview_p6m1fu.png",
  },
  {
    id: "alliant-2",
    title: "MARYLAND CATS+ MASTER CONTRACT",
    description:
      "Best-in-Class GWAC providing comprehensive and flexible IT solutions.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720394/Contract-Vehicles5-removebg-preview_pdd9nx.png",
  },
  {
    id: "vets-2",
    title: "MARYLAND HEALTH BENEFIT EXCHANGE",
    description:
      "Providing federal agencies access to service-disabled veteran-owned small business IT solutions.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720389/Contract-Vehicles7-removebg-preview_fkvcvq.png",
  },
  {
    id: "oasis",
    title: "PRINCE GEORGE’S COUNTY CATS II IDIQ",
    description:
      "Flexible and comprehensive contracting vehicle for professional services.",
    logo: "https://res.cloudinary.com/dqkdopyej/image/upload/v1758720345/5-removebg-preview_sbklfs.png",
  },
];

const ContractVehicles: React.FC = () => {
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


      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2140] mb-4">
          Our  Contract Vehicles
        </h2>
        <p className="text-gray-700 text-lg">
          Explore the  contracting vehicles that enable us to deliver IT
          excellence and innovative solutions to government agencies.
        </p>
      </section>

      {/* Card Section (8 Grid Layout) */}
      <section className="max-w-7xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {contracts.map((contract) => (
          <div
            key={contract.id}
            className="relative group rounded-xl cursor-pointer"
          >
            {/* Outer border */}
            <div className="absolute inset-0 border-2 border-gray-300 rounded-xl"></div>

            {/* Inner hover border */}
            <div className="absolute inset-1 rounded-xl border-2 border-transparent group-hover:border-blue-600 transition-all duration-300"></div>

            {/* Card content */}
            <div className="relative bg-white rounded-xl h-full flex flex-col overflow-hidden shadow-md hover:shadow-xl transition">
              {/* Image */}
              <div className="h-40 w-full bg-#EFEFEF-200 flex items-center justify-center overflow-hidden">
                <img
                  src={contract.logo}
                  alt={contract.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-[#1f2140] mb-3 text-center">
                  {contract.title}
                </h3>
                <p className="text-gray-600 text-sm text-center flex-grow">
                  {contract.description}
                </p>

                {/* Fancy Button */}
                <Link to={`/contracts/${contract.id}`} className="mt-6 self-center">
                  <button className="cssbuttonsIoButton">
                    View More
                    <div className="icon">
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Inline Styles for Button */}
      <style>
        {`
          .cssbuttonsIoButton {
            background: #22224b;
            color: white;
            font-family: inherit;
            border: 1px solid white;
            text-align: center;
            font-size: 14px;
            font-weight: 600;
            border-radius: 2rem;
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            overflow: hidden;
            position: relative;
            height: 2.6em;
            padding-right: 3em;
            padding-left: 1rem;
            cursor: pointer;
            transition: background-color 0.4s ease, color 0.4s ease;
          }

          .cssbuttonsIoButton .icon {
            background: white;
            margin-left: 1em;
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 2em;
            width: 2em;
            border-radius: 2rem;
            right: 0.4em;
            transition: all 0.3s ease-out;
          }

          .cssbuttonsIoButton:hover {
            background-color: white;
            color: #000000;
            border: 1px solid #000;
          }

          .cssbuttonsIoButton .icon svg {
            width: 1em;
            transition: transform 0.3s ease-out;
            color: #000000;
          }

          .cssbuttonsIoButton:hover .icon svg {
            transform: translateX(0.1em) rotate(-25deg);
          }

          .cssbuttonsIoButton:active .icon {
            transform: scale(0.95);
          }
        `}
      </style>
    </div>
  );
};

export default ContractVehicles;
