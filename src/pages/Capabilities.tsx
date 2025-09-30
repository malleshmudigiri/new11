
import React from "react";

const Capabilities: React.FC = () => {
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
      capabilities
    </h2>
  </div>
</section>


{/* ================= Section 2 (Empowering Workflows Half Width) ================= */}
<section className="relative py-16 flex justify-center">
  <div
    className="relative w-4/5 rounded-2xl overflow-hidden bg-cover bg-center text-center text-white px-6 py-16"
    style={{
      backgroundImage:
        "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758188881/Empowering_Intelligent_Workflows_jkep98.png')",
    }}
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-6">
      Empowering Intelligent Workflows with AI Orchestration
    </h2>
    <p className="text-lg md:text-xl">
      Technogen helps organizations unlock the full potential of AI with
      secure, scalable, and intelligent orchestration. From single-agent
      automation to multi-agent collaboration, we design AI ecosystems
      that deliver measurable business impact.
    </p>
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

      {/* ================= Section 4 (Our Expertise) ================= */}
   {/* ================= Section 4 (Our Expertise) ================= */}
<section
  className="relative py-24 bg-cover bg-center text-white"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/BG_cdwu6v.png')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  <div className="relative max-w-6xl mx-auto px-6">
    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">OUR EXPERTISE</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300">
        AI isn’t just deployed, it’s orchestrated efficiently, and at scale. 
        Our expertise ensures seamless agent collaboration, built-in testing, 
        and measurable business impact.
      </p>
    </div>

    {/* Orchestration Patterns */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20 items-center">
      <div>
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png"
          alt="Orchestration Patterns"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">Orchestration Patterns</h3>
        <ul className="space-y-2 text-gray-300">
          <li><b>Sequential:</b> Linear, staged workflows where each agent builds on the previous step.</li>
          <li><b>Concurrent:</b> Parallel processing for rapid analysis and reduced latency.</li>
          <li><b>Group Chat:</b> Multi-agent collaboration for consensus-driven decisions and brainstorming.</li>
          <li><b>Hand-off:</b> Dynamic task delegation between specialized agents for flexible workflows.</li>
          <li><b>Magnetic:</b> Open-ended orchestration for complex, evolving problems.</li>
        </ul>
      </div>
    </div>

    {/* Quality & Testing Built-In */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="order-2 lg:order-1">
        <h3 className="text-2xl font-bold mb-4">Quality & Testing Built-In</h3>
        <ul className="space-y-2 text-gray-300">
          <li>✔️ Instrumentation of all agent operations and handoffs.</li>
          <li>✔️ Performance monitoring and optimization.</li>
          <li>✔️ Testable interfaces for individual agents.</li>
          <li>✔️ Integration tests for multi-agent workflows.</li>
        </ul>
      </div>
      <div className="order-1 lg:order-2">
        <img
          src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png"
          alt="Quality & Testing"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </div>
  </div>
</section>

{/* ================= Section 5 (Get Started Today) ================= */}
<section
  className="relative flex items-center justify-center text-center h-[350px] md:h-[400px] rounded-b-[2rem] overflow-hidden"
  style={{
    backgroundImage:
      "url('https://res.cloudinary.com/deiqxagkd/image/upload/v1758188880/Quality_Testing_Built-In_kwdnmt.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative z-10 px-6 max-w-2xl">
    <h2 className="text-xl md:text-2xl font-semibold text-white mb-3">
      Boost efficiency and results with AI orchestration. <br />
      Partner with Technogen today.
    </h2>
    <button className="mt-4 px-6 py-2 bg-pink-600 hover:bg-pink-700 transition rounded-md font-medium text-white">
      Get Started Today
    </button>
  </div>
</section>

    </div>
  );
};

export default Capabilities;
