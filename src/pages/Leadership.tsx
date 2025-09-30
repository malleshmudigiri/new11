
import React from "react";
import { Linkedin } from "lucide-react";

// 🔹 LeaderCard Component
const LeaderCard: React.FC<{
  name: string;
  title: string;
  image: string;
  linkedin: string;
}> = ({ name, title, image, linkedin }) => {
  return (
    <div className="relative group rounded-xl transition font-[Montserrat]">
      {/* Outer Border */}
      <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
        {/* Blue hover fill between outer + inner border */}
        <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition"></div>

        {/* Inner Border + Content */}
        <div className="relative border border-gray-300 rounded-lg overflow-hidden bg-white group-hover:bg-[#172059] transition">
          {/* Image (square ratio, auto height) */}
          <div className="relative w-full aspect-square overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover square-t-lg"
            />
          </div>

          {/* Text + LinkedIn */}
          <div className="border-t border-gray-300 p-4 group-hover:border-white transition flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-lg group-hover:text-white transition">
                {name}
              </h3>

             {/* LinkedIn Fancy Button (Uiverse style) */}
<a
  href={linkedin}
  target="_blank"
  rel="noopener noreferrer"
  className="group w-12 hover:w-44 h-12 hover:bg-sky-600 relative bg-sky-700 rounded text-neutral-50 duration-700 font-bold flex justify-start items-center gap-2 p-2 pr-6 overflow-hidden"
>
  <Linkedin className="w-8 h-8 shrink-0 fill-neutral-50" />
  <span className="origin-left inline-flex duration-100 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
    Connect
  </span>
</a>
            </div>

            <p className="text-sm text-gray-600 group-hover:text-gray-200 transition">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 🔹 Leaders Data
const leaders = [
  {
    name: "Kiranmai Kesa",
    title: "Founder, President CFO",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757945016/Rectangle_58_sgnvir.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Lax Chepuri",
    title: "Chief Executive Officer",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757944983/Rectangle_-2_qavdyg.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Sunil Nambiar",
    title: "Vice President Customer Success",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757944986/Rectangle_-4_igfawa.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Rob Williams",
    title: "Vice President",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757945016/Rectangle_-1_cltsbk.png",
    linkedin: "https://www.linkedin.com/in//",
  },
  {
    name: "Emil J. Modugno",
    title: "Executive Vice President",
    image:
      "https://res.cloudinary.com/deiqxagkd/image/upload/v1757945016/Rectangle_-3_ilvf4b.png",
    linkedin: "https://www.linkedin.com/in//",
  },
];

// 🔹 Leadership Page
const Leadership: React.FC = () => {
  return (
    <main className="font-[Montserrat]">
      {/* ===== HERO / LANDING ===== */}
         {/* Hero Section */}
<section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133763/Leadership_gswczv.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133763/Leadership_gswczv.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759133763/Leadership_gswczv.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain"
  />
</section>
 {/* <section className="rounded-xl overflow-hidden relative -mt-1">
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945019/Banners-And-images_o5k5ml.png"
    alt="Capitol Mobile"
    className="block md:hidden w-full h-[520px] object-cover"
  />
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1757945109/Banners-And-images_uulrwb.png"
    alt="Capitol Desktop"
    className="hidden md:block w-full h-[124vh] object-cover"
  />
</section> */}

      {/* ===== SECTION 2: HEADING + SUBHEADING ===== */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Leadership</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our experienced leadership team who drive innovation, strategy,
            and growth across Technogen.
          </p>
        </div>

        {/* Leaders Grid (3 per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, idx) => (
            <LeaderCard key={idx} {...leader} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Leadership;


// import React from "react";
// import { Linkedin } from "lucide-react";

// // Leader card with outer + inner border and hover fill between them
// const LeaderCard: React.FC<{
//   name: string;
//   title: string;
//   image: string;
//   linkedin: string;
// }> = ({ name, title, image, linkedin }) => {
//   return (
//     <div className="group">
//       {/* Outer border container with padding = gap between outer & inner */}
//       <div className="relative rounded-xl border-2 border-gray-300 p-[6px] overflow-hidden">
//         {/* Blue fill that appears between outer border and inner card on hover */}
//         <div className="absolute inset-0 bg-transparent group-hover:bg-[#172059] transition-colors duration-300 pointer-events-none"></div>

//         {/* Inner card (has its own border) */}
//         <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
//           {/* Square image — consistent across cards */}
//           <div className="w-full aspect-square overflow-hidden bg-gray-100">
//             <img
//               src={image}
//               alt={name}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//               loading="lazy"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-4 flex flex-col gap-2">
//             <div className="flex items-center justify-between">
//               <h3 className="text-lg font-semibold text-gray-900 group-hover:text-white transition-colors">
//                 {name}
//               </h3>

//               {/* Small LinkedIn button — keeps layout tidy */}
//               <a
//                 href={linkedin}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-sky-700 hover:bg-sky-600 text-white transition"
//                 aria-label={`Open ${name} on LinkedIn`}
//               >
//                 <Linkedin className="w-4 h-4" />
//               </a>
//             </div>

//             <p className="text-sm text-gray-600 group-hover:text-gray-200 transition-colors">
//               {title}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Leaders data
// const leaders = [
//   {
//     name: "Kiranmai Kesa",
//     title: "Founder, President CFO",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939224/78a444c8-474d-4751-ba03-589226317152.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Lax Chepuri",
//     title: "Chief Executive Officer",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939257/c65c49f9-762b-4f3b-8669-48879c204218.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Sunil Nambiar",
//     title: "Vice President, Customer Success",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939275/2944f58c-27a9-44ed-905d-bf01543db5c4.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Rob Williams",
//     title: "Vice President",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939327/c477f3f2-c8d8-45dc-bc1b-533000aa47d0.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
//   {
//     name: "Emil J. Modugno",
//     title: "Executive Vice President",
//     image:
//       "https://res.cloudinary.com/deiqxagkd/image/upload/v1757939312/4108593d-17f1-49a0-a66a-d508f0e877c4.png",
//     linkedin: "https://www.linkedin.com/in/",
//   },
// ];

// const Leadership: React.FC = () => {
//   return (
//     <main className="py-20 px-6 max-w-7xl mx-auto font-[Montserrat]">
//       <div className="text-center mb-16">
//         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//           Leadership
//         </h1>
//         <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//           Meet our experienced leadership team who drive innovation, strategy,
//           and growth across Technogen.
//         </p>
//       </div>

//       {/* 3 columns desktop, 2 tablet, 1 mobile */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {leaders.map((leader, i) => (
//           <LeaderCard key={i} {...leader} />
//         ))}
//       </div>
//     </main>
//   );
// };

// export default Leadership;
