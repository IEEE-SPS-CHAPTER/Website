
// src/components/Events.jsx
"use client"; // This is a Client Component, which means it can use hooks and event listeners.

import React, { useEffect, useRef, useState } from 'react';
import styles from './Events.module.css'; // Import the CSS Module
import events from '../../data/Events.js';

const Events = () => {
  // useRef to get a direct reference to the carousel DOM element
  const carouselRef = useRef(null);
  // useState to manage the rotation angle of the carousel
  const [angle, setAngle] = useState(0);
  // useState to control whether the carousel auto-rotates
  const [autoRotate, setAutoRotate] = useState(true);

  // useEffect hook to handle the auto-rotation interval
  useEffect(() => {
    let interval;
    if (autoRotate) {
      // Set up an interval to increment the angle every 30 milliseconds
      interval = setInterval(() => {
        setAngle(prevAngle => prevAngle + 1);
      }, 30);
    }

    // Cleanup function: clear the interval when the component unmounts or autoRotate changes
    return () => clearInterval(interval);
  }, [autoRotate]); // Dependency array: re-run effect if autoRotate changes

  // useEffect hook to apply the transform style based on the current angle
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `rotateY(${angle}deg)`;
    }
  }, [angle]); // Dependency array: re-run effect if angle changes

  // Event handler for when the mouse enters the carousel area
  const handleMouseEnter = () => {
    setAutoRotate(false); // Stop auto-rotation
    if (carouselRef.current) {
      // Pause the CSS animation
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };

  // Event handler for when the mouse leaves the carousel area
  const handleMouseLeave = () => {
    setAutoRotate(true); // Resume auto-rotation
    if (carouselRef.current) {
      // Resume the CSS animation
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  return (
    // The main container for the carousel, using CSS module classes
    <div className="{styles.sectionContainer} bg-radial-[at_50%_55%] from-gray-700 via-gray-900 to-gray-950 to-100% bg-cover">
      <h2 className="text-6xl md:text-6xl ml-[10%] font-black text-gray-200 mb-4 drop-shadow-lg">Events</h2>
      <div className={styles.carouselContainer}>
        {/* The carousel element, with ref for direct DOM manipulation and event handlers */}
        <div
          className={styles.carousel}
          id="carousel" // Keeping the ID for consistency, though ref is preferred in React
          ref={carouselRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Individual card elements within the carousel */}
          {events.map((event, idx) => (
            <div key={idx} className={styles.card}>
              <img src={event.src} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events; // Export the component for use in other parts of the Next.js application
