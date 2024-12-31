import React from 'react';
import Logo from './logo/Logo';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Logo />
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-200 hover:text-blue-400">Services</a>
            <a href="#why-us" className="text-gray-200 hover:text-blue-400">Why Choose Us</a>
            <a href="#about" className="text-gray-200 hover:text-blue-400">About</a>
            <a href="#booking" className="text-gray-200 hover:text-blue-400">Book a Call</a>
            <a href="#contact" className="text-gray-200 hover:text-blue-400">Contact</a>
          </div>
          <a
            href="#booking"
            className="bg-gradient-to-r from-blue-900 to-blue-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
}