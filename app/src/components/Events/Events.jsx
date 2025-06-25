"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import cards from "../../data/Events";

const EventsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-bold text-center text-gray-100 mb-16 font-['Inter']">
          Events
        </h1>

        <div className="relative min-w-2xl mx-auto">
          {/* Main carousel container */}
          <div className="relative md:mx-auto md:size-150 overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm">
            {/* Carousel slides */}
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="min-w-full h-full relative flex items-center justify-center mx-auto"
                  style={{
                    backgroundColor: `rgba(${card.color}, 0.1)`,
                    border: `2px solid rgba(${card.color}, 0.3)`,
                  }}
                >
                  <div className="text-center">
                    <div
                      className="mx-auto mb-4 rounded-lg overflow-hidden shadow-lg"
                      style={{
                        backgroundColor: `rgba(${card.color}, 0.2)`,
                        border: `2px solid rgba(${card.color}, 0.5)`,
                        boxShadow: `0 8px 32px rgba(${card.color}, 0.3)`,
                      }}
                    >
                      <img
                        src={card.src}
                        alt={card.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div
                        className="w-full h-full hidden items-center justify-center text-gray-400"
                        style={{ backgroundColor: `rgba(${card.color}, 0.1)` }}
                      >
                        <span className="text-sm">Image not found</span>
                      </div>
                    </div>
                    <h3
                      className="text-2xl font-semibold mb-2"
                      style={{ color: `rgba(${card.color}, 1)` }}
                    ></h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-125"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsCarousel;
