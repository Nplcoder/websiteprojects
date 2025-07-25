import React, { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="_bg-[#1b068e] text-sm text-white" style={{
    backgroundImage: 'linear-gradient(135deg, #1e3a8a, #286CD8)',
  }}>
  <div className="flex justify-center w-full">
    <div className="w-full max-w-[1336px] px-[21px] mx-auto py-2 flex flex-wrap justify-between items-center gap-2">
      
      {/* Left: Contact Info */}
      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">
        <span className="flex items-center gap-1 whitespace-nowrap">
          <FaPhoneAlt className="text-xs md:text-sm" /> +977 067674858
        </span>
        <span className="hidden md:flex items-center gap-1 whitespace-nowrap ml-4">
          <FaMapMarkerAlt className="text-sm" /> Umm AL Quwain, New Industrial Area - Office No. 4
        </span>
      </div>
      
      {/* Right: Social Icons */}
      <div className="flex items-center gap-3 text-base md:text-sm">
        <a href="#"><FaFacebookF className="text-sm md:text-base" /></a>
        <a href="#"><FaLinkedinIn className="text-sm md:text-base" /></a>
        <a href="#"><FaEnvelope className="text-sm md:text-base" /></a>
      </div>
    </div>
  </div>
</div>



      {/* Logo + Nav */}
      <div className="bg-white shadow">
        <div className="flex justify-center w-full">
          <div className="w-full max-w-[1336px] px-[21px] mx-auto py-2 flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="src/image/MPP-Logo-Rec.svg" alt="Logo" className="h-10" />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
              <a href="#" className="hover:text-blue-800">Home</a>
              <a href="#" className="hover:text-blue-800">Products</a>
              <a href="#" className="hover:text-blue-800">About us</a>
              <a href="#" className="hover:text-blue-800">Blog</a>
            </nav>

            {/* Button */}
            <div className="hidden md:block">
              <button className="bg-blue-700 hover:bg-blue-800 text-white text-sm px-4 py-2 rounded-full">
                Request a Quote
              </button>
            </div>

            {/* Hamburger Icon */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-xl text-blue-700">
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden px-[21px] pb-4">
            <nav className="flex flex-col gap-4 text-sm">
              <a href="#" className="hover:text-blue-800">Home</a>
              <a href="#" className="hover:text-blue-800">Products</a>
              <a href="#" className="hover:text-blue-800">About us</a>
              <a href="#" className="hover:text-blue-800">Blog</a>
              <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-full w-fit">
                Request a Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
