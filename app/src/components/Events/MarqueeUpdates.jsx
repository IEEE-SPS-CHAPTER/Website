"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

const marqueeTexts = [
  "Upcoming Events:   HackX 3.0",
];

export default function Marquee() {
  const marqueeElements = useRef([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const marqueeTween = useRef();
useEffect(() => {
  if (typeof window !== "undefined") {
    setScreenWidth(window.innerWidth);
    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      marqueeTween.current?.pause()?.kill();  // ✅ FIXED
    };
  }
}, []);


useEffect(() => {
  if (screenWidth === 0 || marqueeElements.current.length === 0) return;

  marqueeInitialSet();
  marqueeTween.current?.pause()?.kill();  // ✅ FIXED

  marqueeTween.current = gsap.to(marqueeElements.current, {
    x: `+=${screenWidth * 1.5}`,
    ease: "none",
    repeat: -1,
    duration: 10,
    rotation: 0.1,
    modifiers: {
      x: (x) => {
        return (parseFloat(x) % (screenWidth * 1.5)) + "px";
      }
    }
  });
}, [screenWidth]);


  const marqueeInitialSet = () => {
    gsap.set(marqueeElements.current, {
      xPercent: -100,
      x: function(index) {
        return (screenWidth / 2) * index;
      }
    });
  };

  const resizeHandler = () => {
    if (typeof window !== "undefined") {
      gsap.set(marqueeElements.current, { clearProps: "all" });
      setScreenWidth(window.innerWidth);
    }
  };

  const marqueeElementsRefHandler = (el, index) => {
    marqueeElements.current[index] = el;
  };

  const renderMarqueeElements = () => {
    // Ensure there are at least 3 elements
    let displayTexts = [...marqueeTexts];
    if (displayTexts.length === 1) {
      displayTexts = [displayTexts[0], displayTexts[0], displayTexts[0]];
    } else if (displayTexts.length === 2) {
      displayTexts.push(displayTexts[0]);
    }

    return displayTexts.map((text, index) => (
      <p
        key={`marquee-${index}`}
        className="text-center px-4 text-2xl font-semibold absolute pin-l w-1/2"
        ref={(el) => marqueeElementsRefHandler(el, index)}
      >
        {text}
      </p>
    ));
  };

  return (
    <div
      className="relative w-screen py-4 bg-green-600 text-gray-200 flex overflow-hidden items-center"
      style={{ minHeight: "110px" }}
    >
      {renderMarqueeElements()}
    </div>
  );
}
