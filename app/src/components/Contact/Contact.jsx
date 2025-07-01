import React from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row bg-gradient-to-tr from-black via-[#020402] to-[#015C91] text-white font-sans text-lg md:text-xl"
    >
      <div className="w-full md:w-1/2 flex flex-col justify-around p-14 md:p-24 space-y-14">
        <nav className="space-y-8 border-b-2 border-white/70 pb-12">
          <Link
            href="#about"
            className="block text-3xl hover:text-gray-300 transition"
          >
            About
          </Link>
          <Link
            href="#blog"
            className="block text-3xl hover:text-gray-300 transition"
          >
            Blog
          </Link>
          <Link
            href="#events"
            className="block text-3xl hover:text-gray-300 transition"
          >
            Events
          </Link>
          <Link
            href="#team"
            className="block text-3xl hover:text-gray-300 transition"
          >
            Team
          </Link>
        </nav>

        <div>
          <p className="text-2xl font-semibold text-gray-400 mb-6">Follow us</p>
          <div className="flex space-x-10 text-4xl">
            <a
              href="mailto:ieeesps@vit.ac.in"
              className="hover:text-[#0059a0] transition"
              target="_blank"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/company/ieee-sps-vit/"
              className="hover:text-[#0b66c2] transition"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/IEEE-SPS-CHAPTER"
              className="hover:text-[#3e3e3e] transition"
              target="_blank"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/vitieeesps/"
              className="hover:text-[#0766ff] transition"
              target="_blank"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/ieee_sps_vitv/"
              className="hover:text-[#dc01d5] transition"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-14">
        <img
          src="/icon.svg"
          alt="Contact Visual"
          className="w-[95%] max-w-2xl md:max-w-3xl"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Contact;
