import logo from "@/assets/navlogo.png";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="container mx-auto px-4 lg:px-24 py-4 flex items-center justify-between bg-background relative border-b border-gray-200">
      {/* Left: Logo */}
      <div className="h-16 w-16">
        <img src={logo} alt="Nav Logo" />
      </div>

      {/* Middle: Desktop Nav Links */}
      <ul className="hidden lg:flex gap-6 text-base text-secondary font-medium">
        {["Home", "About", "Services", "Testimonial", "Blog"].map((item) => (
          <li
            key={item}
            className="hover:text-primary cursor-pointer transition"
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Right: CTA Button (Desktop) */}
      <div className="hidden lg:block">
        <button className="px-5 py-2 cursor-pointer rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition">
          Get Started for Free
        </button>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden z-20" onClick={toggleMenu}>
        {isOpen ? (
          <FiX size={24} className="text-primary cursor-pointer" />
        ) : (
          <FiMenu size={24} className="text-primary cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-t border-gray-200 shadow-lg lg:hidden transition z-50">
          <ul className="flex flex-col gap-4 px-6 py-4 text-secondary text-base font-medium">
            {["Home", "About", "Services", "Testimonial", "Blog"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-primary cursor-pointer transition"
                  onClick={toggleMenu}
                >
                  {item}
                </li>
              )
            )}
            <li>
              <button className="w-full mt-2 px-5 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition">
                Get Started for Free
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
