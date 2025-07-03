"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import useOnScreen from "../../hooks/useOnScreen";

export default function About() {
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
    handleScroll(); // initial

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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
      ref={sectionRef}
      className="flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('/about-bg.svg')" }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 w-full max-w-screen-xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-white">
        <div className="flex items-center justify-center md:justify-end">
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            <Image
              src="/team.svg"
              alt="IEEE SPS Team"
              width={800}
              height={800}
              className="object-contain max-h-[400px]"
              draggable={false}
              priority
              style={{
                boxShadow: "25px 20px 15px rgb(225 216 216 / 30%)",
              }}
            />
          </div>
        </div>

        <div className="md:col-span-2 text-xl leading-relaxed space-y-5">
          <p>{renderAnimatedParagraph(para1, 0.0, 0.25)}</p>
          <p>{renderAnimatedParagraph(para2, 0.25, 0.5)}</p>
        </div>
      </div>
    </section>
  );
}
