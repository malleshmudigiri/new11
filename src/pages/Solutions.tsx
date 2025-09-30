import React, { useRef, useState, useEffect } from "react";
import {
  Cloud,
  Shield,
  Users,
  Heart,
  Building,
  BookOpen,
  Globe,
  Landmark,
  Briefcase,
  Building2,
  Layers,
  Server,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";

const Solutions: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ================= Core Solutions =================
  const services = [
    {
      title: "ServiceNow Solutions",
      icon: Server,
      description:
        "Seamless upgrades, process automation, and AI-enabled insights that cut costs, reduce technical debt, and improve compliance.",
    },
    {
      title: "Salesforce Solutions",
      icon: Users,
      description:
        "Personalized customer journeys, optimized CRM performance, and accelerated sales outcomes through tailored implementations.",
    },
    {
      title: "AWS Cloud Services",
      icon: Cloud,
      description:
        "Cloud migration, modernization, and managed services designed to optimize costs, boost scalability, and strengthen security.",
    },
    {
      title: "DevSecOps Transformation",
      icon: Lock,
      description:
        "Embedding security at every stage of development for faster, safer, and more reliable software delivery without compromising agility.",
    },
  ];

  // ================= Who We Support =================
  const supports = [
    { icon: Landmark, label: "Public Sector" },
    { icon: Briefcase, label: "Financial Services" },
    { icon: Heart, label: "Healthcare" },
    { icon: Building2, label: "Commercial" },
  ];

  // ================= Case Studies =================
  const caseStudies = [
    {
      title: "Public Sector Cloud Migration",
      description:
        "Enabled a federal agency to modernize legacy infrastructure with secure AWS migration.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "Salesforce Optimization",
      description:
        "Boosted customer engagement and CRM efficiency for a fintech client, improving sales outcomes.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
    {
      title: "DevSecOps Automation",
      description:
        "Reduced release cycles by 40% while improving compliance with embedded security workflows.",
      image:
        "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
    },
  ];

  // ================= Stats =================
  const stats = [
    {
      number: 20,
      suffix: "+",
      label: "years of IT excellence delivering success across industries",
    },
    {
      number: 500,
      suffix: "+",
      label: "successful projects delivered with precision and impact",
    },
    {
      number: 100,
      suffix: "%",
      label: "customer satisfaction across solutions and services",
    },
    {
      number: 4,
      suffix: "",
      label: "strategic pillars ensuring innovation, compliance, ROI",
    },
  ];

  // ================= CountUp Component =================
  const CountUpNumber = ({
    end,
    duration = 2,
    suffix = "",
  }: {
    end: number;
    duration?: number;
    suffix?: string;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60);
      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 1000 / 60);
      return () => clearInterval(interval);
    }, [end, duration]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <div className="font-sans text-gray-900">
      {/* ================= Banner ================= */}
      <section className="w-full relative pt-20">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135941/ServiceNow_mh7qyi.png"
          alt="Solutions Banner"
          className="hidden lg:block w-full object-contain"
        />
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135941/ServiceNow_mh7qyi.png"
          alt="Solutions Tablet Banner"
          className="hidden md:block lg:hidden w-full object-contain"
        />
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135370/Federal-Page-Banner.Mobile_rrpg2b.png"
          alt="Solutions Mobile Banner"
          className="block md:hidden w-full object-contain"
        />
      </section>

      {/* ================= Introduction ================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-12 bg-white font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-6xl mx-auto text-center"
        >
          <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-snug text-[#272654]">
              Empowering Businesses with Next-Gen IT Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed max-w-3xl">
              At Technogen Inc., we deliver end-to-end IT solutions that help
              organizations modernize, innovate, and scale with confidence. From
              process automation to cloud transformation, our certified experts
              design solutions that improve efficiency, strengthen security, and
              create measurable business impact.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ================= Core Solutions (Flip Cards) ================= */}
      <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center text-[#272654]">
            Our Core Solutions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map(({ title, icon: Icon, description }, idx) => (
              <div key={idx} className="flip-card cursor-pointer h-72">
                <div className="flip-card-inner group">
                  <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-lg flex items-center justify-center">
                      <Icon size={28} className="text-white sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">
                      {title}
                    </h3>
                  </div>
                  <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
                    <p className="text-sm sm:text-base text-gray-700 text-center leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .flip-card { perspective: 1000px; width: 100%; }
          .flip-card-inner { position: relative; width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 0.8s ease-in-out; }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 0.5rem; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section>

      {/* ================= Who We Support ================= */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Who We Support
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We serve industries where technology drives transformation.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center animate-fade-up"
            >
              <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                  <polygon
                    points="50,1 95,25 95,75 50,99 5,75 5,25"
                    stroke="#EF4444"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
                <div className="w-12 h-12 text-blue-900">
                  <support.icon size={48} />
                </div>
              </div>
              <span className="mt-4 text-lg font-semibold text-gray-900">
                {support.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= Why Us (Stats) ================= */}
      <section className="py-16 sm:py-20 bg-[#22224b] text-center font-montserrat">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-white mb-6"
        >
          Why Us
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 lg:px-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-300 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-4xl font-extrabold text-[#ce3266] mb-3">
                <CountUpNumber end={stat.number} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= Case Studies ================= */}
      <section className="relative py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-4xl font-extrabold text-[#23214A] mb-4 md:mb-0">
              Case Studies
            </h2>
            <div className="flex space-x-3">
              <button
                onClick={() => scrollCarousel("left")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8592;
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
              >
                &#8594;
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
            >
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] rounded-2xl shadow-lg overflow-hidden group"
                  style={{ backgroundColor: "#23214A" }}
                >
                  <img
                    src={cs.image}
                    alt={cs.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {cs.title}
                    </h3>
                    <p className="text-gray-300 text-sm">{cs.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-4 sm:px-6 lg:px-5">
        <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
          <img
            src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
            alt="Book Demo"
            className="w-full h-[260px] object-cover"
          />
          <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-8 z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to accelerate your digital transformation?
            </h2>
            <button className="cssbuttonsIoButton">
              Talk to Our Experts
              <div className="icon" aria-hidden>
                <svg height="20" width="20" viewBox="0 0 24 24">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* CTA Button Styles */}
      <style>{`
        .cssbuttonsIoButton {
          background: #ce3266; color: white; border: 1px solid #ce3266;
          font-size: 15px; font-weight: 600; border-radius: 2rem; letter-spacing: 0.05em;
          display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative;
          height: 3em; padding-right: 3em; padding-left: 1.2rem; cursor: pointer;
          transition: background-color 0.35s ease, color 0.35s ease, border 0.35s ease;
        }
        .cssbuttonsIoButton .icon {
          background: white; margin-left: 1em; position: absolute; display: flex; align-items: center; justify-content: center;
          height: 2.2em; width: 2.2em; border-radius: 2rem; right: 0.4em; transition: all 0.25s ease-out;
        }
        .cssbuttonsIoButton:hover { background-color: white; color: #ce3266; border: 1px solid #ce3266; }
        .cssbuttonsIoButton .icon svg { width: 1em; transition: transform 0.3s ease-out; color: #ce3266; }
        .cssbuttonsIoButton:hover .icon svg { transform: translateX(0.12em) rotate(-25deg); }
      `}</style>
    </div>
  );
};

export default Solutions;
