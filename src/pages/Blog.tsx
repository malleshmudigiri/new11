
import React, { useState } from "react";
import { Search, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title:
      "Why Most Companies Underutilize ServiceNow and How Technogen can help you Fix It",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title:
      "Unlocking Business Potential: The Importance of Data Modernization in the Digital Age",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title:
      "The Role of Zero Trust Architecture in Fortifying Public Sector Cybersecurity",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title:
      "Driving Innovation with AI and Cloud Solutions in Modern Enterprises",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
  },
];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter blogs by search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="">
        <section className="bg-[#1f2140]">
        <div className="max-w-screen-7xl mx-auto px-8 relative">
          <div className="absolute top-6 left-8 z-30">{/* icon */}</div>
        </div>
      </section>

      {/* Section: Banner */}
     
     {/* Hero Section */}
 <section className="w-full relative pt-20"> {/* pt-20 adds space for header */}
  {/* Desktop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135272/blogs_nab2fv.png"
    alt="TGinc Desktop Banner"
    className="hidden lg:block w-full object-contain"
  />

  {/* Tablet / Large Laptop Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135272/blogs_nab2fv.png"
    alt="TGinc Tablet Banner"
    className="hidden md:block lg:hidden w-full object-contain"
  />

  {/* Mobile Banner */}
  <img
    src="https://res.cloudinary.com/deiqxagkd/image/upload/v1759135272/blogs_nab2fv.png"
    alt="TGinc Mobile Banner"
    className="block md:hidden w-full object-contain bg-white"
  />
</section>

      {/* Section 2: Heading + Subheading */}
      <section className="py-16 px-6 md:px-16 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          SHAPING WHAT’S NEXT
        </h2>
        <p className="text-gray-600 text-lg">
          Discover the latest blogs, innovations, and milestones from the world
          of Technogen.
        </p>
      </section>

      {/* Section 3: Blog Grid */}
      <section className="px-6 md:px-16 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Blog Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {filteredBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-gray-300 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:border-pink-500 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <Link
                    to={`/blog/${blog.id}`}
                    className="absolute top-3 right-3 bg-white rounded-full p-2 shadow hover:bg-pink-50"
                  >
                    <ArrowUpRight className="h-5 w-5 text-gray-700 hover:text-pink-600" />
                  </Link>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.description}</p>
                  <div className="mt-4 border-t pt-3">
                    <Link
                      to={`/blog/${blog.id}`}
                      className="text-pink-600 font-medium text-sm hover:underline inline-flex items-center"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Search Box */}
            <div className="bg-white shadow-md p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Search</h4>
              <div className="flex items-center border rounded-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="flex-1 px-3 py-2 outline-none text-sm"
                />
                <button className="px-3 text-gray-500 hover:text-pink-600">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Featured Blog */}
            <div className="relative rounded-xl overflow-hidden shadow-md border">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=1000&fit=crop"
                alt="Featured Blog"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 text-white/100">
                <p className="text-sm text-white/100">
                  Featured: A closer look into Digital Transformation
                </p>
                <Link
                  to="/blog/featured"
                  className="mt-3 bg-pink-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-pink-700 w-fit"
                >
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
