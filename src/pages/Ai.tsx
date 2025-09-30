
import React from "react";

const Capabilities: React.FC = () => {
  return (
    <div className="w-full">
      {/* ================= Section 1 (Hero Background Fullscreen) ================= */}
        {/* Hero Section */}
        <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135736/AI_mwk4dm.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135736/AI_mwk4dm.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135432/Ai_macxhs.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain"
  />
</section>

{/* ================= Section 2 (Empowering Workflows Full-Width) ================= */}
{/* ================= Section 2 (Empowering Workflows Half-Width) ================= */}
<section className="w-full flex justify-center items-center py-4 sm:py-6 px-4 sm:px-6 lg:px-8 font-montserrat">
  <div
    className="relative w-full max-w-6xl rounded-2xl overflow-hidden flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758203844/Group_598_mgkrjk.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20 md:py-24 text-white/100">
      {/* Heading */}
      <h2 className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-3 text-white">
         Empowering Intelligent Workflows <br />
        with AI Orchestration
      </h2>

      {/* Divider */}
      <div className="w-16 sm:w-20 h-0.5 bg-white mx-auto my-2"></div>

      {/* Description */}
      <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90 max-w-full sm:max-w-3xl mx-auto text-white/100">
        Technogen helps organizations unlock the full potential of AI with
        secure, scalable, and intelligent orchestration. From single-agent
        automation to multi-agent collaboration, we design AI ecosystems
        that deliver measurable business impact.
      </p>
    </div>
  </div>
</section>
      {/* ================= Section 3 (Technogen Advantage) ================= */}
      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          TECHNOGEN ADVANTAGE
        </h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
          AI isn’t just deployed, it’s orchestrated efficiently, and at scale.
          Our expertise ensures seamless agent collaboration, built-in testing,
          and measurable business impact.
        </p>
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188985/Technogen-Advantage_2x_uappap.png"
            alt="Technogen Advantage"
            className="max-w-full h-auto"
          />
        </div>
      </section>

      <section
  className="relative py-16 sm:py-20 lg:py-24 bg-cover bg-center text-white font-montserrat"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/BG_cdwu6v.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/20"></div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-12 sm:mb-16">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
        OUR EXPERTISE
      </h2>
      <p className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white">
        AI isn’t just deployed, it’s orchestrated efficiently, and at scale. 
        Our expertise ensures seamless agent collaboration, built-in testing, 
        and measurable business impact.
      </p>
    </div>

    {/* Orchestration Patterns */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 sm:mb-16 items-center">
      <div>
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png"
          alt="Orchestration Patterns"
          className="rounded-2xl shadow-lg w-full object-contain"
        />
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
          Orchestration Patterns
        </h3>
        <ul className="space-y-2 text-white text-sm sm:text-base md:text-base">
          <li>✔️<span className="text-white font-semibold">Sequential:Linear, staged workflows where each agent builds on the previous step.</span></li>
          <li>✔️<span className="text-white font-semibold">Concurrent:Parallel processing for rapid analysis and reduced latency.</span> </li>
          <li>✔️<span className="text-white font-semibold">Group Chat: Multi-agent collaboration for consensus-driven decisions and brainstorming.</span> </li>
          <li>✔️<span className="text-white font-semibold">Hand-off: Dynamic task delegation between specialized agents for flexible workflows.</span> </li>
          <li>✔️<span className="text-white font-semibold">Magnetic:  Open-ended orchestration for complex, evolving problems.</span></li>
        </ul>
      </div>
    </div>

    {/* Quality & Testing Built-In */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
          Quality & Testing Built-In
        </h3>
        <ul className="space-y-2 text-white text-sm sm:text-base md:text-base">
          <li>✔️ <span className="text-white">Instrumentation of all agent operations and handoffs.</span></li>
          <li>✔️ <span className="text-white">Performance monitoring and optimization.</span></li>
          <li>✔️ <span className="text-white">Testable interfaces for individual agents.</span></li>
          <li>✔️ <span className="text-white">Integration tests for multi-agent workflows.</span></li>
        </ul>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png"
          alt="Quality & Testing"
          className="rounded-2xl shadow-lg w-full object-contain"
        />
      </div>
    </div>
  </div>
</section>


{/* ================= Section 5 (Get Started Today) ================= */}
     {/* ================= Book Your Demo ================= */}
<section className="relative px-4 sm:px-6 lg:px-5">
  <div className="relative overflow-hidden rounded-b-[2.5rem] max-w-7xl mx-auto">
    {/* Background Image */}
    <img
      src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png"
      alt="Book Your Demo"
      className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60 rounded-b-[2.5rem]" />

    {/* Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-end text-center pb-6 sm:pb-8 px-4 sm:px-8 z-10">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-4xl text-white">
           Boost efficiency and results with AI orchestration. <br />
      Partner with Technogen today.
        <br className="hidden sm:block" />
      </h2>

      <div className="mt-4 sm:mt-6">
        <button className="cssbuttonsIoButton">
           Get Started Today
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

export default Capabilities;
