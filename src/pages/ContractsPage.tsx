import React, { useState } from "react";

interface Contract {
  id: string; // use string for all IDs
  title: string;
  logo: string;
  number?: string; // optional
  type: string;
  agencies?: string; // optional
  ceiling?: string; // optional
  description?: string; // added for clarity
}

const contracts: Contract[] = [
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
    description:
      "Government-wide acquisition contract for advanced IT products and services.",
  },
  {
    id: "md-cats",
    title: "MARYLAND CATS+ MASTER CONTRACT",
    logo: "/images/md-cats.png",
    number: "060B2490023",
    type: "IDIQ",
    agencies: "All State of Maryland Governmental Agencies",
    description:
      "Best-in-Class GWAC providing comprehensive and flexible IT solutions.",
  },
  {
    id: "md-health-exchange",
    title: "MARYLAND HEALTH BENEFIT EXCHANGE",
    logo: "/images/md-health.png",
    number: "MDM0031036680",
    type: "IDIQ",
    description:
      "Providing federal agencies access to service-disabled veteran-owned small business IT solutions.",
  },
  {
    id: "pg-cats2",
    title: "PRINCE GEORGE’S COUNTY CATS II IDIQ",
    logo: "/images/pg-cats.png",
    type: "IDIQ",
    agencies: "Prince George’s County Government",
    description:
      "IDIQ contract vehicle enabling Prince George’s County agencies to procure IT consulting and technical services quickly and effectively.",
  },
];

const ContractsPage: React.FC = () => {
  const [selectedContract, setSelectedContract] = useState<Contract | null>(
    null
  );

  return (
    <div className="p-10">
      {/* Grid of cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {contracts.map((contract) => (
          <div
            key={contract.id}
            className="border rounded-lg shadow hover:shadow-lg cursor-pointer p-4 flex items-center gap-4"
            onClick={() => setSelectedContract(contract)}
          >
            <img
              src={contract.logo}
              alt={contract.title}
              className="w-20 h-20 object-contain"
            />
            <h2 className="text-xl font-bold">{contract.title}</h2>
          </div>
        ))}
      </div>

      {/* Details Modal */}
      {selectedContract && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedContract(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              {selectedContract.title}
            </h2>
            <div className="flex gap-6">
              <img
                src={selectedContract.logo}
                alt={selectedContract.title}
                className="w-32 h-32 object-contain border rounded"
              />
              <table className="table-auto border-collapse w-full">
                <tbody>
                  {selectedContract.number && (
                    <tr>
                      <td className="font-semibold p-2">CONTRACT NUMBER</td>
                      <td className="p-2">{selectedContract.number}</td>
                    </tr>
                  )}
                  <tr className="bg-gray-50">
                    <td className="font-semibold p-2">TYPE</td>
                    <td className="p-2">{selectedContract.type}</td>
                  </tr>
                  {selectedContract.agencies && (
                    <tr>
                      <td className="font-semibold p-2">USER AGENCIES</td>
                      <td className="p-2">{selectedContract.agencies}</td>
                    </tr>
                  )}
                  {selectedContract.ceiling && (
                    <tr className="bg-gray-50">
                      <td className="font-semibold p-2">CEILING AMOUNT</td>
                      <td className="p-2">{selectedContract.ceiling}</td>
                    </tr>
                  )}
                  {selectedContract.description && (
                    <tr>
                      <td className="font-semibold p-2">DESCRIPTION</td>
                      <td className="p-2">{selectedContract.description}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContractsPage;
