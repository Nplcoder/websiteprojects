import React from "react";

const ProductCard = ({
  popular,
  icon,
  title,
  description,
  sizeRange,
  features,
  
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 relative border border-blue-100 max-w-[300px] w-full">
      {popular && (
        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          Popular
        </div>
      )}
      <div className="flex justify-center text-blue-800 text-4xl">{icon}</div>
      <h3 className="text-lg font-bold text-center text-[#003366]">{title}</h3>
      <p className="text-sm text-center text-gray-700">{description}</p>

      <div className="bg-blue-50 rounded-lg p-3">
        <p className="font-semibold text-sm">Size Range:</p>
        <p className="text-sm text-gray-700">{sizeRange}</p>
      </div>

      <div className="bg-blue-50 rounded-lg p-3">
        <p className="font-semibold text-sm">Features:</p>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {features.map((feat, idx) => (
            <li key={idx}>{feat}</li>
          ))}
        </ul>
      </div>

     

      <div className="flex flex-col gap-2">
        <button className="bg-[#003366] text-white py-2 rounded-lg text-sm hover:bg-[#002244] transition">
          👁️ View Details
        </button>
        <button className="border border-[#003366] text-[#003366] py-2 rounded-lg text-sm hover:bg-[#f0f0f0] transition">
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
