import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-0 pb-10 overflow-hidden">
      {/* SVG Wave at the very top */}
      <div className="w-full leading-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20">
          <path
            fill="#4F8DFD"
            fillOpacity="0.5"
            d="M0,80 C200,120 400,40 600,80 C800,120 1000,40 1200,80 C1300,100 1440,60 1440,60 L1440,120 L0,120 Z"
          />
          <path
            fill="#4285F4"
            fillOpacity="0.7"
            d="M0,100 C250,60 500,140 750,100 C1000,60 1250,140 1440,100 L1440,120 L0,120 Z"
          />
          <path
            fill="#4285F4"
            d="M0,110 Q360,60 720,110 T1440,110 L1440,120 L0,120 Z"
          />
        </svg>
      </div>
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 pt-8">
        {/* Left Section */}
        <div className="flex-1 mb-8 md:mb-0 flex flex-col items-center md:items-center">
          <div className="text-lg font-bold mb-2">© 2025 ClipWise. All rights reserved.</div>
          <div className="text-sm text-blue-200">Your Video, Summarized & Quizzed.</div>
        </div>
        {/* Middle Section */}
        <div className="flex-1 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-center">
          <div>
            <div className="font-semibold mb-2">Company</div>
            <ul className="space-y-1 text-blue-200">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Product</div>
            <ul className="space-y-1 text-blue-200">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#how-it-works" className="hover:underline">How It Works</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ul>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-4 items-center">
          <div>
            <div className="font-semibold mb-2">Connect With Us</div>
            <div className="flex gap-4 text-2xl">
              <a href="#" aria-label="Facebook" className="hover:text-blue-400"><FaFacebook /></a>
              <a href="#" aria-label="Twitter/X" className="hover:text-blue-400"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-400"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube" className="hover:text-blue-400"><FaYoutube /></a>
            </div>
          </div>
          <div className="mt-4 w-full">
            <div className="font-semibold mb-2 text-center">Stay Updated</div>
            <form className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md text-black bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 