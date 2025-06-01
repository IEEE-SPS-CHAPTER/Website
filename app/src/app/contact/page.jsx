import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-tr from-black via-[#020402] to-[#015C91] text-white font-sans">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-around p-10 md:p-16 space-y-10">
        {/* Top Nav */}
        <nav className="space-y-6 border-b-2 border-white/70 pb-8">
          <a href="#" className="block text-2xl hover:text-gray-300 transition">
            About
          </a>
          <a href="#" className="block text-2xl hover:text-gray-300 transition">
            Blog
          </a>
          <a href="#" className="block text-2xl hover:text-gray-300 transition">
            Events
          </a>
          <a href="#" className="block text-2xl hover:text-gray-300 transition">
            Team
          </a>
        </nav>

        {/* Social Media */}
        <div>
          <p className="text-base text-gray-400 mb-4">Follow us</p>
          <div className="flex space-x-6 text-2xl">
            <a href="#" className="hover:text-blue-400 transition">
              <FaEnvelope />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-10">
        <img
          src="/banner.svg"
          alt="Contact Visual"
          className="w-[80%] max-w-md md:max-w-lg"
        />
      </div>
    </div>
  );
};

export default ContactPage;
