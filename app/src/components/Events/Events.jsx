
'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import events from '../../data/Events';

// We must register the plugin to use it
gsap.registerPlugin(ScrollTrigger);

// --- The Animated Horizontal Scroll Component ---
export default function EventSection() {
  const mainRef = useRef(null);
  const trackRef = useRef(null);

  useGSAP(() => {
    const track = trackRef.current;
    const cards = gsap.utils.toArray(".card-item");

    // Calculate the total width of the track that needs to be scrolled.
    // This is the full scrollable width minus the width of the viewport.
    const scrollWidth = track.scrollWidth - window.innerWidth;

    // Create the main horizontal scroll animation.
    // This tween moves the track to the left based on the user's vertical scroll.
    const horizontalScroll = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: mainRef.current,
        pin: true,
        scrub: 1,
        // The animation ends when the track has scrolled its full width.
        end: () => `+=${scrollWidth}`,
        invalidateOnRefresh: true // Recalculate on window resize
      }
    });

    // Add individual animations to each card to make them pop.
    cards.forEach((card) => {
      // Animate cards to fade and scale down as they move away from the center.
      gsap.to(card, {
        scale: 0.9,
        opacity: 0.7,
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalScroll,
          start: "center right",
          end: "center left",
          scrub: true,
        }
      });

      // Animate cards to full size and opacity when they are in the center.
      gsap.to(card, {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: card,
          containerAnimation: horizontalScroll,
          start: "center center+=200",
          end: "center center-=100",
          scrub: true,
        }
      });
    });

  }, { scope: mainRef });

  return (
    <>
      <div className="">
      </div>

      <section ref={mainRef} className="h-screen w-full overflow-hidden bg-gray-900">
        <div ref={trackRef} className="h-full flex items-center gap-8 px-8">
          {/* Add a starting title card */}
          <div className="flex-shrink-0 w-[50vw] text-white pr-12">
            <h2 className="text-6xl font-bold">Our Events</h2>
          </div>
          {events.map((event, idx) => (
            <div key={idx} className="card-item flex-shrink-0 w-[300px] h-[400px] md:w-[400px] md:h-[550px]">
              <img
                src={event.src}
                className="w-full h-full object-cover rounded-2xl"
                alt={event.title}
              />
            </div>
          ))}
          {/* Add a blank spacer at the end for better visual completion */}
          <div className="flex-shrink-0 w-[50vw]"></div>
        </div>
      </section>

      <div className="">
      </div>
    </>
  );
}
