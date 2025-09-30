
import React from "react";

const Certifications: React.FC = () => {
  const logos = [
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102318/Group_547_nmr7tl.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102326/Group_548_mu3hfh.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102306/Group_549_rjtco1.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102335/Group_550_gimq7i.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102350/Group_551_hdgcbp.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102361/Group_552_et187j.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102377/Group_553_ekwwdn.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102390/Group_555_tes38e.png",
    "https://res.cloudinary.com/deiqxagkd/image/upload/v1758102384/Group_554_d0ccdc.png",
  ];

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
      Certifications
    </h2>
  </div>
</section>


      {/* Certifications Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#172059] mb-4">
              Certifications
            </h2>
            <div className="w-16 h-[2px] bg-gray-300 mb-6"></div>
            <p className="text-lg text-gray-700 leading-relaxed text-justify">
              Our certifications include ISO 9001:2015, ISO/IEC 27001:2022 and
              ISO/IEC 20000-1:2018. Along with ISO certifications we are MDOT,
              SWAM, USPAACC, Capital Region Minority Supplier, Metropolitan
              Washington Airports Authority (MWAA) and MBE certified. These
              certifications allow us to partner and serve companies worldwide.
            </p>
          </div>

          {/* Right Side Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src="https://res.cloudinary.com/deiqxagkd/image/upload/v1758102981/Certifications-Image_xndnxt.png"
              alt="Standard"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Logos Section */}
<section className="bg-[#172059] py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* First row - 4 logos */}
    <div className="flex justify-center gap-8 mb-8">
      {logos.slice(0, 4).map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <img src={logo} alt={`Logo ${index + 1}`} className="h-32 object-contain" />
        </div>
      ))}
    </div>

    {/* Second row - 4 logos staggered */}
    <div className="flex justify-center gap-8 mb-8">
      {logos.slice(4, 8).map((logo, index) => (
        <div
          key={index}
          className={`flex items-center justify-center ${index === 0 ? 'ml-12 md:ml-16' : ''} ${
            index === 3 ? 'mr-12 md:mr-16' : ''
          }`}
        >
          <img src={logo} alt={`Logo ${index + 5}`} className="h-32 object-contain" />
        </div>
      ))}
    </div>

    {/* Third row - 1 logo centered */}
    <div className="flex justify-center">
      <div className="flex items-center justify-center">
        <img src={logos[8]} alt="Logo 9" className="h-32 object-contain" />
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Certifications;
