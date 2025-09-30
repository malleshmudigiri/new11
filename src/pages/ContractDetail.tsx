import { useParams, useNavigate } from "react-router-dom";

const contracts = [
  {
    id: "gsa-mas",
    title: "GSA MAS",
    logo: "/images/gsa-mas.png",
    number: "GS-35F-181BA",
    type: "GWAC",
    agencies: "All Federal Civilian and DoD",
    ceiling: "No Maximum Ordering Limitation",
    details: {
      specialItems: "132-51 Information Technology Professional Services",
    },
  },
  {
    id: "cio-sp3",
    title: "CIO-SP3 SMALL BUSINESS",
    logo: "/images/cio-sp3.png",
    number: "75N98120D00091 CIO-SP3 (SB)",
    track: "Small Business",
    type: "Indefinite-Delivery Indefinite-Quantity (IDIQ)",
    agencies: "All Federal Civilian and DoD",
    ceiling: "$20 Billion",
    details: {
      taskOrders:
        "Firm Fixed Price, Cost Reimbursement, Time and Material/Labor Hour",
      performance: "May 11, 2020 – July 14, 2022",
      promptPayment: "None",
      taskAreas: "1, 2, 4, 5, 6, 7, 8, 9, 10",
    },
  },
  {
    id: "gsa-stars",
    title: "GSA 8(a) STARS III GWAC",
    logo: "/images/gsa-stars.png",
    number: "47QTCB22D0479",
    type: "Indefinite-Delivery Indefinite-Quantity (IDIQ)",
    agencies: "All the Federal Agencies",
    ceiling: "$50 Billion",
    details: {
      awardee: "SSN Group LLC & TechnoGen, Inc. (SSNGroup JV)",
      taskOrders:
        "Firm Fixed Price, Cost Reimbursement, Time, and Material/Labor Hour",
      performance: "07/02/2021 – 07/01/2029",
      taskAreas: [
        "Data Management",
        "Information and Communications Technology",
        "IT Operations and Maintenance",
        "IT Security/IT workforce augmentation",
        "Software Development",
        "Systems Design",
        "Emerging Technologies",
      ].join(", "),
    },
  },
  {
    id: "cms-sparc",
    title: "CMS SPARC",
    logo: "/images/sparc.png",
    number: "HHSM-500-2017-000531",
    type: "Multiple Award IDIQ",
    agencies:
      "Department of Health and Human Services, Centers for Medicare & Medicaid Services",
    ceiling: "$25 Billion Ceiling",
  },
  {
    id: "dla-jets",
    title: "DLA JETS 2.0",
    logo: "/images/dla-jets.png",
    type: "IDIQ",
    agencies: "Department of Defense (via DLA)",
    details: {
      description:
        "DLA provides IT solutions that drive operational efficiency, data integration, and technological innovation in logistics and sustainment.",
    },
  },
  {
    id: "md-cats",
    title: "MARYLAND CATS+ MASTER CONTRACT",
    logo: "/images/md-cats.png",
    number: "060B2490023",
    type: "IDIQ",
    agencies: "All State of Maryland Governmental Agencies",
  },
  {
    id: "md-health-exchange",
    title: "MARYLAND HEALTH BENEFIT EXCHANGE",
    logo: "/images/md-health.png",
    number: "MDM0031036680",
    type: "IDIQ",
    details: {
      taskAreas: [
        "Enterprise Service Provider (ESP)",
        "Web & Internet Systems",
        "Electronic Document Management",
        "Software Engineering",
        "Systems Management & Maintenance",
        "Information System Security",
        "Application Service Provider",
        "IT Auditing, Testing & QA Service",
        "IT Management Consulting Services",
        "Documentation/Technical Writing",
      ].join(", "),
    },
  },
];

export default function ContractDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contract = contracts.find((c) => c.id === id);

  if (!contract) {
    return (
      <div className="p-10 text-center font-montserrat">
        Contract not found 🚫
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto font-montserrat px-6 pt-24">
      {/* Title */}
      <h2 className="text-4xl font-bold text-pink-600 mb-10">
        {contract.title}
      </h2>

      {/* Card Layout */}
      <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 items-start mb-12">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={contract.logo}
            alt={contract.title}
            className="w-40 h-40 object-contain border rounded-xl shadow-sm p-3 bg-gray-50"
          />
        </div>

        {/* Details */}
        <div className="flex-1">
          <table className="w-full text-left">
            <tbody className="text-gray-700 text-base">
              {contract.number && (
                <tr className="border-b">
                  <td className="py-3 font-semibold w-56">Contract Number</td>
                  <td className="py-3">{contract.number}</td>
                </tr>
              )}
              {contract.type && (
                <tr className="border-b">
                  <td className="py-3 font-semibold">Type</td>
                  <td className="py-3">{contract.type}</td>
                </tr>
              )}
              {contract.agencies && (
                <tr className="border-b">
                  <td className="py-3 font-semibold">User Agencies</td>
                  <td className="py-3">{contract.agencies}</td>
                </tr>
              )}
              {contract.ceiling && (
                <tr className="border-b">
                  <td className="py-3 font-semibold">Ceiling Amount</td>
                  <td className="py-3">{contract.ceiling}</td>
                </tr>
              )}
              {/* Render extra details dynamically */}
              {contract.details &&
                Object.entries(contract.details).map(([key, value]) => (
                  <tr key={key} className="border-b">
                    <td className="py-3 font-semibold capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </td>
                    <td className="py-3">{value}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Back button */}
      <div className="text-center">
        <button
          onClick={() => navigate("/contract-vehicles")}
          className="px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
        >
          ← Back to Contract Vehicles
        </button>
      </div>
    </div>
  );
}
