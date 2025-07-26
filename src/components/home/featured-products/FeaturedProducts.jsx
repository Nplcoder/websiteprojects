import React from "react";
import PaperBagImg from '../../../image/PaperBag-01.jpg';
import SandwichImg from '../../../image/SandwichPaper-01.jpg';
import PouchImg from '../../../image/PaperPouch-01.jpg';
import TwoSideImg from '../../../image/TwoSideOpenPouch-01.jpeg';
import { Package, Layers, FileText, Square } from "lucide-react";

const products = [
    {
      title: "PAPER BAGS",
      subtitle: "High-quality paper bags with durable twisted, D-cut, and SOS handles.",
      image: PaperBagImg,
      icon: (props) => <Package {...props} />,
      features: ["16 Standard Sizes", "90-100 GSM", "Customizable Branding"],
    },
    {
      title: "SANDWICH WRAPPING PAPER",
      subtitle: "Food-grade wrapping paper ideal for sandwiches, burgers, and other food items.",
      image: SandwichImg,
      icon: (props) => <Layers {...props} />,
      features: [
        "Grease Proof",
        "PE Coated Options",
        "White/Brown Variants",
      ],
    },
    {
      title: "PAPER POUCH",
      subtitle: "Versatile paper pouches for secure food and retail product packaging.",
      image: PouchImg,
      icon: (props) => <FileText {...props} />,
      features: [
        "Finger Chips/Burger Pouch",
        "Customized Sizes",
        "Food Safe Materials",
      ],
    },
    {
      title: "TWO SIDE OPEN POUCH",
      subtitle: "Specialized paper bags with enhanced bottom structure for better stability and capacity.",
      image: TwoSideImg,
      icon: (props) => <Square {...props} />,
      features: [
        "Enhanced Stability",
        "Customized Printing",
        "Plain Pouch Available",
      ],
    },
  ];
  

  const FeaturedProducts = () => {
    return (
      <section className="py-8 px-4 md:px-10">
        <h2 className="text-xl md:text-3xl font-bold mb-6">Product</h2>
  
        <div className="flex flex-wrap -mx-2">
          {products.map((item, index) => (
            <div
              key={index}
              className="w-1/2 md:w-1/4 px-2 mb-4 flex justify-center"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden text-center p-0 w-full max-w-[300px] flex flex-col items-center transition hover:shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-t-lg mb-3 object-cover w-full h-36"
                />
  
                {/* Icon with white background ring */}
                <div className="relative -mt-10 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0" />
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white relative z-10 transition duration-300 hover:bg-blue-700 shadow-md">
                    {item.icon({ size: 22, stroke: "white", strokeWidth: 1.5 })}
                  </div>
                </div>
  
                {/* Content */}
                <div className="px-2 pb-4">
                <h3 className="font-bold text-sm sm:text-base text-[#003366]">
  {item.title === "SANDWICH WRAPPING PAPER" ? (
    <>
      <span className="inline sm:hidden">SANDWICH PAPER</span>
      <span className="hidden sm:inline">{item.title}</span>
    </>
  ) : (
    item.title
  )}
</h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs">{item.subtitle}</p>
  
                  {/* Features */}
                  <div className="w-full bg-blue-50 rounded-xl px-3 py-2 mt-2 text-left">
                    <p className="font-semibold text-[10px] mb-1">Features:</p>
                    <ul className="list-disc pl-4 text-[10px] text-gray-800 space-y-1">
                      {item.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
  
                  {/* Buttons */}
                  <div className="flex justify-center gap-2 mt-3">
                    <button className="border border-black text-black text-[10px] px-2 py-1 rounded hover:bg-black hover:text-white">
                      LEARN MORE
                    </button>
                    <button className="bg-blue-700 text-white text-[10px] px-2 py-1 rounded hover:bg-blue-800">
                    <span className="block sm:hidden">GET A QUOTE</span>
                    <span className="hidden sm:block">REQUEST A QUOTE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

export default FeaturedProducts;
