import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import teamMembers from '../../data/Team.js';

// TeamSection component for displaying club members with a pop-in animation
const TeamSection = () => {
  // useRef to get a reference to the container of team member cards
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure the DOM is loaded and the container reference exists
    if (!containerRef.current) return;

    // Select all team member cards within the container
    const teamMemberCards = containerRef.current.querySelectorAll('.team-member-card');

    // Options for the Intersection Observer
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0.1 // Trigger when 10% of the item is visible
    };

    // Callback function for the Intersection Observer
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        // If the card is intersecting (visible)
        if (entry.isIntersecting) {
          // Add the animation class to trigger the pop-in effect
          entry.target.classList.add('animate-pop-in');
          // Stop observing the card once it has animated
          observer.unobserve(entry.target);
        }
      });
    };

    // Create a new Intersection Observer instance
    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each team member card to detect when it enters the viewport
    teamMemberCards.forEach(card => {
      observer.observe(card);
    });

    // Cleanup function: Disconnect the observer when the component unmounts
    return () => {
      teamMemberCards.forEach(card => {
        observer.unobserve(card);
      });
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

  return (
    <>
      {/* Tailwind CSS CDN (for demonstration purposes in a standalone immersive) */}
      {/* In a real Next.js project, Tailwind would be configured and imported differently */}
      <script src="https://cdn.tailwindcss.com"></script>
      {/* Google Fonts - Inter */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

      {/* Custom CSS for animations and scrollbar styling */}
      {/* In a real Next.js project, this would typically be in a global CSS file or a CSS module */}
      <style>{`
        body {
          font-family: 'Inter', sans-serif;
          background-color: #f8fafc; /* Light blue-gray background */
        }

        /* Custom pop-in animation */
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

        /* Initial state before animation */
        .team-member-card {
          opacity: 0; /* Hidden by default */
          transform: scale(0.8) translateY(20px); /* Slightly smaller and lower */
          transition: opacity 0.3s ease-out, transform 0.3s ease-out; /* Smooth transition for initial load (though JS handles visibility) */
          flex-shrink: 0; /* Prevent cards from shrinking */
          width: 300px; /* Fixed width for cards in horizontal scroll */
        }

        /* Custom scrollbar styling for Webkit browsers (Chrome, Safari) */
        .horizontal-scroll-container::-webkit-scrollbar {
          height: 8px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-track {
          background: #e2e8f0; /* Light gray track */
          border-radius: 10px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-thumb {
          background: #a78bfa; /* Indigo thumb */
          border-radius: 10px;
        }

        .horizontal-scroll-container::-webkit-scrollbar-thumb:hover {
          background: #8b5cf6; /* Darker indigo on hover */
        }
      `}</style>

      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 bg-[url('/gradient-bg-light.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-left w-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-shadow-md text-black tracking-tight">Meet Our Team</h2>

          {/* Horizontal Scroll Container */}
          <div ref={containerRef} className="flex overflow-x-auto gap-8 pb-6 px-2 horizontal-scroll-container scroll-smooth">
            {/* Team Member Card 1 */}
            {teamMembers.map((member) => (

              <div className="team-member-card relative transition-all duration-300">
                <div className="relative top-65 z-10">
                  <img className="" src={member.image} alt="" />
                </div>
                <div className="relative w-full bg-linear-to-t from-sky-100/25 to-blue-400/25 w-72 backdrop-blur-sm shadow-xl rounded-xl h-64 top-1 z-0" />
                <div className="card-content z-20 relative bottom-8">
                  <div className="bg-sky-300 rounded-2xl w-max px-12 py-2 mx-auto">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-indigo-700 text-sm font-medium">{member.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
};

export default TeamSection;
