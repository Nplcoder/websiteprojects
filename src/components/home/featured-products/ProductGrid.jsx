import React from "react";
import ProductCard from "./ProductCard";
import { Package, Layers, FileText, Square } from "lucide-react";

const products = [
  {
    popular: true,
    icon: <Package size={28} />,
    title: "Paper Bags",
    description:
      "Premium quality paper bags with various handle options including twisted, D-cut, and SOS designs.",
    sizeRange: "13cm x 24.5cm to 32cm x 40cm",
    features: ["16 Standard Sizes", "90-100 GSM", "Customizable Branding"],

  },
  {
    icon: <Layers size={28} />,
    title: "Sandwich Wrapping Paper",
    description:
      "Food-grade wrapping paper ideal for sandwiches, burgers, and other food items.",
    sizeRange: "All sizes customizable",
    features: [
      "Grease Proof",
      "PE Coated Options",
      "White/Brown Variants",
    ],

  },
  {
    icon: <FileText size={28} />,
    title: "Paper Pouches",
    description:
      "Versatile paper pouches for various applications including food packaging and retail.",
    sizeRange: "Custom dimensions available",
    features: [
      "Finger Chips/Burger Pouch",
      "Customized Sizes",
      "Food Safe Materials",
    ],
    
  },
  {
    icon:<Square size={28} />,
    title: "V-Bottom & Square Bottom",
    description:
      "Specialized paper bags with enhanced bottom structure for better stability and capacity.",
    sizeRange: "All sizes available",
    features: [
      "Enhanced Stability",
      "Customized Printing",
      "Plain Pouch Available",
    ],
   
  },
];

const ProductGrid = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-10">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;
