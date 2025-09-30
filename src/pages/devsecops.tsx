
import React, { useRef, useEffect } from "react";
import {
  Shield,
  Zap,
  Settings,
  Users,
  BarChart,
  Building,
  Globe,
  Heart,
  BookOpen,
  Building2,
  Landmark,
  Briefcase,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

const DevSecOps: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ✅ Advantage Items
  const advantages = [
    { title: "Security", description: "We embed security into every stage of the SDLC, reducing risks and avoiding costly last-minute fixes." },
    { title: "Agility", description: "Adaptive frameworks and automation enable rapid iterations, faster delivery, and continuous improvement." },
    { title: "Automation", description: "CI/CD pipelines, automated testing, and Infrastructure as Code streamline workflows and minimize errors." },
    { title: "Compliance Ready", description: "We align processes with industry standards (HIPAA, FedRAMP, PCI-DSS, GDPR, etc.) to ensure compliance." },
  ];

  // ✅ What We Do
  const services = [
    { title: "CI/CD", icon: Zap, description: "Rapid, reliable releases with built-in testing to ensure software quality and faster delivery." },
    { title: "Infrastructure as Code", icon: Settings, description: "Automated, repeatable, and secure environment provisioning with IaC frameworks." },
    { title: "Automated Security Testing", icon: Shield, description: "Identify vulnerabilities early and fix before deployment, ensuring safer applications." },
    { title: "Agile Development Practices", icon: Users, description: "Adaptive frameworks like extreme programming, iterative modeling, and stakeholder-driven feedback." },
    { title: "Monitoring & Compliance", icon: BarChart, description: "Real-time visibility and controls to maintain compliance and operational resilience." },
  ];

  // ✅ Who We Support
  const supports = [
    { label: "Federal", icon: Building2 },
    // { label: "Startups", icon: Zap },
    { label: "State&Local", icon: Landmark },
    { label: "Education", icon: BookOpen },
    // { label: "Government", icon: Shield },
    { label: "Commercial", icon: Briefcase },
  ];

  // ✅ Case Studies
  const caseStudies = [
    { title: "CI/CD Pipeline Modernization", description: "We implemented secure CI/CD pipelines, reducing release cycles by 40% while ensuring compliance.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
    { title: "Automated Security Testing", description: "Early vulnerability detection improved system resilience and reduced production issues.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
    { title: "Agile DevSecOps Framework", description: "Delivered an adaptive DevSecOps framework aligned with FedRAMP and HIPAA standards.", image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png" },
  ];

  return (
    <div className="font-sans text-gray-900">
      {/* ✅ Hero Section */}
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
      DEVSECOPS
    </h2>
  </div>
</section>
      {/* <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://tse1.mm.bing.net/th/id/OIP.t2oawKRVBj7y9__2cMMMfQHaD3?r=0&w=1200&h=627&rs=1&pid=ImgDetMain&o=7&rm=3')",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <h1 className="text-white text-6xl font-bold" data-aos="zoom-in">
            DEVSECOPS
          </h1>
        </div>
      </section> */}

   {/* ================= Advantage ================= */}
<section className="relative w-full flex items-center justify-center px-8 py-16 bg-white font-montserrat">
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="relative z-10 w-full max-w-6xl mx-auto text-center"
  >
    {/* Heading & Description */}
    <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-snug font-montserrat text-[#272654]">
        Secure by Design. <br /> Agile by Nature.
      </h2>

      <p className="md:text-lg text-black leading-relaxed max-w-3xl font-montserrat">
        At Technogen, we integrate development, security, and operations into a single, streamlined process. 
        Our DevSecOps approach ensures security is built into every stage of the lifecycle.
      </p>
    </div>

    {/* Sub-heading */}
    <h3 className="text-2xl md:text-3xl font-bold text-[#ce3266] font-montserrat mb-10">
      The Technogen Advantage
    </h3>

    {/* Advantage Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {advantages.map((adv, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: idx * 0.15 }}
          viewport={{ once: true }}
          className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-300 
                     hover:border-[#ce3266] hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Content */}
          <div className="relative z-10">
            <h4 className="text-lg sm:text-xl font-semibold text-[#272654] mb-3 font-montserrat">
              {adv.title}
            </h4>
            <p className="text-sm sm:text-base text-black leading-relaxed font-montserrat">
              {adv.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

      
  <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
  {/* Background video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4" type="video/mp4" />
  </video>

  {/* Optional dark overlay for readability */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
    {/* Left Content */}
    <div className="md:w-1/3 text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
        What We Do?
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md">
       From global corporations to local disruptors, we're enabling transformation
      </p>
    </div>

    {/* Flip Cards Grid */}
    <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {services.map(({ title, icon: Icon, description }, idx) => (
        <div key={idx} className="flip-card cursor-pointer h-64 sm:h-72">
          <div className="flip-card-inner group">
            {/* Front */}
            <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-900 rounded-lg flex items-center justify-center">
                <Icon size={28} className="text-white sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center">
                {title}
              </h3>
            </div>
            {/* Back */}
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

  {/* Flip Card Styles */}
  <style>{`
    .flip-card {
      perspective: 1000px;
      width: 100%;
    }
    .flip-card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.8s ease-in-out;
    }
    .flip-card:hover .flip-card-inner {
      transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.5rem;
    }
    .flip-card-back {
      transform: rotateY(180deg);
    }
  `}</style>
</section>


      {/* ✅ What We Do (Flip Cards) */}
      {/* <section className="py-24 bg-gray-50 overflow-hidden"> */}
        {/* <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between space-y-12 md:space-y-0">
          <div className="md:w-1/3 text-left" data-aos="fade-right">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-md">
              Technogen helps organizations modernize their software delivery with secure, scalable, and resilient solutions.
            </p>
          </div> */}
{/* 
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" data-aos="fade-left">
            {services.map(({ title, icon: Icon, description }, idx) => (
              <div key={idx} className="flip-card cursor-pointer">
                <div className="flip-card-inner group">
                  <div className="flip-card-front bg-white shadow p-6 rounded-lg flex flex-col items-center justify-center space-y-4">
                    <div className="w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center">
                      <Icon size={32} color="white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  </div>
                  <div className="flip-card-back bg-blue-50 shadow p-6 rounded-lg flex items-center justify-center">
                    <p className="text-sm text-gray-700">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner { position: relative; width: 100%; height: 240px; transform-style: preserve-3d; transition: transform 0.8s ease-in-out; }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { position: absolute; width: 100%; height: 100%; backface-visibility: hidden; border-radius: 0.5rem; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
      </section> */}

      {/* ✅ Who We Support */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          A long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => {
            const Icon = support.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: idx * 0.12 }} viewport={{ once: true }} className="flex flex-col items-center animate-fade-up">
                <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                  <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                    <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
                  </svg>
                  <div className="w-12 h-12 text-blue-900">
                    <Icon size={48} />
                  </div>
                </div>
                <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* <WhyUsSection /> */}
      <WhyUsSection />
      {/* ================= Case Studies ================= */}

<section className="relative py-16 bg-[white]">
  <div className="max-w-7xl mx-auto px-6">
    {/* Heading & Navigation */}
    <div className="flex flex-col md:flex-row items-center justify-between mb-8">
      <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-#22224b font-montserrat mb-4 md:mb-0">
        CASE STUDY
      </h2>
      <div className="flex space-x-3">
        <button
          onClick={() => scrollCarousel('left')}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
        >
          &#8592;
        </button>
        <button
          onClick={() => scrollCarousel('right')}
          className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
        >
          &#8594;
        </button>
      </div>
    </div>

    {/* Description */}
    <p className="text-black-300 max-w-2xl mx-auto text-center mb-12 font-montserrat ">
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
    </p>

    {/* Carousel */}
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
      >
        {caseStudies.map((caseStudy, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] rounded-2xl shadow-lg overflow-hidden group transition-all"
            style={{ backgroundColor: '#23214A' }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              className="w-full h-44 sm:h-52 object-cover"
            />
            <div className="bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-montserrat">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm sm:text-base font-montserrat">
                  {caseStudy.description}
                </p>
              </div>
              <button
                className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 
                           bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
                           before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
                           before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black 
                           before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 
                           relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
                type="button"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-6 h-6 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-1 rotate-45"
                >
                  <path
                    className="fill-gray-800 group-hover:fill-gray-800"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

     {/* ================= Book Your Demo ================= */}
<section className="relative px-4 sm:px-6 lg:px-5">
  <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
    {/* Background Image */}
    <img
      src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
      alt="Book Your Demo"
      className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-6 sm:pb-8 px-4 sm:px-8 z-10">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
       Now integrate security, automation, and agility into every stage of your enterprise. 
        <br className="hidden sm:block" />
      </h2>

      <div className="mt-4 sm:mt-6">
        <button className="cssbuttonsIoButton">
        Get started today 
          <div className="icon" aria-hidden>
            <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>

  {/* Styles: button, scrollbars, small animations */}
  <style>
    {`
      .cssbuttonsIoButton {
        background: #ce3266;
        color: white;
        font-family: inherit;
        border: 1px solid #ce3266;
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        border-radius: 2rem;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        height: 3em;
        padding-right: 3em;
        padding-left: 1.2rem;
        cursor: pointer;
        transition: background-color 0.35s ease, color 0.35s ease, border 0.35s ease;
      }

      .cssbuttonsIoButton .icon {
        background: white;
        margin-left: 1em;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2.2em;
        width: 2.2em;
        border-radius: 2rem;
        right: 0.4em;
        transition: all 0.25s ease-out;
      }

      .cssbuttonsIoButton:hover {
        background-color: white;
        color: #ce3266;
        border: 1px solid #ce3266;
      }

      .cssbuttonsIoButton .icon svg {
        width: 1em;
        transition: transform 0.3s ease-out;
        color: #ce3266;
      }

      .cssbuttonsIoButton:hover .icon svg {
        transform: translateX(0.12em) rotate(-25deg);
      }

      .cssbuttonsIoButton:active .icon {
        transform: scale(0.95);
      }

      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `}
  </style>
</section>


      
    </div>
  );
};

export default DevSecOps;
// ================== WHY US SECTION ==================
const WhyUsSection: React.FC = () => {
  const stats = [
    { number: 20, suffix: "+", label: "Years of IT excellence delivering success across industries" },
    { number: 500, suffix: "+", label: "Successful projects delivered with precision and impact" },
    { number: 100, suffix: "%", label: "Customer satisfaction with proven AWS expertise" },
    { number: 4, suffix: "", label: "Strategic pillars ensuring innovation, compliance, ROI" },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#22224b] text-center font-montserrat px-4">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-#ce3266-900 mb-6 text-center text-white"
      >
        Why Us
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        viewport={{ once: true }}
        className="text-white-700 max-w-3xl mx-auto mb-14 text-center text-base sm:text-lg leading-relaxed text-white"
      >
        Partnering with <span className="font-regular text-blue-600">Technogen</span> means gaining 
        a <span className="font-regular">long-term strategic ally</span> committed to your growth.
      </motion.p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-16">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg 
                       hover:scale-105 transition-all duration-300 flex flex-col items-center 
                       justify-center p-6 min-h-[200px]"
          >
            <h3 className="text-4xl sm:text-5xl font-extrabold text-[#ce3266] mb-3">
              <CountUpNumber end={stat.number} suffix={stat.suffix} />
            </h3>
            <p className="text-sm sm:text-base text-#ce3266-500 text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// ================== COUNT UP COMPONENT ==================
const CountUpNumber: React.FC<{ end: number; duration?: number; suffix?: string }> = ({
  end,
  duration = 2,
  suffix = "",
}) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // ~60 FPS
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