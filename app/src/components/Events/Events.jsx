
"use client";
import React, { useRef, useLayoutEffect } from "react";
import styles from "./Events.module.css";
import Image from "next/image";
import events from "../../data/Events.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    const comp = component.current;
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: comp,
          pin: true,
          scrub: 1,
          start: "top top",
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth * (panels.length - 1),
          markers: true,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.Events} ref={component}>
      <h1 className={styles.sectionHeader}>Our Events</h1>
      <div className={styles.container} ref={slider}>
        <div className={`${styles.panel} ${styles.descriptionPanel} panel`}>
          <h2>Scroll to explore our recent events</h2>
          <p>We host a variety of workshops, competitions, and talks throughout the year. Get a glimpse of what we do.</p>
        </div>
        {events.map((event, index) => {
          return (
            <div className={`${styles.panel} panel`} key={index}>
              <div className={styles.panelContainer}>
                <div className={styles.left}>
                  <Image
                    src={event.src}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover", borderRadius: '12px' }}
                  />
                </div>
                <div className={styles.right}>
                  <h1>{event.title}</h1>
                  <p>{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
