import React, { useState } from 'react';
import { MapPin, Calendar, Briefcase, Search, Filter } from 'lucide-react';

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');

  const jobs = [
    {
      title: "Senior Cloud Architect",
      location: "Remote",
      type: "Full-time",
      department: "Cloud Services",
      postedDate: "2 days ago",
      description: "Lead cloud architecture initiatives and guide enterprise cloud transformation projects.",
      requirements: ["AWS/Azure certifications", "5+ years cloud experience", "Architecture design experience"],
      clearance: "Secret clearance preferred"
    },
    {
      title: "ServiceNow Developer",
      location: "Washington, DC",
      type: "Full-time",
      department: "ServiceNow Practice",
      postedDate: "5 days ago",
      description: "Develop and customize ServiceNow applications for government and commercial clients.",
      requirements: ["ServiceNow CSA certification", "3+ years ServiceNow development", "JavaScript proficiency"],
      clearance: "Public Trust required"
    },
    {
      title: "Cybersecurity Analyst",
      location: "Remote",
      type: "Full-time",
      department: "Cybersecurity",
      postedDate: "1 week ago",
      description: "Monitor security events, investigate incidents, and implement security controls.",
      requirements: ["CISSP or similar certification", "Security monitoring experience", "Incident response skills"],
      clearance: "Secret clearance required"
    },
    {
      title: "Salesforce Administrator",
      location: "Baltimore, MD",
      type: "Full-time",
      department: "Customer Experience",
      postedDate: "1 week ago",
      description: "Configure and maintain Salesforce environments for client implementations.",
      requirements: ["Salesforce Admin certification", "2+ years Salesforce experience", "Process automation skills"],
      clearance: "No clearance required"
    },
    {
      title: "Data Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Data & Analytics",
      postedDate: "1 week ago",
      description: "Build data pipelines and analytics platforms using modern cloud technologies.",
      requirements: ["Python/SQL expertise", "AWS/Azure data services", "ETL pipeline experience"],
      clearance: "Public Trust preferred"
    },
    {
      title: "DevOps Engineer",
      location: "Hybrid - DC Metro",
      type: "Full-time",
      department: "Cloud Services",
      postedDate: "2 weeks ago",
      description: "Implement CI/CD pipelines and infrastructure automation for client projects.",
      requirements: ["Docker/Kubernetes", "Jenkins/GitLab CI", "Infrastructure as Code"],
      clearance: "Secret clearance preferred"
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === '' || job.location.includes(locationFilter);
    const matchesType = typeFilter === '' || job.type === typeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

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
      Careers
    </h2>
  </div>
</section>


      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs by title or department..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              <option value="Remote">Remote</option>
              <option value="Washington, DC">Washington, DC</option>
              <option value="Baltimore, MD">Baltimore, MD</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Open Positions ({filteredJobs.length})
            </h2>
            <p className="text-gray-600">
              Showing recent positions posted within the last 2 weeks
            </p>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="h-4 w-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.postedDate}
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#172059] font-semibold">
                    {job.department}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{job.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-gray-600 text-sm">
                          <div className="w-2 h-2 bg-[#172059] rounded-full mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Security Clearance:</h4>
                    <p className="text-gray-600 text-sm">{job.clearance}</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-6 py-3 bg-[#172059] text-white font-semibold rounded-lg hover:bg-[#1a1f4f] transition-colors">
                    Apply Now
                  </button>
                  <button className="px-6 py-3 border-2 border-[#172059] text-[#172059] font-semibold rounded-lg hover:bg-[#172059] hover:text-white transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-xl text-gray-600">
              Join a team that values professional growth, innovation, and work-life balance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Development</h3>
              <p className="text-gray-600">
                Professional development programs, certification support, and clear career advancement paths 
                help you reach your professional goals.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
              <p className="text-gray-600">
                Comprehensive health insurance, retirement plans, flexible PTO, and performance bonuses 
                ensure your well-being and financial security.
              </p>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Meaningful Work</h3>
              <p className="text-gray-600">
                Work on projects that make a real difference in government operations and enterprise success, 
                using cutting-edge technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application CTA */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented professionals to join our team. 
            Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Submit Your Resume
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;