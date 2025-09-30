// // import React from 'react';
// // import { Mail, Phone, MapPin, Clock } from 'lucide-react';

// // const Contact: React.FC = () => {
// //   return (
// //     <div className="pt-16">
// //       {/* Hero Section */}
// //       <section className="bg-[#172059] text-white py-20">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center">
// //             <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
// //             <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
// //               Ready to transform your organization? Get in touch with our team to discuss your technology needs
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Contact Information and Form */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// //             {/* Contact Information */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
// //               <p className="text-lg text-gray-600 mb-8">
// //                 We're here to help you navigate your digital transformation journey. 
// //                 Reach out to discuss your project requirements and discover how we can support your goals.
// //               </p>
              
// //               <div className="space-y-6">
// //                 <div className="flex items-start">
// //                   <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4 flex-shrink-0">
// //                     <Phone className="h-6 w-6" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
// //                     <p className="text-gray-600">(555) 123-4567</p>
// //                     <p className="text-gray-600">Mon-Fri, 8:00 AM - 6:00 PM EST</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start">
// //                   <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4 flex-shrink-0">
// //                     <Mail className="h-6 w-6" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
// //                     <p className="text-gray-600">info@Technogen.com</p>
// //                     <p className="text-gray-600">We respond within 24 hours</p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start">
// //                   <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4 flex-shrink-0">
// //                     <MapPin className="h-6 w-6" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-gray-900 mb-1">Headquarters</h3>
// //                     <p className="text-gray-600">
// //                       1234 Technology Drive<br />
// //                       Suite 500<br />
// //                       McLean, VA 22102
// //                     </p>
// //                   </div>
// //                 </div>
                
// //                 <div className="flex items-start">
// //                   <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4 flex-shrink-0">
// //                     <Clock className="h-6 w-6" />
// //                   </div>
// //                   <div>
// //                     <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
// //                     <p className="text-gray-600">
// //                       Monday - Friday: 8:00 AM - 6:00 PM EST<br />
// //                       Emergency Support: 24/7 Available
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Contact Form */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
// //               <form className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// //                       First Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="firstName"
// //                       name="firstName"
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// //                       Last Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="lastName"
// //                       name="lastName"
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     />
// //                   </div>
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Email Address *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Phone Number
// //                   </label>
// //                   <input
// //                     type="tel"
// //                     id="phone"
// //                     name="phone"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Company/Organization
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="company"
// //                     name="company"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Service Interest
// //                   </label>
// //                   <select
// //                     id="service"
// //                     name="service"
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   >
// //                     <option value="">Select a service...</option>
// //                     <option value="cloud">Cloud Solutions</option>
// //                     <option value="servicenow">ServiceNow Implementation</option>
// //                     <option value="cybersecurity">Cybersecurity</option>
// //                     <option value="data-analytics">Data & Analytics</option>
// //                     <option value="automation">Hyper Automation</option>
// //                     <option value="consulting">Consulting Services</option>
// //                     <option value="other">Other</option>
// //                   </select>
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Project Details *
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     rows={6}
// //                     required
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     placeholder="Please describe your project requirements, timeline, and any specific challenges you're facing..."
// //                   ></textarea>
// //                 </div>
                
// //                 <div className="flex items-center">
// //                   <input
// //                     type="checkbox"
// //                     id="newsletter"
// //                     name="newsletter"
// //                     className="h-4 w-4 text-[#172059] focus:ring-[#172059] border-gray-300 rounded"
// //                   />
// //                   <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
// //                     I'd like to receive updates about Technogen services and industry insights
// //                   </label>
// //                 </div>
                
// //                 <button
// //                   type="submit"
// //                   className="w-full px-6 py-3 bg-[#172059] text-white font-semibold rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //                 >
// //                   Send Message
// //                 </button>
                
// //                 <p className="text-sm text-gray-600 text-center">
// //                   By submitting this form, you agree to our privacy policy. 
// //                   We'll respond within 24 hours during business days.
// //                 </p>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Map Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
// //             <p className="text-xl text-gray-600">
// //               Visit us at our headquarters in McLean, Virginia
// //             </p>
// //           </div>
          
// //           <div className="bg-white rounded-xl shadow-lg overflow-hidden">
// //             <div className="aspect-w-16 aspect-h-9 h-96">
// //               <iframe
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.3740486770747!2d-77.2350659846839!3d38.95484257956435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cc3b9c5c5555%3A0x7b4e9c9e0a5c5c5c!2sMcLean%2C%20VA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
// //                 width="100%"
// //                 height="100%"
// //                 style={{ border: 0 }}
// //                 allowFullScreen
// //                 loading="lazy"
// //                 referrerPolicy="no-referrer-when-downgrade"
// //                 title="Technogen Office Location"
// //               ></iframe>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Contact;
// // import type React from "react";

// // export function CyberBanner() {
// //   return (
// //     <section
// //       aria-labelledby="cyber-banner-heading"
// //       className="w-full"
// //       style={
// //         {
// //           // Local brand tokens
// //           ["--brand-navy" as any]: "#1C1B3B",
// //           ["--brand-green" as any]: "#2CC6A5",
// //           ["--brand-pink" as any]: "#E94E77",
// //           ["--brand-foreground" as any]: "#FFFFFF",
// //           ["--brand-white" as any]: "#FFFFFF",
// //           // Split background
// //           background:
// //             "linear-gradient(to bottom, var(--brand-navy) 0% 50%, var(--brand-white) 50% 100%)",
// //         } as React.CSSProperties
// //       }
// //     >
// //       {/* Header */}
// //       <header style={{ backgroundColor: "var(--brand-navy)" }}>
// //         <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 mt-16 flex items-center gap-4">
// //           <span className="sr-only">Section</span>
// //           <div className="grid grid-cols-2 gap-1" aria-hidden="true">
// //             {Array.from({ length: 4 }).map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="w-3 h-3 rounded-sm"
// //                 style={{ backgroundColor: "var(--brand-green)" }}
// //               />
// //             ))}
// //           </div>
// //           <h1
// //             id="cyber-banner-heading"
// //             className="text-3xl md:text-4xl font-bold text-balance"
// //             style={{ color: "var(--brand-foreground)" }}
// //           >
// //         Contact Us
// //           </h1>
// //         </div>
// //       </header>

// //       {/* Banner with spacing */}
// //       <div className="relative max-w-7xl mx-auto px-6 md:px-12 mt-10">
// //         <div className="relative rounded-3xl overflow-hidden">
// //           {/* Smaller Base Image */}
// //           <img
// //             src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759146755/Contact-Us-Desktop.-Banner_evj3nq.png"
// //             alt="Abstract cyber security background with lock icon"
// //             className="w-full h-[320px] md:h-[280px] lg:h-[320px] object-fit cover"
// //           />

// //           {/* Rainbow Circle with pulse */}
// //           <div
// //             className="absolute -top-10 -right-10 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center animate-pulse"
// //             style={{ backgroundColor: "var(--brand-pink)" }}
// //             aria-hidden="true"
// //           >
// //             <div
// //               className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
// //               style={{ backgroundColor: "var(--brand-white)" }}
// //             >
// //               <div
// //                 className="w-6 h-6 md:w-7 md:h-7 rounded-full"
// //                 style={{ backgroundColor: "var(--brand-green)" }}
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default CyberBanner;
// import type React from "react"

// export function CyberBanner() {
//   // Local design tokens to keep a tight 4-color palette:
//   // Navy, Green, Pink, and White.
//   return (
//     <section
//       aria-labelledby="cyber-banner-heading"
//       className="w-full"
//       style={
//         {
//           // Brand tokens (kept local to avoid global theme overrides)
//           // Navy background
//           ["--brand-navy" as any]: "#1C1B3B",
//           // Green accent (squares + inner dot)
//           ["--brand-green" as any]: "#2CC6A5",
//           // Pink outer ring
//           ["--brand-pink" as any]: "#E94E77",
//           // Foreground text over navy
//           ["--brand-foreground" as any]: "#FFFFFF",
//           // Explicit white token
//           ["--brand-white" as any]: "#FFFFFF",
//           // Split background: top half blue (navy), bottom half white
//           background: "linear-gradient(to bottom, var(--brand-navy) 0% 50%, var(--brand-white) 50% 100%)",
//         } as React.CSSProperties
//       }
//     >
//       {/* Header bar with green squares and title */}
//       <header className="bg-[var(--brand-navy)]">
//         <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 mt-16 flex items-center gap-4">
//           <span className="sr-only">Section</span>
//           <div className="grid grid-cols-2 gap-1" aria-hidden="true">
//             {/* Use Tailwind var() syntax for colors */}
//             <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
//             <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
//             <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
//             <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
//           </div>
//           {/* Ensure text uses the foreground color variable correctly */}
//           <h1
//             id="cyber-banner-heading"
//             className="text-[var(--brand-foreground)] text-3xl md:text-4xl font-bold text-balance"
//           >
//             Cyber-Security
//           </h1>
//         </div>
//       </header>

//       {/* Banner image with matching horizontal padding and decorations */}
//       <div className="relative max-w-7xl mx-auto px-6 md:px-12">
//         {/* Keep the image inside overflow-hidden for rounded corners */}
//         <div className="relative mt-4 rounded-3xl overflow-hidden z-0">
//           {/* Base Image */}
//           <img
//             src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759146755/Contact-Us-Desktop.-Banner_evj3nq.png"
//             alt="Abstract cyber security background with lock icon"
//             className="w-full h-[320px] md:h-[320px] lg:h-[420px] object-cover image-rendering-auto"
//           />
//         </div>

//         {/* Move rainbow circle outside overflow-hidden so it's not clipped */}
//         <div
//           className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--brand-pink)] flex items-center justify-center z-10"
//           aria-hidden="true"
//         >
//           <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--brand-white)] rounded-full flex items-center justify-center">
//             <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--brand-green)]" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default CyberBanner
import type React from "react"

export function CyberBanner() {
  // Local design tokens to keep a tight 4-color palette:
  // Navy, Green, Pink, and White.
  return (
    <section
      aria-labelledby="cyber-banner-heading"
      className="w-full"
      style={
        {
          // Brand tokens (kept local to avoid global theme overrides)
          // Navy background
          ["--brand-navy" as any]: "#1C1B3B",
          // Green accent (squares + inner dot)
          ["--brand-green" as any]: "#2CC6A5",
          // Pink outer ring
          ["--brand-pink" as any]: "#E94E77",
          // Foreground text over navy
          ["--brand-foreground" as any]: "#FFFFFF",
          // Explicit white token
          ["--brand-white" as any]: "#FFFFFF",
          // Split background: top half blue (navy), bottom half white
          background: "linear-gradient(to bottom, var(--brand-navy) 0% 50%, var(--brand-white) 50% 100%)",
        } as React.CSSProperties
      }
    >
      {/* Header bar with green squares and title */}
      <header className="bg-[var(--brand-navy)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 mt-16 flex items-center gap-4 ml-6 md:ml-12">
          <span className="sr-only">Section</span>
          <div className="grid grid-cols-2 gap-1" aria-hidden="true">
            {/* Use Tailwind var() syntax for colors */}
            <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
            <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
            <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
            <div className="w-3 h-3 rounded-sm bg-[var(--brand-green)]" />
          </div>
          {/* Ensure text uses the foreground color variable correctly */}
          <h1
            id="cyber-banner-heading"
            className="text-[var(--brand-foreground)] text-3xl md:text-4xl font-bold text-balance"
          >
            Cyber-Security
          </h1>
        </div>
      </header>

      {/* Banner image with matching horizontal padding and decorations */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 group">
        <div className="relative mt-4 rounded-3xl overflow-hidden z-0">
          {/* Base Image */}
          <img
            src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759146755/Contact-Us-Desktop.-Banner_evj3nq.png"
            alt="Abstract cyber security background with lock icon"
            className="w-full h-[320px] md:h-[420px] lg:h-[420px] object-cover"
          />
        </div>

        {/* Move rainbow circle outside overflow-hidden so it's not clipped */}
        <div
          className="pointer-events-none absolute -top-10 -right-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-[var(--brand-pink)] flex items-center justify-center z-10"
          aria-hidden="true"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--brand-white)] rounded-full flex items-center justify-center">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[var(--brand-green)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CyberBanner
