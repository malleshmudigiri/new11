
// import React, { useRef } from 'react';
// import { Cloud, Shield, Users, Heart, Building, BookOpen, Globe } from 'lucide-react';
// import { motion } from 'framer-motion';

// const ServiceNowPage: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);

//   const scrollCarousel = (direction: 'left' | 'right') => {
//     if (carouselRef.current) {
//       const scrollAmount = 320;
//       if (direction === 'left') {
//         carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//       } else {
//         carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }
//   };

//   const services = [
//     {
//       title: "Advise",
//       icon: Cloud,
//       description:
//         "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
//     },
//     {
//       title: "Implement",
//       icon: Shield,
//       description:
//         "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
//     },
//     {
//       title: "Manage",
//       icon: Users,
//       description:
//         "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
//     },
//   ];

//   const supports = [
//     { icon: Building, label: 'FEDERAL' },
//     { icon: Heart, label: 'State&Local' },
//     { icon: BookOpen, label: 'Education' },
//     { icon: Globe, label: 'COMMERCIAL' },
//   ];

//   const caseStudies = [
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//     { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
//   ];

//   const faqs = [
//     { question: 'What is ServiceNow?', answer: 'ServiceNow is a platform for digital workflows.' },
//     { question: 'How do I migrate to ServiceNow?', answer: 'We provide full-service migration solutions.' },
//     { question: 'What industries do you support?', answer: 'Federal, Healthcare, Education, Commercial.' },
//   ];
//     const stats = [
//     { number: 20, suffix: "+", label: "years of IT excellence delivering success across industries" },
//     { number: 500, suffix: "+", label: "successful projects delivered with precision and impact" },
//     { number: 100, suffix: "%", label: "customer satisfaction with proven Salesforce expertise" },
//     { number: 4, suffix: "", label: "strategic pillars ensuring innovation, compliance, ROI" },
//   ];
//   const CountUpNumber = ({ end, duration = 2, suffix = "" }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 60); // assuming 60fps
//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         start = end;
//         clearInterval(interval);
//       }
//       setCount(Math.floor(start));
//     }, 1000 / 60);
//     return () => clearInterval(interval);
//   }, [end, duration]);

//   return <span>{count}{suffix}</span>;
// };

//   return (
//     <div className="font-sans text-gray-900">

//       {/* ================= HERO ================= */}
//   <section className="relative rounded-xl overflow-hidden">
//   {/* Top Blue Background - covers half of the section */}
//   <div className="absolute top-0 left-0 w-full h-1/2 bg-[#22224b] z-0"></div>

//   {/* Banner Image */}
//   <img
//     src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758621508/Cyber-Security--1920x800_odsuzu.png"
//     alt="Cyber Security Banner"
//     className="relative w-full object-cover h-[99vh] md:h-[600px] z-10"
//   />
// </section>



// <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-12 bg-white font-montserrat">
//   <motion.div
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//     viewport={{ once: true }}
//     className="relative z-10 w-full max-w-6xl mx-auto text-center"
//   >
//     {/* Heading & Description */}
//     <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
//       <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-[#272654] font-montserrat">
//         Modernize ServiceNow to reduce technical <br /> debt and scale with AI.
//       </h2>

//       <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed max-w-3xl font-montserrat">
//         Are you still running on older ServiceNow releases? Then, you’re facing higher costs, compliance risks, and limited scalability. Many enterprises delay upgrades because they fear downtime, disruption, or long migration timelines. This usually only creates bigger challenges down the road.
//       </p>
//     </div>

//     {/* Technogen Advantage */}
//     <h3 className="text-2xl sm:text-3xl font-bold text-[#ce3266] mb-10 font-montserrat">
//       The Technogen Advantage
//     </h3>

//     {/* Cards Grid */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//       {[
//         {
//           title: "Cut Costs",
//           desc: "We help you rationalize licenses, retire unused modules, and automate manual work.",
//         },
//         {
//           title: "Stay Compliant",
//           desc: "Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption.",
//         },
//         {
//           title: "Move Faster",
//           desc: "With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption.",
//         },
//         {
//           title: "Scale Smarter",
//           desc: "We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows.",
//         },
//       ].map((item, idx) => (
//         <motion.div
//           key={idx}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: idx * 0.15 }}
//           viewport={{ once: true }}
//           className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-300 
//                      hover:border-[#ce3266] hover:shadow-lg hover:scale-105 transition-transform duration-300"
//         >
//           <div className="relative z-10">
//             <h4 className="text-lg sm:text-xl font-semibold text-[#22224b] mb-3 font-montserrat">
//               {item.title}
//             </h4>
//             <p className="text-sm sm:text-base text-black leading-relaxed font-montserrat">
//               {item.desc}
//             </p>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   </motion.div>
// </section>

// {/* <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
//   {/* Background video */}
//   <video
//     autoPlay
//     loop
//     muted
//     playsInline
//     className="absolute inset-0 w-full h-full object-cover z-0"
//   >
//     <source
//       src="https://framerusercontent.com/assets/eg4zyU6B3t9AHH140oL8N6295Ew.mp4"
//       type="video/mp4"
//     />
//   </video>

//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black/30 z-0" />

//   {/* Content */}
//   <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
//     {/* Left Content */}
//     <div className="md:w-1/3 text-center md:text-left">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
//         What We Do?
//       </h2>
//       <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-md mx-auto md:mx-0">
//         A long established fact that a reader will be distracted by the
//         readable content when looking at its layout.
//       </p>
//     </div>

//     {/* Flip Cards Grid */}
//     <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
//       {services.map(({ title, icon: Icon, description }, idx) => (
//         <div
//           key={idx}
//           className="flip-card cursor-pointer w-full md:w-full"
//         >
//           <div className="flip-card-inner">
//             {/* Front */}
//             <div className="flip-card-front bg-white shadow p-8 rounded-xl flex flex-col items-center justify-center space-y-6">
//               <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center">
//                 <Icon size={28} className="text-white" />
//               </div>
//               <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 text-center">
//                 {title}
//               </h3>
//             </div>
//             {/* Back */}
//             <div className="flip-card-back bg-blue-50 shadow p-8 rounded-xl flex items-center justify-center">
//               <p className="text-base sm:text-lg text-gray-700 text-center leading-relaxed">
//                 {description}
//               </p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Inline Flip Card Styles */}
//   <style>{`
//     .flip-card {
//       perspective: 1000px;
//       min-height: 320px;
//     }
//     .flip-card-inner {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       transform-style: preserve-3d;
//       transition: transform 0.8s ease-in-out;
//     }
//     .flip-card:hover .flip-card-inner {
//       transform: rotateY(180deg);
//     }
//     .flip-card-front,
//     .flip-card-back {
//       position: relative;
//       width: 100%;
//       height: 100%;
//       backface-visibility: hidden;
//       border-radius: 0.75rem;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }
//     .flip-card-back {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       transform: rotateY(180deg);
//     }

//     /* ✅ Mobile Specific Enhancements Only */
//     @media (max-width: 640px) {
//       .flip-card {
//         width: 90% !important;   /* make cards almost full width */
//         min-height: 360px !important; /* taller cards for readability */
//       }
//       .flip-card-front,
//       .flip-card-back {
//         padding: 2rem !important;
//       }
//       .flip-card h3 {
//         font-size: 1.25rem !important; /* bigger title */
//       }
//       .flip-card p {
//         font-size: 1rem !important; /* bigger description */
//       }
//     }
//   `}</style>
// </section>



//       {/* Who We Support */}
//       <section className="py-24 bg-white text-center px-6">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto mb-12">
//          From global corporations to local disruptors, we're enabling transformation
//         </p>
//         <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
//           {supports.map((support, idx) => (
//             <div key={idx} className="flex flex-col items-center animate-fade-up">
//               <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
//                 <svg viewBox="0 0 100 100" className="absolute w-full h-full">
//                   <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
//                 </svg>
//                 <div className="w-12 h-12 text-blue-900">
//                   <support.icon size={48} />
//                 </div>
//               </div>
//               <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
//             </div>
//           ))}
//         </div>
//         <style>{`
//           @keyframes fadeUp {
//             0% { opacity: 0; transform: translateY(20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-fade-up {
//             animation: fadeUp 0.8s ease forwards;
//           }
//         `}</style>
//       </section> */}

//       {/* ================= What We Do ================= */}
//       {/* (same as your code, not touched) */}

//       {/* ================= Who We Support ================= */}
//       {/* (same as your code, not touched) */}

//       {/* ================= FAQ ================= */}
//       {/* (same as your code, not touched) */}

//       {/* ================= Case Studies ================= */}
//       {/* (same as your code, not touched) */}

//       {/* ================= Why Us ================= */}
//    {/* ================= Why Us ================= */}
//  <section className="py-16 sm:py-20 bg-gray-50 text-center font-montserrat">
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         viewport={{ once: true }}
//         className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12"
//       >
//         Why Us
//       </motion.h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-10">
//         {stats.map((stat, idx) => (
//           <motion.div
//             key={idx}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: idx * 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-col items-center justify-center"
//           >
//             <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 mb-2">
//               <CountUpNumber end={stat.number} suffix={stat.suffix} />
//             </h3>
//             <p className="text-gray-800 text-center text-sm sm:text-base md:text-lg">
//               {stat.label}
//             </p>
//           </motion.div>
//         ))}
//       </div>
//     </section>
// <section className="relative py-16 bg-[#23214A]">
//   <div className="max-w-7xl mx-auto px-6">
//     {/* Heading & Navigation */}
//     <div className="flex flex-col md:flex-row items-center justify-between mb-8">
//       <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-white font-montserrat mb-4 md:mb-0">
//         CASE STUDY
//       </h2>
//       <div className="flex space-x-3">
//         <button
//           onClick={() => scrollCarousel('left')}
//           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
//         >
//           &#8592;
//         </button>
//         <button
//           onClick={() => scrollCarousel('right')}
//           className="bg-red-500 text-white p-3 rounded-full hover:bg-red-600 transition"
//         >
//           &#8594;
//         </button>
//       </div>
//     </div>

//     {/* Description */}
//     <p className="text-gray-300 max-w-2xl mx-auto text-center mb-12 font-montserrat">
//       It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
//     </p>

//     {/* Carousel */}
//     <div className="relative overflow-hidden">
//       <div
//         ref={carouselRef}
//         className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar"
//       >
//         {caseStudies.map((caseStudy, idx) => (
//           <div
//             key={idx}
//             className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] rounded-2xl shadow-lg overflow-hidden group transition-all"
//             style={{ backgroundColor: '#23214A' }}
//           >
//             <img
//               src={caseStudy.image}
//               alt={caseStudy.title}
//               className="w-full h-44 sm:h-52 object-cover"
//             />
//             <div className="bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between h-full">
//               <div>
//                 <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-montserrat">
//                   {caseStudy.title}
//                 </h3>
//                 <p className="text-gray-300 mb-4 text-sm sm:text-base font-montserrat">
//                   {caseStudy.description}
//                 </p>
//               </div>
//               <button
//                 className="font-sans flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 
//                            bg-[#0A0D2D] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 
//                            before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full 
//                            before:-left-full before:hover:left-0 before:rounded-full before:bg-[#FFFFFF] hover:text-black 
//                            before:-z-10 before:aspect-square before:hover:scale-200 before:hover:duration-500 
//                            relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
//                 type="button"
//               >
//                 Learn More
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 19"
//                   className="w-6 h-6 justify-end bg-gray-50 group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-gray-700 p-1 rotate-45"
//                 >
//                   <path
//                     className="fill-gray-800 group-hover:fill-gray-800"
//                     d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// </section>

//      {/* ================= Book Your Demo ================= */}
// <section className="relative px-4 sm:px-6 lg:px-5">
//   <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
//     {/* Background Image */}
//     <img
//       src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg"
//       alt="Book Your Demo"
//       className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
//     />

//     {/* Dark Overlay */}
//     <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />

//     {/* Content */}
//     <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-6 sm:pb-8 px-4 sm:px-8 z-10">
//       <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
//         With us, your ServiceNow journey is faster, safer, and designed for long-term success. 
//         <br className="hidden sm:block" />
//       </h2>

//       <div className="mt-4 sm:mt-6">
//         <button className="cssbuttonsIoButton">
//          Book Your Free Health Check 
//           <div className="icon" aria-hidden>
//             <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0 0h24v24H0z" fill="none"></path>
//               <path
//                 d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
//                 fill="currentColor"
//               />
//             </svg>
//           </div>
//         </button>
//       </div>
//     </div>
//   </div>

//   {/* Styles: button, scrollbars, small animations */}
//   <style>
//     {`
//       .cssbuttonsIoButton {
//         background: #ce3266;
//         color: white;
//         font-family: inherit;
//         border: 1px solid #ce3266;
//         text-align: center;
//         font-size: 15px;
//         font-weight: 600;
//         border-radius: 2rem;
//         letter-spacing: 0.05em;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         overflow: hidden;
//         position: relative;
//         height: 3em;
//         padding-right: 3em;
//         padding-left: 1.2rem;
//         cursor: pointer;
//         transition: background-color 0.35s ease, color 0.35s ease, border 0.35s ease;
//       }

//       .cssbuttonsIoButton .icon {
//         background: white;
//         margin-left: 1em;
//         position: absolute;
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         height: 2.2em;
//         width: 2.2em;
//         border-radius: 2rem;
//         right: 0.4em;
//         transition: all 0.25s ease-out;
//       }

//       .cssbuttonsIoButton:hover {
//         background-color: white;
//         color: #ce3266;
//         border: 1px solid #ce3266;
//       }

//       .cssbuttonsIoButton .icon svg {
//         width: 1em;
//         transition: transform 0.3s ease-out;
//         color: #ce3266;
//       }

//       .cssbuttonsIoButton:hover .icon svg {
//         transform: translateX(0.12em) rotate(-25deg);
//       }

//       .cssbuttonsIoButton:active .icon {
//         transform: scale(0.95);
//       }

//       .no-scrollbar {
//         -ms-overflow-style: none;
//         scrollbar-width: none;
//       }
//       .no-scrollbar::-webkit-scrollbar {
//         display: none;
//       }
//     `}
//   </style>
// </section>


// {/* FAQ Section */}
//       {/* <section className="w-full bg-white text-gray-900 px-6 py-24">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-start gap-12">
//             <div className="lg:w-1/3">
//               <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-900 mb-6">
//                 Frequently Asked Questions
//               </h2>
//               <a href="/faq" className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition font-sans">
//                 See more FAQs →
//               </a>
//             </div>
//             <div className="lg:w-3/3 space-y-6">
//               {faqs.map(({ question, answer }, idx) => (
//                 <details key={idx} className="border-b border-gray-300 pb-4 group">
//                   <summary className="cursor-pointer font-semibold text-lg font-heading flex justify-between items-center">
//                     {question}
//                     <span className="ml-2 text-blue-600 group-open:rotate-180 transition-transform duration-300">&#9660;</span>
//                   </summary>
//                   <p className="mt-2 text-gray-700 font-sans">{answer}</p>
//                 </details>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section> */}

//     </div>
//   );
// };

// export default ServiceNowPage;
import React, { useRef, useState, useEffect } from 'react';
import { Cloud, Shield, Users, Heart, Building, BookOpen, Globe, Landmark, Briefcase, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceNowPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      if (direction === 'left') {
        carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const services = [
    {
      title: "Advise",
      icon: Cloud,
      description:
        "From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.",
    },
    {
      title: "Implement",
      icon: Shield,
      description:
        "We build and deliver scalable, high-performing ServiceNow solutions that accelerate business outcomes and reduce time to value.",
    },
    
    {
      title: "Manage",
      icon: Users,
      description:
        "Our managed services ensure your platform evolves with your business through continuous support and improvement.",
    },
  ];

  const supports = [
    { icon: Building2, label: 'FEDERAL' },
    { icon: Landmark, label: 'STATE & LOCAL' },
    { icon: BookOpen, label: 'EDUCATION' },
    { icon: Briefcase, label: 'COMMERCIAL' },
  ];

  const caseStudies = [
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Implement', description: 'By embedding AI at every step, we’re cutting timelines, reducing errors, and accelerating time-to-value. All this while maintaining governance and performance.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
    { title: 'Advise', description: 'From defining a practical roadmap to aligning people, processes, and technology, our team helps you make transformation decisions with confidence.', image: 'https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png' },
  ];

  const stats = [
    { number: 20, suffix: "+", label: "years of IT excellence delivering success across industries" },
    { number: 500, suffix: "+", label: "successful projects delivered with precision and impact" },
    { number: 100, suffix: "%", label: "customer satisfaction with proven Salesforce expertise" },
    { number: 4, suffix: "", label: "strategic pillars ensuring innovation, compliance, ROI" },
  ];

  // CountUp Component
  const CountUpNumber = ({ end, duration = 2, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = end / (duration * 60); // 60fps
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

    return <span>{count}{suffix}</span>;
  };

  return (
    <div className="font-sans text-gray-900">
           {/* Hero Section */}
<section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135941/ServiceNow_mh7qyi.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135941/ServiceNow_mh7qyi.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135370/Federal-Page-Banner.Mobile_rrpg2b.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain"
  />
</section>

       {/* <section className="rounded-xl overflow-hidden relative -mt-1">
        <img
          src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757597115/Web_1920_15_xd4gyx.png"
          alt="Capitol Mobile"
          className="block md:hidden w-full h-[520px] object-cover"
        />
        <img
          src="https://res.cloudinary.com/dqlxawz9r/image/upload/v1757666230/BG_Banner_eebaip.png"
          alt="Capitol Desktop"
          className="hidden md:block w-full h-[99vh] object-fill"
        />
      </section> */}

      {/* <section className="relative w-full min-h-[100vh] flex flex-col items-center hidden sm:flex"> */}
  {/* Blue Top */}
  {/* <div className="w-full h-[70vh] bg-[#22224b]"></div> */}
  {/* White Bottom */}
  {/* <div className="w-full flex-1 bg-white"></div> */}

  {/* Banner Image */}
  {/* <div className="absolute top-[25vh] w-full max-w-6xl px-4 sm:px-6 lg:px-20 flex justify-center z-10">
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758621508/Cyber-Security--1920x800_odsuzu.png"
      alt="Cyber Security Banner"
      className="w-[60%] h-auto object-contain"
    />
  </div>
</section> */}


      {/* <section className="relative w-full min-h-[100vh] flex flex-col items-center"> */}
  {/* Blue Top */}
  {/* <div className="w-full h-[70vh] bg-[#22224b]"></div> */}
  {/* White Bottom */}
  {/* <div className=""></div> */}

  {/* Banner Image */}
  {/* <div className="absolute top-[25vh] w-full max-w-6xl px-4 sm:px-6 lg:px-20 flex justify-center z-1">
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758621508/Cyber-Security--1920x800_odsuzu.png"
      alt="Cyber Security Banner"
      className=""
    />
  </div>
</section> */}

{/* <section className="relative w-full min-h-[150vh]"> */}
  {/* Top Blue Half */}
  {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-[#22224b]"></div> */}
  {/* Bottom White Half */}
  {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div> */}

  {/* Banner Image */}
  {/* <div
    className="relative z-10 w-full max-w-6xl px-6 sm:px-12 lg:px-20 flex justify-center items-center"
    style={{ top: '150px' }} // Moved image further down
  >
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758621508/Cyber-Security--1920x800_odsuzu.png"
      alt="Cyber Security Banner"
      className=""
    />
  </div> */}

  {/* Extra spacing below image */}
  {/* <div className="h-[100px]"></div>
</section> */}

   {/* ================= HERO ================= */}
{/* <section className="relative w-full min-h-[80vh]"> */}
  {/* Top Blue Half */}
  {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-[#22224b]"></div> */}
  {/* Bottom White Half */}
  {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div> */}

  {/* Banner Image */}
  {/* <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 lg:px-20 flex justify-center items-center" style={{ top: '5%' }}>
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758621508/Cyber-Security--1920x800_odsuzu.png"
      alt="Cyber Security Banner"
      className="w-full h-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 hover:scale-105"
    />
  </div>
</section> */}


      {/* ================= Modernize Section ================= */}
      <section className="relative min-h-screen w-full flex items-center justify-center px-6 py-12 bg-white font-montserrat">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 w-full max-w-6xl mx-auto text-center"
        >
          {/* Heading & Description */}
          <div className="flex flex-col items-center justify-center text-center px-4 mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-snug text-[#272654]">
             Modernize ServiceNow to reduce <br/> technical debt and scale with AI. 
            </h2>

            <p className="text-base sm:text-lg md:text-lg text-black leading-relaxed max-w-3xl">
               Are you still running on older ServiceNow releases? Then, you’re facing higher costs, compliance risks, and limited scalability. Many enterprises delay upgrades because they fear downtime, disruption, or long migration timelines. This usually only creates bigger challenges down the road. 
            </p>
          </div>

          {/* Technogen Advantage */}
          <h3 className="text-2xl sm:text-3xl font-bold text-[#ce3266] mb-10">
            The Technogen Advantage
          </h3>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cut Costs", desc: "We help you rationalize licenses, retire unused modules, and automate manual work." },
              { title: "Stay Compliant", desc: "Our proven upgrade playbooks ensure secure, error-free migrations with zero business disruption." },
              { title: "Move Faster", desc: "With AI embedded into workflows, you gain real-time insights into platform health, performance, and adoption." },
              { title: "Scale Smarter", desc: "We future-proof your ServiceNow investment with frameworks and accelerators designed to adapt as your business grows." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-2xl p-6 shadow-sm border border-gray-300 
                           hover:border-[#ce3266] hover:shadow-lg hover:scale-105 transition-transform duration-300"
              >
                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#22224b] mb-3">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-black leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
      {/* ================= What We Do Section (Flip Cards) ================= */}
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
        A long established fact that a reader will be distracted by the readable content when looking at its layout.
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


      {/* Who We Support */}
      <section className="py-24 bg-white text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">Who We Support</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
         From global corporations to local disruptors, we're enabling transformation
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 justify-items-center">
          {supports.map((support, idx) => (
            <div key={idx} className="flex flex-col items-center animate-fade-up">
              <div className="w-24 h-24 flex items-center justify-center relative group hover:scale-105 transition-transform duration-500">
                <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                  <polygon points="50,1 95,25 95,75 50,99 5,75 5,25" stroke="#EF4444" strokeWidth="3" fill="none" />
                </svg>
                <div className="w-12 h-12 text-blue-900">
                  <support.icon size={48} />
                </div>
              </div>
              <span className="mt-4 text-lg font-semibold text-gray-900">{support.label}</span>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up {
            animation: fadeUp 0.8s ease forwards;
          }
        `}</style>
      </section>
     {/* ================= Why Us Section (Animated Numbers) ================= */}
<section className="py-16 sm:py-20 bg-[#22224b] text-center font-montserrat">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 px-4 sm:px-6 md:px-0 text-white"
      >
        Why Us
      </motion.h2>

      {/* Description */}
   <motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.15 }}
  viewport={{ once: true }}
  className="text-white max-w-3xl mx-auto mb-14 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed px-4 sm:px-6 md:px-0"
>
  When you partner with <span className="font-semibold text-blue-600">Technogen</span>, you gain more than a technology provider — you gain a long-term strategic ally.
</motion.p>


      {/* Animated Numbers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 md:px-10 lg:px-16">
        {[
          { number: 20, suffix: "+", label: "years of IT excellence delivering success across industries" },
          { number: 500, suffix: "+", label: "successful projects delivered with precision and impact" },
          { number: 100, suffix: "%", label: "customer satisfaction with proven AWS expertise" },
          { number: 4, suffix: "", label: "strategic pillars ensuring innovation, compliance, ROI" },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm border border-gray-300
                       hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[220px]"
          >
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 text-#ce3266-500">
              <CountUpNumber end={stat.number} suffix={stat.suffix} />
            </h3>
            <p className="text-sm sm:text-base md:text-base lg:text-lg text-#ce3266-500 leading-relaxed text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

      {/* ================= Case Study Carousel ================= */}
      <section className="relative py-16 bg-[White]">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading & Navigation */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-[#23214A] mb-4 md:mb-0">
              CASE STUDY
            </h2>
            <div className="flex space-x-3">
              <button onClick={() => scrollCarousel('left')} className="bg-red-500 text-[#23214A] p-3 rounded-full hover:bg-red-600 transition">&#8592;</button>
              <button onClick={() => scrollCarousel('right')} className="bg-red-500 text-[#23214A] p-3 rounded-full hover:bg-red-600 transition">&#8594;</button>
            </div>
          </div>

          <p className="text-[#23214A]-300 max-w-2xl mx-auto text-center mb-12">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </p>

          <div className="relative overflow-hidden">
            <div ref={carouselRef} className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar">
              {caseStudies.map((caseStudy, idx) => (
                <div key={idx} className="flex-shrink-0 w-[90%] sm:w-[45%] lg:w-[30%] rounded-2xl shadow-lg overflow-hidden group" style={{ backgroundColor: '#23214A' }}>
                  <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-44 sm:h-52 object-cover" />
                  <div className="bg-white/10 backdrop-blur-md p-6 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{caseStudy.title}</h3>
                      <p className="text-gray-300 mb-4 text-sm sm:text-base">{caseStudy.description}</p>
                    </div>
                    <button className="cssbuttonsIoButton" type="button">
                      Learn More
                      <div className="icon" aria-hidden>
                        <svg height="20" width="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                      </div>
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
          <img src="https://www.shutterstock.com/image-photo/online-education-elearning-concept-learning-600nw-2305781813.jpg" alt="Book Your Demo" className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover" />
          <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-6 sm:pb-8 px-4 sm:px-8 z-10">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
              With us, your ServiceNow journey is faster, safer, and designed for long-term success.
            </h2>
            <div className="mt-4 sm:mt-6">
              <button className="cssbuttonsIoButton">Book Your Free Health Check
                <div className="icon" aria-hidden>
                  <svg height="20" width="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .cssbuttonsIoButton {
          background: #ce3266; color: white; font-family: inherit; border: 1px solid #ce3266;
          text-align: center; font-size: 15px; font-weight: 600; border-radius: 2rem; letter-spacing: 0.05em;
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
        .cssbuttonsIoButton:active .icon { transform: scale(0.95); }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
      `}</style>

    </div>
  );
};

export default ServiceNowPage;
