"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/#blog" },
  { label: "Events", href: "/#events" },
  { label: "Team", href: "/#team" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuOpen && !e.target.closest('header')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [menuOpen]);

  const handleLinkClick = (e, href) => {
    setMenuOpen(false); // Close mobile menu

    if (href === "/") {
      // For home, scroll to top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 300); // Small delay to let menu close
      e.preventDefault();
    } else if (href.startsWith("/#")) {
      // For anchor links, scroll to section
      const sectionId = href.substring(2); // Remove "/#"
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300); // Small delay to let menu close
      e.preventDefault();
    }
  };

  return (
    <>
      <header
        className="w-full h-[70px] flex items-center justify-between bg-transparent text-white"
        style={{
          fontFamily: "Inter, sans-serif",
          zIndex: 1000,
          position: "fixed",
          top: 0,
          backdropFilter: "blur(50px)",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        {/* Logo Section */}
        <div className="h-full aspect-square flex items-center justify-center">
          <Image src="/vit-vellore.svg" alt="Logo" width={45} height={45} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 h-full">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="flex-1 h-full flex items-center justify-center hover:bg-black hover:bg-opacity-10 transition-all duration-300 relative group"
            >
              <span className="relative">
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button with Morphing Animation */}
        <button
          className="md:hidden h-full px-6 flex items-center justify-center hover:bg-white hover:bg-opacity-10 transition-all duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6">
            {/* Hamburger Lines */}
            <span
              className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${menuOpen ? 'top-3 rotate-45' : 'top-1'
                }`}
            ></span>
            <span
              className={`absolute left-0 top-3 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
            ></span>
            <span
              className={`absolute left-0 w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${menuOpen ? 'top-3 -rotate-45' : 'top-5'
                }`}
            ></span>
          </div>
        </button>
      </header>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-95 backdrop-blur-lg transition-all duration-500 ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        style={{ zIndex: 999 }}
      >
        {/* Mobile Menu Content */}
        <nav className="flex flex-col items-center justify-center h-full">
          <div className="text-center space-y-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block text-white text-3xl font-light tracking-wide hover:text-opacity-70 transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: menuOpen ? "fadeInUp 0.6s ease-out forwards" : "none",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.6s ease-out"
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Close hint */}
          <div
            className="absolute bottom-10 text-white text-opacity-50 text-sm"
            style={{
              transition: "opacity 1s ease-out",
              transitionDelay: "0.8s",
              opacity: menuOpen ? 1 : 0
            }}
          >
          </div>
        </nav>
      </div>


    </>
  );
}
