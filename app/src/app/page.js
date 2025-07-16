"use client";

import React, { useRef } from 'react'; // Import useRef
import Hero from "../components/Hero/Hero";
import ScrollBlurBackground from "../components/ScrollBlurBackground";
import About from "../components/About/About"; // Ensure this component uses forwardRef
import BlogSection from "../components/BlogClient";
import EventsSection from "../components/EventsClient";
import TeamSection from "../components/TeamClient"; // Ensure this component uses forwardRef if needed for future logic
import ContactSection from "../components/ContactClient";

export default function Home() {
  // Create refs for the sections that ScrollBlurBackground needs to track
  // Only aboutSectionRef is strictly needed for the current "stay blurred" logic.
  const aboutSectionRef = useRef(null);
  // If you later decide to re-introduce scroll-away logic based on a "Team" section,
  // you would uncomment and pass teamSectionRef here.
  // const teamSectionRef = useRef(null);

  return (
    <main className="font-inter overflow-x-hidden scroll-smooth">
      {/* The ScrollBlurBackground component manages the global fixed background.
          It must be rendered at the top of the main content to be behind other sections. */}
      <ScrollBlurBackground
        aboutSectionRef={aboutSectionRef}
      // If you had a team section and wanted the background to scroll away, you'd pass:
      // teamSectionRef={teamSectionRef}
      />

      {/* Your Hero Section */}
      {/* Hero component likely doesn't need a ref for the current blur logic,
          but it's good practice to ensure it's z-10 or higher. */}
      <Hero />

      {/* Your About Section - Pass the ref to it
          Ensure AboutClient.jsx is updated to use forwardRef and attach the ref to its root element. */}
      <div className="z-20">
        <About ref={aboutSectionRef} />
      </div>

      {/* Other sections of your page */}
      <div className="z-10">
        <BlogSection />
      </div>
      <div className="min-h-[900px] z-10">
        <EventsSection />
      </div>
      <div className="z-20">
        <TeamSection />
      </div>
      <div className="z-10">
        <ContactSection />
      </div>
    </main>
  );
}
