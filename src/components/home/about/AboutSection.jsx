import React from "react";
import { Play } from "lucide-react";
import aboutImg from "../../../image/test1.jpg"; // replace with your image

const tags = [
  "Paper Bags",
  "Food Packaging",
  "Eco-Friendly",
  "Zero Plastic",
  "Custom Printing",
  "Recyclable",
  "UAE Manufacturer",
];

const AboutSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#051952] to-[#08307a] py-14 px-4 sm:px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-5 text-center lg:text-left">
          <span className="text-xs sm:text-sm font-semibold text-yellow-400 tracking-widest uppercase block">
            — Over 60 Years of Trust
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            Trusted Paper Packaging Experts <br />
            <span className="text-yellow-400 italic">Serving Since 1959</span>
          </h2>

          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
            Modern Paper Product Industry LLC is a UAE-based manufacturer rooted in a legacy that began in 1959 in Beirut. 
            We specialize in producing eco-friendly paper bags, pouches, and food-grade wrapping paper — offering high hygiene standards, 
            custom branding, and zero-plastic packaging solutions trusted by businesses for over six decades.
          </p>

          <button className="flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-300 transition duration-300 mx-auto lg:mx-0 text-sm sm:text-base">
            <span className="text-lg">➕</span> Get Started
          </button>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative w-full max-w-md">
          <div className="rounded-3xl overflow-hidden shadow-lg relative">
            <img
              src={aboutImg}
              alt="Modern Paper Factory"
              className="w-full h-auto object-cover"
            />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/70 flex items-center justify-center backdrop-blur-md hover:scale-105 transition">
                <Play className="text-black w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Floating Tags */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 pr-4">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 bg-white/20 text-white border border-white rounded-full backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Get in Touch Badge */}
          <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-white text-blue-700 border-4 border-yellow-400 rounded-full text-[9px] sm:text-[10px] font-bold flex items-center justify-center text-center rotate-12">
            GET IN TOUCH
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
