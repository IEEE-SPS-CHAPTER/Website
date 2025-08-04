"use client"; // Keep this if using App Router

import Image from "next/image";
import CheckBlog from "./CheckBlog/CheckBlog";
import HeroGlobe from "./HeroGlobe/HeroGlobe";
import React, { forwardRef } from "react"; // Import forwardRef
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

// Wrap the Hero component with forwardRef
const Hero = forwardRef((props, ref) => {

  useGSAP(() => {
    SplitText.create(".title", {
      type: "lines, words",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 2,
          y: 100,
          ease: "power4.in",
          autoAlpha: 0,
          stagger: 0.05
        });
      }
    });


  });

  return (
    <div
      id="hero"
      ref={ref} // Attach the forwarded ref to the section element
      className="relative flex items-center justify-center px-8 overflow-hidden min-h-screen z-10"
    >
      {/* Main content container */}
      <div style={{ zIndex: 1 }} className="w-full max-w-7xl mx-auto">
        {/* Desktop: flex-row (side by side), Mobile: flex-col (stacked) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">

          {/* Left side - Text content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left sm:ml-2">
            <div className="title font-black text-left text-7xl sm:text-7xl md:text-8xl py-4">
              <h1> WE ARE <span className="italic block">IEEE SPS</span> </h1>
            </div>
            <div className="check-button">
              <CheckBlog />
            </div>
          </div>

          {/* Right side - 3D Globe */}
          <div className="flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <HeroGlobe />
          </div>

        </div>
      </div>
    </div>
  );
});

export default Hero;
