
"use client";

import Image from "next/image";
import React, { forwardRef, useRef, useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

const About = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const isVisible = useOnScreen(sectionRef, { threshold: 0.2 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const para1 =
    "The IEEE Signal Processing Society (SPS), founded in 1948, is a global hub for signal processing professionals. The SPS VIT Chapter at VIT Vellore connects students to this network through webinars, workshops, and hackathons.";

  const para2 =
    "Our flagship hackathon, “HACKX,” began in 2019 and returned with “HACKX 2.0” in 2023, featuring top speakers and participants. We aim to inspire innovation in areas like signal processing, IoT, and machine learning through collaboration and hands-on learning.";

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const start = windowHeight;
      const end = -sectionHeight / 2;

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
        className="transition-colors duration-300"
        style={{ color: i < visibleCharCount ? "white" : "gray" }}
      >
        {char}
      </span>
    ));
  };

  return (
    <section
      id="about"
      ref={(node) => {
        sectionRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      }}
      className="flex items-center justify-center bg-cover bg-center relative z-10 min-h-screen p-5 text-white"
    //style={{ backgroundImage: "url('/about-bg.svg')" }}
    >
      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-2 gap-12">
        <div className="flex items-center justify-center md:col-span-1 md:justify-end">
          <div
            className={`transition-all duration-700 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}>
            <Image
              src="/team.svg"
              alt="About Us"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
        <div className=" text-lg leading-relaxed space-y-5 ">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <div className="text-xl leading-relaxed space-y-5 pt-4">
            <p>{renderAnimatedParagraph(para1, 0.0, 0.25)}</p>
            <p>{renderAnimatedParagraph(para2, 0.25, 0.5)}</p>
          </div>
        </div>
      </div>
    </section >
  );
});

export default About;
