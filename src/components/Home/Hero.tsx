import bgImage from "@/assets/hero-bg.png";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="
        w-full 
        bg-cover 
        bg-center 
        relative 
        md:aspect-[1440/668] 
        min-h-[500px] 
        py-12
      "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        <div className="mb-4 text-sm text-white bg-white/30 backdrop-blur px-4 py-1 rounded-full">
          ✨ New: AI-Powered Party Planning
        </div>

        {/* Heading */}
        <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Organize your child’s <br />
          party in a few clicks
        </h1>

        {/* Subtext */}
        <p className="text-white text-base md:text-lg max-w-xl mb-6">
          From theme ideas to a full schedule, our AI assistant helps you create
          a magical and unforgettable celebration effortlessly.
        </p>

        {/* Button */}
        <button className="bg-[#113B87] hover:bg-[#0f3272] text-white font-medium px-6 py-3 rounded-md transition">
          Plan My Party With AI
        </button>
      </div>
    </section>
  );
};

export default Hero;
