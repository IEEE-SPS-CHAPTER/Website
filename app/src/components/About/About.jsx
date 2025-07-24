"use client";

import Image from "next/image";
import React, { forwardRef, useRef, useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";
import { motion } from "framer-motion";

const About = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.2 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const para1 =
    "The IEEE Signal Processing Society (SPS), founded in 1948, is a global hub for signal processing professionals. The SPS VIT Chapter at VIT Vellore connects students to this network through webinars, workshops, and hackathons. Our flagship hackathon, “HACKX,” began in 2019 and returned with “HACKX 2.0” in 2023, featuring top speakers and participants. We aim to inspire innovation in areas like signal processing, IoT, and machine learning through collaboration and hands-on learning.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const start = windowHeight / 2;
      const end = -sectionHeight / 3;

      const distance = sectionTop - end;
      const range = start - end;

      const rawProgress = 1 - distance / range;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderAnimatedParagraph = (text, startOffset, range) => {
    const chars = text.split("");
    const effectiveProgress = Math.min(
      Math.max((scrollProgress - startOffset) / range, 0),
      1
    );
    const visibleCharCount = Math.floor(effectiveProgress * chars.length);

    return chars.map((char, i) => (
      <span
        key={i}
        className="transition-colors duration-100"
        style={{ color: i < visibleCharCount ? "white" : "gray" }}
      >
        {char}
      </span>
    ));
  };

  return (

    <div
      id="about"
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className="w-full max-w-screen-xl flex items-center justify-center bg-cover bg-center relative z-10 min-h-screen p-5 text-white bg-[url('/background.jpg')]"
    >
      <div className="relative mx-auto px-6 py-7 grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/3 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20">

        {/* Image Section - transition preserved */}
        <div className="flex items-center justify-center md:col-span-1">
          <div
            className={`transition-all duration-1000 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-80 opacity-0"
              }`}
          >
            <div className="transform -translate-y-2 hover:scale-102 transition-transform duration-700 ease-in-out">
              <Image
                src="/team.webp"
                width={400}
                height={400}
                alt="About Us"
                className="w-full h-auto rounded-3xl shadow-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-lg leading-relaxed space-y-5">
          <motion.h2
            initial={{ scale: 1, opacity: 0 }}
            animate={
              isVisible
                ? { scale: 1, opacity: 1 }
                : { scale: 0.8, opacity: 0 }
            }
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl font-bold -translate-y-4"
          >
            About Us
          </motion.h2>

          <div className="text-xl leading-relaxed pt-4">
            <p className="text-white/90">
              {renderAnimatedParagraph(para1, 0.0, 0.5)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
