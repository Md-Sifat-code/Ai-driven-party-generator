import logo from "@/assets/navlogo.png";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto px-24 py-4 flex items-center justify-between bg-white">
      {/* Left: Logo */}
      <div className="h-16 w-16">
        <img src={logo} alt="Nav Logo" />
      </div>

      {/* Middle: Nav Links */}
      <ul className="hidden md:flex gap-6 text-base text-secondary font-medium">
        <li className="hover:text-primary cursor-pointer">Home</li>
        <li className="hover:text-primary cursor-pointer">About</li>
        <li className="hover:text-primary cursor-pointer">Services</li>
        <li className="hover:text-primary cursor-pointer">Testimonial</li>
        <li className="hover:text-primary cursor-pointer">Blog</li>
      </ul>

      {/* Right: CTA Button */}
      <div>
        <button className="hidden md:block px-5 py-2 cursor-pointer rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition">
          Get Started for Free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
