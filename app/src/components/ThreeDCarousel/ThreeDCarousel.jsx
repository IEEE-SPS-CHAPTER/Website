"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaArrowLeft,
  FaArrowRight,
  FaHeart,
  FaShareAlt,
  FaDownload,
} from "react-icons/fa";

const images = [
  "/events/alumni-homecoming.svg",
  "/events/anc-360.svg",
  "/events/audio-sphere.svg",
  "/events/casa.svg",
  "/events/electrohive.svg",
  "/events/green-horizon.svg",
  "/events/pixel-power.svg",
];

const SimpleCarousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full max-w-[430px] mx-auto overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div key={i} className="min-w-full h-[300px] relative">
            <Image
              src={src}
              alt={`Slide ${i}`}
              fill
              className="object-cover rounded-2xl"
              priority={i === 0}
            />

            <div className="absolute top-2 right-2 flex gap-2 text-white text-sm">
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
                <FaHeart />
              </button>
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
                <FaShareAlt />
              </button>
              <button className="bg-black/50 p-2 rounded-full hover:bg-black/70">
                <FaDownload />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        aria-label="Previous"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
        aria-label="Next"
      >
        <FaArrowRight />
      </button>

      <div className="absolute bottom-4 w-full flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SimpleCarousel;
