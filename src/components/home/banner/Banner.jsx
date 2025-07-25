import React from "react";
import bannerVideo from "../../../assets/banner-video.mp4";
import bagImage from "../../../image/ecology-bag-with-leaves.png"; // fix your path if needed

const Banner = () => {
  return (
    <div className="relative w-full mb-12">
      {/* Banner Section */}
      <div className="relative h-[250px] md:h-[300px] w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={bannerVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto h-full px-4 md:px-10 py-6 text-center md:text-left">
          {/* Left Side */}
          <div className="max-w-xl space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-green-900">
              Eco-Friendly Paper Bags
            </h1>
            <p className="text-gray-700 text-sm md:text-base">
              Custom-made for your brand with sustainability in mind.
            </p>
            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm">
                View Products
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm">
                Get a quote
              </button>
            </div>

            {/* Icons */}
            <div className="flex gap-6 mt-4 text-sm text-gray-700 justify-center md:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-green-600">♻️</span>
                100% Recyclable
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-800">🇦🇪</span>
                Made in UAE
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src={bagImage}
              alt="Paper bag"
              className="max-h-[250px]"
            />
          </div>
        </div>
      </div>

      {/* Floating Feature Card */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-40px] w-[90%] max-w-4xl bg-white rounded-2xl shadow-lg z-20 flex flex-col sm:flex-row justify-between items-center py-4 px-6 gap-4 sm:gap-0 text-sm">
        <div className="flex items-center gap-2 border-r pr-4">
          <span className="text-green-500 text-xl">✔️</span>
          <p>Trusted by Brands</p>
        </div>
        <div className="flex items-center gap-2 border-r px-4">
          <span className="text-pink-500 text-xl">🎨</span>
          <p>Custom Printing</p>
        </div>
        <div className="flex items-center gap-2 pl-4">
          <span className="text-green-500 text-xl">🚚</span>
          <p>Fast Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
