"use client";

import React, { useRef } from 'react'; // Import useRef
import Hero from "../components/Hero/Hero";
import ScrollBlurBackground from "../components/ScrollBlurBackground";
import About from "../components/About/About"; // Ensure this component uses forwardRef
import BlogSection from "../components/BlogClient";
import EventCarousal from "../components/Events/Events";
import Marquee from "../components/Events/MarqueeUpdates";
import TeamSection from "../components/TeamClient"; // Ensure this component uses forwardRef if needed for future logic
import ContactSection from "../components/ContactClient";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';


export default function Home() {
  const aboutSectionRef = useRef(null);
  const mainContainerRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  useGSAP(() => {
    const track = horizontalTrackRef.current;
    const container = mainContainerRef.current;
    if (!container || !track) return;

    const cards = gsap.utils.toArray(".card-item");

    const mainScrollTween = gsap.to(track, {
      x: () => -(track.scrollWidth - window.innerWidth) + "px",
      ease: "none",
      scrollTrigger: {
        trigger: mainContainerRef.current,
        start: "top top",
        //end: () => "+=" + (track.scrollWidth - window.innerWidth),
        end: "bottom center",
        pin: true,
        scrub: 1,
        markers: true,
        invalidateOnRefresh: true,
      }
    });

    cards.forEach((card) => {
      gsap.from(card, {
        opacity: 0.2,
        scale: 0.8,
        y: 100,
        scrollTrigger: {
          trigger: card,
          containerAnimation: mainScrollTween,
          start: "left right-=100",
          end: "right right",
          scrub: true,
          markers: true,
        }
      });
    });
  }, { scope: mainContainerRef });

  return (
    <main className="font-inter overflow-x-hidden scroll-smooth">
      <ScrollBlurBackground
        aboutSectionRef={aboutSectionRef}
      />
      <Hero />
      <div className="flex flex-col z-30 w-[100vw]">
        <div className="mx-auto">
          <About ref={aboutSectionRef} />
        </div>
        <section className="">
          {/*<BlogSection />*/}
          <div class="min-h-screen w-full"><BlogSection/></div>
        </section>
        <section><Marquee/></section>
      <section id="eventSection">
        <div id="events" ref={mainContainerRef} className="relative w-full h-screen overflow-hidden bg-gray-900">
          <div ref={horizontalTrackRef} className="flex items-center h-full w-max">
            <EventCarousal />
          </div>
        </div>
      </section>
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
