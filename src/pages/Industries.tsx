import React from 'react';
import { Link } from 'react-router-dom';
import { Building, Globe, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Building className="h-12 w-12" />,
      title: "Federal Government",
      description: "Specialized solutions for federal agencies with deep understanding of government requirements, security clearances, and compliance standards.",
      capabilities: [
        "Security Clearance Ready Personnel",
        "FedRAMP Compliant Solutions",
        "FISMA Compliance",
        "Section 508 Accessibility"
      ],
      link: "/industries/federal"
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "State & Local Government",
      description: "Tailored technology solutions for state and local government operations, citizen services, and public sector modernization initiatives.",
      capabilities: [
        "Citizen Service Portals",
        "Public Safety Solutions",
        "Financial Management Systems",
        "Regulatory Compliance"
      ],
      link: "/industries/state-local"
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Education",
      description: "Educational technology solutions that enhance learning experiences, administrative efficiency, and student outcomes across K-12 and higher education.",
      capabilities: [
        "Student Information Systems",
        "Learning Management Platforms",
        "Campus Technology Infrastructure",
        "Data Analytics & Reporting"
      ],
      link: "/industries/education"
    },
    {
      icon: <Briefcase className="h-12 w-12" />,
      title: "Commercial",
      description: "Enterprise solutions for private sector organizations focused on driving growth, operational efficiency, and competitive advantage.",
      capabilities: [
        "Digital Transformation",
        "Customer Experience Optimization",
        "Business Process Automation",
        "Data-Driven Decision Making"
      ],
      link: "/industries/commercial"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
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
      Industries
    </h2>
  </div>
</section>
      {/* <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Industries We Serve</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Specialized solutions tailored to the unique needs and challenges of each industry sector
            </p>
          </div>
        </div>
      </section> */}

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-20 h-20 bg-[#172059] text-white rounded-xl mb-6">
                  {industry.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {industry.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#172059] rounded-full mr-3 flex-shrink-0"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={industry.link}
                  className="inline-flex items-center px-6 py-3 bg-[#172059] text-white font-semibold rounded-lg hover:bg-[#1a1f4f] transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Cross-Industry Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our solutions leverage common technology platforms while addressing the unique requirements of each sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technology Platforms</h3>
              <ul className="space-y-2 text-gray-600">
                <li>ServiceNow Platform</li>
                <li>AWS Cloud Services</li>
                <li>Salesforce CRM</li>
                <li>Microsoft Azure</li>
                <li>Data Analytics Platforms</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Common Solutions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Digital Transformation</li>
                <li>Cloud Migration</li>
                <li>Process Automation</li>
                <li>Cybersecurity</li>
                <li>Data Management</li>
              </ul>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sector-Specific Focus</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Regulatory Compliance</li>
                <li>Security Requirements</li>
                <li>Industry Standards</li>
                <li>Operational Workflows</li>
                <li>Stakeholder Needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Industry Success Metrics</h2>
            <p className="text-xl text-blue-100">
              Measurable results across all industry sectors we serve
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Government Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200">Educational Institutions</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">75+</div>
              <div className="text-blue-200">Commercial Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-blue-200">Client Retention Rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;