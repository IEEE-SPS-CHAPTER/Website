import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import teamMembers from '../../data/Team.js';

// TeamSection component for displaying club members with a pop-in animation
const App = () => {
  const titleRef = useRef(null);
  // useInView hook to detect if the element is in the viewport
  const isInView = useInView(titleRef, { once: false, amount: 0.5 });
  const titleText = "Welcome to My App with Framer Motion!"; // The title you want to animate

  // Define animation variants for the title
  const variants = {
    hidden: { opacity: 0, y: 80 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    exit: { opacity: 0, y: -80, transition: { duration: 0.6, ease: "easeIn" } },
  };

  // useRef to get a reference to the container of team member cards
  const containerRef = useRef(null);

  // This useEffect handles the pop-in animation for each card as it scrolls into view.
  useEffect(() => {
    // Ensure the DOM is loaded and the container reference exists
    if (!containerRef.current) return;

    // We need to query for the cards after they have been rendered.
    // A small timeout ensures the DOM is ready for querying.
    const timer = setTimeout(() => {
      const teamMemberCards = containerRef.current.querySelectorAll('.team-member-card');

      if (teamMemberCards.length === 0) return;

      const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
      };

      const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-pop-in');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(observerCallback, observerOptions);
      teamMemberCards.forEach(card => observer.observe(card));

      // Cleanup function: Disconnect the observer when the component unmounts
      return () => {
        teamMemberCards.forEach(card => {
          if (card) observer.unobserve(card);
        });
        observer.disconnect();
      };
    }, 100); // 100ms delay

    return () => clearTimeout(timer);

  }, []); // Empty dependency array ensures this effect runs only once after initial render

  /**
   * Handles scrolling the carousel left or right.
   * @param {'left' | 'right'} direction - The direction to scroll.
   */
  const handleScroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    // Calculate the amount to scroll. We'll scroll by 80% of the container's visible width.
    const scrollAmount = container.clientWidth * 0.8;

    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth' // This enables the smooth scrolling animation
    });
  };

  return (
    <>
      {/* Custom CSS for animations and scrollbar styling */}
      <style>{`
        /* Using Inter font from Google Fonts */
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc;
        }

        /* Custom pop-in animation for cards */
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Class to apply the animation */
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }

        /* Initial state of cards before animation */
        .team-member-card {
          opacity: 0;
          transform: scale(0.8) translateY(20px);
          flex-shrink: 0; /* Prevent cards from shrinking */
          width: 300px; /* Fixed width for cards */
        }

        /* Custom scrollbar for Webkit browsers (Chrome, Safari) */
        .horizontal-scroll-container::-webkit-scrollbar {
          height: 8px;
        }
        .horizontal-scroll-container::-webkit-scrollbar-track {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .horizontal-scroll-container::-webkit-scrollbar-thumb {
          background: #a78bfa;
          border-radius: 10px;
        }
        .horizontal-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #8b5cf6;
        }
        
        /* General styling for nav buttons */
        .nav-button {
            background-color: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(4px); /* Frosted glass effect */
            border-radius: 9999px; /* Circular shape */
            padding: 0.5rem;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            position: absolute; /* Positioned relative to the carousel wrapper */
            top: 50%;
            transform: translateY(-50%);
            z-index: 10;
        }
        .nav-button:hover {
            background-color: white;
            transform: translateY(-50%) scale(1.1);
        }
        .nav-button.left {
            left: 1rem;
        }
        .nav-button.right {
            right: 1rem;
        }
      `}</style>

      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90% min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-left w-full">
          <motion.h2
            ref={titleRef}
            className="text-4xl sm:text-7xl font-bold text-gray-800 pb-12 tracking-tight"
            initial="hidden"
            animate={isInView ? "visible" : "exit"}
            variants={variants}
          >
            Meet Our Team
          </motion.h2>

          {/* Wrapper for the carousel and navigation buttons */}
          <div className="relative">
            {/* Left Navigation Button */}
            <button
              onClick={() => handleScroll('left')}
              className="nav-button left"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Horizontal Scroll Container */}
            <div
              ref={containerRef}
              className="flex overflow-x-auto gap-8 horizontal-scroll-container scroll-smooth p-4"
            >
              {teamMembers.map((member, idx) => (
                <div key={idx} className="team-member-card">
                  <div className="shadow-xl rounded-2xl overflow-hidden">
                    {/* Replaced Next/Image with standard img tag for compatibility */}
                    <img className="w-full h-auto object-cover" src={member.image} alt={`Photo of ${member.name}`} onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/300x400/cccccc/ffffff?text=Image+Not+Found'; }} />
                    <div className="p-6 text-center bg-linear-to-r from-blue-500 via-cyan-500 to-teal-500">
                      <h3 className="text-2xl font-semibold text-gray-100 mb-1">{member.name}</h3>
                      <p className="text-indigo-100 text-md font-medium">{member.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={() => handleScroll('right')}
              className="nav-button right"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section >
    </>
  );
};

export default App;
