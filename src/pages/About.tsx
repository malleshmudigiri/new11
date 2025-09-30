import React from "react";
import { Target, Lightbulb, Award, TrendingUp } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="w-full font-[Montserrat] bg-gray-100">
      {/* ================= Hero Section ================= */}
     <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135622/About-Us_jbf6k0.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135622/About-Us_jbf6k0.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133569/About-Us_ytrrce.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>


      {/* ================= Section 2 (We Are Technogen) ================= */}
      <section className="relative bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto bg-[#22224b] text-white rounded-2xl shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-10">
          {/* Left Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase text-white/100">
              We Are Technogen
            </h2>
            <div className="w-16 sm:w-20 h-0.5 bg-white my-2"></div>
            <p className="text-base md:text-lg leading-relaxed text-white/100">
              Technogen, Inc. headquartered in Chantilly, Virginia, is a CMMI
              Level 3 and ISO-certified global IT services and consulting
              company. Founded in 2003 as a Minority & Women-Owned Small
              Business, we deliver end-to-end IT solutions to public and private
              sector clients worldwide.
            </p>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758550278/Navy_Modern_Social_Media_Marketing_Expert_Instagram_Feed_Ad-removebg-preview_z8jqnb.png"
              alt="We Are Technogen"
              className="rounded-xl w-full md:w-4/5"
            />
          </div>
        </div>
      </section>

      {/* ================= Section 3 (Vision Mission Values) ================= */}
      <div className="max-w-7xl mx-auto mb-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Our Vision Card */}
          <div className="relative">
            <div
              className="bg-[#1C1B4D] p-8 pt-12 pb-12 text-white min-h-[320px] relative"
              style={{
                clipPath:
                  "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 85% 20%, 85% 0%, 0% 0%)",
                borderRadius: "20px 0px 20px 20px",
              }}
            >
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                Our Vision
              </h3>
              <p className="text-base leading-relaxed text-gray-200">
                We are Curious for Tomorrow, committed to delivering innovative
                technology solutions that exceed expectations through creativity
                and forward-thinking.
              </p>
            </div>
            {/* Icon */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="relative">
            <div
              className="bg-[#1C1B4D] p-8 pt-12 pb-12 text-white min-h-[320px] relative"
              style={{
                clipPath:
                  "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 85% 20%, 85% 0%, 0% 0%)",
                borderRadius: "20px 0px 20px 20px",
              }}
            >
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                Our Mission
              </h3>
              <p className="text-base leading-relaxed text-gray-200">
                To lead in IT solutions and staffing services, powered by
                technology, problem-solving, innovation, and integrity.
              </p>
            </div>
            {/* Icon */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Our Values Card */}
          <div className="relative">
            <div
              className="bg-[#1C1B4D] p-8 pt-12 pb-12 text-white min-h-[320px] relative"
              style={{
                clipPath:
                  "polygon(0% 0%, 0% 100%, 100% 100%, 100% 20%, 85% 20%, 85% 0%, 0% 0%)",
                borderRadius: "20px 0px 20px 20px",
              }}
            >
              <h3 className="text-2xl font-bold mb-6 mt-4 text-white">
                Our Values
              </h3>
              <p className="text-base leading-relaxed text-gray-200">
                Technology | Problem-Solving | Innovation | Integrity – these
                guide every solution we create and every partnership we build.
              </p>
            </div>
            {/* Icon */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ================= Section 4 (Sustainability) ================= */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative">
          {/* Main sustainability container */}
          <div
            className="bg-[#1C1B4D] p-12 pt-20 text-white relative"
            style={{
              clipPath:
                "polygon(15% 0%, 0% 15%, 0% 100%, 100% 100%, 100% 0%, 15% 0%)",
              borderRadius: "0px 20px 20px 20px",
            }}
          >
            <h2 className="text-4xl font-bold mb-8 uppercase tracking-wide text-white">
              Sustainability at TechnoGen
            </h2>
            <div className="w-full h-[1px] bg-gray-400 mb-8"></div>
            <p className="text-lg leading-relaxed max-w-6xl text-gray-200">
              Sustainability is integral to our business. We act ethically,
              transparently, and responsibly, embedding sustainability across
              our global operations and supply chain. As an Accrediting Body
              (AB) for the Supply Chain Security Standard (SCS-9001), we work
              with the American National Standards Institute (ANSI) to ensure
              trusted, sustainable ICT supply chains, protecting infrastructure
              and creating long-term value.
            </p>
          </div>

          {/* Icon positioned at top left in the cutout */}
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
