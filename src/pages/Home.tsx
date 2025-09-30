
import { Brain, Cloud, Shield } from "lucide-react";
import { useEffect, useState } from "react";

// Hero Slider Data
const heroSlides = [
  {
    title: "Technology. Innovation. Results",
    subtitle:
      " 500+ successful projects powering businesses <br> worldwide with integrity and expertise.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424542/1_dyitme.png",
  },
  {
    title: " Transforming Ideas into <br> Digital Reality ",
    subtitle:
      " Certified experts delivering tailored <br>IT solutions for public and private sectors.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757425395/19_jfjzn7.jpg",
  },
  {
    title: "Elevating Healthcare<br> Through Innovation",
    subtitle:
      "Modern IT solutions that enhance patient care <br> streamline operations, and ensure compliance.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424547/4_qfdxp3.png",
  },
  {
    title: "From Legacy to <br> Future-Ready",
    subtitle:
      "Seamless IT modernization that drives <br>  agility, efficiency, and long-term growth.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
  },
  {
    title: "AI-Powered Transformation <br> for Smarter Business",
    subtitle:
      "Harness artificial intelligence to unlock insights, <br>automate processes, and accelerate innovation.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424543/12_o5sl5x.png",
  },
];

// Services Data
const services = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI Transformation",
    description:
      "Harness AI to revolutionize business processes and decision-making.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Modernization",
    description:
      "Migrate & optimize with cloud solutions for scalability & efficiency.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Consulting",
    description: "Expert guidance to navigate complex technology challenges.",
  },
];

const solutions: Solution[] = [
  {
    title: "ServiceNow",
    description:
      "Streamlining workflows for smarter, faster,<br>enterprise-wide service delivery.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104045/servicenow_bqzolj.png",
    borderColor: "border-blue-900",
    color: "text-black-800",
  },
  {
    title: "Salesforce",
    description:
      "Connecting customers through smarter,<br>data-driven CRM solutions globally.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104056/Salesforce.com_logo.svg_ny6c0k.png",
    borderColor: "border-blue-700",
    color: "text-blue-600",
  },
  {
    title: "AWS",
    description:
      "Cloud-powered scalability driving agility,<br>security, and business growth.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-504_ulbiqx.svg",
    borderColor: "border-orange-500",
    color: "text-orange-600",
  },
  {
    title: "DevSecOps",
    description:
      "Embedding security into agile development<br>for continuous innovation.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-506_x7hxjs.svg",
    borderColor: "border-green-600",
    color: "text-green-600",
  },
];
// Blogs Data
const blogs = [
  {
    title: "Big DATA",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//1.png",
  },
  {
    title: "Cloud",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//2.png",
  },
  {
    title: "DevOps Transformation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: ".//3.png",
  },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full">
 {/* ================== HERO SLIDER ================== */}
{/* <section className="relative w-full min-h-screen overflow-hidden font-[Montserrat]">
  <div */}
    {/* className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }} */}
  {/* > */}
    {/* {heroSlides.map((slide, idx) => (
      <div
        key={idx}
        className="w-full min-h-screen flex-shrink-0 relative bg-no-repeat"
        style={{
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        {/* Text Content */}
        {/* <div className="relative z-20 pt-36 sm:pt-40 md:pt-44">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start text-left">
              {/* ✅ Title with spacing */}
              {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug mb-6">
                Transforming Ideas into <br />
                <span className="mt-4 block">Digital Reality</span>
              </h1> */} 

              {/* ✅ Subtitle with spacing */}
              {/* <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mb-8">
                Certified experts delivering tailored <br />
                IT solutions for public and private sectors.
              </p> */}

              {/* ✅ Custom Button (Uiverse style, pink hover) */}
              {/* <button
                type="button"
                className="font-sans flex justify-center gap-2 items-center shadow-xl text-lg text-gray-50 
                  bg-[#22224b] backdrop-blur-md lg:font-semibold isolation-auto 
                  before:absolute before:w-full before:transition-all before:duration-700 
                  before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                  before:bg-[#ce3266] hover:text-white before:-z-10 before:aspect-square 
                  before:hover:scale-200 before:hover:duration-500 relative z-10 
                  px-6 py-3 overflow-hidden border-2 border-[#ce3266] rounded-full group"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-6 h-6 bg-[#ce3266] text-white ease-linear duration-300 
                    rounded-full p-1 rotate-45 group-hover:rotate-90"
                >
                  <path
                    className="fill-white"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section> */}
{/* ================== HERO SLIDER ================== */}
<section className="relative w-full h-screen font-[Montserrat] overflow-hidden">
  <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${current * 100}%)` }}
  >
    {heroSlides.map((slide, idx) => (
      <div
        key={idx}
        className="w-full h-screen flex-shrink-0 relative"
      >
        {/* Background Image */}
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover md:object-cover sm:object-cover lg:object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-28 flex items-center justify-start h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col items-start sm:items-start md:items-start lg:items-start text-left">

              {/* Title */}
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 
                text-white leading-snug sm:leading-snug md:leading-snug mb-4 sm:mb-6 lg:mb-8"
                dangerouslySetInnerHTML={{ __html: slide.title }}
              />

              {/* Subtitle */}
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 
                max-w-2xl leading-relaxed mb-6 sm:mb-8"
                dangerouslySetInnerHTML={{ __html: slide.subtitle }}
              />

              {/* Get Started Button */}
              <button
                type="button"
                className="font-sans flex justify-center gap-2 items-center shadow-xl 
                  text-sm sm:text-base md:text-lg lg:text-xl text-gray-50 
                  bg-[#22224b] backdrop-blur-md lg:font-semibold isolation-auto 
                  before:absolute before:w-full before:transition-all before:duration-700 
                  before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full 
                  before:bg-[#ce3266] hover:text-white before:-z-10 before:aspect-square 
                  before:hover:scale-200 before:hover:duration-500 relative z-10 
                  px-5 sm:px-6 py-2.5 sm:py-3 overflow-hidden border-2 border-[#ce3266] rounded-full group"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 19"
                  className="w-5 h-5 sm:w-6 sm:h-6 bg-[#ce3266] text-white ease-linear duration-300 rounded-full p-1 rotate-45 group-hover:rotate-90"
                >
                  <path
                    className="fill-white"
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 
                       7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 
                       0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 
                       2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 
                       8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 
                       15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>



      {/* ================== WHAT WE DO ==================
      <section
        id="services"
        className="relative py-32 bg-gray-50 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 mb-6">
             Technogen is a certified minority women-owned business enterprise that has been providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has powered over 500 successful end-to-end solutions for public and private sector clients. We specialize in delivering innovative, scalable, and value-driven technology solutions. 
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Know more
            </span>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
 <section
  id="services"
  className="relative py-24 sm:py-28 md:py-32 bg-gray-50 overflow-hidden font-montserrat"
>
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:flex lg:items-start lg:gap-12">
    {/* Left content */}
    <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center text-center sm:text-justify lg:text-left">
      <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-black mb-6 leading-snug">
        What We Do
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed mb-8 text-center sm:text-right lg:text-justify">
        Technogen is a certified minority women-owned business enterprise providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has delivered over 500 successful end-to-end solutions for public and private sector clients. We specialize in delivering innovative, scalable, and value-driven technology solutions.
      </p>
      <span className="text-blueTheme font-semibold cursor-pointer hover:underline">
        Know more
      </span>
    </div>

    {/* Right content - cards */}
    <div className="lg:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 relative">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="group relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 font-montserrat"
        >
          {/* Colored Lens Shadow */}
          <div className="absolute -inset-3 sm:-inset-6 bg-gradient-to-tr from-[#22224b]/20 to-[#22224b]/10 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl z-0"></div>

          {/* Card content */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 w-full font-montserrat">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-xl sm:rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform font-montserrat">
              {service.icon}
            </div>
            <div className="text-center sm:text-left font-montserrat">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-black group-hover:text-[#172059] mb-2 leading-snug font-montserrat">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-center sm:text-left font-montserrat">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



       {/* ================== HOW WE DO DIFFERENTLY ================== */}
<section
  id="how-we-differ"
  className="relative py-24 bg-cover bg-center font-montserrat"
  style={{
    backgroundImage: "url('https://wallpapercave.com/wp/YsmdCUB.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  {/* Content */}
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
    <div className="bg-white/90 w-full p-8 sm:p-12 md:p-16 shadow-xl rounded-2xl">
      <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-black mb-6 font-montserrat">
       How we do it differently
      </h2>
      <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-montserrat">
            Our team is committed to delivering excellence and innovation at every step
      </p>
      <ul className="list-disc pl-6 sm:pl-10 space-y-3 text-left text-gray-700 text-base leading-relaxed font-montserrat">
        <li>Our team is committed to delivering excellence and innovation at every step</li>
        
        <li>Our team is committed to delivering excellence and innovation at every step</li>
        <li>
          Our team is committed to delivering excellence and innovation at every step
        </li>
        <li>
        Our team is committed to delivering excellence and innovation at every step
        </li>
      </ul>
    </div>
  </div>
</section>


{/* const solutions = [
  {
    title: "ServiceNow",
    description:
      "Streamlining workflows for smarter, faster, enterprise-wide service delivery.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104045/servicenow_bqzolj.png",
    borderColor: "border-blue-900",
    color: "text-blue-800",
  },
  {
    title: "Salesforce",
    description:
      "Connecting customers through smarter, data-driven CRM solutions globally.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758104056/Salesforce.com_logo.svg_ny6c0k.png",
    borderColor: "border-blue-700",
    color: "text-blue-600",
  },
  {
    title: "AWS",
    description:
      "Cloud-powered scalability driving agility, security, and business growth.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-504_ulbiqx.svg",
    borderColor: "border-orange-500",
    color: "text-orange-600",
  },
  {
    title: "DevSecOps",
    description:
      "Embedding security into agile development for continuous innovation.",
    iconUrl:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1758089318/Group-506_x7hxjs.svg",
    borderColor: "border-green-600",
    color: "text-green-600",
  },
]; */}
<section className="relative py-20 px-4 sm:px-10 md:px-20 overflow-hidden font-montserrat">
  {/* Background Video */}
  <video
    className="absolute inset-0 w-full h-full object-cover"
    src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Content */}
  <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-4 text-white leading-tight font-montserrat">
      Our Solutions
    </h2>
    <p className="text-lg sm:text-lg md:text-lg text-white leading-relaxed max-w-3xl mx-auto font-montserrat">
      End-to-end IT services delivering{" "}
      <span className="font-semibold">innovation</span>,{" "}
      <span className="font-semibold">efficiency</span>, and{" "}
      <span className="font-semibold">business transformation</span>.
    </p>
  </div>

  {/* Solutions Grid */}
  <div className="relative z-30 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
    {solutions.map((solution, idx) => (
      <div
        key={idx}
        className="bg-white rounded-3xl shadow-lg p-4 sm:p-5 md:p-6 text-center flex flex-col items-center group animate-fade-up"
        data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
        data-aos-delay={idx * 200}
        style={{ animationDelay: `${idx * 0.15}s` }}
      >
        {/* Logo - Enlarged and responsive */}
        <div className="mb-2">
          <img
            src={solution.iconUrl}
            alt={solution.title}
            className="h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 object-contain"
          />
        </div>

        {/* Removed Title */}

        {/* Description */}
        <p
          className="text-base sm:text-base md:text-base leading-relaxed text-black max-w-xs sm:max-w-sm md:max-w-sm"
          dangerouslySetInnerHTML={{ __html: solution.description }}
        />
      </div>
    ))}
  </div>

  {/* Decorative Curve Bottom */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
    <svg
      className="relative block w-full h-28 md:h-32"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    ></svg>
  </div>

  {/* Animations */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeUp 0.6s ease forwards;
    }
  `}</style>
</section>


<section
  id="blogs"
  className="relative py-16 bg-[#22224b] text-white overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight  mb-4   text-white  font-montserrat">
      Blogs
    </h2>
    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-10">
      Stay updated with the latest insights in technology, innovation, and
      business strategy.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogs.map((blog, idx) => (
        <div
          key={idx}
          className="group bg-gradient-to-tr from-[#2a2a5e] via-[#22224b] to-[#2a2a5e] 
                     rounded-2xl shadow-lg overflow-hidden transform transition 
                     duration-500 hover:-translate-y-2 hover:scale-105"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-5 space-y-3 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-white">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-300">{blog.description}</p>

            {/* ✅ Centered Button */}
            <div className="flex justify-center w-full mt-4">
              <button className="cssbuttonsIoButton">
                Read More
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
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* ✅ Fancy Button Styles */}
  <style>
    {`
      .cssbuttonsIoButton {
        background: #ce3266;   /* 🔹 Pink Button */
        color: white;
        font-family: inherit;
        border: 1px solid #ce3266;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        border-radius: 2rem;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        height: 2.6em;
        padding-right: 3em;
        padding-left: 1rem;
        cursor: pointer;
        transition: background-color 0.4s ease, color 0.4s ease, border 0.4s ease;
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
        color: #ce3266;   /* 🔹 Text becomes pink */
        border: 1px solid #ce3266;
      }

      .cssbuttonsIoButton .icon svg {
        width: 1em;
        transition: transform 0.3s ease-out;
        color: #ce3266;   /* 🔹 Arrow pink */
      }

      .cssbuttonsIoButton:hover .icon svg {
        transform: translateX(0.1em) rotate(-25deg);
      }

      .cssbuttonsIoButton:active .icon {
        transform: scale(0.95);
      }
    `}
  </style>
</section>

    </main>
  );
}

