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
    <main className="flex flex-col gap-0 font-inter overflow-x-hidden scroll-smooth">
      <ScrollBlurBackground
        aboutSectionRef={aboutSectionRef}
      />
      <Hero />
      <div className="z-30">
        <div>
          <About ref={aboutSectionRef} />
        </div>
        <section>
          <BlogSection />
        </section>
        {/* 
        <section>
          <EventsSection />
        </section>*/}
        <section>
          <TeamSection />
        </section>
        <section >
          <ContactSection />
        </section>
      </div>
    </main>
  );
}
