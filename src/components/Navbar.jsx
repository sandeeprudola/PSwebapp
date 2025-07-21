import React from "react";

function Navbar() {
  return (
    <header className="pt-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          
          
          <a href="#home" className="flex items-center">
            <img
              src="ps speech logo.png"
              alt="Logo"
              className="pt-5 h-50 w-50 object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              About Us
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 font-medium transition"
            >
              Contact
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
