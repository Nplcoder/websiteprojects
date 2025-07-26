import React, { useEffect, useRef } from "react";
import { Facebook, Linkedin } from "lucide-react";
import Img1 from "../../../image/img1.jpg";
import Img2 from "../../../image/img2.jpg";
import Img3 from "../../../image/img3.jpg";
import Img4 from "../../../image/img4.jpg";

const teamMembers = [
  {
    name: "Hussein Ridwan",
    role: "CEO",
    description: "Leading with purpose to deliver sustainable packaging for every business.",
    image: Img1,
  },
  {
    name: "Mr. Mohamad Ali Hassan Fleifel",
    role: "Founder",
    description: "Turning eco-friendly ideas into real-world packaging solutions every day.",
    image: Img2,
  },
  {
    name: "Late Mr. Hassan Fleifel",
    role: "Founder",
    description: "Started in 1959, Rivoli Beirut — legacy carried through generations.",
    image: Img3,
  },
  {
    name: "Mr. Mohamad Abdul ILAH Fleifel",
    role: "Sister Company",
    description: "Since 1992, our sister company has strengthened our product line.",
    image: Img4,
  },
];

const Teams = () => {
  const scrollRef = useRef(null);

  // Auto-scroll effect for mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    const card = container.firstChild;
    if (!card) return;
  
    const cardWidth = card.offsetWidth;
    const gap = 16; // Tailwind's gap-4 = 16px
    const scrollStep = (cardWidth * 2) + gap;
  
    let scrollAmount = 0;
  
    const interval = setInterval(() => {
      scrollAmount += scrollStep;
  
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
  
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }, 3000);
  
    return () => clearInterval(interval);
  }, []);  

  return (
    <section className="py-16 px-4 md:px-10 bg-white text-center">
      {/* Header */}
      <div className="max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold text-violet-600 bg-violet-100 px-3 py-1 rounded-full mb-2 inline-block">
          👥 Our team
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Meet our team members
        </h2>
        <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
          We focus on the details of everything we do. All to help businesses around the world. <br />
          Focus on what’s most important to them.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-4 py-1.5 text-xs sm:text-sm border rounded-full hover:bg-gray-100 transition">
            Learn More →
          </button>
          <button className="px-4 py-1.5 text-xs sm:text-sm rounded-full bg-violet-600 text-white hover:bg-violet-700 transition">
            Contact Us →
          </button>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-xl overflow-hidden text-left shadow hover:shadow-lg transition duration-300">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-sm">{member.name}</h3>
              <p className="text-violet-600 text-xs font-medium mb-1">{member.role}</p>
              <p className="text-gray-600 text-xs leading-snug min-h-[48px]">{member.description}</p>
              <div className="flex gap-2 mt-3">
                <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Facebook size={14} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Linkedin size={14} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Mobile Carousel with Auto Scroll */}
      <div className="lg:hidden overflow-hidden">
  <div
    ref={scrollRef}
    className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory px-4"
  >
    {[...teamMembers, ...teamMembers].map((member, index) => (
      <div
        key={index}
        className="w-[calc(55%-0.625rem)] flex-shrink-0 bg-white rounded-xl text-left shadow hover:shadow-md transition duration-300 snap-start"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-36 object-cover rounded-t-xl"
        />
        <div className="p-3">
          <h3 className="font-semibold text-xs">{member.name}</h3>
          <p className="text-violet-600 text-[10px] font-medium mb-1">{member.role}</p>
          <p className="text-gray-600 text-[10px] leading-snug min-h-[40px]">{member.description}</p>
          <div className="flex gap-2 mt-2">
            <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Facebook size={12} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-600 transition"><Linkedin size={12} /></a>
          </div>
        </div>
      </div>
    ))}
  </div>

  
</div>


    </section>
  );
};

export default Teams;
